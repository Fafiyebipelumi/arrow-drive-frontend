import React from "react";
import Image from "next/image";
import DestinationCard from "../DestinationCard";

const HowItWorks = () => {
  return (
    <>
      <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* How it works label */}
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <span className="px-4 py-1 text-xs font-medium rounded-full bg-white border border-gray-300 text-black">
              How It Works
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Want to know
              <br />
              how Arrow Drive
              <span className="inline-block bg-green-700 w-8 sm:w-10 md:w-12 lg:w-14 h-2 sm:h-3 md:h-4 rounded-full align-middle mx-1"></span>
              <br />
              <span className="inline-block bg-green-700 w-8 sm:w-10 md:w-12 lg:w-14 h-2 sm:h-3 md:h-4 rounded-full align-middle mx-1"></span>
              works?
            </h2>
          </div>

          {/* <div className="md:flex items-center justify-center sm:flex-col md:gap-8" mt-10 md:mt-0 md:grid grid-cols-1 sm:grid-cols-3 md:gap-4> */}
          <div className="md:flex-row flex flex-col md:items-center md:justify-around gap-8">
            <DestinationCard
              imageSrc="/location-on-phone.jpg"
              imageAlt="Phone"
              label="Enter Destination"
            />
            <DestinationCard
              imageSrc="/map-on-phone.jpg"
              imageAlt="Phone"
              label="Get Smart Route Suggestions"
            />
            <DestinationCard
              imageSrc="/man-in-a-car.jpg"
              imageAlt="man-inside-a-car"
              label="Drive with confidence"
            />
          </div>
          <div className="flex items-center justify-center">
            <button className="mt-8 px-6 py-3 bg-green-400 hover:bg-green-500 text-black font-bold rounded-full transition cursor-pointer">
              Start Driving
            </button>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 max-w-7xl mx-auto  sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-3 md:gap-12 lg:gap-16 xl:gap-20 items-center mx-10">
          {/* Left image */}
          <div className="relative order-1 lg:order-1">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl mt-12">
              <Image
                src="/map-duration.jpg"
                alt=""
                width={600}
                height={400}
                className="w-full h-40 sm:h-64 md:h-80 lg:h-96 object-cover"
                priority
              />
            </div>
          </div>
          {/* Right content */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base md:text-lg text-black font-bold leading-relaxed">
                Changing The Game In Transportation With Real-time Update on
                Routes, Using Developed Mapping Technologies, Shaping The Future
                Of Transportation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
