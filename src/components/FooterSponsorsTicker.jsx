import jmpLogo from "@/assets/jmp-logo.png";

const knowledgePartners = [
  {
    name: "JMP",
    logo: jmpLogo,
  },
];

const sponsors = [
  {
    name: "Sahajanand Medical Technologies Limited",
    logo: "/images/smt2.png",
  },
  {
    name: "Meril Life Sciences Private Limited",
    logo: "/images/meril2.jpeg",
  },
];

const REPEAT_COUNT = 100; // 👈 ensures full width coverage on all screens

const FooterSponsorsTicker = () => {
  return (
    <a
      href="/sponsors"
      className="block cursor-pointer hover:opacity-95 transition-opacity"
      aria-label="View all sponsors"
    >
      <div className="relative overflow-hidden py-6 space-y-6">

        {/* ---------------- KNOWLEDGE PARTNER ---------------- */}
        <div className="text-center space-y-3">
          <p className="text-xs uppercase tracking-widest text-white/60">
            Knowledge Partner
          </p>

          <div className="flex justify-center">
            {knowledgePartners.map((kp, i) => (
              <img
                key={i}
                src={kp.logo}
                alt={kp.name}
                className="h-10 w-auto object-cover bg-white rounded px-4 py-2"
              />
            ))}
          </div>
        </div>

        {/* ---------------- SPONSORS TICKER ---------------- */}
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-widest text-center text-white/60">
            Gold Sponsors
          </p>

          <div className="relative overflow-hidden">
            <div className="flex w-max animate-footer-ticker">
              {Array.from({ length: REPEAT_COUNT }).map((_, idx) => (
                <div key={idx} className="flex gap-10 items-center px-6">
                  {sponsors.map((s, i) => (
                    <img
                      key={`${idx}-${i}`}
                      src={s.logo}
                      alt={s.name}
                      className="h-10 flex items-center justify-center bg-white rounded py-0.4 opacity-80 hover:opacity-100 transition-opacity"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </a>
  );
};

export default FooterSponsorsTicker;
