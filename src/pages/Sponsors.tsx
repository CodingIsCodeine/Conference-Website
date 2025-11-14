import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Ticker from "@/components/Ticker";

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
      benefits: [
        "Logo on the backdrop",
        "Logo on the Entrance Gate",
        "02 Delegate Passes",
      ],
    },
    {
      name: "Exhibition Stall",
      amount: "₹50,000/-",
      benefits: [
        "3m x 3m area",
        "*Offer: Rs 35,000 each stall cost on booking 2 stalls",
      ],
    },
    { name: "Lunch Sponsorship", amount: "₹60,000/- (02 days)" },
    { name: "Dinner Sponsorship", amount: "₹60,000/- (02 days)" },
    { name: "Cultural Programme", amount: "₹50,000/- (02 days)" },
    { name: "Keynote/Plenary Lectures' Sponsorship", amount: "₹20,000/-" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Ticker />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Sponsors & Exhibitors</h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Partner with us to promote sustainable development and green chemistry
          </p>

          {/* Sponsorship Tiers */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10 text-primary">
              Sponsorship Categories & Deliverables
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sponsorshipTiers.map((sponsor, index) => (
                <Card key={index} className="shadow-card hover:shadow-hover transition-smooth overflow-hidden">
                  <div className={`h-2 ${sponsor.color}`}></div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl">{sponsor.tier}</CardTitle>
                      <Badge variant="secondary" className="text-lg px-4 py-1">
                        {sponsor.amount}
                      </Badge>
                    </div>
                    <CardDescription>Premium partnership opportunity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {sponsor.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <span className="text-primary mr-2 mt-1">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Supporting Partners */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-10 text-primary">
              Join Us as Supporting Partner
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportPartners.map((partner, index) => (
                <Card key={index} className="shadow-card hover:shadow-hover transition-smooth">
                  <CardHeader>
                    <CardTitle className="text-lg">{partner.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-base px-3 py-1">
                        {partner.amount}
                      </Badge>
                    </div>
                    {/* Show benefits only if they exist */}
                    {partner.benefits && (
                      <ul className="space-y-1">
                        {partner.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <span className="text-primary mr-2 mt-1">✓</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="mt-16">
            <Card className="shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Interested in Sponsoring?</CardTitle>
                <CardDescription className="text-center">
                  Contact us to discuss customized sponsorship packages
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-4">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:gcesdip2026@gmail.com" className="text-primary hover:underline">
                    gcesdip2026@gmail.com
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+912612201651" className="text-primary hover:underline">
                    +91 0261-220 1649/1657/1658
                  </a>
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sponsors;
