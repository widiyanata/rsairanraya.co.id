'use client'; // This component handles client-side interactions

import React, { useState, useMemo } from 'react';
import { Users, Search, Filter } from 'lucide-react';

interface Doctor {
  name: string;
  position: string;
}

interface DoctorFilterListProps {
  doctors: Doctor[]; // Receive the full list of doctors as a prop
}

// Function to categorize doctors (copied from previous page.tsx)
const groupDoctorsByCategory = (doctors: Doctor[]): Record<string, Doctor[]> => {
    const grouped: Record<string, Doctor[]> = {};

    doctors.forEach(doctor => {
        let category = "Lainnya"; // Default category
        const pos = doctor.position.toLowerCase();

        if (pos.includes("penyakit dalam")) category = "Penyakit Dalam";
        else if (pos.includes("jantung")) category = "Jantung & Pembuluh Darah";
        else if (pos.includes("bedah mulut")) category = "Bedah Mulut"; // Check before general bedah
        else if (pos.includes("bedah saraf")) category = "Bedah Saraf"; // Check before general bedah
        else if (pos.includes("bedah")) category = "Bedah Umum";
        else if (pos.includes("obygyn")) category = "Obstetri & Ginekologi";
        else if (pos.includes("tht")) category = "THT";
        else if (pos.includes("neourologi") || pos.includes("saraf")) category = "Neurologi (Saraf)";
        else if (pos.includes("anestesi")) category = "Anestesi";
        else if (pos.includes("anak")) category = "Anak";
        else if (pos.includes("ortopedi")) category = "Ortopedi & Traumatologi";
        else if (pos.includes("urologi")) category = "Urologi";
        else if (pos.includes("radiologi")) category = "Radiologi";
        else if (pos.includes("rehabilitas medik")) category = "Rehabilitasi Medik";
        else if (pos.includes("mata")) category = "Mata";
        else if (pos.includes("paru")) category = "Paru";
        else if (pos.includes("dermatologi")) category = "Kulit & Kelamin (Dermatologi Venereologi)";
        else if (pos.includes("pantologi klinik")) category = "Patologi Klinik";
        else if (pos.includes("konservasi gigi")) category = "Konservasi Gigi (Spesialis Gigi)";
        else if (pos === "dokter gigi") category = "Dokter Gigi (Umum)";


        if (!grouped[category]) {
        grouped[category] = [];
        }
        grouped[category].push(doctor);
    });

    // Sort categories alphabetically, except maybe put "Dokter Gigi (Umum)" last
    const sortedCategories = Object.keys(grouped).sort((a, b) => {
        if (a === "Dokter Gigi (Umum)") return 1;
        if (b === "Dokter Gigi (Umum)") return -1;
        return a.localeCompare(b);
    });

    const sortedGrouped: Record<string, Doctor[]> = {};
    sortedCategories.forEach(category => {
        sortedGrouped[category] = grouped[category];
    });

    return sortedGrouped;
};

const ALL_CATEGORIES = "Semua Spesialisasi";

export default function DoctorFilterList({ doctors }: DoctorFilterListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORIES);

  // Memoize grouped doctors and categories based on the passed-in doctors prop
  const groupedDoctors = useMemo(() => groupDoctorsByCategory(doctors), [doctors]);
  const categories = useMemo(() => [ALL_CATEGORIES, ...Object.keys(groupedDoctors)], [groupedDoctors]);

  // Filter doctors based on search term and selected category
  const filteredDoctors = useMemo(() => {
    return doctors.filter(doctor => {
      // Check if the doctor belongs to the selected category
      const categoryForDoctor = Object.keys(groupedDoctors).find(cat => groupedDoctors[cat].some(d => d.name === doctor.name));
      const matchesCategory = selectedCategory === ALL_CATEGORIES || categoryForDoctor === selectedCategory;

      // Check if the doctor name matches the search term
      const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory, doctors, groupedDoctors]);

  return (
    <>
      {/* Filter Controls */}
      <div className="mb-10 flex flex-col sm:flex-row gap-4">
        {/* Search Input */}
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Cari nama dokter..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>

        {/* Category Select */}
        <div className="relative sm:w-1/3">
           <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full p-3 pl-10 border border-gray-300 rounded-md appearance-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
           <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
           <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
             <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
           </div>
        </div>
      </div>

      {/* Doctor List */}
      {filteredDoctors.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doctor, index) => (
            <div key={`${doctor.name}-${index}`} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 group flex flex-col">
              <div className="bg-gray-200 h-48 w-full flex items-center justify-center text-gray-400 group-hover:opacity-90 transition-opacity">
                <Users size={48} />
              </div>
              <div className="p-5 text-center flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-1 text-green-800">{doctor.name}</h3>
                <p className="text-green-600 font-medium text-sm mb-3">{doctor.position}</p>
                <a href="#" className="text-sm text-green-700 hover:underline mt-auto pt-4">
                  Lihat Profil Lengkap &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 mt-10">
          Tidak ada dokter yang cocok dengan kriteria pencarian Anda.
        </p>
      )}
    </>
  );
}
