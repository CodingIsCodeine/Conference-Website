// components/Ticker.tsx
import React from "react";

const Message = () => (
  <span className="text-sm font-medium mx-4">
    📢 Registrations are now <strong>CLOSED</strong>
  </span>
);

// Each set repeats the message enough to overflow any viewport. Two identical
// sets are rendered and the row translates exactly -50% (one set), so the loop
// restarts seamlessly — no gap, no empty space, no pause.
const REPEATS_PER_SET = 8;

const MarqueeSet = ({ ariaHidden = false }: { ariaHidden?: boolean }) => (
  <div className="flex shrink-0" aria-hidden={ariaHidden || undefined}>
    {Array.from({ length: REPEATS_PER_SET }).map((_, i) => (
      <Message key={i} />
    ))}
  </div>
);

const Ticker = () => {
  return (
    <div className="bg-primary text-primary-foreground py-3 overflow-hidden">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        <MarqueeSet />
        <MarqueeSet ariaHidden />
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Ticker;
