import React from 'react';
import type { Metadata } from 'next';
import {
  BedDouble, FlaskConical, Microscope, Ambulance, Utensils, ParkingCircle, Pill, Activity, Accessibility, Info,
  Building2, Car
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fasilitas Kami | RS Airan Raya (Dev)',
  description: 'Lihat fasilitas penunjang modern yang tersedia di RS Airan Raya untuk kenyamanan Anda.',
};

// Fasilitas dikelompokkan berdasarkan kategori
const facilitiesData = [
  {
    category: "Fasilitas Medis",
    facilities: [
      { name: "Kamar Rawat Inap", icon: BedDouble, description: "Berbagai pilihan kelas kamar yang bersih, nyaman, dan dilengkapi fasilitas modern." },
      { name: "Unit Gawat Darurat (UGD)", icon: Ambulance, description: "Siap melayani 24 jam dengan tim medis terlatih dan peralatan lengkap." },
      { name: "Laboratorium Klinik", icon: Microscope, description: "Pemeriksaan laboratorium akurat dan cepat untuk menunjang diagnosis." },
      { name: "Radiologi & Pencitraan Medis", icon: FlaskConical, description: "Menyediakan layanan Rontgen, USG, dan CT Scan dengan teknologi terkini." },
      { name: "Ruang Operasi", icon: Activity, description: "Kamar bedah steril dengan peralatan canggih untuk berbagai jenis operasi." },
    ]
  },
  {
    category: "Fasilitas Penunjang",
    facilities: [
      { name: "Farmasi / Apotek", icon: Pill, description: "Menyediakan obat-obatan lengkap dan layanan konsultasi farmasi." },
      { name: "Ambulans", icon: Car, description: "Layanan ambulans siaga untuk penjemputan dan rujukan pasien." },
      { name: "Transit Kamar Jenazah", icon: Building2, description: "Fasilitas kamar jenazah yang memadai." },
    ]
  },
  {
    category: "Fasilitas Umum",
    facilities: [
      { name: "Area Parkir Luas", icon: ParkingCircle, description: "Area parkir yang memadai dan aman untuk kenyamanan pengunjung." },
      { name: "Kafetaria / Kantin", icon: Utensils, description: "Menyediakan makanan dan minuman untuk pasien, keluarga, dan pengunjung." },
      { name: "Aksesibilitas", icon: Accessibility || Info, description: "Fasilitas ramah disabilitas seperti ramp dan toilet khusus." },
    ]
  }
];

export default function FacilitiesPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-green-900">
        Fasilitas Rumah Sakit
      </h1>

      {facilitiesData.map((category, categoryIndex) => (
        <details 
          key={categoryIndex} 
          className="mb-4 group"
          // buka semua
          open={true}
        >
          <summary className="w-full p-4 bg-green-50 rounded-lg mb-4 hover:bg-green-100 transition-colors cursor-pointer list-none">
            <h2 className="text-2xl font-bold text-green-800">{category.category}</h2>
          </summary>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.facilities.map((facility, facilityIndex) => (
              <div 
                key={facilityIndex} 
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex items-start space-x-4 hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0 bg-green-100 rounded-full p-3">
                  <facility.icon size={24} className="text-green-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-green-800">
                    {facility.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}
