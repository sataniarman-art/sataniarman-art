import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface MobileMenuProps {
  links: string[];
  onLinkClick: (id: string) => void;
}

const MobileMenu = ({ links, onLinkClick }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (link: string) => {
    setIsOpen(false);
    onLinkClick(link);
  };

  return (
    <>
      {/* Hamburger Button - only visible on mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-6 top-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#D7E2EA]/40 bg-[#0C0C0C]/80 backdrop-blur-sm transition-all duration-200 hover:border-[#D7E2EA] hover:bg-[#0C0C0C] sm:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X size={20} className="text-[#D7E2EA]" />
        ) : (
          <Menu size={20} className="text-[#D7E2EA]" />
        )}
      </button>

      {/* Dropdown Menu - only visible on mobile when open */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm sm:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Panel */}
          <div className="fixed right-4 top-20 z-50 flex w-48 flex-col gap-2 rounded-2xl border-2 border-[#D7E2EA]/30 bg-[#0C0C0C]/95 p-4 backdrop-blur-md sm:hidden">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => handleClick(link)}
                className="rounded-lg px-4 py-2 text-left text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10"
              >
                {link}
              </button>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default MobileMenu;
