import React from "react";
import Image from "next/image";

const Features: React.FC = () => {
  return (
    <section className="bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Features label */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <span className="px-4 py-1 text-xs font-medium rounded-full bg-white border border-gray-300 text-black">
            Features
          </span>
          {/* <h2 className="mt-4 text-black text-4xl md:text-6xl text-center font-bold leading-tight">
            Navigate with confidence{' '}<br /> using Arrow Drive
            <span className="inline-block bg-green-700 w-14 h-4 rounded-full align-middle mx-1"></span><br/>
            <span className="inline-block bg-green-700 w-14 h-4 rounded-full align-middle mx-1"></span>features
            </h2> */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
            Navigate with confidence
            <br />
            using Arrow Drive
            <span className="inline-block bg-green-700 w-8 sm:w-10 md:w-12 lg:w-14 h-2 sm:h-3 md:h-4 rounded-full align-middle mx-1"></span>
            <br />
            <span className="inline-block bg-green-700 w-8 sm:w-10 md:w-12 lg:w-14 h-2 sm:h-3 md:h-4 rounded-full align-middle mx-1"></span>
            features
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left content */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-green-700">
                Know What Lies Ahead
              </h3>

              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
                Get real-time updates on your route – whether it's regularly
                placed construction, filled with bends, or blocked. Arrow Drive
                gives you live visibility so you're never caught off guard.
              </p>
            </div>
          </div>
          {/* Right image */}
          <div className="relative order-1 lg:order-2">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl">
              <Image
                src="/road-closed.jpg"
                alt="Road closed construction sign on a highway"
                width={600}
                height={400}
                className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-3 md:gap-12 lg:gap-16 xl:gap-20 items-center mt-16">
          {/* Left image */}
          <div className="relative order-1 lg:order-1">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl">
              <Image
                src="/map-duration.jpg"
                alt=""
                width={600}
                height={400}
                className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
                priority
              />
            </div>
          </div>
          {/* Right content */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-green-700">
                Smarter routes, Every time
              </h3>

              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
                Arrow Drive doesn&apos;t just show you how to get there, it
                shows you the best way. With built-in-traffic analysis,
                potential blockages, and alternate routes, you save time and
                avoid delay.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center mt-16">
          {/* Left content */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-green-700">
                Advanced Hazard Detection
              </h3>

              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
                From potholes to rainstorms, our system detects and alerts you
                to hazards before you reach them – giving you time to slow down,
                reroute, or prepare accordingly.
              </p>
            </div>
          </div>
          {/* Right image */}
          <div className="relative order-1 lg:order-2">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl">
              <Image
                src="/pothole.jpg"
                alt="Road closed construction sign on a highway"
                width={600}
                height={400}
                className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-3 md:gap-12 lg:gap-16 xl:gap-20 items-center mt-16">
          {/* Left image */}
          <div className="relative order-1 lg:order-1">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl">
              <Image
                src="/filling-car.jpg"
                alt=""
                width={600}
                height={400}
                className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
                priority
              />
            </div>
          </div>
          {/* Right content */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-green-700">
                Know What&apos;s Nearby
              </h3>

              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
                Need a break? Arrow Drive shows nearby essentials like gas
                stations, food stops, hotels, and even mechanics – all based on
                your real-time location and direction.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center mt-16">
          {/* Left content */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-green-700">
                Your Intelligent Driving Assistant
              </h3>

              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
                Arrow Drive not only tracks traffic conditions – it also offers
                speed recommendations when road conditions shift, ensuring a
                smoother, safer driving experience from start to finish.
              </p>
            </div>
          </div>
          {/* Right image */}
          <div className="relative order-1 lg:order-2">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl">
              <Image
                src="/ai.jpg"
                alt="Road closed construction sign on a highway"
                width={600}
                height={400}
                className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
