import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section id="home" className="w-full bg-linear-to-br from-[#1e1e1e] to-[#2a2a2a] py-12 sm:py-20 px-4 sm:px-8 flex items-center min-h-[70vh]">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <div className="flex flex-col items-start justify-center text-left">
          <span className="text-[#facb15] text-xs sm:text-sm font-semibold tracking-wide mb-4">Software Development for Startups</span>
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 sm:mb-8 max-w-xl">
            Building Products Founders Bet Their Future On
          </h1>
          <p className="text-[#d1d1d1] text-base sm:text-xl leading-relaxed mb-8 sm:mb-10 max-w-lg">
            Acqron is an emerging software development company founded specifically for idea-stage startups! We turn your vision into powerful, scalable software solutions.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#e54e3f] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition duration-300 hover:bg-[#c43e2f] hover:scale-105 shadow-lg"
          >
            Get Started
          </a>
        </div>
        {/* Right: Image */}
        <div className="flex justify-center items-center w-full">
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
            alt="Software development illustration"
            width={600}
            height={400}
            className="rounded-xl shadow-2xl w-full h-auto max-h-[400px] object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;