// components/Ticker.tsx
import React from "react";

const Ticker = () => {
  return (
    <div className="bg-primary text-primary-foreground py-3 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-sm font-medium mx-4">
          📢 Registrations are now <strong>CLOSED</strong>
        </span>
        <span className="text-sm font-medium mx-4">
          📢 Registrations are now <strong>CLOSED</strong>
        </span>
        <span className="text-sm font-medium mx-4">
          📢 Registrations are now <strong>CLOSED</strong>
        </span>
        
        
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Ticker;
