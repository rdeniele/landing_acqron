import React from "react";
import Image from "next/image";

function About() {
  return (
    <section id="about" className="w-full fade-in-up delay-1 bg-[#252525] py-12 px-4 sm:py-20 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-20">
          <h2 className="text-[#facb15] text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Our Story</h2>
          <p className="text-[#d1d1d1] text-base sm:text-lg leading-loose">Acqron was born from a simple observation: most software development companies weren&apos;t built for idea-stage startups. Founders needed more than just code—they needed partners who understood the unique challenges of going from zero to one. In 2025, we set out to change that, bringing together a team of developers, designers, and startup veterans dedicated to one mission: turning bold ideas into successful products.</p>
        </div>
        <div>
          <h3 className="text-white text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Meet the Founder & Early Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 max-w-3xl mx-auto">
            {/* Founder */}
            <div className="text-center flex flex-col items-center pb-8 sm:pb-0">
              <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 sm:mb-5 rounded-full overflow-hidden shadow-lg flex items-center justify-center bg-linear-to-br from-[#e54e3f] to-[#facb15]">
                <Image
                  src="/images/ronidpic.png"
                  alt="Ron Paragoso"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="text-white text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Ron Paragoso</div>
              <div className="text-[#facb15] text-xs sm:text-sm font-semibold mb-2 sm:mb-3">FOUNDER & CEO</div>
              <p className="text-[#b1b1b1] text-xs sm:text-sm leading-relaxed">Visionary leader driving innovation, product development, and business strategy for Acqron.</p>
            </div>
            {/* Team Member 1 */}
            <div className="text-center flex flex-col items-center pb-8 sm:pb-0">
              <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 sm:mb-5 rounded-full bg-linear-to-br from-[#facb15] to-[#e54e3f] flex items-center justify-center shadow-lg">
                <svg width="64" height="64" className="sm:w-20 sm:h-20" viewBox="0 0 24 24" fill="none" stroke="#1e1e1e" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
              <div className="text-white text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Stalingrad Dollosa</div>
              <div className="text-[#facb15] text-xs sm:text-sm font-semibold mb-2 sm:mb-3">Chief Marketing Officer</div>
              <p className="text-[#b1b1b1] text-xs sm:text-sm leading-relaxed">Marketing strategist with expertise in brand growth, digital campaigns, and startup market entry.</p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center flex flex-col items-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 sm:mb-5 rounded-full bg-linear-to-br from-[#e54e3f] to-[#1e1e1e] flex items-center justify-center shadow-lg">
                <svg width="64" height="64" className="sm:w-20 sm:h-20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
              <div className="text-white text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Jepoy</div>
              <div className="text-[#facb15] text-xs sm:text-sm font-semibold mb-2 sm:mb-3">Full-stack Developer / AI Engineer</div>
              <p className="text-[#b1b1b1] text-xs sm:text-sm leading-relaxed">Expert in building scalable web applications and integrating AI solutions to enhance user experience and business intelligence.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;