import { ReactNode } from 'react';

interface ContactButtonProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  targetId?: string;
}

const ContactButton = ({
  children = 'Contact Me',
  className = '',
  onClick,
  href,
  targetId = 'contact',
}: ContactButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (onClick) {
      onClick();
      return;
    }
    
    // Smooth scroll to target section
    const el = document.getElementById(targetId);
    if (el) {
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <a
      href={href || `#${targetId}`}
      onClick={handleClick}
      className={`group relative inline-flex items-center justify-center rounded-full font-medium uppercase tracking-widest text-white transition-transform duration-200 hover:scale-[1.03] ${className}`}
      style={{
        background:
          'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow:
          '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
        outline: '2px solid #ffffff',
        outlineOffset: '-3px',
      }}
    >
      <span className="relative z-10 px-8 py-3 text-xs sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base">
        {children}
      </span>
    </a>
  );
};

export default ContactButton;
