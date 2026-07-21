import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-5 py-20 sm:px-8 md:px-10 bg-[#0D120E]"
    >
      {/* Ambient background — picks up exactly where the hero's gradient leaves off */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* base mood gradient: continues the hero's dark olive into a deep near-black base */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, #131A11 0%, #0E130E 20%, #0A0B0C 55%, #0B0D10 80%, #0C1116 100%)',
          }}
        />
        {/* amber glow, top edge — exact mirror of the hero's bottom-right glow (same size/opacity/blur/gradient), just flipped to the top, so the seam reads as one continuous glow */}
        <div
          className="absolute -right-[11%] -top-[17%] h-[58vh] w-[58vh] rounded-full opacity-[0.3] blur-[115px]"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, #9A5A22 0%, transparent 70%)',
          }}
        />
        {/* faint teal/violet glow, lower-left — quiet counterweight further down the page */}
        <div
          className="absolute -left-[12%] bottom-[-15%] h-[55vh] w-[55vh] rounded-full opacity-[0.2] blur-[120px]"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, #2A3560 0%, transparent 70%)',
          }}
        />
        {/* dot grid, same scale and tone as the hero's */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.3]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="aboutDotGrid"
              width="34"
              height="34"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1.1" cy="1.1" r="1.1" fill="#8A93A6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#aboutDotGrid)" />
        </svg>
        {/* faint line-art: triangle outline, lower-right */}
        <svg
          className="absolute bottom-[10%] right-[6%] h-[16vh] w-[16vh] opacity-[0.12]"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M50 12 L88 84 L12 78 Z" stroke="#C7D0DC" strokeWidth="1" />
        </svg>
        {/* fine grain, matching the hero so the texture stays consistent across the seam */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.04] mix-blend-overlay"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="aboutGrain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="2"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#aboutGrain)" />
        </svg>
      </div>

      <FadeIn
        x={-80}
        delay={0.1}
        duration={0.9}
        className="pointer-events-none absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-[5]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt=""
          className="w-[120px] sm:w-[160px] md:w-[210px]"
          draggable={false}
        />
      </FadeIn>

      <FadeIn
        x={-80}
        delay={0.25}
        duration={0.9}
        className="pointer-events-none absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-[5]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt=""
          className="w-[100px] sm:w-[140px] md:w-[180px]"
          draggable={false}
        />
      </FadeIn>

      <FadeIn
        x={80}
        delay={0.15}
        duration={0.9}
        className="pointer-events-none absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-[5]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt=""
          className="w-[120px] sm:w-[160px] md:w-[210px]"
          draggable={false}
        />
      </FadeIn>

      <FadeIn
        x={80}
        delay={0.3}
        duration={0.9}
        className="pointer-events-none absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-[5]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt=""
          className="w-[130px] sm:w-[170px] md:w-[220px]"
          draggable={false}
        />
      </FadeIn>

      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn y={40} className="text-center">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            text="I am Arman, a CS student at NJIT who genuinely loves design and code. Currently, I am a 2nd year student with a cumulative GPA being **3.85**. I spend most of my time on Figma building interfaces, then jumping into HTML, CSS, and JavaScript to actually bring them to life. I've worked with real clients on branding, web design, and AI content, and I use generative AI to do get fast and better results. I also use Adobe tools like Illustrator and Photoshop to create designs for social media posts, banners and website elements."
            className="max-w-[1000px] text-justify font-medium leading-relaxed text-[#D7E2EA] text-[clamp(1.1rem,1.8vw,1.5rem)]"
          />

          <FadeIn y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
