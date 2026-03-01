import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Multi-Store POS System',
      description:
        'Enterprise-level point-of-sale platform supporting multiple stores with real-time inventory sync, custom JWT authentication, and comprehensive sales analytics. Built with multi-tenant architecture for scalability.',
      image: 'https://images.unsplash.com/photo-1706304003186-61fa7521c236?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBQT1MlMjBzeXN0ZW0lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcyMzc2NTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Node.js', 'MongoDB', 'Android', 'JWT', 'Real-time Sync'],
      featured: true,
    },
    {
      title: 'Genealogy App (Batak Lineage)',
      description:
        'Cultural heritage application for tracking Batak family lineages with complex relationship mapping, historical data preservation, and interactive family tree visualization. Modern web interface with TypeScript.',
      image: 'https://images.unsplash.com/photo-1543839604-76538f2e3202?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5lYWxvZ3klMjBmYW1pbHklMjB0cmVlJTIwYXBwfGVufDF8fHx8MTc3MjM3NjU1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Next.js', 'TypeScript', 'MongoDB', 'React'],
      featured: true,
    },
    {
      title: 'Government IT Infrastructure',
      description:
        'Critical public sector systems for KPU electoral processes. Secure, reliable infrastructure ensuring data integrity, compliance with government standards, and high availability for nationwide operations.',
      image: 'https://images.unsplash.com/photo-1768896335930-ae8be74558a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwSVQlMjBpbmZyYXN0cnVjdHVyZXxlbnwxfHx8fDE3NzIzNzY1NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['PHP', 'MySQL', 'Security', 'Infrastructure'],
      featured: true,
    },
    {
      title: 'API Gateway & Microservices',
      description:
        'High-performance API gateway built with Golang Fiber, handling authentication, rate limiting, and routing for distributed microservices architecture. Optimized for low latency and high throughput.',
      image: 'https://images.unsplash.com/photo-1706304003186-61fa7521c236?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBQT1MlMjBzeXN0ZW0lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcyMzc2NTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Golang', 'Fiber', 'Microservices', 'API Gateway'],
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of significant projects showcasing expertise in backend architecture, multi-tenant systems, and public sector technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#0F172A]/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-cyan-500 text-white text-xs font-medium rounded-full">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <button className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-lg transition-colors duration-200">
                    <ExternalLink size={16} />
                    View Details
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-cyan-500/10 text-gray-400 hover:text-cyan-400 border border-gray-600 hover:border-cyan-500/30 rounded-lg transition-colors duration-200">
                    <Github size={16} />
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
