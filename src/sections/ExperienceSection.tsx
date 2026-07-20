import { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import FadeIn from '../components/FadeIn';

// Get image path - handles both localhost and GitHub Pages automatically
const getImagePath = (path: string) => {
  const baseUrl = import.meta.env.BASE_URL;
  return `${baseUrl}${path.startsWith('/') ? path.slice(1) : path}`;
};

const experiences = [
  {
    num: '01',
    category: 'AI / QA',
    role: 'AI Content Specialist',
    company: 'Handshake AI — Project Hedgedog',
    date: 'Jan 2026 – Present',
    image: '/Experienceimages/image1.png',
    bullets: [
      'Reviewed audio, visual, and text outputs from AI models to check their accuracy, relevance, and overall quality.',
      'Helped improve AI systems by identifying model weaknesses and clearly documenting common patterns.',
      'Analyzed project metrics, identified when results exceeded expected limits, and reported issues before production.',
      'Evaluated AI responses based on project requirements to ensure they remained relevant and reliable.',
      'Documented recurring quality issues to support model training and improve future accuracy.',
    ],
    tags: ['Generative AI', 'Agentic AI', 'Quality Control', 'Multimodal Review'],
  },
  {
    num: '02',
    category: 'Hospitality',
    role: 'Front Desk Associate',
    company: 'Residence Inn by Marriott',
    date: 'Feb 2025 – Present',
    image: '/Experienceimages/image2.jpeg',
    bullets: [
      'Assisted guests with check in and check out while providing friendly and efficient customer service.',
      'Maintained high guest satisfaction by paying close attention to their needs and concerns.',
      'Handled booking issues calmly during busy hours and worked with the team to find quick solutions.',
      'Shared helpful information about rooms and nearby places to make guests feel welcome.',
      'Worked closely with team members during high volume shifts to keep operations running smoothly.',
    ],
    tags: ['Customer Experience', 'Conflict Resolution', 'Team Collaboration', 'Hospitality'],
  },
  {
    num: '03',
    category: 'QA / Dev',
    role: 'Beta Tester',
    company: 'Virtual Archives',
    date: 'Feb 2026 – Mar 2026',
    image: '/Experienceimages/image3.png',
    bullets: [
      'Tested the Virtual Archives platform to identify bugs before its public release.',
      'Improved the bug reporting process to help the development team review and fix issues faster.',
      'Identified technical issues and unusual cases that automated testing did not catch.',
      'Documented clear steps for each bug so the development team could reproduce and verify the issue.',
      'Tested every form on the platform to make sure it worked correctly before production deployment.',
    ],
    tags: ['Functional Testing', 'Bug Reporting', 'QA Automation', 'Software Stability'],
  },
  {
    num: '04',
    category: 'Design',
    role: 'UI/UX Designer',
    company: 'Endive Infotech',
    date: 'Nov 2023 – Apr 2024',
    image: '/Experienceimages/image4.png',
    bullets: [
      'Worked with clients to understand their design needs and used their feedback to create polished final designs.',
      'Created email marketing templates and wireframes to make campaigns clear and easy to understand.',
      'Designed website elements, social media posts, and promotional videos for active marketing campaigns.',
      'Managed multiple client projects and completed revisions on time to keep each campaign on schedule.',
      'Followed brand guidelines to maintain consistent designs across websites, social media, and email campaigns.',
    ],
    tags: ['Figma', 'Illustrator', 'Photoshop', 'Clipchamp', 'Wireframing'],
  },
  {
    num: '05',
    category: 'Leadership',
    role: 'Leadership & Community Involvement',
    company: 'Badminton Club · NJIT Career Fairs · Community Events',
    date: 'Ongoing',
    image: '/Experienceimages/image5.jpg',
    bullets: [
      'Organize weekly open play sessions as a Badminton Club Associate Member by coordinating courts and equipment.',
      'Volunteered at the NJIT career fairs in Fall 2025 and Spring 2026 by checking in employers and helping students during large recruitment events.',
      'Led community events at a local religious place by managing event activities and communicating with attendees.',
      'Won gold medals in Table Tennis, Badminton, and Pickleball Doubles, demonstrating strong teamwork and coordination.',
      'Placed 129th in the International Mathematics Championship, demonstrating strong mathematical and analytical skills.',
    ],
    tags: ['Event Coordination','Volunteering','Team Leadership','Multilingual (ENGLISH/HINDI/GUJARATI)'],
  },
];

interface ExperienceCardProps {
  experience: (typeof experiences)[number];
  index: number;
  totalCards: number;
  scrollYProgress: MotionValue<number>;
}

const ExperienceCard = ({
  experience,
  index,
  totalCards,
  scrollYProgress,
}: ExperienceCardProps) => {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const rangeStart = index * 0.25;
  const rangeEnd = 1;
  const scale = useTransform(scrollYProgress, [rangeStart, rangeEnd], [
    1,
    targetScale,
  ]);

  const imagePath = useMemo(() => getImagePath(experience.image), [experience.image]);

  return (    
    <motion.div
      className="sticky top-24 flex h-[85vh] w-full items-center justify-center md:top-32"
      style={{ top: index * 28, scale }}
    >
      
      <div className="relative flex h-full w-full flex-col gap-5 overflow-y-auto rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:gap-6 sm:rounded-[50px] sm:p-8 md:gap-7 md:rounded-[60px] md:p-10">
        {/* Top row - number, category, role, company, date */}
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
          <span
            className="font-black leading-none text-[#D7E2EA]"
            style={{ fontSize: 'clamp(3rem, 7vw, 100px)' }}
          >
            {experience.num}
          </span>
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <span
                className="rounded-full border-2 border-[#D7E2EA] px-4 py-1.5 font-medium uppercase tracking-wider text-[#D7E2EA]"
                style={{ fontSize: 'clamp(0.7rem, 1vw, 0.85rem)' }}
              >
                {experience.category}
              </span>
              <span
                className="font-light uppercase tracking-widest text-[#D7E2EA]/60"
                style={{ fontSize: 'clamp(0.8rem, 1.05vw, 0.95rem)' }}
              >
                {experience.date}
              </span>
            </div>
            <h3
              className="font-black uppercase leading-tight text-[#D7E2EA]"
              style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.6rem)' }}
            >
              {experience.role}
            </h3>
            <p
              className="font-light uppercase tracking-widest text-[#D7E2EA]/60"
              style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1.05rem)' }}
            >
              {experience.company}
            </p>
          </div>
        </div>

        {/* Image */}
        <div
          className="w-full overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"
          style={{ height: 'clamp(180px, 28vh, 320px)' }}
        >
          <img
            src={imagePath}
            alt={experience.role}
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>

        {/* Bullets */}
        <ul className="flex flex-col gap-3 sm:gap-4">
          {experience.bullets.map((bullet, i) => (
            <li
              key={i}
              className="flex items-start gap-3 font-light leading-relaxed text-[#D7E2EA] sm:gap-4"
              style={{ fontSize: 'clamp(0.95rem, 1.3vw, 1.15rem)' }}
            >
              <span className="mt-3 h-[2px] w-4 flex-shrink-0 bg-[#D7E2EA]/60 sm:w-5" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {experience.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border-2 border-[#D7E2EA]/40 px-4 py-1.5 font-medium uppercase tracking-wider text-[#D7E2EA]/80"
              style={{ fontSize: 'clamp(0.7rem, 1vw, 0.85rem)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative z-10 -mt-10 w-full rounded-t-[40px] bg-[#0C0C0C] sm:-mt-12 sm:rounded-t-[50px] md:-mt-14 md:rounded-t-[60px]"
      style={{ height: `${experiences.length * 100}vh` }}
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

      <div className="relative z-0 pt-24 text-center sm:pt-32 md:pt-40">
        <FadeIn y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Experience
          </h2>
        </FadeIn>
      </div>

      <div className="relative z-10 mx-auto mt-16 w-full max-w-7xl px-4 sm:mt-20 sm:px-6 md:mt-24 md:px-8">
        {experiences.map((experience, i) => (
          <ExperienceCard
            key={experience.num}
            experience={experience}
            index={i}
            totalCards={experiences.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;