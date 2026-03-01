import { ArrowRight, Code2, GraduationCap, Building2 } from 'lucide-react';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="flex items-center gap-2 text-cyan-400 text-sm">
                  <Code2 size={16} />
                  Backend Engineer
                </span>
                <span className="text-gray-500">•</span>
                <span className="flex items-center gap-2 text-cyan-400 text-sm">
                  <GraduationCap size={16} />
                  Lecturer
                </span>
                <span className="text-gray-500">•</span>
                <span className="flex items-center gap-2 text-cyan-400 text-sm">
                  <Building2 size={16} />
                  Government IT Officer
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Building Scalable Systems & Multi-Store POS Platforms
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed">
                Experienced full-stack engineer specializing in <span className="text-cyan-400 font-medium">Node.js</span>, <span className="text-cyan-400 font-medium">Next.js</span>, and <span className="text-cyan-400 font-medium">Golang</span>. 
                Architecting high-performance multi-tenant POS systems with MongoDB, implementing secure JWT authentication, and optimizing database schemas for financial applications. 
                Passionate about teaching modern web development and contributing to public sector IT infrastructure.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('#projects')}
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg flex items-center gap-2 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/50"
              >
                View Projects
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-6 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-200"
              >
                Contact Me
              </button>
            </div>

            {/* Tech Stack Highlights */}
            <div className="flex flex-wrap gap-3 pt-4">
              {['Node.js', 'Next.js', 'MongoDB', 'Golang Fiber', 'JWT', 'Multi-tenant'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - Avatar */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>
              <div className="relative w-80 h-80 rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
                <img
                  src="https://images.unsplash.com/photo-1681165232934-c09dfa5ee694?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyMzUzMTQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Rifando Panggabean"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
