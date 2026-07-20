import { ReactNode, useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const Character = ({
  char,
  progress,
  start,
  end,
  bold = false,
}: {
  char: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
  bold?: boolean;
}) => {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  // Use regular space (not non-breaking) so words separate visually
  return (
    <span className={`relative inline ${bold ? 'font-bold' : ''}`}>
      <span className="invisible">{char}</span>
      <motion.span
        className="absolute inset-0"
        style={{ opacity }}
      >
        {char}
      </motion.span>
    </span>
  );
};

const AnimatedText = ({ text, className = '' }: AnimatedTextProps) => {
  // Split text into tokens: words and spaces
  type Token = { type: 'word' | 'space'; chars: string[]; bold: boolean };

  const tokens: Token[] = [];
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  parts.forEach((part) => {
    const isBold = part.startsWith('**') && part.endsWith('**');
    const cleanText = isBold ? part.slice(2, -2) : part;

    // Split by whitespace but preserve the spaces
    const wordParts = cleanText.split(/(\s+)/);

    wordParts.forEach((wordPart) => {
      if (wordPart === '') return;

      if (/^\s+$/.test(wordPart)) {
        // Whitespace - keep as a single space token (regular space, not non-breaking)
        tokens.push({
          type: 'space',
          chars: [' '],
          bold: isBold,
        });
      } else {
        // Word - keep all characters together so they don't break
        tokens.push({
          type: 'word',
          chars: Array.from(wordPart),
          bold: isBold,
        });
      }
    });
  });

  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 1.0', 'end 0.4'],
  });


  let charIndex = 0;
  const total = tokens.reduce((sum, token) => sum + token.chars.length, 0);

  return (
    <p
      ref={ref}
      className={className}
      style={{
        wordBreak: 'normal',
        overflowWrap: 'break-word',
        hyphens: 'none',
        WebkitHyphens: 'none',
      }}
    >
      {tokens.map((token, tokenIdx) => {
        if (token.type === 'word') {
          // Wrap each word in nowrap span so it doesn't break
          return (
            <span
              key={tokenIdx}
              className="inline-block whitespace-nowrap align-baseline"
            >
              {token.chars.map((char, i) => {
                const start = charIndex / total;
                const end = (charIndex + 1) / total;
                charIndex++;
                return (
                  <Character
                    key={i}
                    char={char}
                    progress={scrollYProgress}
                    start={start}
                    end={end}
                    bold={token.bold}
                  />
                );
              })}
            </span>
          );
        } else {
          // Space - render as regular space character with normal flow
          return (
            <span key={tokenIdx} className="inline">
              {token.chars.map((char, i) => {
                const start = charIndex / total;
                const end = (charIndex + 1) / total;
                charIndex++;
                return (
                  <Character
                    key={i}
                    char={char}
                    progress={scrollYProgress}
                    start={start}
                    end={end}
                    bold={token.bold}
                  />
                );
              })}
            </span>
          );
        }
      })}
    </p>
  );
};

export default AnimatedText;
