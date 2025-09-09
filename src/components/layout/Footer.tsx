import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Facebook, Instagram, Youtube, MapPin, Clock, Stethoscope, Heart, Award, Users, ArrowRight, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Beranda" },
    { href: "/about", label: "Tentang Kami" },
    { href: "/services", label: "Layanan" },
    { href: "/doctors", label: "Dokter" },
    { href: "/facilities", label: "Fasilitas" },
    { href: "/contact", label: "Hubungi Kami" },
  ];

  const services = [
    { name: "RIRS", href: "/services/rirs" },
    { name: "VTrex", href: "/services/vtrex" },
    { name: "IGD 24 Jam", href: "/services/igd" },
    { name: "Rawat Inap", href: "/services/rawat-inap" },
    { name: "Rawat Jalan", href: "/services/rawat-jalan" },
  ];

  const contactInfo = {
    phone: "0721 5617799",
    emergency: "+62 895-3513-57840",
    admin: "+62 823-7981-7882",
    email: "humas.rsairanraya@gmail.com",
    socialEmail: "medsos.rsairanraya@gmail.com",
    address: "Lampung Selatan"
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-green-100 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-emerald-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Hospital Info Card */}
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/Rumah_Sakit_Airan_Raya.png"
                    alt="RS Airan Raya"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                  />
                </div>
                <p className="text-green-200 mb-4 leading-relaxed">
                  Rumah Sakit Umum yang berlokasi di Lampung Selatan dengan pelayanan umum, 
                  spesialistik, penunjang medis dan perawatan terbaik.
                </p>
                
                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-700 rounded-xl mb-2">
                      <Users size={24} className="text-green-200" />
                    </div>
                    <div className="text-lg font-bold text-white">15+</div>
                    <div className="text-xs text-green-300">Dokter Spesialis</div>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-700 rounded-xl mb-2">
                      <Heart size={24} className="text-green-200" />
                    </div>
                    <div className="text-lg font-bold text-white">24/7</div>
                    <div className="text-xs text-green-300">Layanan IGD</div>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-700 rounded-xl mb-2">
                      <Award size={24} className="text-green-200" />
                    </div>
                    <div className="text-lg font-bold text-white">10+</div>
                    <div className="text-xs text-green-300">Layanan Unggulan</div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-center justify-center gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="flex items-center justify-center w-10 h-10 bg-green-700/50 hover:bg-green-600 text-green-200 hover:text-white rounded-lg transition-all duration-200 hover:scale-110 transform"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
                <ArrowRight size={20} />
                Navigasi Cepat
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href} 
                      className="text-green-200 hover:text-white hover:translate-x-1 transform transition-all duration-200 flex items-center gap-2 group"
                    >
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full group-hover:bg-white transition-colors"></div>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
                <Heart size={20} />
                Layanan Utama
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link 
                      href={service.href} 
                      className="text-green-200 hover:text-white hover:translate-x-1 transform transition-all duration-200 flex items-center gap-2 group"
                    >
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full group-hover:bg-white transition-colors"></div>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Emergency & Contact Banner */}
        <div className="container mx-auto px-4 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Emergency Contact Card */}
            <div className="bg-red-600/20 border border-red-500/30 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-red-600 rounded-xl">
                  <Stethoscope size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Gawat Darurat</h3>
                  <p className="text-red-200 text-sm">Siap melayani 24 jam</p>
                </div>
              </div>
              <a 
                href={`tel:${contactInfo.emergency}`}
                className="text-2xl font-bold text-white hover:text-red-200 transition-colors mb-2 block"
              >
                {contactInfo.emergency}
              </a>
              <p className="text-red-200 text-sm">Tekan untuk menelpon langsung</p>
            </div>

            {/* Contact Information Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-xl">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Informasi & Pendaftaran</h3>
                  <p className="text-green-200 text-sm">Layanan customer service</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-green-300" />
                  <a href={`tel:${contactInfo.phone}`} className="text-white hover:text-green-200 transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-green-300" />
                  <a href={`mailto:${contactInfo.email}`} className="text-green-200 hover:text-white transition-colors text-sm">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-green-300" />
                  <span className="text-green-200 text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="container mx-auto px-4 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center gap-2 justify-center">
              <Clock size={20} />
              Jam Operasional
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-600 rounded-xl mb-3">
                  <Stethoscope size={20} className="text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">IGD</h4>
                <p className="text-green-200">24 Jam Setiap Hari</p>
                <div className="flex items-center justify-center mt-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-300 ml-2">Online</span>
                </div>
              </div>
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600 rounded-xl mb-3">
                  <Users size={20} className="text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Poliklinik</h4>
                <p className="text-green-200">Senin - Sabtu</p>
                <p className="text-green-300 text-sm">08:00 - 16:00 WIB</p>
              </div>
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-xl mb-3">
                  <Clock size={20} className="text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Jam Kunjungan</h4>
                <p className="text-green-200">10:00-12:00 & 17:00-19:00</p>
                <p className="text-green-300 text-sm">Setiap Hari</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Motto Section */}
        <div className="container mx-auto px-4 mb-8">
          <div className="bg-gradient-to-r from-green-700/20 via-emerald-600/20 to-green-700/20 backdrop-blur-sm rounded-2xl p-8 text-center border border-green-600/30">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">MOTTO RS AIRAN RAYA</h3>
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300 mb-4">
                S.I.G.E.R
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { letter: "S", word: "SERVICE EXCELLENT", desc: "Pelayanan Terbaik" },
                { letter: "I", word: "INTEGRITAS", desc: "Kejujuran & Profesional" },
                { letter: "G", word: "GESIT", desc: "Cepat & Tanggap" },
                { letter: "E", word: "EMPATI", desc: "Kepedulian Tinggi" },
                { letter: "R", word: "RAMAH", desc: "Keramahan dalam Pelayanan" }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-all duration-300 group">
                  <div className="text-2xl font-bold text-green-300 mb-2 group-hover:scale-110 transform transition-transform">
                    {item.letter}
                  </div>
                  <div className="text-white font-semibold text-sm mb-1">{item.word}</div>
                  <div className="text-green-200 text-xs">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-green-700/50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <p className="text-green-200">&copy; {currentYear} RS Airan Raya. Semua hak cipta dilindungi.</p>
                <p className="text-green-400 text-sm mt-1">
                  Website ini masih dalam tahap pengembangan awal.
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-xs text-green-300">
                  Dibuat dengan ❤️ untuk pelayanan kesehatan terbaik
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
