import { ArrowUpRight } from 'lucide-react';

interface LiveProjectButtonProps {
  href?: string;
}

const LiveProjectButton = ({ href = '#' }: LiveProjectButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base"
    >
      Live Project
      <ArrowUpRight size={18} strokeWidth={2} />
    </a>
  );
};

export default LiveProjectButton;
