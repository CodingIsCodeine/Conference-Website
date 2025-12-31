import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Ticker from "@/components/Ticker";

/* -------------------------------------------------
   TIER COLOR CONFIG (AUTO-SCALING)
------------------------------------------------- */
const tierStyles = {
  Platinum: {
    badge: "bg-gradient-to-r from-slate-200 to-slate-400 text-slate-900",
    accent: "border-slate-300",
  },
  Diamond: {
    badge: "bg-gradient-to-r from-blue-200 to-cyan-300 text-blue-900",
    accent: "border-cyan-300",
  },
  Gold: {
    badge: "bg-gradient-to-r from-yellow-200 to-amber-300 text-amber-900",
    accent: "border-amber-300",
  },
  Silver: {
    badge: "bg-gradient-to-r from-gray-200 to-slate-300 text-slate-900",
    accent: "border-slate-300",
  },
};

/* -------------------------------------------------
   FEATURED SPONSORS
------------------------------------------------- */
const featuredSponsors = [
  {
    name: "Sahajanand Medical Technologies Limited",
    tier: "Gold",
    logo: "/images/smt.png",
    website: "https://smtpl.com/",
  },
  {
    name: "Meril Life Sciences Private Limited",
    tier: "Gold",
    logo: "/images/meril.jpeg",
    website: "https://www.merillife.com/",
  },
];

const Sponsors = () => {
  const sponsorshipTiers = [
    {
      tier: "Platinum",
      amount: "₹5,00,000",
      color: "bg-gradient-to-r from-slate-200 to-slate-300",
      benefits: [
        "Logo on the backdrop",
        "Logo on the Entrance Gate",
        "20 min Speaker Slot",
        "07 Delegate Passes",
        "Stall for Exhibition",
        "Logo on each & every Banner, Poster, and Registration Kit",
        "Guest of Honour will be given at the Inaugural/Valedictory Function",
      ],
    },
    {
      tier: "Diamond",
      amount: "₹3,00,000",
      color: "bg-gradient-to-r from-blue-100 to-cyan-100",
      benefits: [
        "Logo on the backdrop",
        "Logo on the Entrance Gate",
        "15 min Speaker Slot",
        "04 Delegate Passes",
        "Stall for Exhibition",
        "Logo on each & every Banner, Poster, and Registration Kit",
      ],
    },
    {
      tier: "Gold",
      amount: "₹2,00,000",
      color: "bg-gradient-to-r from-yellow-100 to-amber-100",
      benefits: [
        "Logo on the backdrop",
        "Logo on the Entrance Gate",
        "07 min Speaker Slot",
        "03 Delegate Passes",
        "Stall for Exhibition",
      ],
    },
    {
      tier: "Silver",
      amount: "₹1,00,000",
      color: "bg-gradient-to-r from-gray-100 to-slate-100",
      benefits: [
        "Logo on the backdrop",
        "Logo on the Entrance Gate",
        "02 Delegate Passes",
        "Stall for Exhibition",
      ],
    },
  ];

  const supportPartners = [
    {
      name: "Associate Partner",
      amount: "₹75,000/-",
      benefits: ["Logo on the backdrop", "Logo on the Entrance Gate", "02 Delegate Passes"],
    },
    {
      name: "Exhibition Stall",
      amount: "₹50,000/-",
      benefits: ["3m x 3m area", "*Offer: Rs 35,000 each stall cost on booking 2 stalls"],
    },
    { name: "Lunch Sponsorship", amount: "₹60,000/- (02 days)" },
    { name: "Gala Dinner Sponsorship", amount: "₹50,000/- (01 day)" },
    { name: "Cultural Programme", amount: "₹50,000/- (01 day)" },
    { name: "Keynote/Plenary Lectures' Sponsorship", amount: "₹20,000/-" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Ticker />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Sponsors & Exhibitors
          </h1>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Partner with us to promote sustainable development and green chemistry
          </p>

          {/* ---------------- FEATURED SPONSORS ---------------- */}
          {featuredSponsors.length > 0 && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-10 text-primary">
                Our Sponsors
              </h2>

              <div className="grid gap-10 place-items-center justify-center
                grid-cols-[repeat(auto-fit,minmax(18rem,1fr))]
                max-w-5xl mx-auto"
              >

                {featuredSponsors.map((sponsor, idx) => {
                  const style = tierStyles[sponsor.tier] || {};

                  return (
                    <Card
                      key={idx}
                      className={`w-72 h-80 flex flex-col items-center justify-between
                        p-6 rounded-2xl border ${style.accent}
                        shadow-card transition-all duration-300
                        hover:shadow-hover hover:-translate-y-1`}
                    >
                      {/* Logo */}
                      <div className="w-32 h-32 flex items-center justify-center bg-white rounded-xl shadow-sm">
                        <img
                          src={sponsor.logo}
                          alt={`${sponsor.name} logo`}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>

                      {/* Name */}
                      <h3 className="text-center font-semibold text-lg leading-tight px-2">
                        {sponsor.name}
                      </h3>

                      {/* Tier */}
                      <span
                        className={`text-sm px-3 py-1 rounded-full font-medium ${style.badge}`}
                      >
                        {sponsor.tier} Sponsor
                      </span>

                      {/* Button */}
                      <a
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 text-sm font-medium rounded-lg border
                          hover:bg-primary hover:text-primary-foreground
                          transition-colors"
                      >
                        Visit Sponsor
                      </a>
                    </Card>
                  );
                })}
              </div>
            </section>
          )}

          {/* ---------------- TIERS ---------------- */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10 text-primary">
              Sponsorship Categories & Deliverables
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sponsorshipTiers.map((tier, index) => (
                <Card key={index} className="shadow-card hover:shadow-hover transition-smooth overflow-hidden">
                  <div className={`h-2 ${tier.color}`} />
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {featuredSponsors
                          .filter(fs => fs.tier === tier.tier)
                          .map((fs, i) => (
                            <img
                              key={i}
                              src={fs.logo}
                              alt={fs.name}
                              className="w-10 h-10 object-contain bg-white p-1 rounded shadow-sm"
                            />
                          ))}
                        <CardTitle className="text-2xl">{tier.tier}</CardTitle>
                      </div>
                      <Badge variant="secondary" className="text-lg px-4 py-1">
                        {tier.amount}
                      </Badge>
                    </div>
                    <CardDescription>Premium partnership opportunity</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-2">
                      {tier.benefits.map((b, i) => (
                        <li key={i} className="flex text-sm">
                          <span className="text-primary mr-2">✓</span>{b}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* ---------------- SUPPORTING PARTNERS ---------------- */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-10 text-primary">
              Join Us as Supporting Partner
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportPartners.map((p, i) => (
                <Card key={i} className="shadow-card hover:shadow-hover transition-smooth">
                  <CardHeader>
                    <CardTitle className="text-lg">{p.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline" className="mb-3">{p.amount}</Badge>
                    {p.benefits && (
                      <ul className="space-y-1 text-sm">
                        {p.benefits.map((b, j) => (
                          <li key={j}>✓ {b}</li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sponsors;
