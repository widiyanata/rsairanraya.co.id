'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Clock, Search, ChevronDown, MapPin, Mail, Facebook, Instagram, Youtube, Globe, Stethoscope } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Beranda", icon: null },
    { href: "/about", label: "Tentang Kami", icon: null },
    { 
      href: "/services", 
      label: "Layanan", 
      icon: ChevronDown,
      hasDropdown: true,
      dropdownItems: [
        { href: "/services/rirs", label: "RIRS" },
        { href: "/services/vtrex", label: "VTrex" },
        { href: "/services/igd", label: "IGD 24 Jam" },
      ]
    },
    { 
      href: "/doctors", 
      label: "Dokter", 
      icon: ChevronDown,
      hasDropdown: true,
      dropdownItems: [
        { href: "/doctors/spesialis-dalam", label: "Spesialis Dalam" },
        { href: "/doctors/spesialis-anak", label: "Spesialis Anak" },
        { href: "/doctors/bedah-saraf", label: "Bedah Saraf" },
      ]
    },
    { href: "/schedule", label: "Jadwal Dokter", icon: null },
    { href: "/facilities", label: "Fasilitas", icon: null },
    { href: "/contact", label: "Kontak", icon: null },
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

  // Enhanced contact information
  const contactInfo = {
    phone: "(0721) 5617799",
    emergency: "+62 895-3513-57840",
    email: "humas.rsairanraya@gmail.com",
    address: "Lampung Selatan"
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <div className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled ? 'shadow-2xl' : 'shadow-lg'}`}>
      {/* Enhanced Top Bar */}
      <div className={`bg-gradient-to-r from-green-900 via-green-800 to-green-900 text-green-100 text-xs hidden lg:block transition-all duration-500 ${isScrolled ? 'py-0 h-0 opacity-0 overflow-hidden' : 'py-2 h-auto opacity-100'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Left Side - Contact Info */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-green-300" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-green-300" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-green-300" />
                <span>{contactInfo.address}</span>
              </div>
            </div>

            {/* Right Side - Emergency & Social */}
            <div className="flex items-center gap-6">
              {/* Emergency Contact with Animation */}
              <div className="flex items-center gap-2 bg-red-600 px-3 py-1 rounded-full animate-pulse">
                <Stethoscope size={14} className="text-white" />
                <span className="text-white font-semibold">IGD 24 Jam: {contactInfo.emergency}</span>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="text-green-300 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>

              {/* Language Selector */}
              <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                <Globe size={14} />
                <span>ID</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Main Navigation */}
      <header className={`bg-white/95 backdrop-blur-sm text-gray-800 border-b border-gray-200 transition-all duration-300 ${isScrolled ? 'shadow-xl' : 'shadow-lg'}`}>
        <nav className={`container mx-auto px-4 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4'}`}>
          {/* Enhanced Logo Section */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <Image
                src="/Rumah_Sakit_Airan_Raya.png"
                alt="RS Airan Raya"
                width={200}
                height={60}
                className={`transition-all duration-300 ${isScrolled ? 'h-10' : 'h-14'} w-auto drop-shadow-md group-hover:scale-105`}
                priority
              />
              {/* Tagline */}
              {!isScrolled && (
                <div className="absolute -bottom-1 left-0 text-xs text-gray-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Pelayanan Kesehatan Terpercaya
                </div>
              )}
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <li key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 py-2 px-3 rounded-lg transition-all duration-300 ${
                      isActive(link.href)
                        ? 'text-green-700 bg-green-50 font-semibold shadow-sm'
                        : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                    }`}
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                    )}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {link.hasDropdown && link.dropdownItems && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="py-2">
                        {link.dropdownItems.map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            className="block px-4 py-3 text-gray-700 hover:text-green-700 hover:bg-green-50 transition-colors duration-200 flex items-center gap-3"
                          >
                            <div className="w-2 h-2 bg-green-500 rounded-full opacity-60"></div>
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Search & CTA Section */}
            <div className="flex items-center gap-4">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-all duration-200"
                aria-label="Search"
              >
                <Search size={20} />
              </button>

              {/* Emergency CTA Button */}
              <a
                href={`tel:${contactInfo.emergency}`}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform"
              >
                <Phone size={16} />
                <span className="hidden xl:inline">Darurat</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Mobile Emergency Button */}
            <a
              href={`tel:${contactInfo.emergency}`}
              className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors duration-200"
              aria-label="Emergency Call"
            >
              <Phone size={18} />
            </a>
            
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              className="text-green-800 hover:text-green-600 focus:outline-none p-2 hover:bg-green-50 rounded-lg transition-all duration-200"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Enhanced Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>
            
            {/* Slide-in Menu */}
            <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-green-50">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/Rumah_Sakit_Airan_Raya.png"
                      alt="RS Airan Raya"
                      width={120}
                      height={40}
                      className="h-8 w-auto"
                    />
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 overflow-y-auto p-6">
                  <nav className="space-y-2">
                    {navLinks.map((link) => (
                      <div key={link.href}>
                        <Link
                          href={link.href}
                          className={`flex items-center justify-between w-full p-4 rounded-xl transition-all duration-200 ${
                            isActive(link.href)
                              ? 'text-green-700 bg-green-100 font-semibold'
                              : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                          }`}
                          onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                        >
                          <span className="font-medium">{link.label}</span>
                          {link.hasDropdown && <ChevronDown size={20} />}
                        </Link>
                        
                        {/* Mobile Dropdown Items */}
                        {link.hasDropdown && link.dropdownItems && (
                          <div className="ml-4 mt-2 space-y-1">
                            {link.dropdownItems.map((item, index) => (
                              <Link
                                key={index}
                                href={item.href}
                                className="block p-3 text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors flex items-center gap-3"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>

                  {/* Search Section */}
                  <div className="mt-8 p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                      <Search size={20} className="text-gray-400" />
                      <input
                        type="text"
                        placeholder="Cari dokter, layanan..."
                        className="flex-1 outline-none text-gray-700"
                      />
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-200 bg-gray-50">
                  {/* Emergency Contact */}
                  <div className="bg-red-600 text-white p-4 rounded-xl mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Stethoscope size={20} />
                      <span className="font-semibold">Gawat Darurat</span>
                    </div>
                    <a 
                      href={`tel:${contactInfo.emergency}`}
                      className="text-lg font-bold hover:underline"
                    >
                      {contactInfo.emergency}
                    </a>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Phone size={14} />
                      <span>{contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail size={14} />
                      <span className="text-xs">{contactInfo.email}</span>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-gray-200">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Search Overlay */}
        {isSearchOpen && (
          <>
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setIsSearchOpen(false)}
            ></div>
            <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-full max-w-2xl mx-4 bg-white rounded-2xl shadow-2xl z-50 p-6">
              <div className="flex items-center gap-4 mb-4">
                <Search size={24} className="text-green-600" />
                <input
                  type="text"
                  placeholder="Cari dokter, layanan, artikel..."
                  className="flex-1 text-lg outline-none"
                  autoFocus
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              {/* Quick Search Suggestions */}
              <div className="space-y-2">
                <div className="text-sm text-gray-500 font-medium mb-3">Pencarian Populer:</div>
                <div className="flex flex-wrap gap-2">
                  {['Dr. Spesialis Anak', 'Jadwal IGD', 'RIRS', 'Dokter Mata', 'VTrex'].map((term, index) => (
                    <button
                      key={index}
                      className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full hover:bg-green-100 transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </header>
    </div>
  );
};

export default Header;
