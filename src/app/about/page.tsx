import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Hospital, Award, Target, Lightbulb } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Tentang Kami | RS Airan Raya (Dev)',
  description: 'Pelajari lebih lanjut tentang sejarah, visi, misi, dan nilai-nilai RS Airan Raya.',
};

export default function AboutPage() {
  const breadcrumbItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Tentang Kami' },
  ];

  return (
    <div className="space-y-16">
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative text-center py-24 px-4 overflow-hidden rounded-lg bg-green-50">
        <div className="relative z-10">
          <Image
            src="/Rumah_Sakit_Airan_Raya.png"
            alt="RS Airan Raya Logo"
            width={150}
            height={150}
            className="mx-auto mb-6"
          />
          <h1 className="mb-4">Tentang RS Airan Raya</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Komitmen kami untuk memberikan pelayanan kesehatan terbaik bagi masyarakat Lampung
          </p>
        </div>
      </section>

      {/* Profil Section */}
      <section className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="mb-6">Profil Kami</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Rumah Sakit Airan Raya adalah Rumah Sakit Umum yang berlokasi di Lampung Selatan dengan pelayanan umum, spesialistik, penunjang medis dan perawatan (Rawat Jalan dan Rawat Inap). Demi mewujudkan misi untuk menjadi rumah sakit dengan reputasi regional RS AIRAN RAYA menyediakan fasilitas pelayanan yang lengkap serta dibantu dengan tenaga medis pilihan dalam pelayanan dan kemitraan.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Untuk lebih meningkatkan profesionalisme dalam pelayanan dan dalam mengantisipasi era globalisasi serta merespon kebijakan pemerintah termasuk pelayanan Jaminan Kesehatan Nasional (JKN) yang diselenggarakan oleh BPJS Kesehatan, maka pengelolaan Rumah Sakit diserahkan kepada Pimpinan Rumah Sakit Airan Raya yang dalam hal ini kegiatannya dijalankan oleh seorang Direktur Rumah Sakit.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Seiring dengan meningkatnya jumlah BOR RS AIRAN RAYA, terutama kelas 1,2, dan 3 maka pada bulan Januari 2024, RS AIRAN RAYA meningkatkan kapasitas jumlah TT menjadi 210 TT.
          </p>
        </div>
        <div className="order-1 md:order-2 bg-gray-100 h-64 md:h-96 rounded-lg flex items-center justify-center">
          <Hospital size={64} className="text-green-600" />
        </div>
      </section>

      {/* Visi & Misi Section */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="inline-block p-3 bg-green-100 rounded-lg mb-4">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="mb-4">Visi</h2>
              <p className="text-gray-700 leading-relaxed">
                Menjadi Rumah Sakit Terdepan Dalam Memberikan Pelayanan Kesehatan Yang Bermutu di Lampung
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="inline-block p-3 bg-green-100 rounded-lg mb-4">
                <Lightbulb className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="mb-4">Misi</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green-600 flex-shrink-0" />
                  <span>Melaksanakan Seluruh Pelayanan Kesehatan Yang di Berikan Sesuai Dengan Standar Mutu Pelayanan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green-600 flex-shrink-0" />
                  <span>Membangun Pelayanan Kesehatan Dengan Sistem Informasi Management Yang Terintegritas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green-600 flex-shrink-0" />
                  <span>Menciptakan Budaya Kerja Rumah Sakit Mengutamakan Mutu dan Kesehatan Pasien</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green-600 flex-shrink-0" />
                  <span>Membangun Sumber Daya Melalui Pendidikan dan Pelatihan Yang Berkesinambungan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Motto Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-green-100 rounded-lg mb-4">
            <Award className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="mb-8">Motto: S.I.G.E.R</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { title: "Service Excellent", desc: "Pelayanan Terbaik" },
              { title: "Integritas", desc: "Kejujuran & Profesional" },
              { title: "Gesit", desc: "Cepat & Tanggap" },
              { title: "Empati", desc: "Kepedulian Tinggi" },
              { title: "Ramah", desc: "Keramahan dalam Pelayanan" },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-green-700 font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
