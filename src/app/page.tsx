import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getRecentPosts } from '@/lib/api';
import { WpPost } from '@/types/wordpress';
import { Hospital, Users, Clock, MapPin, Phone, Activity, ArrowRight, Syringe, Brain, ChevronDown, Heart, Shield, Award, TrendingUp } from 'lucide-react';

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

  // Statistics for the hero section
  const stats = [
    { icon: Heart, value: "15+", label: "Dokter Spesialis" },
    { icon: Shield, value: "24/7", label: "Layanan IGD" },
    { icon: Award, value: "10+", label: "Layanan Unggulan" },
    { icon: TrendingUp, value: "100%", label: "Kepuasan Pasien" },
  ];

  return (
    <div className="space-y-12 md:space-y-24" role="main">
      {/* Enhanced Hero Section */}
      <section className="relative text-center py-20 md:py-32 px-4 overflow-hidden" aria-label="Hero section - RS Airan Raya introduction">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-green-100 to-emerald-50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-emerald-200/30 rounded-full blur-xl"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <Image
              src="/Rumah_Sakit_Airan_Raya.png"
              alt="RS Airan Raya Logo"
              width={180}
              height={180}
              className="mx-auto mb-8 drop-shadow-lg hover:scale-105 transition-transform duration-300"
              priority
            />
            <h1 className="text-4xl md:text-6xl font-bold text-green-900 mb-6 leading-tight">
              RS Airan Raya
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              Menjadi Rumah Sakit Terdepan Dalam Memberikan Pelayanan Kesehatan Yang Bermutu di Lampung
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="#layanan"
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-4 px-8 rounded-full hover:from-amber-600 hover:to-amber-700 transition-all duration-300 inline-flex items-center justify-center gap-3 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transform"
              >
                <Activity size={22} />
                Lihat Layanan Kami
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="bg-white text-green-900 border-2 border-green-200 font-semibold py-4 px-8 rounded-full hover:bg-green-50 hover:border-green-300 transition-all duration-300 inline-flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
              >
                <Phone size={22} />
                Hubungi Kami
              </Link>
            </div>

            {/* Statistics Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto" role="region" aria-label="Hospital statistics">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/90 transition-all duration-300 hover:-translate-y-1 transform shadow-lg hover:shadow-xl">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4" aria-hidden="true">
                    <stat.icon size={24} className="text-green-700" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-green-900 mb-1" aria-label={`${stat.value} ${stat.label}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-green-600/60" />
          </div>
        </div>
      </section>

      {/* Enhanced Tentang Kami Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-slide-in-left">
            <div className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              Tentang Kami
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
              Dedikasi untuk Kesehatan Anda
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Rumah Sakit Airan Raya adalah Rumah Sakit Umum yang berlokasi di Lampung Selatan dengan pelayanan umum, spesialistik, penunjang medis dan perawatan (Rawat Jalan dan Rawat Inap).
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Demi mewujudkan misi untuk menjadi rumah sakit dengan reputasi regional, RS AIRAN RAYA menyediakan fasilitas pelayanan yang lengkap serta dibantu dengan tenaga medis pilihan dalam pelayanan dan kemitraan.
            </p>
            
            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield size={16} className="text-green-700" />
                </div>
                <span className="text-gray-700">Pelayanan 24 Jam</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart size={16} className="text-green-700" />
                </div>
                <span className="text-gray-700">Dokter Spesialis</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Award size={16} className="text-green-700" />
                </div>
                <span className="text-gray-700">Teknologi Modern</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Users size={16} className="text-green-700" />
                </div>
                <span className="text-gray-700">Tim Terpercaya</span>
              </div>
            </div>
            
            <Link 
              href="/about" 
              className="bg-green-700 text-white hover:bg-green-800 font-semibold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
            >
              Selengkapnya Tentang Kami 
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="order-1 md:order-2 animate-slide-in-right">
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 h-64 md:h-80 rounded-2xl flex items-center justify-center text-green-600 shadow-xl relative overflow-hidden">
                <div className="absolute top-4 left-4 w-16 h-16 bg-green-200/50 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 right-4 w-20 h-20 bg-emerald-200/50 rounded-full blur-xl"></div>
                <Hospital size={80} className="relative z-10" />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg animate-pulse">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Online 24/7</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <Heart size={16} className="text-red-500" />
                  <span className="text-sm font-medium text-gray-700">Terpercaya</span>
                </div>
              </div>
            </div>
          </div>
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

      {/* Enhanced Layanan Kami Section */}
      <section id="layanan" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Layanan Kami
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            Layanan Unggulan Kami
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan kesehatan terbaik dengan teknologi modern dan tenaga medis berpengalaman
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-50 to-emerald-50 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={36} className="text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-3 group-hover:text-green-700 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <button className="text-green-700 font-semibold hover:text-green-800 transition-colors inline-flex items-center gap-2 group/btn">
                  Selengkapnya
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link 
            href="/services" 
            className="bg-gradient-to-r from-green-700 to-emerald-700 text-white hover:from-green-800 hover:to-emerald-800 font-semibold py-4 px-8 rounded-full transition-all duration-300 inline-flex items-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
          >
            Jelajahi Semua Layanan
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Enhanced Dokter Kami Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-white text-green-800 text-sm font-semibold px-4 py-2 rounded-full mb-4 shadow-sm">
              Tim Dokter
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
              Temui Tim Dokter Kami
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Didukung oleh dokter spesialis berpengalaman dan terpercaya untuk memberikan pelayanan terbaik
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative">
                {/* Doctor Photo Placeholder */}
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500">
                    <div className="relative">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                        <Users size={36} className="text-green-700" />
                      </div>
                      {/* Online status indicator */}
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Specialty Badge */}
                  <div className="absolute top-3 left-3 bg-green-700 text-white text-xs px-2 py-1 rounded-full font-medium">
                    Available
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-green-900 mb-2 group-hover:text-green-700 transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-green-600 font-medium text-sm mb-4 leading-relaxed">
                    {doctor.specialization}
                  </p>
                  
                  {/* Action buttons */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-green-100 text-green-700 hover:bg-green-200 font-semibold py-2 px-3 rounded-lg transition-colors text-sm">
                      Profil
                    </button>
                    <button className="flex-1 bg-green-700 text-white hover:bg-green-800 font-semibold py-2 px-3 rounded-lg transition-colors text-sm">
                      Jadwal
                    </button>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link 
              href="/doctors" 
              className="bg-white text-green-700 border-2 border-green-200 hover:bg-green-50 hover:border-green-300 font-semibold py-4 px-8 rounded-full transition-all duration-300 inline-flex items-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
            >
              Lihat Profil Dokter Lengkap
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Berita Terbaru Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Berita & Artikel
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            Informasi & Berita Kesehatan
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Tetap update dengan informasi kesehatan terbaru dan artikel-artikel edukasi dari tim medis kami
          </p>
        </div>
        
        {recentPosts.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Hospital size={32} className="text-gray-400" />
            </div>
            <p className="text-gray-600">Belum ada berita terbaru.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <article key={post.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col">
                <Link href={`/posts/${post.slug}`} className="block relative overflow-hidden">
                  <div className="bg-gradient-to-br from-green-100 to-emerald-100 h-48 w-full flex items-center justify-center text-green-600 group-hover:scale-105 transition-transform duration-500 relative">
                    <div className="absolute top-4 left-4 w-12 h-12 bg-green-200/30 rounded-full blur-lg"></div>
                    <div className="absolute bottom-4 right-4 w-16 h-16 bg-emerald-200/30 rounded-full blur-lg"></div>
                    <Hospital size={56} className="relative z-10" />
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-green-700 text-xs px-3 py-1 rounded-full font-medium">
                    Artikel Kesehatan
                  </div>
                  
                  {/* Date Badge */}
                  <div className="absolute top-4 right-4 bg-green-700/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium">
                    {new Date(post.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}
                  </div>
                </Link>
                
                <div className="p-6 flex flex-col flex-grow">
                  <Link href={`/posts/${post.slug}`} className="hover:text-green-700 block mb-auto group/link">
                    <h3
                      className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover/link:text-green-700 transition-colors leading-tight"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    {post.excerpt?.rendered && (
                      <div
                        className="text-gray-600 leading-relaxed mb-6 line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                      />
                    )}
                  </Link>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Users size={16} className="text-green-700" />
                      </div>
                      <span className="text-sm text-gray-500">Tim Medis</span>
                    </div>
                    <Link 
                      href={`/posts/${post.slug}`} 
                      className="text-green-700 hover:text-green-800 font-semibold text-sm inline-flex items-center gap-1 group/read"
                    >
                      Baca
                      <ArrowRight size={14} className="group-hover/read:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
        
        <div className="text-center mt-16">
          <Link 
            href="/posts" 
            className="bg-green-100 text-green-700 hover:bg-green-200 font-semibold py-4 px-8 rounded-full transition-all duration-300 inline-flex items-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
          >
            Baca Semua Berita
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Enhanced Kontak & Lokasi Section */}
      <section className="bg-gradient-to-br from-gray-50 to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-white text-green-800 text-sm font-semibold px-4 py-2 rounded-full mb-4 shadow-sm">
              Hubungi Kami
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
              Kontak & Lokasi
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Kami siap melayani Anda 24/7. Hubungi kami untuk konsultasi atau keadaan darurat
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
            {/* Alamat */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 transform text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin size={32} className="text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-3">Alamat</h3>
              <p className="text-gray-600 mb-4">{contactInfo.address}</p>
              <button className="text-green-700 hover:text-green-800 font-semibold text-sm inline-flex items-center gap-1">
                Lihat di Maps <ArrowRight size={14} />
              </button>
            </div>

            {/* Telepon */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 transform text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone size={32} className="text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-3">Telepon</h3>
              <div className="space-y-2 mb-4">
                <p className="text-gray-600">
                  <span className="font-medium">Call Center:</span><br/>
                  <span className="text-green-700 font-semibold">{contactInfo.phone}</span>
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">IGD 24 Jam:</span><br/>
                  <span className="text-red-600 font-semibold">{contactInfo.emergency}</span>
                </p>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-green-700 text-white hover:bg-green-800 py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                  Call Center
                </button>
                <button className="flex-1 bg-red-600 text-white hover:bg-red-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                  IGD
                </button>
              </div>
            </div>

            {/* Jam Pelayanan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 transform text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock size={32} className="text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-3">Jam Pelayanan</h3>
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">IGD:</span>
                  <span className="text-green-700 font-semibold flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    {contactInfo.igdHours}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">Poliklinik:</span>
                  <span className="text-gray-700 font-semibold">{contactInfo.clinicHours}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">Kunjungan:</span>
                  <span className="text-gray-700 font-semibold">10:00-12:00, 17:00-19:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Contact Banner */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-center text-white mb-12 shadow-xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Phone size={28} />
              <h3 className="text-2xl font-bold">Darurat? Hubungi Sekarang!</h3>
            </div>
            <p className="text-red-100 mb-6">Tim IGD kami siap melayani 24 jam untuk kondisi darurat</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <a 
                href={`tel:${contactInfo.emergency}`}
                className="bg-white text-red-600 hover:bg-red-50 font-bold py-3 px-6 rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
              >
                <Phone size={20} />
                {contactInfo.emergency}
              </a>
              <a 
                href={`tel:${contactInfo.phone}`}
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold py-3 px-6 rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2 hover:-translate-y-1 transform"
              >
                <Phone size={20} />
                Call Center
              </a>
            </div>
          </div>

          {/* Maps */}
          <div className="bg-white rounded-2xl p-4 shadow-xl">
            <iframe 
              src="https://maps.google.com/maps?q=RS+Airan+Raya&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-80 rounded-xl"
              frameBorder="0"
              scrolling="no"
              loading="lazy"
              title="Lokasi RS Airan Raya"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}


