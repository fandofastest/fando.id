import { Mail, MessageSquare, Linkedin, Github } from 'lucide-react';

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rifando.panggabean@email.com',
      href: 'mailto:rifando.panggabean@email.com',
      color: 'cyan',
    },
    {
      icon: MessageSquare,
      label: 'WhatsApp',
      value: '+62 812-3456-7890',
      href: 'https://wa.me/6281234567890',
      color: 'green',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/rifandopanggabean',
      href: 'https://linkedin.com/in/rifandopanggabean',
      color: 'blue',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/rifandopanggabean',
      href: 'https://github.com/rifandopanggabean',
      color: 'purple',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Open to collaboration opportunities, consulting projects, and academic partnerships. Let's build something great together.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0F172A]/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group text-center"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-full group-hover:bg-cyan-500/20 transition-colors">
                    <Icon size={24} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                      {method.label}
                    </h3>
                    <p className="text-gray-400 text-sm break-all">
                      {method.value}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 border border-cyan-500/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Looking for a Backend Engineer or Technical Mentor?
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm available for consulting on scalable backend architecture, multi-tenant systems, and API design. 
              Also open to speaking engagements and technical training opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:rifando.panggabean@email.com"
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/50"
              >
                Send an Email
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-200"
              >
                WhatsApp Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
