import React from 'react';

function Services() {
  return (
    <section
      id="services"
      className="w-full fade-in-up delay-2 bg-[#1e1e1e] py-12 sm:py-20 px-4 sm:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-2xl sm:text-4xl font-bold text-center mb-10 sm:mb-16">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Service 1: Landing Pages */}
          <div className="service-card bg-[#252525] p-6 sm:p-10 rounded-xl border-l-4 border-[#e54e3f]">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#e54e3f] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="18" height="7" rx="2" />
                <rect x="3" y="14" width="18" height="7" rx="2" />
              </svg>
            </div>
            <h3 className="text-[#facb15] text-lg sm:text-2xl font-semibold mb-2 sm:mb-4">
              Landing Pages
            </h3>
            <p className="text-[#b1b1b1] text-sm sm:text-base leading-relaxed">
              High-converting, visually stunning landing pages to showcase your product and drive
              engagement.
            </p>
          </div>
          {/* Service 2: Startup Marketing */}
          <div className="service-card bg-[#252525] p-6 sm:p-10 rounded-xl border-l-4 border-[#facb15]">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#facb15] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1e1e1e"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 3" />
              </svg>
            </div>
            <h3 className="text-[#facb15] text-lg sm:text-2xl font-semibold mb-2 sm:mb-4">
              Startup Marketing
            </h3>
            <p className="text-[#b1b1b1] text-sm sm:text-base leading-relaxed">
              Growth strategies, branding, and digital marketing tailored for startups to reach the
              right audience.
            </p>
          </div>
          {/* Service 3: MVP Development */}
          <div className="service-card bg-[#252525] p-6 sm:p-10 rounded-xl border-l-4 border-[#e54e3f]">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#e54e3f] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </div>
            <h3 className="text-[#facb15] text-lg sm:text-2xl font-semibold mb-2 sm:mb-4">
              MVP Development
            </h3>
            <p className="text-[#b1b1b1] text-sm sm:text-base leading-relaxed">
              Launch fast with a lean, functional MVP that validates your idea and attracts early
              users and funding.
            </p>
          </div>
          {/* Service 4: Technical Consulting */}
          <div className="service-card bg-[#252525] p-6 sm:p-10 rounded-xl border-l-4 border-[#facb15]">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#facb15] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1e1e1e"
                strokeWidth="2"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h3 className="text-[#facb15] text-lg sm:text-2xl font-semibold mb-2 sm:mb-4">
              Technical Consulting
            </h3>
            <p className="text-[#b1b1b1] text-sm sm:text-base leading-relaxed">
              Expert guidance on technology choices, architecture decisions, and scaling strategies
              for your startup.
            </p>
          </div>
          {/* Service 5: Web & Android Development */}
          <div className="service-card bg-[#252525] p-6 sm:p-10 rounded-xl border-l-4 border-[#e54e3f]">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#e54e3f] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
              >
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            </div>
            <h3 className="text-[#facb15] text-lg sm:text-2xl font-semibold mb-2 sm:mb-4">
              Web & Android Development
            </h3>
            <p className="text-[#b1b1b1] text-sm sm:text-base leading-relaxed">
              Custom web and Android applications built for performance, scalability, and user
              experience.
            </p>
          </div>
          {/* Service 6: Software Solutions */}
          <div className="service-card bg-[#252525] p-6 sm:p-10 rounded-xl border-l-4 border-[#facb15]">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#facb15] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1e1e1e"
                strokeWidth="2"
              >
                <rect x="3" y="7" width="18" height="10" rx="2" />
                <path d="M8 11h8" />
              </svg>
            </div>
            <h3 className="text-[#facb15] text-lg sm:text-2xl font-semibold mb-2 sm:mb-4">
              Software Solutions
            </h3>
            <p className="text-[#b1b1b1] text-sm sm:text-base leading-relaxed">
              End-to-end software development for web, mobile, and desktop platforms tailored to
              your business needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
