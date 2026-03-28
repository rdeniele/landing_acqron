import React from 'react';

function Services() {
  return (
    <section
      id="services"
      className="w-full fade-in-up delay-2 bg-[#1e1e1e] py-12 sm:py-20 px-4 sm:px-8"
    >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-3xl sm:text-5xl md:text-6xl font-extrabold text-center mb-12 sm:mb-16">
            What we do
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Service 1: Workflow & Operations Audit */}
            <div className="service-card bg-[#252525] p-6 sm:p-8 rounded-xl border-l-4 border-[#e54e3f] hover:bg-[#2a2a2a] transition-colors">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#e54e3f] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                >
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              </div>
              <h3 className="text-[#facb15] text-lg sm:text-2xl font-semibold mb-2 sm:mb-4">
                Workflow & Operations Audit
              </h3>
              <p className="text-[#b1b1b1] text-sm sm:text-base leading-relaxed">
                Identify inefficiencies and revenue leaks in your current processes.
              </p>
            </div>

            {/* Service 2: Automation & Internal Tools */}
            <div className="service-card bg-[#252525] p-6 sm:p-8 rounded-xl border-l-4 border-[#facb15] hover:bg-[#2a2a2a] transition-colors">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#facb15] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1e1e1e"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v6m0 6v6M5.6 5.6l4.2 4.2m4.4 4.4l4.2 4.2M1 12h6m6 0h6M5.6 18.4l4.2-4.2m4.4-4.4l4.2-4.2" />
                </svg>
              </div>
              <h3 className="text-[#facb15] text-lg sm:text-2xl font-semibold mb-2 sm:mb-4">
                Automation & Internal Tools
              </h3>
              <p className="text-[#b1b1b1] text-sm sm:text-base leading-relaxed">
                Implement solutions that save time and reduce errors.
              </p>
            </div>

            {/* Service 3: Team Training & Adoption */}
            <div className="service-card bg-[#252525] p-6 sm:p-8 rounded-xl border-l-4 border-[#e54e3f] hover:bg-[#2a2a2a] transition-colors">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#e54e3f] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-[#facb15] text-lg sm:text-2xl font-semibold mb-2 sm:mb-4">
                Team Training & Adoption
              </h3>
              <p className="text-[#b1b1b1] text-sm sm:text-base leading-relaxed">
                Ensure your team actually uses the tools you invest in.
              </p>
            </div>

            {/* Service 4: Dashboarding & Analytics */}
            <div className="service-card bg-[#252525] p-6 sm:p-8 rounded-xl border-l-4 border-[#facb15] hover:bg-[#2a2a2a] transition-colors">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#facb15] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1e1e1e"
                  strokeWidth="2"
                >
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
              <h3 className="text-[#facb15] text-lg sm:text-2xl font-semibold mb-2 sm:mb-4">
                Dashboarding & Analytics
              </h3>
              <p className="text-[#b1b1b1] text-sm sm:text-base leading-relaxed">
                Get real-time insights to make smarter decisions.
              </p>
            </div>

            {/* Service 5: Technical Consulting */}
            <div className="service-card bg-[#252525] p-6 sm:p-8 rounded-xl border-l-4 border-[#e54e3f] hover:bg-[#2a2a2a] transition-colors">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#e54e3f] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
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
                Strategic guidance on tech choices, systems, and scaling operations.
              </p>
            </div>

            {/* Service 6: Custom Software Development */}
            <div className="service-card bg-[#252525] p-6 sm:p-8 rounded-xl border-l-4 border-[#facb15] hover:bg-[#2a2a2a] transition-colors">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#facb15] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1e1e1e"
                  strokeWidth="2"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className="text-[#facb15] text-lg sm:text-2xl font-semibold mb-2 sm:mb-4">
                Custom Software Development
              </h3>
              <p className="text-[#b1b1b1] text-sm sm:text-base leading-relaxed">
                Build tailored software solutions that fit your unique business needs.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Services;
