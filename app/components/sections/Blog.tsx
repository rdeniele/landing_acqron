import React from 'react';
import Image from 'next/image';

function Blog() {
  return (
    <section id="blog" className="w-full bg-[#1e1e1e] py-12 sm:py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-2xl sm:text-4xl font-bold text-center mb-10 sm:mb-16">
          Latest Insights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Blog Post 1 */}
          <div className="bg-[#252525] rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2">
            <div className="relative h-40 sm:h-52 w-full">
              <Image
                src="/images/blog1image.webp"
                alt="A cozy study desk with a laptop, book, and warm lighting."
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority
              />
            </div>
            <div className="p-4 sm:p-6">
              <div className="text-[#facb15] text-xs font-semibold mb-1 sm:mb-2">DECEMBER 2025</div>
              <h3 className="text-white text-base sm:text-xl font-semibold mb-2 sm:mb-3">
                How AI is Redefining Study Habits
              </h3>
              <p className="text-[#b1b1b1] text-xs sm:text-sm leading-relaxed">
                AI is transforming how students learn, with 86% of higher education students now
                using AI tools for studying. From instant feedback to adaptive learning, AI is
                making education more accessible, efficient, and effective—leading to measurable
                improvements in test scores, retention, and student confidence.
              </p>
              <a
                href="https://medium.com/@dstalingrad/how-ai-is-redefining-study-habits-learning-00349540b8d6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-[#facb15] text-xs sm:text-sm font-semibold underline hover:text-white transition-colors duration-300"
              >
                Read More
              </a>
            </div>
          </div>
          {/* Coming Soon Card */}
          <div className="bg-[#252525] rounded-xl flex flex-col justify-center items-center overflow-hidden transition-transform duration-300 hover:-translate-y-2 min-h-48 sm:min-h-52">
            <div className="flex-1 flex flex-col justify-center items-center p-8">
              <h3 className="text-[#facb15] text-xl sm:text-2xl font-bold mb-2 text-center">
                More Insights Coming Soon
              </h3>
              <p className="text-[#b1b1b1] text-sm sm:text-base text-center">
                Stay tuned for new articles and updates from our team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
