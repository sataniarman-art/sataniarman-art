import { useEffect, useRef } from 'react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import MobileMenu from '../components/MobileMenu';

// Get image path - handles both localhost and GitHub Pages automatically
const getImagePath = (path: string) => {
  const baseUrl = import.meta.env.BASE_URL;
  return `${baseUrl}${path.startsWith('/') ? path.slice(1) : path}`;
};

const HeroSection = () => {
  const navLinks = ['About', 'Work', 'Skills', 'Experience', 'Contact'];
  const modelViewerRef = useRef<HTMLElement>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const modelViewer = modelViewerRef.current;
    if (!modelViewer) return;

    let angle = 0;
    let direction = 1;
    const speed = 0.3;
    const MIN_ANGLE = -22.5;
    const MAX_ANGLE = 22.5;
    const ZOOM = '2.5m';
    const TILT = '90deg';

    const animate = () => {
      angle += direction * speed;

      if (angle >= MAX_ANGLE) {
        angle = MAX_ANGLE;
        direction = -1;
      } else if (angle <= MIN_ANGLE) {
        angle = MIN_ANGLE;
        direction = 1;
      }

      try {
        (modelViewer as any).cameraOrbit = `${angle}deg ${TILT} ${ZOOM}`;
      } catch (e) {
        // Ignore errors
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section
      className="relative flex h-screen w-full flex-col overflow-hidden bg-[#0A0A0D]"
      style={{ overflowX: 'clip' }}
    >
      {/* Ambient background — moody gradient wash + dot grid + faint line-art, all kept very quiet */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* base mood gradient: indigo up top fading through near-black to a dark olive base */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, #1A1330 0%, #120F1C 22%, #0B0B0E 45%, #0D120E 68%, #131A11 100%)',
          }}
        />
        {/* warm amber glow, bottom-right corner — same size/opacity/gradient as the About section's top-right glow, mirrored across the seam so it reads as one continuous glow */}
        <div
          className="absolute -right-[11%] -bottom-[17%] h-[58vh] w-[58vh] rounded-full opacity-[0.3] blur-[115px]"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, #9A5A22 0%, transparent 70%)',
          }}
        />
        {/* faint violet glow, top-left */}
        <div
          className="absolute -left-[15%] -top-[20%] h-[50vh] w-[50vh] rounded-full opacity-[0.28] blur-[110px]"
          style={{
            background:
              'radial-gradient(circle at 40% 40%, #3A2560 0%, transparent 70%)',
          }}
        />
        {/* dot grid */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.35]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="heroDotGrid"
              width="34"
              height="34"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1.1" cy="1.1" r="1.1" fill="#8A93A6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroDotGrid)" />
        </svg>
        {/* faint line-art: a loose curve upper-left */}
        <svg
          className="absolute left-0 top-0 h-[45%] w-[60%] opacity-[0.16]"
          viewBox="0 0 600 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 40 C 90 10, 160 60, 230 20 S 340 -10, 420 15"
            stroke="#C7D0DC"
            strokeWidth="1"
          />
        </svg>
        {/* faint line-art: triangle lower-left */}
        <svg
          className="absolute bottom-[8%] left-[6%] h-[18vh] w-[18vh] opacity-[0.14]"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 10 L90 85 L10 78 Z"
            stroke="#C7D0DC"
            strokeWidth="1"
          />
        </svg>
        {/* fine grain so the gradient reads as texture rather than a flat blend */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.04] mix-blend-overlay"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="heroGrain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="2"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#heroGrain)" />
        </svg>
      </div>

      {/* Mobile Hamburger Menu */}
      <MobileMenu links={navLinks} onLinkClick={scrollTo} />

      {/* Desktop Navbar - hidden on mobile */}
      <FadeIn
        as="nav"
        y={-20}
        duration={0.8}
        className="z-30 hidden w-full items-center justify-center gap-4 px-6 pt-6 sm:flex sm:gap-8 sm:px-8 md:gap-12 md:px-10 md:pt-8"
      >
        {navLinks.map((link) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-base lg:text-[1.1rem]"
          >
            {link}
          </button>
        ))}
      </FadeIn>

      {/* Hero Heading */}
      <div className="relative z-20 w-full overflow-hidden px-4 pt-20 sm:pt-10 md:pt-12">
        <FadeIn
          as="h1"
          y={40}
          delay={0.15}
          duration={0.9}
          className="hero-heading w-full text-center font-black uppercase leading-none tracking-tight text-[clamp(3.3rem,11vw,13vw)]"
        >
          Hi, i&apos;m arman
        </FadeIn>
      </div>


      {/* 3D Model - At bottom on desktop, centered on mobile */}
      <div
        className="absolute left-1/2 -translate-x-1/2 z-[5] bottom-0 max-sm:bottom-auto max-sm:top-1/2 max-sm:-translate-y-1/2 max-sm:scale-[1] sm:translate-y-[20%]"
        style={{
          width: 'clamp(320px, 50vw, 700px)',
          height: 'clamp(500px, 90vh, 850px)',
        }}
      >




        {/* @ts-ignore - model-viewer is a custom element */}
        <model-viewer
          ref={modelViewerRef}
          src={getImagePath('/model.glb')}
          alt="3D Character by Arman"
          camera-controls={false}
          touch-action="none"
          disable-zoom={true}
          disable-pan={true}
          shadow-intensity="1.5"
          exposure="1"
          camera-orbit="0deg 90deg 2.5m"
          interaction-prompt="none"
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent',
          }}
        />
      </div>

      {/* Bottom bar - Always at bottom */}
      <div className="mt-auto z-20 flex w-full items-end justify-between gap-4 px-4 pb-2 sm:px-10 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn
          y={20}
          delay={0.35}
          duration={0.8}
          className="max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
        >
          <p className="font-light uppercase leading-snug tracking-wide text-[#D7E2EA] text-[clamp(0.7rem,1.3vw,1.4rem)]">
            a designer & developer crafting digital experiences through code, design and ai
          </p>
        </FadeIn>
        <FadeIn y={20} delay={0.5} duration={0.8} className="flex flex-col items-end gap-3 sm:gap-6">
          <div className="flex items-center gap-2 sm:gap-6">
            <div className="flex flex-col gap-1 text-right sm:gap-3">
              <p className="text-[0.65rem] font-light uppercase tracking-wide text-white sm:text-base md:text-lg">
                Computer Science
              </p>
              <p className="text-base font-semibold uppercase tracking-wide text-white sm:text-2xl md:text-3xl">
                GPA <span className="text-white">3.85</span>
              </p>
            </div>
            <div className="w-px h-10 bg-gradient-to-b from-purple-500 to-orange-400 opacity-60 sm:h-20"></div>
            <img
              src={getImagePath('/logo.png')}
              alt="NJIT Logo"
              className="h-10 w-auto sm:h-20 md:h-24"
            />
          </div>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;