'use client';
import React from 'react';
import { useEffect } from 'react';
import Image from 'next/image';

function Projects() {
  useEffect(() => {
    const cards = document.querySelectorAll('.project-card-animate');
    const handleScroll = () => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          card.classList.add('slide-up');
        } else {
          card.classList.remove('slide-up');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="projects" className="w-full bg-[#252525] py-12 sm:py-20 px-4 sm:px-8">
      <style>{`
        .project-card-animate {
          opacity: 0;
          transform: translateY(60px);
          transition: opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1);
        }
        .project-card-animate.slide-up {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 sm:mb-16 gap-4">
          <h2 className="text-white text-2xl sm:text-4xl font-bold text-center sm:text-left">
            Top Projects
          </h2>
          <a
            href="/projects"
            aria-label="View All Projects"
            className="bg-[#1e1e1e] border border-[#333] rounded-full px-5 py-3 shadow-md hover:bg-[#232323] transition-colors duration-300 flex items-center gap-3 group"
          >
            <span className="text-[#facb15] text-base sm:text-lg font-semibold group-hover:text-white transition-colors duration-300">
              View All Projects
            </span>
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#facb15"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </a>
        </div>
        <div className="flex flex-col gap-12">
          {/* Project 1 - Left */}
          <div className="flex flex-col md:flex-row items-stretch gap-8 project-card-animate">
            <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
              <span className="bg-[#facb15] text-[#1e1e1e] font-bold text-xl sm:text-2xl rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                1
              </span>
            </div>
            <div className="bg-linear-to-br from-[#232323] to-[#1e1e1e] border border-[#333] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row w-full min-h-80 transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_8px_32px_0_rgba(250,203,21,0.10)]">
              <div className="relative w-full md:w-1/2 min-h-80">
                <Image
                  src="/images/Wisker.png"
                  alt="Wisker Project"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-none md:rounded-l-2xl"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center">
                <h3 className="text-[#facb15] text-lg sm:text-xl font-semibold mb-3">Wisker</h3>
                <p className="text-[#b1b1b1] text-sm sm:text-base leading-relaxed mb-4">
                  Wisker is an AI-powered study platform that helps learners maximize memory
                  techniques. Features include flash cards, quizzes, smart scheduling, scheduling,
                  scheduling, reminders, audio-visual learning, and concept mapping to make studying
                  more effective and engaging.
                </p>
                <a
                  href="https://wisker.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#facb15] text-[#1e1e1e] px-5 py-2 rounded font-semibold text-sm transition duration-300 hover:bg-[#ffe066] shadow"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
          {/* Project 2 - Right */}
          <div className="flex flex-col md:flex-row-reverse items-stretch gap-8 project-card-animate">
            <div className="flex items-center justify-center md:justify-end mb-4 md:mb-0">
              <span className="bg-[#facb15] text-[#1e1e1e] font-bold text-xl sm:text-2xl rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                2
              </span>
            </div>
            <div className="bg-linear-to-br from-[#232323] to-[#1e1e1e] border border-[#333] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row w-full min-h-80 transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_8px_32px_0_rgba(250,203,21,0.10)]">
              <div className="relative w-full md:w-1/2 min-h-80">
                <Image
                  src="/images/simplabots_AI.webp"
                  alt="SimplaBots Project"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-none md:rounded-l-2xl"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center">
                <h3 className="text-[#facb15] text-lg sm:text-xl font-semibold mb-3">
                  SimplaBots - Automation Platform
                </h3>
                <p className="text-[#b1b1b1] text-sm sm:text-base leading-relaxed mb-4">
                  A comprehensive automation platform that allows users to create custom bots for
                  repetitive tasks. Features drag-and-drop interface, workflow automation, and
                  integration with popular services.
                </p>
                <a
                  href="https://simplabots.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#facb15] text-[#1e1e1e] px-5 py-2 rounded font-semibold text-sm transition duration-300 hover:bg-[#ffe066] shadow"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
          {/* Project 3 - Left (Coming Soon) */}
          <div className="flex flex-col md:flex-row items-stretch gap-8 project-card-animate">
            <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
              <span className="bg-[#facb15] text-[#1e1e1e] font-bold text-xl sm:text-2xl rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                3
              </span>
            </div>
            <div className="bg-linear-to-br from-[#232323] to-[#1e1e1e] border border-[#333] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row w-full min-h-80 relative transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_8px_32px_0_rgba(250,203,21,0.10)]">
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <span className="bg-[#252525cc] text-[#facb15] text-xl sm:text-2xl font-bold px-6 py-3 rounded-lg shadow-lg backdrop-blur-md">
                  Coming Soon
                </span>
              </div>
              <div className="relative w-full md:w-1/2 min-h-80">
                <Image
                  src="/images/Wisker.png"
                  alt="Wisker Project"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-none md:rounded-l-2xl filter blur-2xl"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center opacity-0 pointer-events-none select-none">
                <h3 className="text-[#facb15] text-lg sm:text-xl font-semibold mb-3">Wisker</h3>
                <p className="text-[#b1b1b1] text-sm sm:text-base leading-relaxed mb-4">
                  Wisker is an AI-powered study platform that helps learners maximize memory
                  retention retention through active recall techniques. Features include flash
                  scheduling, reminders, audio-visual learning, and concept mapping to make studying
                  more effective and engaging.
                </p>
                <a
                  href="https://wisker.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#facb15] text-[#1e1e1e] px-5 py-2 rounded font-semibold text-sm transition duration-300 hover:bg-[#ffe066] shadow"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Removed bottom button, now beside heading */}
      </div>
    </section>
  );
}

export default Projects;
