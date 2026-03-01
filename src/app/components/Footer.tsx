import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>© {currentYear} Rifando Panggabean</span>
            <span className="hidden sm:inline">—</span>
            <span className="hidden sm:inline">Engineering Scalable Systems</span>
          </div>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Built with</span>
            <Heart size={14} className="text-cyan-400 fill-cyan-400" />
            <span>using Next.js & Tailwind CSS</span>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-cyan-500/10 text-center">
          <p className="text-gray-500 text-xs">
            Open to collaboration • Available for consulting • Passionate about teaching
          </p>
        </div>
      </div>
    </footer>
  );
}
