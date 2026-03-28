"use client";

import React from 'react';

function Problem() {
  return (
    <section
      id="problem"
      className="w-full fade-in-up delay-2 bg-[#252525] py-12 sm:py-20 px-4 sm:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-white text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6 sm:mb-10">
          Manual processes slowing you down?
        </h2>
        <p className="text-[#d1d1d1] text-lg sm:text-2xl leading-relaxed mb-8">
          Many growing businesses struggle with operational chaos:
        </p>
        <ul className="text-[#b1b1b1] text-base sm:text-xl leading-relaxed mb-8 sm:mb-10 space-y-4 max-w-2xl mx-auto text-left">
          <li className="flex items-start">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-[#e54e3f] mr-3 flex-shrink-0 mt-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span>Critical data scattered across Excel or notebooks</span>
          </li>
          <li className="flex items-start">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-[#e54e3f] mr-3 flex-shrink-0 mt-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span>Repetitive tasks taking up too much time</span>
          </li>
          <li className="flex items-start">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-[#e54e3f] mr-3 flex-shrink-0 mt-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span>Systems exist but aren't used</span>
          </li>
          <li className="flex items-start">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-[#e54e3f] mr-3 flex-shrink-0 mt-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span>Owner burnout from decision bottlenecks</span>
          </li>
        </ul>
        <p className="text-[#facb15] text-lg sm:text-2xl font-semibold italic border-l-4 border-[#facb15] pl-6 py-4 bg-[#1e1e1e] rounded max-w-3xl mx-auto text-left">
          Sound familiar? You're not alone. We help business owners regain control and scale efficiently.
        </p>
      </div>
    </section>
  );
}

export default Problem;
