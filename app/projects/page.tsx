import NavBar from '../components/sections/NavBar';
import Footer from '../components/sections/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#252525]">
      <NavBar />
      <main className="flex-1 py-12 sm:py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#e54e3f] text-white px-5 py-2 rounded-lg font-semibold text-base transition duration-300 hover:bg-[#c43e2f] shadow"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
              Back to Home
            </Link>
          </div>
          <h2 className="text-[#facb15] text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16">
            Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Wisker Project Card */}
            <div className="bg-[#1e1e1e] rounded-xl shadow-lg p-8 border border-[#333] flex flex-col items-center">
              <Image
                src="/images/Wisker.png"
                alt="Wisker Project"
                width={400}
                height={192}
                className="w-full h-48 object-cover rounded-lg mb-6"
                style={{ maxWidth: '400px' }}
                priority
              />
              <h3 className="text-[#facb15] text-xl sm:text-2xl font-semibold mb-3 text-center">
                Wisker
              </h3>
              <p className="text-[#b1b1b1] text-base sm:text-lg text-center max-w-md mb-4">
                Wisker is an AI-powered study platform that helps learners maximize memory retention
                through active recall techniques. Features include flash cards, quizzes, smart
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
            {/* Card 2 */}
            <div className="bg-[#1e1e1e] rounded-xl shadow-lg p-8 border border-[#333] flex flex-col items-center">
              <h3 className="text-white text-xl sm:text-2xl font-semibold mb-4 text-center">
                Coming Soon
              </h3>
              <p className="text-[#b1b1b1] text-base sm:text-lg text-center max-w-md">
                More projects will be revealed soon. Stay tuned!
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-[#1e1e1e] rounded-xl shadow-lg p-8 border border-[#333] flex flex-col items-center">
              <h3 className="text-white text-xl sm:text-2xl font-semibold mb-4 text-center">
                Coming Soon
              </h3>
              <p className="text-[#b1b1b1] text-base sm:text-lg text-center max-w-md">
                Our team is building something new. Check back for updates!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
