import React from "react";

const Hero = () => {
  return (
    <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
      <h1 className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
        “<span className="text-white">DRIVE SMARTER, GO FARTHER,</span>{" "}
        <span className="text-green-400">NAVIGATE</span>
        <span className="text-white"> WITH CONFIDENCE</span>”
      </h1>

      <p className="mt-6 text-sm md:text-base text-gray-200 max-w-xl">
        Empowering every journey with real-time traffic updates, hazard alerts,
        and essential stop recommendations, ensuring a smarter, safer driving
        experience.
      </p>

      <button className="mt-8 px-6 py-3 bg-green-400 hover:bg-green-500 text-black font-bold rounded-full transition cursor-pointer">
        Start Driving
      </button>
    </div>
  );
};

export default Hero;
