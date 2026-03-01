import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Teaching } from './components/Teaching';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Teaching />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
