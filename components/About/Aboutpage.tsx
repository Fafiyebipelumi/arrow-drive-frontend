'use client';

import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Aboutpage() {
  return (
    <section className="bg-[#eef5f0] py-16 px-4 md:px-20 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="px-4 py-1 text-xs font-medium rounded-full bg-white border border-gray-300 text-black">
            About us
          </span>
          <h2 className="mt-4 text-black text-4xl md:text-6xl font-bold leading-tight">
            Want to know{' '}<br />
            <span className="inline-block bg-green-700 w-14 h-4 rounded-full align-middle mx-1"></span>
            about us?
          </h2>
        </div>

        <div className="md:flex gap-8 items-start">
          <div className="md:w-1/2">
            <p className="text-lg space-x-5 mr-15">
              At Arrow Drive, we&apos;re redefining what it means to travel smart.
              Our platform acts as your{' '}
              <span
                className="text-green-700 font-medium hover:text-green-900"
              >
                intelligent roadside companion
              </span>
              —providing real-time alerts for hazards like traffic, potholes,
              and severe weather, while guiding you to nearby essentials like
              gas stations and restaurants.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <button className="p-2 rounded-full bg-green-700 text-white hover:bg-green-800">
                <ArrowLeft size={18} />
              </button>
              <button className="p-2 rounded-full bg-green-700 text-white hover:bg-green-800">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="hidden md:w-1/2 mt-10 md:mt-0 md:grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/woman-with-map.jpg"
                alt="Woman reading map"
                width={300}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/rainy-windscreen.jpg"
                alt="Wet windscreen"
                width={300}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/woman-with-map.jpg"
                alt="Driving in rain"
                width={300}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
