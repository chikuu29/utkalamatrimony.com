import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hiddena bg-[#f8eedf]">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 py-30 md:py-30">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
          <div className=" rounded-[50] shadow-lg">
            <Image
              src="/couple1.png"
              alt="Couple"
              width={500}
              height={500}
              className="object-contain rounded-[30]"
              priority
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-5">
          <h1 className="text-4xl md:text-5xl font-bold text-[#444] leading-tight">
            Start Your <span className="text-[#b69a60]">Journey</span>
          </h1>
          <p className="text-gray-600 text-lg mt-4">
            Find your perfect partner. Join{" "}
            <span className="font-semibold text-[#b69a60]">
              Utkal Matrimony
            </span>{" "}
            to meet singles who share your values and goals.
          </p>
          <Link
            href="/register"
            className="inline-block bg-[#b69a60] text-white px-6 py-3 mt-6 rounded-md shadow-md hover:bg-[#a18453] transition duration-300"
          >
            Find Your Match
          </Link>
        </div>
      </div>

      {/* Search Box */}
      <div className="absolute bottom-[-30] left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] bg-[#fefbf3] shadow-lg rounded-[10] px-6 py-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <select className="flex-1 border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-1 focus:ring-[#b69a60]">
            <option>I am</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <select className="flex-1 border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-1 focus:ring-[#b69a60]">
            <option>Looking for</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <button className="flex-1 bg-[#b69a60] text-white px-6 py-3 rounded-md hover:bg-[#a18453] transition duration-300 w-full">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
