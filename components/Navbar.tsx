'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';


const Navbar = () => {

      const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);
    
      const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Features', href: '/features' },
        { name: 'How It Works', href: '/how-it-works' },
      ];

  return (
      <nav className="absolute top-0 left-0 w-full z-30 flex justify-between items-center px-6 md:px-16 py-4 text-white">
          {/* ================= NAVBAR ================= */}
        {/* Logo */}
        <Link href="/" className="font-semibold text-lg px-3 py-1">
          <Image src='/Arrow-drive.png' alt='logo' width={90} height={90} />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-6 p-4 backdrop-blur-lg rounded-full">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm hover:text-green-400 transition ${
                pathname === link.href ? 'font-semibold underline underline-offset-4' : ''
              }`}
            >
              {link.name.toUpperCase()}
            </Link>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link href="/signin" className="text-sm px-4 py-1 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/20">
            Sign in
          </Link>
          <Link href="/signup" className="text-sm px-4 py-1 rounded-full bg-white text-black hover:bg-gray-100 font-medium transition">
            Sign up free
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button onClick={() => setIsOpen(true)} className="md:hidden z-50">
          <Menu size={28} />
          {/* <p className='text-white text-3xl'>MENU</p> */}
        </button>

        {/* Mobile Slide Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-black z-50 p-6 transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-bold"></span>
            <button onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm ${
                  pathname === link.href ? 'text-green-400 font-semibold' : 'text-white'
                } hover:text-green-400`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-6 flex flex-col space-y-3">
            <Link href="/signin" onClick={() => setIsOpen(false)} className="text-sm text-white border border-white px-4 py-2 rounded-full text-center">
              Sign in
            </Link>
            <Link href="/signup" onClick={() => setIsOpen(false)} className="text-sm bg-white text-black px-4 py-2 rounded-full text-center font-medium">
              Sign up free
            </Link>
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </nav>
  )
}

export default Navbar;

// backdrop-blur-md