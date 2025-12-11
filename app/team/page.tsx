'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from '../components/sections/NavBar';
import Footer from '../components/sections/Footer';

function TeamPage() {
  return (
    <>
      <NavBar />
      <section
        id="team"
        className="w-full bg-[#252525] py-12 px-4 sm:py-20 sm:px-8 fade-in-up delay-1"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-start mb-6">
            <Link
              href="/"
              aria-label="Return to home page"
              className="bg-[#1e1e1e] border border-[#333] rounded-full px-5 py-3 shadow-md hover:bg-[#232323] transition-colors duration-300 flex items-center gap-3 group"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#facb15"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:-translate-x-1 transition-transform duration-300"
                style={{ transform: 'rotate(180deg)' }}
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
              <span className="text-[#facb15] text-base sm:text-lg font-semibold group-hover:text-white transition-colors duration-300">
                Return Home
              </span>
            </Link>
          </div>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-20">
            <h2 className="text-[#facb15] text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
              Meet the Team
            </h2>
            <p className="text-[#d1d1d1] text-base sm:text-lg leading-loose">
              Acqron is powered by a passionate team of founders, marketers, and engineers dedicated
              to building products that matter. Get to know our leadership and early team members.
            </p>
          </div>
          {/* Pyramid Team Structure */}
          <div className="flex flex-col items-center max-w-5xl mx-auto">
            {/* Top: Ron */}
            <div className="mb-10">
              <div className="text-center flex flex-col items-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 mb-4 rounded-full overflow-hidden shadow-lg flex items-center justify-center bg-linear-to-br from-[#e54e3f] to-[#facb15]">
                  <Image
                    src="/images/ronidpic.png"
                    alt="Ron Paragoso"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="text-white text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                  Ron Paragoso
                </div>
                <div className="text-[#facb15] text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
                  FOUNDER & CEO
                </div>
                <p className="text-[#b1b1b1] text-xs sm:text-sm leading-relaxed">
                  Visionary leader driving innovation, product development, and business strategy
                  Acqron.
                </p>
              </div>
            </div>
            {/* Middle: Stalingrad, Jepoy */}
            <div className="flex flex-row justify-center gap-10 mb-10">
              {/* Stalingrad Dollosa */}
              <div className="text-center flex flex-col items-center">
                <div className="w-32 h-32 sm:w-36 sm:h-36 mb-4 rounded-full overflow-hidden shadow-lg flex items-center justify-center bg-linear-to-br from-[#facb15] to-[#e54e3f]">
                  <Image
                    src="/images/stalingradpic.jpg"
                    alt="Stalingrad Dollosa"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="text-white text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                  Stalingrad Dollosa
                </div>
                <div className="text-[#facb15] text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
                  Chief Marketing Officer
                </div>
                <p className="text-[#b1b1b1] text-xs sm:text-sm leading-relaxed">
                  Marketing strategist with expertise in brand growth, digital campaigns, and
                  startup market entry.
                </p>
              </div>
              {/* Jepoy */}
              <div className="text-center flex flex-col items-center">
                <div className="w-32 h-32 sm:w-36 sm:h-36 mb-4 rounded-full overflow-hidden shadow-lg flex items-center justify-center bg-linear-to-br from-[#e54e3f] to-[#1e1e1e]">
                  <Image
                    src="/images/temp_profile.jpg"
                    alt="Jepoy"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="text-white text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                  Jepoy
                </div>
                <div className="text-[#facb15] text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
                  Full-stack Developer / AI Engineer
                </div>
                <p className="text-[#b1b1b1] text-xs sm:text-sm leading-relaxed">
                  Expert in building scalable web applications and integrating AI solutions to
                  enhance user experience and business intelligence.
                </p>
              </div>
            </div>
            {/* Kent Jordan */}
            <div className="max-w-5xl mx-auto mt-16">
              <h3 className="text-[#facb15] text-2xl sm:text-3xl font-bold text-center mb-8">
                Wisker Division
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
                {/* Kent Jordan */}
                <div className="text-center flex flex-col items-center">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 mb-4 rounded-full overflow-hidden shadow-lg flex items-center justify-center bg-linear-to-br from-[#facb15] to-[#e54e3f]">
                    <Image
                      src="/images/male_placeholder.jpg"
                      alt="Kent Jordan"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-white text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                    Kent Jordan
                  </div>
                  <div className="text-[#facb15] text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
                    AI Engineer
                  </div>
                  <p className="text-[#b1b1b1] text-xs sm:text-sm leading-relaxed">
                    Full-stack developer and AI engineer skilled in building intelligent, scalable
                    web applications and automation solutions for innovative products.
                  </p>
                </div>
                {/* Joshua Vidal */}
                <div className="text-center flex flex-col items-center">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 mb-4 rounded-full overflow-hidden shadow-lg flex items-center justify-center bg-linear-to-br from-[#e54e3f] to-[#facb15]">
                    <Image
                      src="/images/male_placeholder.jpg"
                      alt="Joshua Vidal"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-white text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                    Joshua Vidal
                  </div>
                  <div className="text-[#facb15] text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
                    Marketer & UI/UX
                  </div>
                  <p className="text-[#b1b1b1] text-xs sm:text-sm leading-relaxed">
                    UI/UX designer and marketer passionate about crafting intuitive user experiences
                    and driving brand engagement through creative digital strategies.
                  </p>
                </div>
                {/* Jewel Tolentino */}
                <div className="text-center flex flex-col items-center">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 mb-4 rounded-full overflow-hidden shadow-lg flex items-center justify-center bg-linear-to-br from-[#facb15] to-[#e54e3f]">
                    <Image
                      src="/images/female_placeholder.jpg"
                      alt="Jewel Tolentino"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-white text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                    Jewel Tolentino
                  </div>
                  <div className="text-[#facb15] text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
                    Marketer
                  </div>
                  <p className="text-[#b1b1b1] text-xs sm:text-sm leading-relaxed">
                    Marketing strategist and brand builder. Jewel drives Acqron&apos;s growth and
                    outreach.
                  </p>
                </div>
                {/* Don Jun Portarcos */}
                <div className="text-center flex flex-col items-center">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 mb-4 rounded-full overflow-hidden shadow-lg flex items-center justify-center bg-linear-to-br from-[#facb15] to-[#e54e3f]">
                    <Image
                      src="/images/male_placeholder.jpg"
                      alt="Don Jun Portarcos"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-white text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                    Don Jun Portarcos
                  </div>
                  <div className="text-[#facb15] text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
                    Marketer
                  </div>
                  <p className="text-[#b1b1b1] text-xs sm:text-sm leading-relaxed">
                    Marketing specialist focused on digital strategy, brand growth, and creative
                    outreach for Acqron&apos;s products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default TeamPage;
