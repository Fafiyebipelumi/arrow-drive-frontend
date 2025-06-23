import React from "react";
import Image from "next/image";
import DestinationCard from "../DestinationCard";

const HowItWorks = () => {
  return (
    <section className="bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
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
          {/* <div className="rounded-lg overflow-hidden">
            <Image
              src="/about1.jpg"
              alt="Woman reading map"
              width={300}
              height={500}
              className="object-cover w-full h-full"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
