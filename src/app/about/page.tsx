import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Kami | RS Airan Raya (Dev)',
  description: 'Pelajari lebih lanjut tentang sejarah, visi, misi, dan nilai-nilai RS Airan Raya.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Tentang RS Airan Raya</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Profil</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Rumah Sakit Airan Raya adalah Rumah Sakit Umum yang berlokasi di Lampung Selatan dengan pelayanan umum, spesialistik, penunjang medis dan perawatan (Rawat Jalan dan Rawat Inap). Demi mewujudkan misi untuk menjadi rumah sakit dengan reputasi regional RS AIRAN RAYA menyediakan fasilitas pelayanan yang lengkap serta dibantu dengan tenaga medis pilihan dalam pelayanan dan kemitraan.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Sejarah</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Rumah Sakit Airan Raya merupakan rumah sakit swasta dibangun diatas tanah milik pribadi salah satu pemegang saham. Pembangunan dimulai tahun 2015 dan mulai diresmikan tanggal 8 Agustus 2019. Rumah Sakit Airan Raya berada di wilayah Lampung Selatan, dengan kapasitas awal tempat tidur sebanyak 92 tempat tidur dan bangunan Rumah Sakit berdiri pada tanah seluas 29.465 m2 dengan luas bangunan ± 19.492,25 m2.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Untuk lebih meningkatkan profesionalisme dalam pelayanan dan dalam mengantisipasi era globalisasi serta merespon kebijakan pemerintah termasuk pelayanan Jaminan Kesehatan Nasional (JKN) yang diselenggarakan oleh BPJS Kesehatan, maka pengelolaan Rumah Sakit diserahkan kepada Pimpinan Rumah Sakit Airan Raya yang dalam hal ini kegiatannya dijalankan oleh seorang Direktur Rumah Sakit.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Seiring dengan meningkatnya jumlah BOR RS AIRAN RAYA, terutama kelas 1,2, dan 3 maka pada bulan Januari 2024, RS AIRAN RAYA meningkatkan kapasitas jumlah TT menjadi 210 TT.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Visi & Misi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-medium mb-2">Visi</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Menjadi Rumah Sakit Terdepan Dalam Memberikan Pelayanan Kesehatan Yang Bermutu di Lampung
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-medium mb-2">Misi</h3>
            <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2">
              <li>Melaksanakan Seluruh Pelayanan Kesehatan Yang di Berikan Sesuai Dengan Standar Mutu Pelayanan</li>
              <li>Membangun Pelayanan Kesehatan Dengan Sistem Informasi Management Yang Terintegritas</li>
              <li>Menciptakan Budaya Kerja Rumah Sakit Mengutamakan Mutu dan Kesehatan Pasien</li>
              <li>Membangun Sumber Daya Melalui Pendidikan dan Pelatihan Yang Berkesinambungan</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Motto</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-2xl font-medium mb-2 text-center">S.I.G.E.R</h3>
          <p className="text-lg text-gray-700 text-center">
            (SERVICE EXCELLENT, INTEGRITAS, GESIT, EMPATI, RAMAH)
          </p>
        </div>
      </section>
    </div>
  );
}
