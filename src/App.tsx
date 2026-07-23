import { lazy, Suspense } from 'react';

// Lazy load all sections - they won't load until scrolled into view
const HeroSection = lazy(() => import('./sections/HeroSection'));
const AboutSection = lazy(() => import('./sections/AboutSection'));
const Work = lazy(() => import('./sections/Work'));
const Skills = lazy(() => import('./sections/Skills'));
const ExperienceSection = lazy(() => import('./sections/ExperienceSection'));
const ContactSection = lazy(() => import('./sections/ContactSection'));

// Lightweight loading fallback
function SectionLoader() {
  return <div className="h-screen flex items-center justify-center" />;
}

function App() {
  return (
    <main className="w-full" style={{ overflowX: 'clip' }}>
      <Suspense fallback={<SectionLoader />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Work />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Skills />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <ExperienceSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <ContactSection />
      </Suspense>
    </main>
  );
}

export default App;