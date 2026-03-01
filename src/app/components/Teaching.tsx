import { BookOpen, Code, Database, Users } from 'lucide-react';

export function Teaching() {
  const courses = [
    {
      icon: Code,
      title: 'Web Programming with PHP',
      description: 'Teaching modern PHP development, MVC architecture, and best practices for building dynamic web applications.',
      topics: ['PHP 8+', 'MVC Pattern', 'Session Management', 'Form Handling'],
    },
    {
      icon: Database,
      title: 'Database Systems',
      description: 'Comprehensive coverage of relational databases, SQL optimization, and data modeling for real-world applications.',
      topics: ['MySQL', 'Schema Design', 'Query Optimization', 'Indexing'],
    },
    {
      icon: BookOpen,
      title: 'OOP & API Design',
      description: 'Object-oriented programming principles and RESTful API development with practical project implementations.',
      topics: ['OOP Principles', 'Design Patterns', 'RESTful APIs', 'Authentication'],
    },
    {
      icon: Users,
      title: 'Final Project Mentorship',
      description: 'Guiding students through capstone projects, from ideation to deployment, with industry-standard practices.',
      topics: ['Project Planning', 'Code Review', 'Testing', 'Deployment'],
    },
  ];

  return (
    <section id="teaching" className="py-20 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Teaching & Academic Role
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Empowering the next generation of developers with practical skills and industry-relevant knowledge
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <div
                key={index}
                className="bg-[#1E293B]/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg flex-shrink-0">
                    <Icon size={24} className="text-cyan-400" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-bold text-white">
                      {course.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {course.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {course.topics.map((topic, topicIndex) => (
                        <span
                          key={topicIndex}
                          className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-xs rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Teaching Philosophy */}
        <div className="bg-[#1E293B]/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Teaching Philosophy
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">💡</span>
              </div>
              <h4 className="text-lg font-bold text-white">
                Practical Learning
              </h4>
              <p className="text-gray-400 text-sm">
                Focus on hands-on projects and real-world scenarios that prepare students for industry challenges
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="text-lg font-bold text-white">
                Modern Stack
              </h4>
              <p className="text-gray-400 text-sm">
                Teaching current technologies and best practices used in professional development environments
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-lg font-bold text-white">
                Career Ready
              </h4>
              <p className="text-gray-400 text-sm">
                Equipping students with skills and confidence to succeed in their software engineering careers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
