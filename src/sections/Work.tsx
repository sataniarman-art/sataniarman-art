import { useRef, useEffect, useState } from 'react';
import FadeIn from '../components/FadeIn';

// Get image path - handles both localhost and GitHub Pages automatically
const getImagePath = (path: string) => {
  const baseUrl = import.meta.env.BASE_URL;
  return `${baseUrl}${path.startsWith('/') ? path.slice(1) : path}`;
};

const projects = [
  {
    title: 'ENDIVE PRINT',
    category: 'Business Card Print Design',
    image: '/marquee/image-01.jpg',
  },
  {
    title: 'ECONOLODGE WOODBRIDGE',
    category: 'Social Media Post',
    image: '/marquee/image-02.jpg',
  },
  {
    title: 'GLAM-U THREADING SALON',
    category: 'Social Media Banner Design',
    image: '/marquee/image-03.jpg',
  },
  {
    title: 'ENDIVE INFOTECH',
    category: 'Social Media Post',
    image: '/marquee/image-04.jpg',
  },
  {
    title: 'LOOP INN MOTEL',
    category: 'Social Media Post',
    image: '/marquee/image-05.jpg',
  },
  {
    title: 'ANI BUILDER',
    category: 'Yard Sign Print Design',
    image: '/marquee/image-11.jpg',
  },
  {
    title: 'AURI JEWELLERY',
    category: 'Flyer Print Design',
    image: '/marquee/image-06.jpg',
  },
  {
    title: 'KNIGHTS INN',
    category: 'Social Media Post',
    image: '/marquee/image-07.jpg',
  },
  {
    title: 'BANG BANG SEAFOOD & GRILL',
    category: 'Social Media Post',
    image: '/marquee/image-08.jpg',
  },
  {
    title: 'EVENT',
    category: 'Banner Print Design',
    image: '/marquee/image-09.jpg',
  },
  {
    title: 'ANI BUILDER',
    category: 'Business Card Print Design',
    image: '/marquee/image-10.jpg',
  },
];

const ProjectCard = ({ project }: { project: (typeof projects)[number] }) => {
  return (
    <div className="group block w-[240px] flex-shrink-0 overflow-hidden rounded-2xl border-2 border-transparent bg-[#1a1a1a] transition-all duration-300 hover:border-[#D7E2EA]/40 sm:w-[340px] md:w-[380px]">
      {/* Image */}
      <div className="aspect-[4/3] w-full overflow-hidden bg-[#0C0C0C]">
        <img
          src={getImagePath(project.image)}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          draggable={false}
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-0.5 p-3 sm:p-5">
        <h3
          className="font-semibold uppercase leading-tight text-white"
          style={{ fontSize: 'clamp(0.7rem, 1vw, 0.95rem)' }}
        >
          {project.title}
        </h3>
        <p
          className="font-light text-[#B600A8]"
          style={{ fontSize: 'clamp(0.65rem, 0.9vw, 0.8rem)' }}
        >
          {project.category}
        </p>
      </div>
    </div>
  );
};

const Work = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      // Responsive pre-scroll: less aggressive on mobile
      const isMobile = window.innerWidth < 640;
      const baseOffset = isMobile ? -150 : -200;
      const value = (window.scrollY - sectionTop + window.innerHeight) * 0.3 + baseOffset;
      setOffset(value);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Tripled for seamless looping
  const row1 = [...projects, ...projects, ...projects];
  const row2 = [
    ...projects.slice().reverse(),
    ...projects.slice().reverse(),
    ...projects.slice().reverse(),
  ];

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative w-full overflow-hidden bg-[#0C1116] py-6 sm:pt-10 sm:pb-24 md:pt-12 md:pb-32"
    >
      {/* Ambient background — continues the About section's gradient/dot-grid/glow treatment */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* base mood gradient: picks up About's closing tone and settles into Work's neutral charcoal */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, #0C1116 0%, #0D110F 18%, #0C0C0C 45%, #0C0C0C 100%)',
          }}
        />
        {/* violet glow, top-left — exact mirror of About's bottom-left glow (same size/opacity/blur/gradient), so the seam reads as one continuous glow */}
        <div
          className="absolute -left-[12%] -top-[15%] h-[55vh] w-[55vh] rounded-full opacity-[0.2] blur-[120px]"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, #2A3560 0%, transparent 70%)',
          }}
        />
        {/* faint magenta glow, lower-right — quiet nod to the project accent color, kept low so it never fights the cards */}
        <div
          className="absolute -right-[14%] bottom-[-20%] h-[50vh] w-[50vh] rounded-full opacity-[0.12] blur-[130px]"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, #7621B0 0%, transparent 70%)',
          }}
        />
        {/* dot grid, same scale and tone as the hero/about sections, faded further here so it stays quiet behind the cards */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.22]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="workDotGrid"
              width="34"
              height="34"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1.1" cy="1.1" r="1.1" fill="#8A93A6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#workDotGrid)" />
        </svg>
        {/* fine grain, matching the hero/about so the texture stays consistent across both seams */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.04] mix-blend-overlay"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="workGrain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="2"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#workGrain)" />
        </svg>
      </div>

      {/* Heading */}
      <FadeIn y={40} className="relative z-10 mb-3 px-5 text-center sm:mb-6 sm:px-8 md:px-10">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 12vw, 160px)' }}
        >
          Work
        </h2>
      </FadeIn>

      {/* Subtitle */}
      <FadeIn
        y={20}
        delay={0.2}
        className="relative z-10 mb-6 px-5 text-center sm:mb-16 sm:px-8 md:px-10"
      >
        <p
          className="mx-auto max-w-[800px] font-light leading-relaxed text-[#D7E2EA]/70"
          style={{ fontSize: 'clamp(1.2rem, 1.3vw, 1.1rem)' }}
        >
          A collection of branding, print, social media, and promotional design projects.
        </p>
        <div className="mx-auto mt-4 h-[2px] w-14 bg-gradient-to-r from-[#B600A8] to-[#7621B0] sm:mt-6 sm:w-16" />
      </FadeIn>

      {/* Row 1 - moves right */}
      <div
        className="relative z-10 mb-3 flex gap-3 sm:mb-4 sm:gap-4"
        style={{
          transform: `translateX(${offset - 200}px)`,
          willChange: 'transform',
        }}
      >
        {row1.map((project, i) => (
          <ProjectCard key={`r1-${i}`} project={project} />
        ))}
      </div>

      {/* Row 2 - moves left */}
      <div
        className="relative z-10 flex gap-3 sm:gap-4"
        style={{
          transform: `translateX(${-(offset - 200)}px)`,
          willChange: 'transform',
        }}
      >
        {row2.map((project, i) => (
          <ProjectCard key={`r2-${i}`} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Work;