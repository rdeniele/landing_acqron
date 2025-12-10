import React from "react";

function Contact() {
  return (
    <section id="contact" className="w-full fade-in-up delay-3 bg-[#252525] py-20 px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-white text-4xl font-bold mb-6">Let&apos;s Build Together</h2>
        <p className="text-[#d1d1d1] text-lg leading-relaxed mb-10">Ready to start building your dream product? Contact us today and let&apos;s discuss how we can help bring your startup vision to life.</p>
        <a href="mailto:info@acqron.com" className="inline-flex items-center gap-3 bg-[#facb15] text-[#1e1e1e] px-12 py-4 rounded-lg text-lg font-semibold transition duration-300 hover:bg-[#e8b813] hover:scale-105">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          <span>info@acqron.com</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;