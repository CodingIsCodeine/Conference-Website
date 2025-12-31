const sponsors = [
  {
    name: "Knowledge Partner: JMP",
    logo: "src/assets/jmp-logo.png",
  },
  {
    name: "Sahajanand Medical Technologies Limited",
    logo: "/images/smt.png",
  },
  {
    name: "Meril Life Sciences Private Limited",
    logo: "/images/meril.jpeg",
  },
  // Add more sponsors here later
];

const FooterSponsorsTicker = () => {
  return (
    <a
      href="/sponsors"
      className="block cursor-pointer hover:opacity-90 transition-opacity"
      aria-label="View all sponsors"
    >
      <div className="relative overflow-hidden py-4">
        {/* Ticker Track */}
        <div className="flex animate-footer-ticker">
          
          {/* First set */}
          <div className="flex gap-10 items-center px-6">
            {sponsors.map((s, i) => (
              <div key={`a-${i}`} className="flex items-center gap-3 opacity-80">
                <img
                  src={s.logo}
                  alt={s.name}
                  className="h-8 w-auto object-contain bg-white rounded px-2 py-1"
                />
                <span className="text-sm text-white/70 whitespace-nowrap">
                  {s.name}
                </span>
              </div>
            ))}
          </div>

          {/* Duplicate set */}
          <div className="flex gap-10 items-center px-6">
            {sponsors.map((s, i) => (
              <div key={`b-${i}`} className="flex items-center gap-3 opacity-80">
                <img
                  src={s.logo}
                  alt={s.name}
                  className="h-8 w-auto object-contain bg-white rounded px-2 py-1"
                />
                <span className="text-sm text-white/70 whitespace-nowrap">
                  {s.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </a>
  );
};

export default FooterSponsorsTicker;