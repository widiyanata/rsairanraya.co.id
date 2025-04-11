import type { Metadata } from 'next';
import { 
  Hospital, 
  Stethoscope, 
  HeartPulse, 
  Activity, 
  Baby, 
  Bone, 
  Brain, 
  Eye, 
  Ear, 
  ShieldCheck, 
  FlaskConical, 
  Microscope, 
  Ambulance,
  Syringe,
  Bed,
  Building2,
  Cross,
  Pill,
  Utensils,
  Car
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Layanan Kami | RS Airan Raya (Dev)',
  description: 'Jelajahi berbagai layanan medis unggulan yang tersedia di RS Airan Raya.',
};

// Static service data
const staticServices = [
  // Layanan Unggulan
  { 
    category: "Layanan Unggulan",
    services: [
      { name: "RIRS", icon: Activity, description: "Retrograde Intrarenal Surgery" },
      { name: "VTrex", icon: Activity, description: "Advanced Treatment Technology" },
    ]
  },
  // Pelayanan Poliklinik
  { 
    category: "Pelayanan Poliklinik",
    services: [
      { name: "Spesialis Anak", icon: Baby, description: "Perawatan kesehatan menyeluruh untuk anak-anak" },
      { name: "Spesialis Konsultan Nefrologi Anak", icon: Baby, description: "Spesialis ginjal untuk anak" },
      { name: "Spesialis Penyakit Dalam", icon: Stethoscope, description: "Diagnosis dan penanganan penyakit dalam" },
      { name: "Spesialis Penyakit Dalam - Konsultan Ginjal Hipertensi", icon: Stethoscope, description: "Spesialis ginjal dan hipertensi" },
      { name: "Spesialis Saraf", icon: Brain, description: "Penanganan gangguan sistem saraf" },
      { name: "Spesialis THT", icon: Ear, description: "Spesialis telinga, hidung, dan tenggorokan" },
      { name: "Spesialis Mata", icon: Eye, description: "Perawatan kesehatan mata" },
      { name: "Spesialis Paru", icon: Activity, description: "Penanganan penyakit paru-paru" },
      { name: "Spesialis Bedah", icon: Activity, description: "Tindakan pembedahan umum" },
      { name: "Spesialis Bedah Saraf", icon: Brain, description: "Pembedahan sistem saraf" },
      { name: "Spesialis Ortopedi", icon: Bone, description: "Spesialis tulang dan sendi" },
      { name: "Spesialis Urologi", icon: Activity, description: "Penanganan sistem urologi" },
      { name: "Spesialis Kulit & Kelamin", icon: Activity, description: "Perawatan kulit dan kelamin" },
      { name: "Spesialis Rehabilitasi Medik", icon: Activity, description: "Rehabilitasi pasca perawatan" },
      { name: "Spesialis Kebidanan & Kandungan", icon: Baby, description: "Perawatan ibu dan anak" },
      { name: "Spesialis Jantung & Pembuluh Darah", icon: HeartPulse, description: "Penanganan penyakit jantung" },
      { name: "Spesialis Bedah Mulut Makslofasial", icon: Activity, description: "Bedah mulut dan wajah" },
      { name: "Poliklinik Orthotik Prostetik", icon: Bone, description: "Layanan orthotik dan prostetik" },
      { name: "Poliklinik Dialisis", icon: Activity, description: "Layanan cuci darah" },
      { name: "Poliklinik Gigi", icon: Activity, description: "Perawatan kesehatan gigi" },
      { name: "Poliklinik Umum", icon: Stethoscope, description: "Layanan kesehatan umum" },
    ]
  },
  // Pelayanan Medis
  {
    category: "Pelayanan Medis",
    services: [
      { name: "Instalasi Gawat Darurat (IGD 24Jam)", icon: Ambulance, description: "Penanganan darurat 24 jam" },
      { name: "ICU, NICU & PICU", icon: Activity, description: "Perawatan intensif" },
      { name: "Kamar Operasi", icon: Activity, description: "Fasilitas pembedahan" },
      { name: "Kamar Bersalin", icon: Baby, description: "Fasilitas persalinan" },
    ]
  },
  // Kamar Rawat Inap
  {
    category: "Kamar Rawat Inap",
    services: [
      { name: "VIP", icon: Bed, description: "Kamar perawatan VIP" },
      { name: "Kelas 1", icon: Bed, description: "Kamar perawatan kelas 1" },
      { name: "Kelas 2", icon: Bed, description: "Kamar perawatan kelas 2" },
      { name: "Kelas 3", icon: Bed, description: "Kamar perawatan kelas 3" },
    ]
  },
  // Pelayanan Penunjang Medis
  {
    category: "Pelayanan Penunjang Medis",
    services: [
      { name: "Laboratorium 24 Jam", icon: Microscope, description: "Pemeriksaan laboratorium" },
      { name: "Bank Darah", icon: Activity, description: "Penyediaan darah" },
      { name: "Fisioterapi", icon: Activity, description: "Layanan fisioterapi" },
      { name: "Radiologi 24 Jam", icon: FlaskConical, description: "Pemeriksaan radiologi" },
      { name: "CT-Scan", icon: FlaskConical, description: "Pemeriksaan CT-Scan" },
      { name: "Panoramic", icon: FlaskConical, description: "Pemeriksaan panoramic" },
      { name: "Rontgen X-Ray", icon: FlaskConical, description: "Pemeriksaan rontgen" },
      { name: "USG Abdomen", icon: FlaskConical, description: "Pemeriksaan USG" },
      { name: "Farmasi 24 Jam", icon: Pill, description: "Layanan farmasi" },
      { name: "Instalasi Gizi", icon: Utensils, description: "Layanan gizi" },
      { name: "Ambulance", icon: Car, description: "Layanan ambulans" },
      { name: "Transit Kamar Jenazah", icon: Building2, description: "Fasilitas kamar jenazah" },
    ]
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-green-900">
        Layanan Medis Kami
      </h1>

      {staticServices.map((category, categoryIndex) => (
        <details 
          key={categoryIndex} 
          className="mb-4 group"
          // buka beberapa category
          // open={category.category === "Layanan Unggulan" || category.category === "Pelayanan Medis"}
          open={true}
        >
          <summary className="w-full p-4 bg-gray-50 rounded-lg mb-4 hover:bg-gray-100 transition-colors cursor-pointer list-none">
            <h2 className="text-2xl font-bold text-green-800">{category.category}</h2>
          </summary>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.services.map((service, serviceIndex) => (
              <div 
                key={serviceIndex} 
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex items-start space-x-4 hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0 bg-green-100 rounded-full p-3">
                  <service.icon size={24} className="text-green-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-green-800">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.description}
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
