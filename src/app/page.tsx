import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getRecentPosts } from '@/lib/api';
import { WpPost } from '@/types/wordpress';
import { Hospital, Users, Clock, MapPin, Phone, Activity, ArrowRight, Syringe, Brain } from 'lucide-react';

export default async function Home() {
  const recentPosts: WpPost[] = await getRecentPosts(3);

  // Update layanan unggulan sesuai company profile
  const services = [
    { name: "RIRS", icon: Syringe, description: "Retrograde Intrarenal Surgery" },
    { name: "VTrex", icon: Brain, description: "Advanced Treatment Technology" },
    { name: "IGD 24 Jam", icon: Activity, description: "Pelayanan gawat darurat 24 jam" },
  ];

  // Update data dokter (contoh, bisa disesuaikan dengan data sebenarnya)
  const doctors = [
    { name: "Dr. Budi Santoso, Sp.PD-KGH", specialization: "Spesialis Penyakit Dalam - Konsultan Ginjal Hipertensi" },
    { name: "Dr. Citra Lestari, Sp.A", specialization: "Spesialis Anak" },
    { name: "Dr. Ahmad Hidayat, Sp.BS", specialization: "Spesialis Bedah Saraf" },
    { name: "Dr. Dewi Anggraini, Sp.M", specialization: "Spesialis Mata" },
  ];

  // Update contact info sesuai company profile
  const contactInfo = {
    address: "Lampung Selatan",
    phone: "0721 5617799",
    emergency: "+62 895-3513-57840",
    admin: "+62 823-7981-7882",
    email: "humas.rsairanraya@gmail.com",
    igdHours: "24 Jam",
    clinicHours: "Senin - Sabtu",
  };

  return (
    <div className="space-y-12 md:space-y-24">
      {/* Hero Section */}
      <section className="relative text-center py-24 md:py-32 px-4 overflow-hidden rounded-lg bg-green-50">
        <div className="relative z-10 justify-center">
          <Image
            src="/Rumah_Sakit_Airan_Raya.png"
            alt="RS Airan Raya Logo"
            width={150}
            height={150}
            className="mx-auto mb-6"
          />
          <h1 className="md:text-5xl">RS Airan Raya</h1>
          <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Menjadi Rumah Sakit Terdepan Dalam Memberikan Pelayanan Kesehatan Yang Bermutu di Lampung
          </p>
          <Link
            href="#layanan"
            className="bg-amber-500 text-green-900 font-semibold py-3 px-8 rounded-full hover:bg-amber-400 transition duration-300 inline-flex items-center gap-2 text-lg shadow-md"
          >
            Lihat Layanan Kami <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Tentang Kami Section */}
      <section className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2>Dedikasi untuk Kesehatan Anda</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Rumah Sakit Airan Raya adalah Rumah Sakit Umum yang berlokasi di Lampung Selatan dengan pelayanan umum, spesialistik, penunjang medis dan perawatan (Rawat Jalan dan Rawat Inap). Demi mewujudkan misi untuk menjadi rumah sakit dengan reputasi regional RS AIRAN RAYA menyediakan fasilitas pelayanan yang lengkap serta dibantu dengan tenaga medis pilihan dalam pelayanan dan kemitraan.
          </p>
          <Link href="/about" className="text-green-700 hover:underline font-medium inline-flex items-center gap-1">
            Selengkapnya Tentang Kami <ArrowRight size={16} />
          </Link>
        </div>
        <div className="order-1 md:order-2 bg-gray-200 h-64 md:h-80 rounded-lg flex items-center justify-center text-gray-400">
          <Hospital size={64} />
        </div>
      </section>

      {/* Motto Section - NEW */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Motto: S.I.G.E.R</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { title: "Service Excellent", desc: "Pelayanan Terbaik" },
              { title: "Integritas", desc: "Kejujuran & Profesional" },
              { title: "Gesit", desc: "Cepat & Tanggap" },
              { title: "Empati", desc: "Kepedulian Tinggi" },
              { title: "Ramah", desc: "Keramahan dalam Pelayanan" },
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-green-700">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Layanan Kami Section */}
      <section id="layanan" className="container mx-auto px-4">
        <h2 className="text-center mb-10">Layanan Unggulan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex items-center md:flex-col md:items-center md:text-center md:p-8">
              <div className="flex-shrink-0 bg-green-100 rounded-full p-3 md:p-4 inline-block mr-4 md:mr-0 md:mb-5">
                <service.icon size={32} className="text-green-700" />
              </div>
              <div className="text-left md:text-center">
                <h3 className="text-lg md:text-xl">{service.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/services" className="text-green-700 hover:underline font-medium text-lg">
            Jelajahi Semua Layanan &rarr;
          </Link>
        </div>
      </section>

      {/* Dokter Kami Section - Updated Card Layout & Grid */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-10">Temui Tim Dokter Kami</h2> {/* Base styles from globals.css, kept text-center & mb */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {doctors.map((doctor, index) => (
              // Added hover:shadow-xl transition-shadow duration-300
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 group flex items-center md:block hover:shadow-xl transition-shadow duration-300">
                <div className="flex-shrink-0 w-24 h-24 md:w-full md:h-48 bg-gray-200 flex items-center justify-center text-gray-400 group-hover:opacity-90 transition-opacity">
                  <Users size={48} />
                </div>
                <div className="p-4 flex-grow md:p-5 md:text-center">
                  <h3 className="text-base md:text-lg"> {/* Base styles from globals.css */}
                    {doctor.name}
                  </h3>
                  <p className="text-green-600 font-medium text-xs md:text-sm mt-1">{doctor.specialization}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/doctors" className="text-green-700 hover:underline font-medium text-lg">
              Lihat Profil Dokter Lengkap &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Berita Terbaru Section - Simplified Cards with Placeholders & Hover Effect */}
      <section className="container mx-auto px-4">
        <h2 className="text-center mb-10">Informasi & Berita Kesehatan</h2> {/* Base styles from globals.css, kept text-center & mb */}
        {recentPosts.length === 0 ? (
          <p className="text-center text-gray-600">Belum ada berita terbaru.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              // Added hover:shadow-xl transition-shadow duration-300
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 group flex flex-col hover:shadow-xl transition-shadow duration-300">
                <Link href={`/posts/${post.slug}`} className="block">
                  <div className="bg-gray-200 h-48 w-full flex items-center justify-center text-gray-400 group-hover:opacity-90 transition-opacity">
                    <Hospital size={48} />
                  </div>
                </Link>
                <div className="p-5 flex flex-col flex-grow">
                  <Link href={`/posts/${post.slug}`} className="hover:text-green-700 block mb-auto">
                    <h3
                      className="text-lg line-clamp-2" /* Base styles from globals.css */
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    {post.excerpt?.rendered && (
                      <div
                        className="text-gray-600 text-sm mt-2 mb-4 line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                      />
                    )}
                  </Link>
                  <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center text-xs text-gray-500">
                    <span>{new Date(post.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <Link href={`/posts/${post.slug}`} className="text-green-700 hover:underline font-medium inline-flex items-center gap-1">
                      Selengkapnya <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="text-center mt-12">
          <Link href="/posts" className="text-green-700 hover:underline font-medium text-lg">
            Baca Semua Berita &rarr;
          </Link>
        </div>
      </section>

      {/* Kontak & Lokasi Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-center mb-8">Hubungi Kami</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin size={32} className="mx-auto mb-3 text-green-700" />
              <h3 className="text-lg">Alamat</h3>
              <p className="text-gray-600 text-sm mt-1">{contactInfo.address}</p>
            </div>
            <div className="text-center">
              <Phone size={32} className="mx-auto mb-3 text-green-700" />
              <h3 className="text-lg">Telepon</h3>
              <p className="text-gray-600 text-sm mt-1">Call Center: {contactInfo.phone}</p>
              <p className="text-gray-600 text-sm">IGD: {contactInfo.emergency}</p>
            </div>
            <div className="text-center">
              <Clock size={32} className="mx-auto mb-3 text-green-700" />
              <h3 className="text-lg">Jam Pelayanan</h3>
              <p className="text-gray-600 text-sm mt-1">IGD: {contactInfo.igdHours}</p>
              <p className="text-gray-600 text-sm">Poliklinik: {contactInfo.clinicHours}</p>
            </div>
          </div>
          <div className="mt-10">
            <iframe 
              src="https://maps.google.com/maps?q=RS+Airan+Raya&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-64 rounded-lg"
              frameBorder="0"
              scrolling="no"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}


