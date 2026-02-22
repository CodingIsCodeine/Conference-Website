import jmpLogo from "@/assets/jmp-logo.png";
import mediaPartnerLogo from "@/assets/icn_logo.png";
import cabeqLogo from "@/assets/cabeq.png";
import proceedingsLogo from "@/assets/proceedings.png";

const mediaPartners = [
  {
    name: "ICN News",
    logo: mediaPartnerLogo,
  },
];

const knowledgePartners = [
  {
    name: "JMP",
    logo: jmpLogo,
  },
];

const journalPartners = [
  {
    name: "Chemical and Biochemical Engineering Quarterly (CABEQ)",
    logo: cabeqLogo,
    link: "http://silverstripe.fkit.hr/cabeq/",
  },
  {
    name: "Proceedings International",
    logo: proceedingsLogo,
    link: "https://conferenceproceedings.international",
  },
];

const knowledgePartnerLink = "https://www.jmp.com";
const mediaPartnerLink = "https://www.indianchemicalnews.com/";

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

        {/* ---------------- PARTNERS ---------------- */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 text-center">

          {/* Knowledge Partner */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-white/60">
              Knowledge Partner
            </p>
            <div className="flex justify-center">
              {knowledgePartners.map((kp, i) => (
                <a
                  key={i}
                  href={knowledgePartnerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <div className="h-16 w-40 bg-white rounded flex items-center justify-center p-2 hover:scale-105 transition-transform">
                    <img
                      src={kp.logo}
                      alt={kp.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Media Partner */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-white/60">
              Media Partner
            </p>
            <div className="flex justify-center">
              {mediaPartners.map((mp, i) => (
                <a
                  key={i}
                  href={mediaPartnerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <div className="h-16 w-40 bg-white rounded flex items-center justify-center p-2 hover:scale-105 transition-transform">
                    <img
                      src={mp.logo}
                      alt={mp.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Journal Partner */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-white/60">
              Journal Partner
            </p>
            <div className="flex justify-center gap-4">
              {journalPartners.map((jp, i) => (
                <a
                  key={i}
                  href={jp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <div className="h-16 w-40 bg-white rounded flex items-center justify-center p-2 hover:scale-105 transition-transform">
                    <img
                      src={jp.logo}
                      alt={jp.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </a>
              ))}
            </div>
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