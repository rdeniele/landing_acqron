import React from "react";

function Blog() {
  return (
    <section id="blog" className="w-full bg-[#1e1e1e] py-12 sm:py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-2xl sm:text-4xl font-bold text-center mb-10 sm:mb-16">Latest Insights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Blog Post 1 */}
          <div className="bg-[#252525] rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2">
            <div className="h-40 sm:h-52 bg-linear-to-br from-[#e54e3f] to-[#facb15]"></div>
            <div className="p-4 sm:p-6">
              <div className="text-[#facb15] text-xs font-semibold mb-1 sm:mb-2">DECEMBER 2025</div>
              <h3 className="text-white text-base sm:text-xl font-semibold mb-2 sm:mb-3">5 Steps to Validate Your Startup Idea</h3>
              <p className="text-[#b1b1b1] text-xs sm:text-sm leading-relaxed">Learn how to test your startup idea before investing time and money into development.</p>
            </div>
          </div>
          {/* Blog Post 2 */}
          <div className="bg-[#252525] rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2">
            <div className="h-40 sm:h-52 bg-linear-to-br from-[#facb15] to-[#e54e3f]"></div>
            <div className="p-4 sm:p-6">
              <div className="text-[#facb15] text-xs font-semibold mb-1 sm:mb-2">NOVEMBER 2025</div>
              <h3 className="text-white text-base sm:text-xl font-semibold mb-2 sm:mb-3">MVP vs Full Product: What&apos;s Right for You?</h3>
              <p className="text-[#b1b1b1] text-xs sm:text-sm leading-relaxed">Discover the benefits of starting with an MVP and when to scale to a full product.</p>
            </div>
          </div>
          {/* Blog Post 3 */}
          <div className="bg-[#252525] rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2">
            <div className="h-40 sm:h-52 bg-linear-to-br from-[#e54e3f] to-[#1e1e1e]"></div>
            <div className="p-4 sm:p-6">
              <div className="text-[#facb15] text-xs font-semibold mb-1 sm:mb-2">NOVEMBER 2025</div>
              <h3 className="text-white text-base sm:text-xl font-semibold mb-2 sm:mb-3">Choosing the Right Tech Stack for Your Startup</h3>
              <p className="text-[#b1b1b1] text-xs sm:text-sm leading-relaxed">A comprehensive guide to selecting technologies that will scale with your business.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;