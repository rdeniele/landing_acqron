import React from 'react';

function Contact() {
  return (
    <section id="contact" className="w-full fade-in-up delay-3 bg-[#252525] py-12 sm:py-20 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-white text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6 sm:mb-8">
          Ready to take control of your business?
        </h2>
        <p className="text-[#d1d1d1] text-base sm:text-xl leading-relaxed mb-10 sm:mb-12">
          Book a free 30-minute strategy call. No credit card required. No obligations. Actionable insights guaranteed.
        </p>
        
        <form className="bg-[#1e1e1e] rounded-xl p-6 sm:p-10 shadow-xl border border-[#333]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div className="text-left">
              <label htmlFor="name" className="block text-[#facb15] text-sm font-semibold mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-[#252525] border border-[#444] rounded-lg px-4 py-3 text-white placeholder-[#888] focus:outline-none focus:border-[#facb15] transition-colors"
                placeholder="John Doe"
              />
            </div>

            {/* Business Name */}
            <div className="text-left">
              <label htmlFor="businessName" className="block text-[#facb15] text-sm font-semibold mb-2">
                Business Name *
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                required
                className="w-full bg-[#252525] border border-[#444] rounded-lg px-4 py-3 text-white placeholder-[#888] focus:outline-none focus:border-[#facb15] transition-colors"
                placeholder="Your Company"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {/* Email */}
            <div className="text-left">
              <label htmlFor="email" className="block text-[#facb15] text-sm font-semibold mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-[#252525] border border-[#444] rounded-lg px-4 py-3 text-white placeholder-[#888] focus:outline-none focus:border-[#facb15] transition-colors"
                placeholder="john@company.com"
              />
            </div>

            {/* Phone */}
            <div className="text-left">
              <label htmlFor="phone" className="block text-[#facb15] text-sm font-semibold mb-2">
                Phone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full bg-[#252525] border border-[#444] rounded-lg px-4 py-3 text-white placeholder-[#888] focus:outline-none focus:border-[#facb15] transition-colors"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          {/* Monthly Revenue Range */}
          <div className="text-left mb-6">
            <label htmlFor="revenue" className="block text-[#facb15] text-sm font-semibold mb-2">
              Monthly Revenue Range *
            </label>
            <select
              id="revenue"
              name="revenue"
              required
              className="w-full bg-[#252525] border border-[#444] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#facb15] transition-colors"
            >
              <option value="">Select range</option>
              <option value="0-10k">$0 - $10,000</option>
              <option value="10k-50k">$10,000 - $50,000</option>
              <option value="50k-100k">$50,000 - $100,000</option>
              <option value="100k-500k">$100,000 - $500,000</option>
              <option value="500k+">$500,000+</option>
            </select>
          </div>

          {/* Biggest Business Challenge */}
          <div className="text-left mb-8">
            <label htmlFor="challenge" className="block text-[#facb15] text-sm font-semibold mb-2">
              Biggest Business Challenge *
            </label>
            <textarea
              id="challenge"
              name="challenge"
              required
              rows={4}
              className="w-full bg-[#252525] border border-[#444] rounded-lg px-4 py-3 text-white placeholder-[#888] focus:outline-none focus:border-[#facb15] transition-colors resize-none"
              placeholder="Describe your biggest operational challenge..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#e54e3f] text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 hover:bg-[#c43e2f] hover:scale-105 shadow-lg"
          >
            Schedule My Free Call
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
