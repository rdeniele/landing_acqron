// NOTE: This is a direct implementation of the provided design using Tailwind and React/Next.js
import About from "./components/sections/About";
import Blog from "./components/sections/Blog";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import NavBar from "./components/sections/NavBar";
import Projects from "./components/sections/Projects";
import Services from "./components/sections/Services";
import Testimonials from "./components/sections/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen w-full font-sans bg-[#1e1e1e]" style={{ fontFamily: 'Inter, Segoe UI, sans-serif' }}>
      {/* Navigation Bar */}
      <NavBar />
      {/* Hero Section */}
      <Hero />
      {/* Services Section */}
      <Services />
      {/* Projects Section */}
      <Projects />
      {/* About Section */}
      <About />
      {/* Testimonials Section */}
      <Testimonials />
      {/* Blog Section */}
      <Blog />
      {/* Contact Section */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
}
