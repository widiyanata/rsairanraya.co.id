import React from 'react';
import type { Metadata } from 'next';
import { CalendarDays, Clock, User, Search, ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Jadwal Dokter | RS Airan Raya (Dev)',
  description: 'Temukan jadwal praktik dokter spesialis kami di RS Airan Raya (Data Contoh).',
};

// Fictional static schedule data
const scheduleData = [
  {
    day: "Senin", schedules: [
      { time: "08:00 - 12:00", doctor: "Dr. Budi Santoso, Sp.JP", specialization: "Jantung" },
      { time: "09:00 - 13:00", doctor: "Dr. Citra Lestari, Sp.OG", specialization: "Kebidanan & Kandungan" },
      { time: "14:00 - 17:00", doctor: "Dr. Eko Prasetyo, Sp.A", specialization: "Anak" },
    ]
  },
  {
    day: "Selasa", schedules: [
      { time: "10:00 - 14:00", doctor: "Dr. Ahmad Hidayat, Sp.B", specialization: "Bedah Umum" },
      { time: "13:00 - 16:00", doctor: "Dr. Dewi Anggraini, Sp.PD", specialization: "Penyakit Dalam" },
      { time: "15:00 - 18:00", doctor: "Dr. Farah Nabila, Sp.M", specialization: "Mata" },
    ]
  },
  {
    day: "Rabu", schedules: [
      { time: "08:00 - 11:00", doctor: "Dr. Budi Santoso, Sp.JP", specialization: "Jantung" },
      { time: "11:00 - 15:00", doctor: "Dr. Gilang Permana, Sp.OT", specialization: "Ortopedi" },
      { time: "16:00 - 19:00", doctor: "Dr. Hana Wijaya, Sp.N", specialization: "Saraf" },
    ]
  },
  // Add more days as needed (Kamis, Jumat, Sabtu)
  {
    day: "Kamis", schedules: [
      { time: "09:00 - 13:00", doctor: "Dr. Citra Lestari, Sp.OG", specialization: "Kebidanan & Kandungan" },
      { time: "14:00 - 17:00", doctor: "Dr. Dewi Anggraini, Sp.PD", specialization: "Penyakit Dalam" },
    ]
  },
  {
    day: "Jumat", schedules: [
      { time: "08:00 - 12:00", doctor: "Dr. Ahmad Hidayat, Sp.B", specialization: "Bedah Umum" },
      { time: "13:00 - 16:00", doctor: "Dr. Eko Prasetyo, Sp.A", specialization: "Anak" },
    ]
  },
];

export default function SchedulePage() {
  return (
    // Removed py-8 md:py-12 from here, relies on layout.tsx main padding
    <div className="container mx-auto px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-green-900">
        Jadwal Praktik Dokter
      </h1>
      <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto">
        Temukan jadwal konsultasi dengan dokter spesialis kami. Harap dicatat bahwa jadwal ini adalah **contoh** dan dapat berubah sewaktu-waktu. Mohon konfirmasi ke bagian pendaftaran untuk jadwal terbaru.
      </p>

      {/* Placeholder Filters */}
      <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200 flex flex-wrap gap-4 items-center justify-center">
        <div className="relative flex-grow md:flex-grow-0">
          <input
            type="text"
            placeholder="Cari Nama Dokter..."
            className="border border-gray-300 rounded-md py-2 px-4 pl-10 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            disabled // Disabled for placeholder
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
        <div className="relative flex-grow md:flex-grow-0">
          <select
            className="border border-gray-300 rounded-md py-2 px-4 appearance-none w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
            disabled // Disabled for placeholder
          >
            <option>Pilih Spesialisasi</option>
            <option>Jantung</option>
            <option>Anak</option>
            {/* Add other specializations */}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
        </div>
        {/* Add Day filter if needed */}
      </div>

      {/* Schedule Display */}
      <div className="space-y-8">
        {scheduleData.map((daySchedule) => (
          <div key={daySchedule.day} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-2xl font-semibold mb-4 text-green-800 flex items-center gap-2">
              <CalendarDays size={24} /> {daySchedule.day}
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Waktu
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Dokter
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Spesialisasi
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {daySchedule.schedules.length > 0 ? (
                    daySchedule.schedules.map((slot, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center gap-1">
                          <Clock size={14} className="text-gray-400" /> {slot.time}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          <div className="flex items-center gap-2">
                            <User size={14} className="text-gray-400" /> {slot.doctor}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {slot.specialization}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3} className="px-6 py-4 text-center text-sm text-gray-500 italic">
                        Tidak ada jadwal praktik pada hari ini.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
