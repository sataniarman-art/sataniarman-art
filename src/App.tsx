import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import Work from './sections/Work';
import Skills from './sections/Skills';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection';

function App() {
  return (
    <main className="w-full" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <AboutSection />
      <Work />
      <Skills />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}

export default App;