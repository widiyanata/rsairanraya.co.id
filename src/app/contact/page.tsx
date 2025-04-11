import React from 'react';
import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, Building } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hubungi Kami | RS Airan Raya (Dev)',
  description: 'Informasi kontak dan lokasi RS Airan Raya.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Hubungi Kami</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Informasi Kontak</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <MapPin className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-lg mb-1">Alamat:</h3>
                <p className="text-gray-600">Jl. Contoh Alamat No. 123, Lampung Selatan, Lampung</p>
                <a 
                  href="https://maps.app.goo.gl/FFQNmwa7QF1hzb2u7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 text-sm inline-block mt-2"
                >
                  Lihat di Google Maps →
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Phone className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-lg mb-1">Telepon:</h3>
                <p className="text-gray-600">Call Center: 0721 5617799</p>
                <p className="text-gray-600">IGD 24 Jam: +62 895-3513-57840</p>
                <p className="text-gray-600">Admin: +62 823-7981-7882</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Mail className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-lg mb-1">Email:</h3>
                <p className="text-gray-600">humas.rsairanraya@gmail.com</p>
                <p className="text-gray-600">medsos.rsairanraya@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-lg mb-1">Jam Operasional:</h3>
                <p className="font-medium">IGD:</p>
                <p className="text-gray-600 mb-2">24 Jam</p>
                <p className="font-medium">Jam Kunjungan Rawat Inap:</p>
                <p className="text-gray-600">Pagi: 10:00 - 12:00</p>
                <p className="text-gray-600">Sore: 17:00 - 19:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Kirim Pesan</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Masukkan nama lengkap"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="contoh@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subjek
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Subjek pesan"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Tulis pesan Anda di sini..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Kirim Pesan
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-500 italic">
            * Formulir ini masih dalam pengembangan
          </p>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Lokasi Kami</h2>
        <div className="aspect-video w-full rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4887.953277711138!2d105.2954231!3d-5.3508696!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40c5548bc41997%3A0x3916eef11e7a7816!2sRS.%20Airan%20Raya!5e1!3m2!1sen!2sid!4v1744337581194!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
