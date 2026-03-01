import { Server, Layout, Database, Shield } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Backend',
      icon: Server,
      color: 'cyan',
      skills: ['Node.js', 'Express', 'Apollo Server', 'Golang Fiber'],
    },
    {
      title: 'Frontend',
      icon: Layout,
      color: 'blue',
      skills: ['Next.js (App Router)', 'React', 'Tailwind CSS', 'TypeScript'],
    },
    {
      title: 'Database',
      icon: Database,
      color: 'teal',
      skills: ['MongoDB', 'Supabase', 'MySQL', 'PostgreSQL'],
    },
    {
      title: 'DevOps & Auth',
      icon: Shield,
      color: 'indigo',
      skills: ['JWT', 'OAuth2', 'Firebase', 'Docker'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive expertise across the modern tech stack, from backend architecture to frontend development
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-[#1E293B]/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-cyan-500/10 rounded-lg">
                    <Icon size={24} className="text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm rounded-lg hover:bg-cyan-500/20 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-white mb-6">
            Additional Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Multi-tenant Architecture',
              'RESTful API Design',
              'GraphQL',
              'Real-time Sync',
              'Microservices',
              'Git/GitHub',
              'Agile/Scrum',
              'Code Review',
              'Performance Optimization',
              'Security Best Practices',
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#1E293B]/70 border border-cyan-500/20 text-gray-300 rounded-full hover:border-cyan-500/40 hover:text-cyan-300 transition-all duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
