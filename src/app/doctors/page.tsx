// Keep as Server Component - remove 'use client'
import React from 'react';
import type { Metadata } from 'next';
import DoctorFilterList from '@/components/doctors/DoctorFilterList'; // Import the new client component

// Metadata export is allowed in Server Components
export const metadata: Metadata = {
  title: 'Cari Dokter | RS Airan Raya',
  description: 'Cari dan filter dokter spesialis serta dokter gigi kami berdasarkan nama atau bidang keahlian di RS Airan Raya.',
};

interface Doctor {
  name: string;
  position: string;
}

// Real doctor data from data-dokter.md
const realDoctors: Doctor[] = [
  { name: 'dr. Imron, Sp. PD', position: 'Dokter Spesialis Penyakit Dalam' },
  { name: 'dr. Riana Handayani, Sp. JP', position: 'Dokter Spesialis Jantung' },
  { name: 'dr. Hardha Pandhu Winata, Sp. B', position: 'Dokter Spesialis Bedah' },
  { name: 'dr. Irsyad Alamsyah Harahap, Sp. B', position: 'Dokter Spesialis Bedah' },
  { name: 'dr. Henny Kartika Handayani, Sp. OG', position: 'Dokter Spesialis Obygyn' },
  { name: 'dr. Toni Prasetia, Sp.PD', position: 'Dokter Spesialis Penyakit Dalam' },
  { name: 'dr. Fofi Livia Ariani, Sp. OG', position: 'Dokter Spesialis Obygyn' },
  { name: 'dr. Khairani, Sp.THT-KL', position: 'Dokter Spesialis Ilmu Kesehatan Tht Kl (Sp.Tht-Kl)' },
  { name: 'dr. Suharsono, Sp.N', position: 'Dokter Spesialis Neourologi' },
  { name: 'dr. Indra Faisal, Sp. An', position: 'Dokter Spesialis Anestesi' },
  { name: 'dr. Elvi Suryati, Sp.A', position: 'Dokter Spesialis Anak' },
  { name: 'dr.Fidha Rahmayani, Sp.S', position: 'Dokter Spesialis Saraf' },
  { name: 'dr. Mohamad Bayu Sahadewa, SP.OT', position: 'Dokter Spesialis Ortopedi dan Traumatologi' },
  { name: 'dr. Lattuhar Hari, SP. OG', position: 'Dokter Spesialis Obygyn' },
  { name: 'dr. Yanuar Wicaksana Sumasta, SP.U', position: 'Dokter Spesialis Urologi' },
  { name: 'dr. Rasyidah, Sp.Rad', position: 'Dokter Spesialis Radiologi' },
  { name: 'dr. Leonardo Daniel Mustopo, Sp. K.F.R', position: 'Dokter Spesialis Rehabilitas Medik' },
  { name: 'dr. Andrew Limantoro, Sp. A', position: 'Dokter Spesialis Anak' },
  { name: 'drg. Ryan Pandu Digjaya, Sp. BMM', position: 'Dokter Spesialis  Bedah Mulut' },
  { name: 'dr. Annisa Nurina Ayuningtyas, Sp.M', position: 'Dokter Spesialis Mata' },
  { name: 'dr. Carolina Hajir, Sp.PD', position: 'Dokter Spesialis Penyakit Dalam' },
  { name: 'dr. Ni Putu Alit Trisna, Sp.JP', position: 'Dokter Spesialis Jantung' },
  { name: 'dr. Emilia, Sp. PD K-GH, FINASIM', position: 'Dokter Spesialis Penyakit Dalam' },
  { name: 'dr. Satalina Mutiara,Sp.N', position: 'Dokter Spesialis Neourologi' },
  { name: 'dr. Ika Sari Gunawan, Msc, Sp.A', position: 'Dokter Spesialis Anak' },
  { name: 'dr. Galih Sahid Wicaksono,Sp. An', position: 'Dokter Spesialis Anestesi' },
  { name: 'dr. M. Ricky Ramadhian, Sp. Rad', position: 'Dokter Spesialis Radiologi' },
  { name: 'drg. Yuni Rahmawati, Sp. BMM', position: 'Dokter Spesialis  Bedah Mulut' },
  { name: 'dr. Putri Dwi Kartini, Sp.M', position: 'Dokter Spesialis Mata' },
  { name: 'dr. Anantyo Kusuma Yudha, Sp. THT-TL', position: 'Dokter Spesialis Telinga, Hidung, Tenggorokan, Bedah Kepala Leher' },
  { name: 'dr. Rama Gindo Imansuri, Sp. OG', position: 'Dokter Spesialis Obygyn' },
  { name: 'dr. Muhammad Hadi Wijaya, Sp. PD', position: 'Dokter Spesialis Penyakit Dalam' },
  { name: 'dr. Adhari Aji Purnomo, Sp.P', position: 'Dokter Spesialis Paru' },
  { name: 'dr. Muhammad Maulana, Sp. M', position: 'Dokter Spesialis Mata' },
  { name: 'dr. Arif Ismail. Sp.B.S', position: 'Dokter Spesialis Bedah Saraf' },
  { name: 'dr. Lilianty Fauzi, Sp. M', position: 'Dokter Spesialis Mata' },
  { name: 'dr. Dina Evyana, Sp.Dv', position: 'Dokter Spesialis Dermatologi dan Venereologi' },
  { name: 'dr. Andre Nugraha Nurman, Sp. JP', position: 'Dokter Spesialis Penyakit Jantung Dan Pembuluh Darah' },
  { name: 'dr. Resti Ramdani, Sp.T.H.T.B.K.L', position: 'Dokter Spesialis Ilmu Kesehatan THT.BKL' },
  { name: 'dr.Tanti Adelia Kesuma, Sp.PK', position: 'Dokter Spesialis Pantologi Klinik' },
  { name: 'dr. Satria Aji Prasidha, Sp.KG', position: 'Dokter Spesialis Konservasi Gigi' },
  { name: 'drg. Siti Agi Nayanggisya', position: 'Dokter Gigi' },
  { name: 'drg. Kharisma Galuh', position: 'Dokter Gigi' },
  { name: 'drg. Nevilia Putri Riandani', position: 'Dokter Gigi' },
];

// This remains a Server Component
export default function DoctorsPage() {
  // Doctor data is defined here (or fetched in a real app)
  // The filtering and display logic is delegated to the Client Component

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-green-900">
        Cari Dokter Kami
      </h1>

      {/* Render the Client Component responsible for filtering and display */}
      <DoctorFilterList doctors={realDoctors} />

    </div>
  );
}
