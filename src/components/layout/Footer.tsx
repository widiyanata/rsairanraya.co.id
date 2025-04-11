import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-green-900 text-green-200 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Kolom 1: Tentang RS */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">RS Airan Raya</h3>
            <p className="text-sm mb-4">
              Rumah Sakit Umum yang berlokasi di Lampung Selatan dengan pelayanan umum, 
              spesialistik, penunjang medis dan perawatan.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Kolom 2: Tautan Cepat */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white hover:underline">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white hover:underline">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white hover:underline">
                  Layanan
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-white hover:underline">
                  Fasilitas
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:underline">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Kontak */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone size={18} className="flex-shrink-0 mt-1" />
                <div>
                  <p>Call Center: 0721 5617799</p>
                  <p>IGD 24 Jam: +62 895-3513-57840</p>
                  <p>Admin: +62 823-7981-7882</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail size={18} className="flex-shrink-0 mt-1" />
                <div>
                  <p>humas.rsairanraya@gmail.com</p>
                  <p>medsos.rsairanraya@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Jam Operasional */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Jam Operasional</h3>
            <ul className="space-y-3">
              <li>
                <p className="font-medium">IGD:</p>
                <p>24 Jam</p>
              </li>
              <li>
                <p className="font-medium">Jam Kunjungan:</p>
                <p>Pagi: 10:00 - 12:00</p>
                <p>Sore: 17:00 - 19:00</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Motto */}
        <div className="text-center mb-8 py-4 border-y border-green-800">
          <p className="font-semibold text-white mb-2">MOTTO: "S.I.G.E.R"</p>
          <p className="text-sm">SERVICE EXCELLENT, INTEGRITAS, GESIT, EMPATI, RAMAH</p>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm">
          <p>&copy; {currentYear} RS Airan Raya. All rights reserved.</p>
          <p className="mt-2 text-green-300">
            Website ini masih dalam tahap pengembangan awal.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
