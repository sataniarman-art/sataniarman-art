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

// How many times to repeat the project list in the DOM. This just needs to be
// large enough that 2x the measured "period" width always exceeds the widest
// viewport we render at — the modulo math below is what actually makes the
// loop infinite, this is only a rendering buffer.
const REPEAT_COUNT = 6;

const ProjectCard = ({
  project,
  innerRef,
}: {
  project: (typeof projects)[number];
  innerRef?: React.Ref<HTMLDivElement>;
}) => {
  return (
    <div
      ref={innerRef}
      className="group block w-[240px] flex-shrink-0 overflow-hidden rounded-2xl border-2 border-transparent bg-[#1a1a1a] transition-all duration-300 hover:border-[#D7E2EA]/40 sm:w-[340px] md:w-[380px]"
    >
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

const mod = (n: number, m: number) => ((n % m) + m) % m;

const Work = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [manualScroll, setManualScroll] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  // Refs on the first card of set 0 and the first card of set 1. The
  // pixel distance between them is the exact width of one full loop
  // "period" (cards + gaps), measured live from the DOM so it stays
  // correct across breakpoints and card-width changes.
  const firstCardRef = useRef<HTMLDivElement>(null);
  const secondSetFirstCardRef = useRef<HTMLDivElement>(null);
  const [period, setPeriod] = useState(0);

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

  // Measure the loop period whenever layout can change.
  useEffect(() => {
    const measure = () => {
      if (firstCardRef.current && secondSetFirstCardRef.current) {
        const a = firstCardRef.current.getBoundingClientRect().left;
        const b = secondSetFirstCardRef.current.getBoundingClientRect().left;
        const width = b - a;
        if (width > 0) setPeriod(width);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Drag to scroll - mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - dragStart;
    setDragOffset(delta);
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setManualScroll((prev) => prev + dragOffset);
      setDragOffset(0);
    }
    setIsDragging(false);
  };

  // Touch support
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const delta = e.touches[0].clientX - dragStart;
    setDragOffset(delta);
  };

  const handleTouchEnd = () => {
    if (isDragging) {
      setManualScroll((prev) => prev - dragOffset);
      setDragOffset(0);
    }
    setIsDragging(false);
  };

  // Arrow scroll - unbounded, state just accumulates freely; the
  // modulo wrap at render time handles infinite looping either way.
  const scroll = (direction: 'left' | 'right') => {
    const scrollAmount = 400;
    setManualScroll((prev) =>
      direction === 'left' ? prev - scrollAmount : prev + scrollAmount
    );
  };

  // Combined raw offset from parallax scroll, manual scroll, and drag.
  const rawOffset = offset + manualScroll + dragOffset - 200;

  // Wrap into [-period, 0) so the visible window always lands inside
  // the rendered copies, no matter how far someone has scrolled or
  // dragged in either direction. Because the pattern repeats every
  // `period` px, the wrap point is visually seamless.
  const combinedOffset =
    period > 0 ? mod(rawOffset, period) - period : rawOffset;

  const carouselRow = Array.from({ length: REPEAT_COUNT }).flatMap(() => projects);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative w-full overflow-hidden bg-[#0C1116] py-6 sm:pt-10 sm:pb-24 md:pt-12 md:pb-32"
    >
      {/* Ambient background — continues the About section's gradient/dot-grid/glow treatment */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, #0C1116 0%, #0D110F 18%, #0C0C0C 45%, #0C0C0C 100%)',
          }}
        />
        <div
          className="absolute -left-[12%] -top-[15%] h-[55vh] w-[55vh] rounded-full opacity-[0.2] blur-[120px]"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, #2A3560 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute -right-[14%] bottom-[-20%] h-[50vh] w-[50vh] rounded-full opacity-[0.12] blur-[130px]"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, #7621B0 0%, transparent 70%)',
          }}
        />
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

      {/* Scroll Controls Container */}
      <div className="relative z-10 mb-6 flex items-center justify-center gap-3 sm:mb-8 sm:gap-4">
        <button
          onClick={() => scroll('right')}
          aria-label="Scroll projects right"
          className="group flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#D7E2EA]/30 bg-[#1a1a1a]/50 transition-all duration-300 hover:border-[#B600A8] hover:bg-[#B600A8]/10 sm:h-12 sm:w-12"
        >
          <svg
            className="h-5 w-5 transition-colors duration-300 group-hover:text-[#B600A8] sm:h-6 sm:w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <span className="select-none text-xs text-[#D7E2EA]/50 sm:text-sm">
          Drag or use arrows
        </span>

        <button
          onClick={() => scroll('left')}
          aria-label="Scroll projects left"
          className="group flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#D7E2EA]/30 bg-[#1a1a1a]/50 transition-all duration-300 hover:border-[#B600A8] hover:bg-[#B600A8]/10 sm:h-12 sm:w-12"
        >
          <svg
            className="h-5 w-5 transition-colors duration-300 group-hover:text-[#B600A8] sm:h-6 sm:w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Carousel Container */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={`relative z-10 overflow-hidden ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
      >
        {/* Repeated rows - infinite loop in both directions via modulo-wrapped transform */}
        <div
          className="relative flex gap-3 sm:gap-4"
          style={{
            transform: `translateX(${combinedOffset}px)`,
            willChange: 'transform',
            transition: isDragging ? 'none' : 'transform 0.1s ease-out',
          }}
        >
          {carouselRow.map((project, i) => (
            <ProjectCard
              key={`carousel-${i}`}
              project={project}
              innerRef={
                i === 0
                  ? firstCardRef
                  : i === projects.length
                    ? secondSetFirstCardRef
                    : undefined
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;