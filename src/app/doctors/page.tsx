import React from 'react';
import type { Metadata } from 'next';
import { Users, Stethoscope, HeartPulse, Baby, Activity } from 'lucide-react'; // Import relevant icons

export const metadata: Metadata = {
  title: 'Tim Dokter Kami | RS Airan Raya (Dev)',
  description: 'Kenali tim dokter spesialis kami yang berdedikasi di RS Airan Raya.',
};

// Static doctor data (fictional)
const staticDoctors = [
  { name: "Dr. Budi Santoso, Sp.JP", specialization: "Spesialis Jantung & Pembuluh Darah", icon: HeartPulse, description: "Fokus pada diagnosis dan pengobatan penyakit kardiovaskular." },
  { name: "Dr. Citra Lestari, Sp.OG", specialization: "Spesialis Kebidanan & Kandungan", icon: Baby, description: "Ahli dalam kesehatan reproduksi wanita, kehamilan, dan persalinan." },
  { name: "Dr. Ahmad Hidayat, Sp.B", specialization: "Spesialis Bedah Umum", icon: Activity, description: "Melakukan berbagai prosedur bedah umum dan darurat." },
  { name: "Dr. Dewi Anggraini, Sp.PD", specialization: "Spesialis Penyakit Dalam", icon: Stethoscope, description: "Menangani berbagai penyakit organ dalam pada pasien dewasa." },
  { name: "Dr. Eko Prasetyo, Sp.A", specialization: "Spesialis Anak", icon: Baby, description: "Memberikan perawatan kesehatan komprehensif untuk bayi dan anak." },
  { name: "Dr. Farah Nabila, Sp.M", specialization: "Spesialis Mata", icon: Stethoscope, description: "Diagnosis dan penanganan gangguan penglihatan dan penyakit mata." }, // Using Stethoscope as placeholder icon
  { name: "Dr. Gilang Permana, Sp.OT", specialization: "Spesialis Ortopedi", icon: Stethoscope, description: "Fokus pada cedera dan penyakit tulang, sendi, dan otot." }, // Using Stethoscope as placeholder icon
  { name: "Dr. Hana Wijaya, Sp.N", specialization: "Spesialis Saraf", icon: Stethoscope, description: "Menangani gangguan sistem saraf seperti stroke, epilepsi, dan lainnya." }, // Using Stethoscope as placeholder icon
];

export default function DoctorsPage() {
  return (
    // Removed py-8 md:py-12 from here, relies on layout.tsx main padding
    <div className="container mx-auto px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-green-900">
        Tim Dokter Profesional Kami
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {staticDoctors.map((doctor, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 group flex flex-col">
            {/* Placeholder Image */}
            <div className="bg-gray-200 h-48 w-full flex items-center justify-center text-gray-400 group-hover:opacity-90 transition-opacity">
              <Users size={48} />
            </div>
            <div className="p-5 text-center flex flex-col flex-grow">
              <h2 className="text-lg font-semibold mb-1 text-green-800">{doctor.name}</h2>
              <p className="text-green-600 font-medium text-sm mb-3">{doctor.specialization}</p>
              <p className="text-gray-600 text-xs mb-4 flex-grow">{doctor.description}</p>
              {/* Placeholder for link to full profile */}
              <a href="#" className="text-sm text-green-700 hover:underline mt-auto">
                Lihat Profil Lengkap &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
