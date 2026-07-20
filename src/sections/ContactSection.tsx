import FadeIn from '../components/FadeIn';
import { Mail, Phone, MapPin, FileText, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative z-10 -mt-10 w-full overflow-hidden rounded-t-[40px] px-5 py-12 text-[#0C0C0C] sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-16 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-20"
      style={{ backgroundColor: '#FAF7F2' }}
    >
      {/* Ambient background — same light-mode language as Skills: soft corner glows + dot grid.
          Amber glow sits top-left to pick up where Experience's bottom-right amber glow leaves off,
          so the seam between the two sections reads as one continuous light source. */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* amber glow, top-left — continues the amber tone from the Experience section above */}
        <div
          className="absolute -left-[12%] -top-[20%] h-[55vh] w-[55vh] rounded-full opacity-[0.35] blur-[115px]"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, #E39355 0%, transparent 70%)',
          }}
        />
        {/* magenta glow, bottom-right — echoes the brand accent used in Skills and the CTA gradient */}
        <div
          className="absolute -right-[14%] bottom-[-16%] h-[55vh] w-[55vh] rounded-full opacity-[0.22] blur-[120px]"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, #B600A8 0%, transparent 72%)',
          }}
        />
        {/* soft violet glow, center — keeps the middle of the section from reading flat */}
        <div
          className="absolute left-[35%] top-[15%] h-[42vh] w-[42vh] rounded-full opacity-[0.14] blur-[130px]"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, #7621B0 0%, transparent 72%)',
          }}
        />
        {/* dot grid, same scale/opacity as Skills */}
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="contactDotGrid"
              width="34"
              height="34"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1.1" cy="1.1" r="1.3" fill="#0C0C0C" fillOpacity="0.22" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contactDotGrid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 sm:gap-10 md:gap-12">
        {/* Heading */}
        <FadeIn y={40} className="text-center">
          <h2
            className="font-black uppercase leading-none tracking-tight text-[#0C0C0C]"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 120px)' }}
          >
            Contact
          </h2>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn y={20} delay={0.2} className="text-center">
          <p
            className="max-w-[480px] font-light leading-relaxed text-[#0C0C0C]/60"
            style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1.1rem)' }}
          >
            Let’s connect, whether you have a project, an opportunity, or just want to talk about design and development.
          </p>
        </FadeIn>

        {/* Contact Cards Grid */}
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:gap-5">
          {/* Email */}
          <FadeIn y={30} delay={0.3} x={-30}>
            <a
              href="mailto:sataniarman@gmail.com"
              className="group flex items-center gap-3 rounded-2xl border-2 border-[#0C0C0C]/15 bg-white/70 p-4 backdrop-blur-sm transition-all duration-300 hover:border-[#0C0C0C]/40 hover:bg-white sm:gap-4 sm:p-5"
            >
              <div
                className="flex flex-shrink-0 items-center justify-center rounded-xl border-2 border-[#0C0C0C]/30 text-[#0C0C0C]"
                style={{ width: 'clamp(40px, 5vw, 55px)', height: 'clamp(40px, 5vw, 55px)' }}
              >
                <Mail size={22} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-0.5 overflow-hidden">
                <span
                  className="font-light uppercase tracking-widest text-[#0C0C0C]/60"
                  style={{ fontSize: 'clamp(0.65rem, 0.9vw, 0.75rem)' }}
                >
                  Email
                </span>
                <span
                  className="truncate font-medium text-[#0C0C0C] group-hover:underline"
                  style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1rem)' }}
                >
                  sataniarman@gmail.com
                </span>
              </div>
            </a>
          </FadeIn>

          {/* Phone */}
          <FadeIn y={30} delay={0.4} x={30}>
            <a
              href="tel:+17324668177"
              className="group flex items-center gap-3 rounded-2xl border-2 border-[#0C0C0C]/15 bg-white/70 p-4 backdrop-blur-sm transition-all duration-300 hover:border-[#0C0C0C]/40 hover:bg-white sm:gap-4 sm:p-5"
            >
              <div
                className="flex flex-shrink-0 items-center justify-center rounded-xl border-2 border-[#0C0C0C]/30 text-[#0C0C0C]"
                style={{ width: 'clamp(40px, 5vw, 55px)', height: 'clamp(40px, 5vw, 55px)' }}
              >
                <Phone size={22} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-0.5">
                <span
                  className="font-light uppercase tracking-widest text-[#0C0C0C]/60"
                  style={{ fontSize: 'clamp(0.65rem, 0.9vw, 0.75rem)' }}
                >
                  Phone
                </span>
                <span
                  className="font-medium text-[#0C0C0C] group-hover:underline"
                  style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1rem)' }}
                >
                  (732) 466-8177
                </span>
              </div>
            </a>
          </FadeIn>

          {/* Resume */}
          <FadeIn y={30} delay={0.5} x={-30}>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-2xl border-2 border-[#0C0C0C]/15 bg-white/70 p-4 backdrop-blur-sm transition-all duration-300 hover:border-[#0C0C0C]/40 hover:bg-white sm:gap-4 sm:p-5"
            >
              <div
                className="flex flex-shrink-0 items-center justify-center rounded-xl border-2 border-[#0C0C0C]/30 text-[#0C0C0C]"
                style={{ width: 'clamp(40px, 5vw, 55px)', height: 'clamp(40px, 5vw, 55px)' }}
              >
                <FileText size={22} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-0.5">
                <span
                  className="font-light uppercase tracking-widest text-[#0C0C0C]/60"
                  style={{ fontSize: 'clamp(0.65rem, 0.9vw, 0.75rem)' }}
                >
                  Resume
                </span>
                <span
                  className="font-medium text-[#0C0C0C] group-hover:underline"
                  style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1rem)' }}
                >
                  View PDF
                </span>
              </div>
            </a>
          </FadeIn>

          {/* LinkedIn */}
          <FadeIn y={30} delay={0.55} x={30}>
            <a
              href="https://www.linkedin.com/in/arman-satani/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-2xl border-2 border-[#0C0C0C]/15 bg-white/70 p-4 backdrop-blur-sm transition-all duration-300 hover:border-[#0C0C0C]/40 hover:bg-white sm:gap-4 sm:p-5"
            >
              <div
                className="flex flex-shrink-0 items-center justify-center rounded-xl border-2 border-[#0C0C0C]/30 text-[#0C0C0C]"
                style={{ width: 'clamp(40px, 5vw, 55px)', height: 'clamp(40px, 5vw, 55px)' }}
              >
                <Linkedin size={22} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-0.5">
                <span
                  className="font-light uppercase tracking-widest text-[#0C0C0C]/60"
                  style={{ fontSize: 'clamp(0.65rem, 0.9vw, 0.75rem)' }}
                >
                  LinkedIn
                </span>
                <span
                  className="font-medium text-[#0C0C0C] group-hover:underline"
                  style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1rem)' }}
                >
                  Connect with me
                </span>
              </div>
            </a>
          </FadeIn>

          {/* Address - Centered, spans full width */}
          <FadeIn y={30} delay={0.6} className="col-span-1 sm:col-span-2">
            <div className="mx-auto flex max-w-md items-center gap-3 rounded-2xl border-2 border-[#0C0C0C]/15 bg-white/70 p-4 backdrop-blur-sm sm:gap-4 sm:p-5">
              <div
                className="flex flex-shrink-0 items-center justify-center rounded-xl border-2 border-[#0C0C0C]/30 text-[#0C0C0C]"
                style={{ width: 'clamp(40px, 5vw, 55px)', height: 'clamp(40px, 5vw, 55px)' }}
              >
                <MapPin size={22} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-0.5">
                <span
                  className="font-light uppercase tracking-widest text-[#0C0C0C]/60"
                  style={{ fontSize: 'clamp(0.65rem, 0.9vw, 0.75rem)' }}
                >
                  Address
                </span>
                <span
                  className="font-medium text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1rem)' }}
                >
                  South Amboy, NJ
                </span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Bottom CTA Button */}
        <FadeIn y={20} delay={0.8} className="mt-2 text-center sm:mt-4">
          <a
            href="mailto:sataniarman@gmail.com"
            className="group relative inline-flex items-center justify-center rounded-full font-medium uppercase tracking-widest text-white transition-transform duration-200 hover:scale-[1.03]"
            style={{
              background:
                'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
              boxShadow:
                '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
              outline: '2px solid #ffffff',
              outlineOffset: '-3px',
              fontSize: 'clamp(0.8rem, 1.1vw, 0.95rem)',
              padding: 'clamp(0.7rem, 1.2vw, 0.95rem) clamp(1.5rem, 3.5vw, 2.8rem)',
            }}
          >
            Get In Touch
          </a>
        </FadeIn>
      </div>
    </section>
  );
};

export default ContactSection;