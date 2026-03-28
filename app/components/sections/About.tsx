import React from 'react';
import { FaSearch, FaRegEdit, FaLaptopCode, FaRocket } from 'react-icons/fa';
import Image from 'next/image';

function About() {
  return (
    <section
      id="about"
      className="w-full fade-in-up delay-1 bg-[#252525] py-12 px-4 sm:py-20 sm:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Our Story Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <h2 className="text-[#facb15] text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6 sm:mb-8">
            We understand business, not just code
          </h2>
          <p className="text-[#d1d1d1] text-base sm:text-xl leading-loose">
            Acqron was born from the observation that businesses often invest in technology that doesn&apos;t deliver results. We bring together developers, designers, and business strategists to implement systems that work, train teams, and ensure adoption.
          </p>
          <p className="text-[#d1d1d1] text-base sm:text-xl leading-loose mt-4">
            With decades of combined experience, we provide the expertise and execution businesses need to stop chaos and scale efficiently.
          </p>
        </div>
        {/* Mission & Vision Section */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-8 mb-12 sm:mb-20">
          <div className="flex-1 bg-[#1e1e1e] rounded-xl p-6 shadow-md text-center border border-[#333]">
            <h2 className="text-[#facb15] text-2xl sm:text-3xl font-bold mb-3">Our Mission</h2>
            <p className="text-[#d1d1d1] text-base sm:text-lg leading-relaxed">
              To listen, understand, and respond to the world’s needs by building innovative
              software that makes life better.
            </p>
          </div>
          <div className="flex-1 bg-[#1e1e1e] rounded-xl p-6 shadow-md text-center border border-[#333]">
            <h2 className="text-[#e54e3f] text-2xl sm:text-3xl font-bold mb-3">Our Vision</h2>
            <p className="text-[#d1d1d1] text-base sm:text-lg leading-relaxed">
              To improve people’s lives by identifying and solving the problems that truly matter,
              making everyday experiences more comfortable and meaningful.
            </p>
          </div>
        </div>
        {/* Meet the Founder & Early Team */}
        <div className="mb-16">
          <h3 className="text-white text-3xl sm:text-5xl font-extrabold text-center mb-10 sm:mb-16">
            Meet the Founder & Early Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 max-w-5xl mx-auto">
            {/* Founder */}
            <div className="text-center flex flex-col items-center">
              <div className="w-36 h-36 sm:w-44 sm:h-44 mx-auto mb-5 sm:mb-6 rounded-full overflow-hidden shadow-xl flex items-center justify-center bg-linear-to-br from-[#e54e3f] to-[#facb15]">
                <Image
                  src="/images/ronidpic.png"
                  alt="Ron Paragoso"
                  width={176}
                  height={176}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="text-white text-xl sm:text-2xl font-bold mb-2">
                Ron Paragoso
              </div>
              <div className="text-[#facb15] text-sm sm:text-base font-semibold mb-3 sm:mb-4">
                FOUNDER & CEO
              </div>
              <p className="text-[#b1b1b1] text-sm sm:text-base leading-relaxed">
                Visionary leader driving innovation, product development, and business strategy for
                Acqron.
              </p>
            </div>
            {/* Team Member 1 */}
            <div className="text-center flex flex-col items-center">
              <div className="w-36 h-36 sm:w-44 sm:h-44 mx-auto mb-5 sm:mb-6 rounded-full overflow-hidden shadow-xl flex items-center justify-center bg-linear-to-br from-[#facb15] to-[#e54e3f]">
                <Image
                  src="/images/stalingradpic.jpg"
                  alt="Stalingrad Dollosa"
                  width={176}
                  height={176}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="text-white text-xl sm:text-2xl font-bold mb-2">
                Stalingrad Dollosa
              </div>
              <div className="text-[#facb15] text-sm sm:text-base font-semibold mb-3 sm:mb-4">
                Chief Marketing Officer
              </div>
              <p className="text-[#b1b1b1] text-sm sm:text-base leading-relaxed">
                Marketing strategist with expertise in brand growth, digital campaigns, and startup
                market entry.
              </p>
            </div>
            {/* Team Member 2 */}
            <a
              href="/team"
              aria-label="See more of the team"
              className="group w-full flex flex-col items-center justify-center text-center bg-[#1e1e1e] border-2 border-[#facb15] rounded-xl shadow-xl p-10 transition-all duration-300 hover:scale-105 hover:bg-[#252525] hover:border-[#e54e3f] cursor-pointer min-h-[280px]"
            >
              <span className="text-[#facb15] text-xl sm:text-2xl font-bold group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                Meet the Full Team
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </span>
            </a>
          </div>
        </div>
        {/* Our Process Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-[#facb15] text-3xl sm:text-5xl font-extrabold text-center mb-10 sm:mb-12">
            How We Work
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-[#1e1e1e] rounded-xl p-6 shadow-md text-center border border-[#333] flex flex-col items-center">
              <div className="text-3xl mb-2 text-[#facb15]">
                <FaSearch />
              </div>
              <h4 className="text-white text-lg font-semibold mb-2">Discovery Call</h4>
              <p className="text-[#b1b1b1] text-sm">
                Understand your vision and biggest operational challenges.
              </p>
            </div>
            <div className="bg-[#1e1e1e] rounded-xl p-6 shadow-md text-center border border-[#333] flex flex-col items-center">
              <div className="text-3xl mb-2 text-[#facb15]">
                <FaRegEdit />
              </div>
              <h4 className="text-white text-lg font-semibold mb-2">Define</h4>
              <p className="text-[#b1b1b1] text-sm">
                Clarify problems and design the right solution.
              </p>
            </div>
            <div className="bg-[#1e1e1e] rounded-xl p-6 shadow-md text-center border border-[#333] flex flex-col items-center">
              <div className="text-3xl mb-2 text-[#facb15]">
                <FaLaptopCode />
              </div>
              <h4 className="text-white text-lg font-semibold mb-2">Develop</h4>
              <p className="text-[#b1b1b1] text-sm">
                Implement, iterate, and test systems with your team.
              </p>
            </div>
            <div className="bg-[#1e1e1e] rounded-xl p-6 shadow-md text-center border border-[#333] flex flex-col items-center">
              <div className="text-3xl mb-2 text-[#facb15]">
                <FaRocket />
              </div>
              <h4 className="text-white text-lg font-semibold mb-2">Deliver & Optimize</h4>
              <p className="text-[#b1b1b1] text-sm">
                Ensure adoption, track ROI, and plan for growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
