import React from "react";

function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-[#252525] py-12 sm:py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-2xl sm:text-4xl font-bold text-center mb-10 sm:mb-16">What Our Clients Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Testimonial 1 */}
          <div className="bg-[#1e1e1e] p-6 sm:p-8 rounded-xl border-t-4 border-[#facb15]">
            <div className="text-[#facb15] text-2xl sm:text-3xl mb-2 sm:mb-4">&quot;</div>
            <p className="text-[#d1d1d1] text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">Acqron helped us go from idea to a working MVP in just 8 weeks. Their expertise in startup development is unmatched!</p>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#e54e3f] rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg">JD</div>
              <div>
                <div className="text-white font-bold text-sm sm:text-base">Alex Carter</div>
                <div className="text-[#888] text-xs sm:text-sm">Founder</div>
                <div className="text-[#facb15] text-xs mt-1">2025</div>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-[#1e1e1e] p-6 sm:p-8 rounded-xl border-t-4 border-[#facb15]">
            <div className="text-[#facb15] text-2xl sm:text-3xl mb-2 sm:mb-4">&quot;</div>
            <p className="text-[#d1d1d1] text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">Professional, responsive, and results-driven. Acqron transformed our vision into a beautiful, functional product.</p>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#e54e3f] rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg">SM</div>
              <div>
                <div className="text-white font-bold text-sm sm:text-base">Priya Patel</div>
                <div className="text-[#888] text-xs sm:text-sm">CEO</div>
                <div className="text-[#facb15] text-xs mt-1">2025</div>
              </div>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-[#1e1e1e] p-6 sm:p-8 rounded-xl border-t-4 border-[#facb15]">
            <div className="text-[#facb15] text-2xl sm:text-3xl mb-2 sm:mb-4">&quot;</div>
            <p className="text-[#d1d1d1] text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">The team at Acqron understood our needs perfectly and delivered beyond expectations. Highly recommend!</p>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#e54e3f] rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg">MK</div>
              <div>
                <div className="text-white font-bold text-sm sm:text-base">David Nguyen</div>
                <div className="text-[#888] text-xs sm:text-sm">CTO</div>
                <div className="text-[#facb15] text-xs mt-1">2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;