import React from "react";
import Image from "next/image";

function Projects() {
  return (
    <section id="projects" className="w-full bg-[#252525] py-12 sm:py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-2xl sm:text-4xl font-bold text-center mb-10 sm:mb-16">Top Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg flex flex-col">
            <Image
              src="/images/Wisker.png"
              alt="Wisker Project"
              width={600}
              height={192}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-[#facb15] text-lg sm:text-xl font-semibold mb-3">Wisker</h3>
              <p className="text-[#b1b1b1] text-sm sm:text-base leading-relaxed mb-4">Wisker is an AI-powered study platform that helps learners maximize memory retention through active recall techniques. Features include flash cards, quizzes, smart scheduling, reminders, audio-visual learning, and concept mapping to make studying more effective and engaging.</p>
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
          {/* Project 2 */}
          <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg flex flex-col">
            <Image
              src="/images/Wisker.png"
              alt="Wisker Project"
              width={600}
              height={192}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-[#facb15] text-lg sm:text-xl font-semibold mb-3">Wisker</h3>
              <p className="text-[#b1b1b1] text-sm sm:text-base leading-relaxed mb-4">Wisker is an AI-powered study platform that helps learners maximize memory retention through active recall techniques. Features include flash cards, quizzes, smart scheduling, reminders, audio-visual learning, and concept mapping to make studying more effective and engaging.</p>
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
          {/* Project 3 */}
          <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg flex flex-col">
            <Image
              src="/images/Wisker.png"
              alt="Wisker Project"
              width={600}
              height={192}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-[#facb15] text-lg sm:text-xl font-semibold mb-3">Wisker</h3>
              <p className="text-[#b1b1b1] text-sm sm:text-base leading-relaxed mb-4">Wisker is an AI-powered study platform that helps learners maximize memory retention through active recall techniques. Features include flash cards, quizzes, smart scheduling, reminders, audio-visual learning, and concept mapping to make studying more effective and engaging.</p>
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
        <div className="flex justify-center mt-12">
          <a
            href="/projects"
            className="bg-[#e54e3f] text-white px-8 py-3 rounded-lg text-base sm:text-lg font-semibold transition duration-300 hover:bg-[#c43e2f] shadow-lg"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;