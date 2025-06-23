'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Navbar from '../Navbar';
import Hero from '../Hero';

const Homepage = () => {

  return (
    <section className="relative h-screen w-full bg-black text-white overflow-hidden scroll-smooth">
      {/* Background Image */}
      <Image
        src="/hero-image.jpg"
        alt="Driving background"
        layout="fill"
        objectFit="cover"
        className="opacity-70"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      <Navbar />

      <Hero />
    </section>
  );
};

export default Homepage;
