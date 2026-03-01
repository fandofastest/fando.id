import { CheckCircle2 } from 'lucide-react';

export function About() {
  const highlights = [
    'Multi-store POS system development with real-time sync',
    'Backend API architecture using Node.js and Golang Fiber',
    'JWT & OAuth2 authentication systems implementation',
    'MongoDB schema optimization for financial data',
    'Teaching Web Programming (PHP, MySQL, OOP, API)',
    'Government IT infrastructure at KPU',
  ];

  return (
    <section id="about" className="py-20 bg-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Combining technical expertise with teaching experience to build robust systems and mentor the next generation of developers
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-2xl"></div>
              <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-cyan-500/20 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1681165232934-c09dfa5ee694?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyMzUzMTQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Rifando Panggabean - Professional Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right - Description */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Full-Stack Engineer & Educator
              </h3>
              <p className="text-gray-300 leading-relaxed">
                With extensive experience in building enterprise-level applications, I specialize in creating scalable, 
                secure backend systems that power modern businesses. My work focuses on multi-tenant architectures, 
                real-time data synchronization, and robust API design.
              </p>
              <p className="text-gray-300 leading-relaxed">
                As a lecturer, I'm passionate about teaching web development fundamentals and advanced concepts. 
                I guide students through PHP, MySQL, object-oriented programming, and modern API development, 
                preparing them for real-world software engineering challenges.
              </p>
              <p className="text-gray-300 leading-relaxed">
                In my role as a Government IT Officer at KPU, I contribute to critical public sector infrastructure 
                projects, ensuring reliable and secure systems for electoral processes.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
