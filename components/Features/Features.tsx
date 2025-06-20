import React from 'react';
import Image from 'next/image';

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
              Navigate with confidence<br />
              using Arrow Drive
              <span className="inline-block bg-green-700 w-8 sm:w-10 md:w-12 lg:w-14 h-2 sm:h-3 md:h-4 rounded-full align-middle mx-1"></span><br/>
              <span className="inline-block bg-green-700 w-8 sm:w-10 md:w-12 lg:w-14 h-2 sm:h-3 md:h-4 rounded-full align-middle mx-1"></span>features
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
                placed construction, filled with bends, or blocked. 
                Arrow Drive gives you live visibility so you're never caught 
                off guard.
              </p>

              <div className="pt-2 sm:pt-4">
                <button className="inline-flex items-center bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  Get Started
                  <svg 
                    className="ml-2 w-3 h-3 sm:w-4 sm:h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative order-1 lg:order-2">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl">
              <Image
                src="/road-closed-sign.jpg" // You'll need to add this image to your public folder
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
  )
}

export default Features;