'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Clock } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/about", label: "Tentang Kami" },
    { href: "/services", label: "Layanan" },
    { href: "/doctors", label: "Dokter" },
    { href: "/schedule", label: "Jadwal Dokter" },
    { href: "/facilities", label: "Fasilitas" },
    { href: "/contact", label: "Kontak" },
    // { href: "/posts", label: "Berita" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (href: string) => {
    return href === "/" ? pathname === href : pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const topBarPhone = "(0721) 5617799";
  const topBarHours = "IGD 24 Jam";

  return (
    <div className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-sm'}`}>
      <div className={`bg-green-900 text-green-100 text-xs hidden md:block transition-all duration-300 ${isScrolled ? 'py-0 h-0 opacity-0 overflow-hidden' : 'py-1.5 h-auto opacity-100'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone size={14} />
              {topBarPhone} (Informasi & IGD)
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {topBarHours}
            </span>
          </div>
        </div>
      </div>

      <header className={`bg-white text-gray-800 border-b border-gray-200 transition-all duration-300 ${isScrolled ? 'shadow-none' : 'shadow-sm'}`}>
        <nav className={`container mx-auto px-4 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}>
          {/* Logo - Updated with Image component */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Rumah_Sakit_Airan_Raya.png"
              alt="RS Airan Raya"
              width={180}
              height={50}
              className={`transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'} w-auto`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`pb-1 border-b-2 transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'text-green-700 border-amber-500 font-semibold'
                      : 'text-gray-600 border-transparent hover:text-green-700 hover:border-amber-400'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              className="text-green-800 hover:text-green-600 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-200 py-4">
            <ul className="flex flex-col items-center space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-lg ${
                      isActive(link.href)
                        ? 'text-green-700 font-semibold'
                        : 'text-gray-700 hover:text-green-700'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
