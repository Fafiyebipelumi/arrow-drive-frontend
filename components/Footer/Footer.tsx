import Image from "next/image";

export default function HeroWithFooter() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#003A23] text-white">
      {/* Hero Section */}
      <div className="relative w-full h-[420px] rounded-b-2xl overflow-hidden">
        <Image
          src="/hero-image.jpg"
          alt="Tesla Drive"
          layout="fill"
          objectFit="cover"
          className="rounded-b-2xl"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Plan better journeys with zero <br /> guesswork
          </h1>
          <div className="mt-6 flex items-center bg-white/20 backdrop-blur-md rounded-full px-2 py-1 w-full max-w-md">
            <input
              type="email"
              placeholder="Your email address..."
              className="flex-grow bg-transparent text-white placeholder:text-white/80 px-4 py-2 outline-none"
            />
            <button className="bg-white text-black font-semibold px-4 py-2 rounded-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full px-6 py-10 bg-[#003A23] text-sm">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-6 text-white">
          {/* Left Section */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-green-400">ArrowDrive</h2>
            <p className="mt-2 leading-relaxed text-[12px]">
              Changing the game in transportation with real-time updates on routes,
              using developed mapping technologies, shaping the future of transportation.
            </p>
            <p className="mt-4 text-xs">&copy;Copyright 2025 Arrow Drive</p>
          </div>

          {/* Footer Links */}
          <div>
            <h3 className="font-semibold mb-2">COMPANY</h3>
            <ul className="space-y-1">
              <li>Features</li>
              <li>Pricing</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">RESOURCES</h3>
            <ul className="space-y-1">
              <li>Blog</li>
              <li>Customer Info</li>
              <li>Legal</li>
              <li>Payments</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">CAREER</h3>
            <ul className="space-y-1">
              <li>Features</li>
              <li>Pricing</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">HELP</h3>
            <ul className="space-y-1">
              <li>FAQ</li>
              <li>Help Center</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
