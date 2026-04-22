import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, Award, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import ImageCarousel from "@/components/ui/ImageCarousel";
import jmpLogo from "@/assets/jmp-logo.png";
import mediaPartnerLogo from "@/assets/icn_logo.png";
import cabeqLogo from "@/assets/cabeq.png";
import proceedingsLogo from "@/assets/proceedings.png";


const Index = () => {
  const [showHeroText, setShowHeroText] = useState(true);
  const [showWorkshop, setShowWorkshop] = useState(false);
  const [showLogos, setShowLogos] = useState(false);
  const [showGoldSponsor, setShowGoldSponsor] = useState(false);
  const [showMediaPartner, setShowMediaPartner] = useState(false);
  const [showJournalPartner, setShowJournalPartner] = useState(false);
  const [showAnrf, setShowAnrf] = useState(false);
  const [showAwards, setShowAwards] = useState(false);


  const goldSponsors = [
    {
      name: "Sahajanand Medical Technologies Limited",
      logo: "/images/smt.png",
    },
    {
      name: "Meril Life Sciences Private Limited",
      logo: "/images/meril.jpeg",
    },
  ];


  useEffect(() => {

    const DISPLAY = 3800;
    const FADE = 700;
    const TOTAL = DISPLAY + FADE;

    const runAnimation = () => {

      // reset all
      setShowHeroText(false);
      setShowWorkshop(false);
      setShowLogos(false);
      setShowAnrf(false);
      setShowGoldSponsor(false);
      setShowMediaPartner(false);
      setShowJournalPartner(false);
      setShowAwards(false);

      // timeline — 8 sequential slots (t0 … t7)
      const t0 = 0;
      const t1 = TOTAL;
      const t2 = 2 * TOTAL;
      const t3 = 3 * TOTAL;
      const t4 = 4 * TOTAL;
      const t5 = 5 * TOTAL;
      const t6 = 6 * TOTAL;
      const t7 = 7 * TOTAL;

      // Slide 0 — Conference
      setTimeout(() => setShowHeroText(true),  t0);
      setTimeout(() => setShowHeroText(false), t0 + DISPLAY);

      // Slide 1 — Workshop
      setTimeout(() => setShowWorkshop(true),  t1);
      setTimeout(() => setShowWorkshop(false), t1 + DISPLAY);

      // Slide 2 — Organized by
      setTimeout(() => setShowLogos(true),  t2);
      setTimeout(() => setShowLogos(false), t2 + DISPLAY);

      // Slide 3 — ANRF (Sponsored by)
      setTimeout(() => setShowAnrf(true),  t3);
      setTimeout(() => setShowAnrf(false), t3 + DISPLAY);

      // Slide 4 — Gold Sponsors
      setTimeout(() => setShowGoldSponsor(true),  t4);
      setTimeout(() => setShowGoldSponsor(false), t4 + DISPLAY);

      // Slide 5 — Media Partner
      setTimeout(() => setShowMediaPartner(true),  t5);
      setTimeout(() => setShowMediaPartner(false), t5 + DISPLAY);

      // Slide 6 — Journal Partners
      setTimeout(() => setShowJournalPartner(true),  t6);
      setTimeout(() => setShowJournalPartner(false), t6 + DISPLAY);

      // Slide 7 — Awards Supported by
      setTimeout(() => setShowAwards(true),  t7);
      setTimeout(() => setShowAwards(false), t7 + DISPLAY);
    };

    runAnimation();

    const loopInterval = setInterval(runAnimation, 8 * TOTAL);

    return () => clearInterval(loopInterval);

  }, []);

  const deadlines = [
    { title: "Last date of Abstract Submission", date: <>27<sup>th</sup> March 2026</> },
    { title: "Intimation of Acceptance", date: <>1<sup>st</sup> April 2026</> },
    { title: "Last date of Registration", date: <>10<sup>th</sup> April 2026</> },
    { title: "Full Paper Submission", date: "Will be announced soon" },
  ];

  const oralWinners = [
    {
      session: "Session I",
      theme: "Process Intensification Techniques",
      id: "GCE_O_03",
      title: "Intensified Zero-Waste Extraction of Citronella Essential Oil Using an Integrated Crusher–Extractor: RSM-Based Multi-Response Optimization",
      winners: ["Krishna K Chauhan"],
      coauthors: "Meghal A. Desai, Jigisha K. Parikh",
    },
    {
      session: "Session II",
      theme: "Sustainable Approach in Pharmaceutical / Chemical Industries",
      id: "GCE_O_52",
      title: "Mechanistic Insights into Elemental Sulphur Formation, its Quantification and Control in the Viscose Process",
      winners: ["Sachin Gondhalekar", "Pravin Pawar"],
      coauthors: "Sunil Dhumal, Shirish Thakre",
    },
    {
      session: "Session III",
      theme: "Process Modelling and Simulation",
      id: "GCE_O_66",
      title: "Prediction of Biomass Pyrolysis Products from Preliminary Analysis using Machine Learning",
      winners: ["Zeel Desai"],
      coauthors: "Hemant Kumar Balsora, Kartik S",
    },
    {
      session: "Session IV",
      theme: "Renewable and Clean Energy",
      id: "GCE_O_64",
      title: "Experimental Investigations on a Compact Dual Cell Passive DMFC with a Common Methanol Reservoir",
      winners: ["Budda Jeshwanthi", "Mude Hrushitha"],
      coauthors: "Ballari Adithi, Bhukya Nageswar",
    },
    {
      session: "Session V",
      theme: "Waste to Wealth",
      id: "GCE_O_17",
      title: "Application of K₂CO₃ Activated Hydrochar in the Immobilization of Lipases",
      winners: ["Ravichandra Patil"],
      coauthors: "Venu B. Borugadda, Bishnu Acharya, Ajay K. Dalai",
    },
    {
      session: "Session VI",
      theme: "Green Catalysis for Sustainable Processes",
      id: "GCE_O_06",
      title: "Catalytic Conversion of Fructose to 5-Ethoxymethylfurfural over Defect-Induced Metal Dichalcogenide",
      winners: ["Nidhi Kushwaha"],
      coauthors: "Kamal K. Pant",
    },
    {
      session: "Session VI",
      theme: "Green Catalysis for Sustainable Processes",
      id: "GCE_O_41",
      title: "Conversion of Ethyl Levulinate via Alcoholysis of Furfuryl Alcohol over Composite H-ZSM-5/HAP Catalyst",
      winners: ["Rahul V Prajapati"],
      coauthors: "Singh Alok, Sanjay Srivastava, Arun M. Patel, G. C. Jadeja, Jigisha Parikh",
    },
    {
      session: "Session VII",
      theme: "Process Modelling and Simulation",
      id: "GCE_O_58",
      title: "Separation of Dimethyl Carbonate-Methyl Alcohol Azeotropic Mixture by Extractive Distillation: Simulation and Experimental Validation",
      winners: ["Reshma R. Devale", "Pooja P. Sanap", "Yogesh S. Mahajan"],
      coauthors: "",
    },
    {
      session: "Session VIII",
      theme: "Environmental Sustainability",
      id: "GCE_O_40",
      title: "Toxic to Technological: CO₂ Utilization for Sustainable Synthesis of Carbonates Integrated with Optimization and Kinetic Studies",
      winners: ["Mubassera M. Arab"],
      coauthors: "Jigisha Parikh, Khushbu Bhavsar, S. K. Sundar",
    },
    {
      session: "Session VIII",
      theme: "Environmental Sustainability",
      id: "GCE_O_42",
      title: "Role of Solvent–Polymer Compatibility and Additives in Tailoring Hydrophobic PDMS–PVDF Membranes for Desalination Using Membrane Distillation",
      winners: ["Manish Singh Rajput"],
      coauthors: "Manish Vashishtha, Sarita Kalla, Sushant Upadhyaya",
    },
  ];

  const posterWinners = [
    {
      id: "GCE_P_19",
      title: "Green Process for Enrichment of Gymnemic Acid from Gymnema sylvestre Leaves and ω-Fatty Acids from Ocimum basilicum Seeds and their Synergistic Impact as Superfood",
      winners: ["Abhishek Yadav,"],
      coauthors: "Naziya Syed, Deepak Kumar, Debabrata Chanda, Prasant Kumar Rout",
    },
    {
      id: "GCE_P_04",
      title: "Amine Functionalized Radiation-Induced Glycidyl Methacrylate Grafted Polyamide-6 for CO₂ Adsorption",
      winners: ["Jasmine Kaur,"],
      coauthors: "Sudhir Kumar Singh, Raj Kumar Gupta, Haripada Bhunia",
    },
    {
      id: "GCE_P_05",
      title: "Facile Synthesis of a Bismuth Sulphide/Sulphur-Doped Graphitic Carbon Nitride Nanocomposite for Electrocatalytic Detection of a Metronidazole Drug",
      winners: ["Ravneet Kaur,"],
      coauthors: "Davinder Kumar",
    },
  ];

  const aboutSections = [
    {
      title: "Conference",
      icon: FileText,
      description: (
        <div className="space-y-3">
          <p>
            The 2030 Agenda for Sustainable Development envisions a world of peace, prosperity, and environmental balance through its 17 Sustainable Development Goals (SDGs). Achieving these goals demands greener, cleaner, and more efficient approaches in every sphere — from clean energy and sustainable cities to responsible production and climate action.
          </p>
          <p>
            This conference serves as a global platform to advance Green Chemistry and
            Green Engineering, fostering collaboration among academia, industry, research
            organizations, and policymakers, to exchange ideas in the following thrust areas:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-3 text-left">
            <li>Process Intensification Techniques</li>
            <li>Sustainable Approaches in Pharmaceutical and Chemical Industries</li>
            <li>Catalysis</li>
            <li>Novel Separation Methods</li>
            <li>Green Solvents</li>
            <li>Functional Foods and Nutraceuticals</li>
            <li>Green and Sustainable Chemistry in the Environment</li>
            <li>Green Nanotechnology</li>
            <li>Waste to Wealth</li>
            <li>Carbon Capture, Utilization and Storage (CCUS)</li>
            <li>Renewable Energy and Clean Energy</li>
            <li>Energy Storage</li>
            <li>Process Modelling and CFD</li>
            <li>Future Trends in Green Chemistry and Engineering</li>
            <li>Any other area relevant to the theme of the conference</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Preconference Workshop",
      icon: FileText,
      description: (
        <div className="space-y-4 text-justified leading-relaxed">
          <p>
            <strong>Design of Experiments (DOE)</strong> focuses on the systematic
            planning, execution, analysis, and interpretation of experiments to
            evaluate the effect of multiple factors on one or more response variables.
            A well-designed experiment provides deep insights into sensitive parameters,
            enabling better control, optimization, and robustness in system performance.
          </p>

          <p>
            It is widely applied across industries such as chemical, biotechnology,
            mechanical, industrial, and pharmaceutical sectors.
          </p>

          <p>
            This preconference workshop will cover the <strong>fundamental principles of DOE</strong>,
            various optimization techniques including <strong>Central Composite Design (CCD)</strong>,
            <strong>Box–Behnken Design (BBD)</strong>, <strong>Mixture Designs</strong>,
            and modern computer-generated experimental designs.
            Participants will also receive <strong>hands-on training using JMP software </strong>
            to strengthen practical understanding and application.
          </p>

          <p>
            By the end of the program, participants will gain enhanced proficiency in
            DOE methodologies and JMP software, empowering them to make data-driven
            decisions and drive continuous improvement in their respective domains.
          </p>

          <div className="mt-4 space-y-1">
            <p className="font-semibold">Resource Person:</p>
            <p>Dr. Muralidhara A., Global JMP Team</p>
          </div>

          <div className="mt-6 rounded-xl border border-amber-400/50 bg-amber-50/40 px-4 py-3 text-amber-900 shadow-sm">
            <p className="font-semibold">
              📌 Note:
            </p>
            <p className="text-sm mt-1">
              There is <strong>no additional fee</strong> for conference-registered participants.
              A <strong>separate participation certificate</strong> will be provided for this workshop.
            </p>
          </div>
        </div>
      ),
    },

    {
      title: "Department of Chemical Engineering",
      icon: Users,
      description: (
        <div className="space-y-4">
          <p>
            Established in 1995, the Department of Chemical Engineering, SVNIT, Surat, offers programmes leading to Bachelor's, Master's, and Ph.D. degrees in Chemical Engineering. The department has built a comprehensive research infrastructure with top-notch facilities for carrying out cutting-edge research.
          </p>

          <p>
            The department strives to provide a conducive environment for creative and dynamic research work. Faculty members are granted several R&D projects from organizations like GUJCOST, DST, DBT, etc., and have high-quality research publications and patents.</p>

          <p> Currently, the department has 19 faculty members with expertise in various domains of Chemical Engineering. </p>
          <div className="pt-2">
            <ImageCarousel
              images={[
                "/images/dept-6.jpg",
                "/images/dept-4.jpg",
                "/images/dept-7.png",
                "/images/dept-8.jpg",
              ]}
              interval={3500}
              className="mt-4"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* -------------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* -------------------------------------------------------- */}

      <section
        className="relative h-[600px] flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center">

          {/* Slide 0 — Conference */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
            showHeroText ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}>
            <div className="container mx-auto px-4 text-center">
              <p className="text-xl md:text-2xl font-semibold mb-4">
                17<sup>th</sup> – 18<sup>th</sup> April 2026
              </p>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-5xl mx-auto leading-tight">
                2<sup>nd</sup> International Conference on "Green Chemistry and Engineering towards Sustainable Development - An Industrial Perspective"
              </h1>

              <p className="text-xl md:text-2xl mb-8">GCESDIP 2.0</p>
            </div>
          </div>

          {/* Slide 1 — Workshop */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${
            showWorkshop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}>
            <div className="container mx-auto px-4 text-center max-w-4xl -mt-8">
              <p className="text-sm md:text-base uppercase tracking-widest text-white/80 mb-4">
                Preconference Workshop
              </p>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="block">Design of Experiments with</span>
                <span className="block mt-3">JMP</span>
              </h2>

              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-lg md:text-xl font-semibold">
                📅 <span>16<sup>th</sup> April 2026</span>
              </div>

              <img
                src={jmpLogo}
                alt="JMP Software"
                className="mx-auto mt-6 h-16 object-contain bg-white rounded-md px-4 py-2"
              />
            </div>
          </div>

          {/* Slide 2 — Organized by / Logos */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${
            showLogos ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div className="text-center -mt-10">
              <h2 className="text-2xl font-bold mb-6">Organized by</h2>
              <img src="/images/svnit.png" className="mx-auto h-36 mb-10" />
              <h3 className="text-xl font-semibold mb-6">In association with</h3>
              <div className="flex justify-center gap-10">
                <img src="/images/ict.png" className="h-36" />
                <img src="/images/dignitaries/jammu.jpg" className="h-32 rounded-sm" />
              </div>
            </div>
          </div>

          {/* Slide 3 — ANRF Sponsor */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
              showAnrf ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-lg md:text-xl font-semibold mb-4 text-white drop-shadow-lg">
              Sponsored by
            </p>

            <img
              src="/images/anrf.jpg"
              alt="ANRF Logo"
              className="h-20 md:h-28 object-contain mb-3 bg-white/10 p-2 rounded-xl backdrop-blur-sm"
            />

            <p className="text-sm md:text-base text-gray-200 text-center drop-shadow-md">
              Anusandhan National Research Foundation
            </p>
          </div>

          {/* Slide 4 — Gold Sponsors */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
              showGoldSponsor ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center relative w-full max-w-5xl mx-auto px-6">

              <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <div className="w-[420px] h-[420px] rounded-full bg-yellow-400/15 blur-3xl animate-pulse" />
              </div>

              <p className="uppercase tracking-widest mb-6 text-yellow-200 font-semibold">
                Gold Sponsors
              </p>

              <div
                className={`grid gap-8 items-center justify-center ${
                  goldSponsors.length === 1
                    ? "grid-cols-1"
                    : goldSponsors.length === 2
                    ? "grid-cols-1 sm:grid-cols-2"
                    : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                }`}
              >
                {goldSponsors.map((sponsor, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-3 opacity-90 hover:opacity-100 transition-all duration-300"
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="h-28 md:h-32 lg:h-36 object-contain rounded-md
                                drop-shadow-[0_0_25px_rgba(255,215,0,0.45)]
                                hover:scale-[1.04] transition-transform duration-300"
                    />
                    <p className="text-sm text-yellow-100/80 font-medium text-center">
                      {sponsor.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Slide 5 — Media Partner */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
              showMediaPartner ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center">
              <p className="uppercase tracking-widest mb-6 text-sky-200 font-semibold">
                Media Partner
              </p>

              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center -z-10">
                  <div className="w-[320px] h-[320px] rounded-full bg-sky-400/20 blur-3xl animate-pulse" />
                </div>

                <img
                  src={mediaPartnerLogo}
                  alt="Media Partner"
                  className="mx-auto h-36 md:h-40 lg:h-44 object-contain bg-white rounded-xl px-6 py-4 shadow-lg
                            hover:scale-[1.05] transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Slide 6 — Journal Partners */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
              showJournalPartner ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center">
              <p className="uppercase tracking-widest mb-6 text-emerald-200 font-semibold">
                Journal Partners
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">

                <img
                  src={cabeqLogo}
                  alt="CABEQ"
                  className="h-32 md:h-36 object-contain bg-white rounded-xl px-6 py-4 shadow-lg hover:scale-[1.05] transition-transform duration-300"
                />

                <img
                  src={proceedingsLogo}
                  alt="Proceedings International"
                  className="h-32 md:h-36 object-contain bg-white rounded-xl px-6 py-4 shadow-lg hover:scale-[1.05] transition-transform duration-300"
                />

              </div>
            </div>
          </div>

          {/* Slide 7 — Awards Supported by */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
              showAwards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-lg md:text-xl font-semibold mb-4 text-white drop-shadow-lg">
              Awards Supported by
            </p>

            <img
              src="/images/royal.jpeg"
              alt="RCS Logo"
              className="h-20 md:h-28 object-contain mb-3 bg-white/10 p-2 rounded-xl backdrop-blur-sm"
            />

            <p className="text-sm md:text-base text-gray-200 text-center drop-shadow-md">
              Royal Society of Chemistry
            </p>
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------- */}
      {/* PRE-CONFERENCE WORKSHOP (THEME-CONSISTENT HIGHLIGHT) */}
      {/* -------------------------------------------------------- */}

      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* Preconference Workshop Card */}
            <Card className="shadow-card border-4 border-primary">
              <CardContent className="p-6 md:p-8 text-center">

                <div className="flex justify-center mb-4">
                  <Award className="h-10 w-10 text-primary" />
                </div>

                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
                  Preconference Workshop
                </p>

                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-primary">
                  Design of Experiments with JMP
                </h3>

                <p className="text-base md:text-lg font-medium text-muted-foreground">
                  <Calendar className="inline h-5 w-5 mr-1" />
                  <strong>16<sup>th</sup> April 2026</strong>
                </p>

              </CardContent>
            </Card>

            {/* International Conference Card */}
            <Card className="shadow-card border-4 border-primary">
              <CardContent className="p-6 md:p-8 text-center">

                <div className="flex justify-center mb-4">
                  <Users className="h-10 w-10 text-primary" />
                </div>

                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
                  International Conference
                </p>

                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-primary">
                  GCESDIP 2.0
                </h3>

                <p className="text-base md:text-lg font-medium text-muted-foreground">
                  <Calendar className="inline h-5 w-5 mr-1" />
                  <strong>17<sup>th</sup> &amp; 18<sup>th</sup> April 2026</strong>
                </p>

              </CardContent>
            </Card>

          </div>
        </div>
      </section>


      <main className="flex-1">

        {/* -------------------------------------------------------- */}
        {/* AWARD WINNERS */}
        {/* -------------------------------------------------------- */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">

            {/* Section Header */}
            <div className="text-center mb-14 animate-fade-in">
              <div className="flex justify-center mb-4">
                <div className="animate-soft-pulse">
                  <Award className="h-12 w-12 text-primary" />
                  {/* <span className="absolute -top-1 -right-1 text-base">🏆</span> */}
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                Award Winners
              </h2>
              <p className="text-muted-foreground text-sm uppercase tracking-widest">
                GCESDIP 2.0 &nbsp;·&nbsp; April 17–18, 2026
              </p>
              <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-primary/30" />
            </div>

            {/* Oral Presentations */}
            <div className="max-w-6xl mx-auto mb-14">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-1 h-px bg-border" />
                <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground px-2">
                  Oral Presentations
                </h3>
                <div className="flex-1 h-px bg-border" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {oralWinners.map((winner, index) => (
                  <Card
                    key={index}
                    className="shadow-card hover:shadow-hover transition-smooth border-l-[3px] border-l-primary gradient-card"
                  >
                    <CardContent className="p-5">
                      {/* Session badge + ID */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-block text-xs font-semibold text-primary-foreground bg-primary rounded-full px-3 py-0.5">
                          {winner.session}
                        </span>
                        <span className="text-xs text-muted-foreground font-mono">
                          {winner.id}
                        </span>
                      </div>

                      {/* Theme */}
                      <p className="text-xs font-medium text-muted-foreground/70 uppercase tracking-wide mb-1">
                        {winner.theme}
                      </p>

                      {/* Paper title */}
                      <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                        {winner.title}
                      </p>

                      {/* Winners */}
                      <div className="flex flex-wrap items-baseline gap-x-1 gap-y-0.5">
                        {winner.winners.map((name, i) => (
                          <span key={i} className="font-semibold text-sm text-primary">
                            {name}{i < winner.winners.length - 1 ? "," : ""}
                          </span>
                        ))}
                        {winner.coauthors && (
                          <span className="text-xs text-muted-foreground">
                            {winner.winners.length > 0 ? ", " : ""}{winner.coauthors}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Poster Presentations */}
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-1 h-px bg-border" />
                <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground px-2">
                  Poster Presentations
                </h3>
                <div className="flex-1 h-px bg-border" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {posterWinners.map((winner, index) => (
                  <Card
                    key={index}
                    className="shadow-card hover:shadow-hover transition-smooth border-l-[3px] border-l-primary gradient-card"
                  >
                    <CardContent className="p-5">
                      <span className="inline-block text-xs font-mono text-muted-foreground bg-muted rounded px-2 py-0.5 mb-3">
                        {winner.id}
                      </span>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-3">
                        {winner.title}
                      </p>
                      <div className="flex flex-wrap items-baseline gap-x-1 gap-y-0.5">
                        {winner.winners.map((name, i) => (
                          <span key={i} className="font-semibold text-sm text-primary">
                            {name}{i < winner.winners.length - 1 ? "" : ""}
                          </span>
                        ))}
                        {winner.coauthors && (
                          <span className="text-xs text-muted-foreground">
                             {winner.coauthors}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Congratulations note */}
              <p className="text-center text-sm text-muted-foreground mt-8 italic">
                Congratulations to all the award winners and thank you to every participant for making GCESDIP 2.0 a success.
              </p>
            </div>

          </div>
        </section>

        {/* Conference Deadlines */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              Important Dates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {deadlines.map((deadline, index) => (
                <Card key={index} className="shadow-card hover:shadow-hover transition-smooth">
                  <CardContent className="p-6 text-center">
                    <Calendar className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{deadline.title}</h3>
                    <p className="text-2xl font-bold text-primary">{deadline.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Sections */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              About
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {aboutSections.map((section, index) => {
                const Icon = section.icon;

                const totalCards = aboutSections.length;
                const remainder = totalCards % 3;

                const isLastRow =
                  index >= totalCards - remainder && remainder !== 0;

                let alignmentClass = "";
                if (isLastRow) {
                  if (remainder === 1) {
                    alignmentClass = "md:col-start-2";
                  } else if (remainder === 2) {
                    alignmentClass = index === totalCards - 2 ? "md:col-start-2" : "";
                  }
                }

                return (
                  <Card
                    key={index}
                    className={`shadow-card hover:shadow-hover transition-smooth ${alignmentClass}`}
                  >
                    <CardHeader>
                      <div className="flex justify-center mb-4">
                        {Icon && <Icon className="h-12 w-12 text-primary" />}
                      </div>
                      <CardTitle className="text-center text-xl">
                        {section.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <div className="text-sm text-muted-foreground text-center leading-relaxed">
                        {section.description}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>


        {/* About Journal (CABEQ) */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              About Journal
            </h2>

            <div className="max-w-5xl mx-auto">
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    <div>
                      <h3 className="text-2xl font-semibold mb-4">
                        Chemical and Biochemical Engineering Quarterly (CABEQ)
                      </h3>

                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Chemical and Biochemical Engineering Quarterly (CABEQ) is an international
                        peer-reviewed journal publishing original research and review articles in
                        the field of chemical and biochemical engineering. The journal focuses on
                        fundamental and applied research contributing to sustainable processes,
                        industrial innovation, and emerging technologies.
                      </p>

                      <ul className="space-y-2 text-muted-foreground">
                        <li>🔹 Indexed in SCIE and Scopus</li>
                        <li>🔹 Impact Factor: 1.6</li>
                        <li>🔹 No Article Processing Charges (APC) for accepted papers</li>
                        <li>🔹 Covers chemical, biochemical and environmental engineering research</li>
                      </ul>
                    </div>

                    <div className="text-center">
                      <img
                        src={cabeqLogo}
                        alt="CABEQ Journal"
                        className="mx-auto h-72 object-contain bg-white rounded-xl p-6 shadow-md"
                      />
                    </div>

                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        {/* About SVNIT */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">About SVNIT</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat, established in 1961 by the Government of India and recognized as an Institute of National Importance since 2007 by Parliament of India, is among India's premier engineering institutions. Spanning over 256 acres of lush green campus, SVNIT offers diverse programs including 11 undergraduate, 21 postgraduate, integrated M.Sc., dual-degree (B.Tech.+M.Tech./MBA), and Ph.D. programs across engineering and applied sciences.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        The institute emphasizes interdisciplinary research, innovation, and industry collaboration, fostering academic excellence and professional growth. With an outstanding placement record and a strong network of eminent alumni, SVNIT continues to play a vital role in advancing engineering education and research in India.
                      </p>
                    </div>
                    <div className="pt-2 text-center">
                      <SVNITImageCarousel />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Surat */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">About Surat</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Surat, known as the "Diamond City" and "Silk City" of India, is a vibrant metropolis in Gujarat. The city is famous for its textile and diamond cutting industries, contributing significantly to India's economy.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        With its rich cultural heritage, modern infrastructure, and thriving industrial base, Surat offers an ideal setting for this international conference on green chemistry and sustainable development.
                      </p>
                    </div>
                    <div className="pt-2 text-center">
                      <SuratImageCarousel />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Previous Edition */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              About GCESDIP 1.0
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        GCESDIP 1.0 was conducted virtually from 16<sup>th</sup>–18<sup>th</sup> June 2021, bringing together participants from academia, research institutes, industries, and international universities. A total of <strong>90 presentations </strong> were delivered across 12 theme-based sessions.
                      </p>

                      <p className="text-muted-foreground leading-relaxed mb-4"> The event attracted researchers from IITs, NITs, CSIR labs and global institutions in <strong>Japan, Indonesia, Korea, and Canada.</strong> Keynote lectures highlighted emerging trends in Green Chemistry and Sustainable Development. </p>
                      <p className="text-muted-foreground leading-relaxed mb-4"> Conference abstracts were published in <strong>Proceedings International</strong>. Partner journals such as <strong>Waste and Biomass Valorization</strong> and <strong>Materials Today: Proceedings</strong> supported full-length paper submissions. </p>

                    </div>
                    <div className="pt-2 text-center">
                      <PreviousEditionCarousel />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us at GCESDIP 2.0</h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Be part of the journey on sustainable development and green chemistry
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScHFyvWELZv5HZOM6Z7mOL8uqkqgJrWbZA2iMKWPtQPZph05w/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Submit Abstract
                </Button>
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeL--0f225-_T4cFpwBfiiZlxMU5HIsVmgKGpY_lOzlONkr_g/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-primary"
                >
                  Register Now
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

/* SVNIT Image Carousel */
const SVNITImageCarousel = () => {
  const images = [
    { src: "/images/svnit-3.jpg" },
    { src: "/images/svnit-5.jpg" },
    { src: "/images/svnit-7.jpg" },
    { src: "/images/svnit-8.jpg" },
    { src: "/images/svnit-9.jpg" },
    { src: "/images/svnit-10.jpg" },
    { src: "/images/svnit-6.jpg" },
    { src: "/images/svnit-11.jpg" },
  ];

  return <ImageCarousel images={images} />;
};

/* Surat Image Carousel */
const SuratImageCarousel = () => {
  const images = [
    { src: "/images/surat-2.jpg",  caption: "🌄 Saputara — Gujarat's Scenic Hill Station" },
    { src: "/images/surat-3.jpeg", caption: "🏖️ Daman Beach — Calm Waters & Coastal Charm" },
    { src: "/images/surat-7.jpg",  caption: "🗿 Statue of Unity — The World's Tallest Statue" },
    { src: "/images/surat-4.jpg",  caption: "🌅 Dumas Beach — Tranquil Waves & Sunset Views" },
    { src: "/images/surat-6.jpg",  caption: "🏞️ Gopi Talav — A Serene Heritage Lake" },
    { src: "/images/surat-5.jpg",  caption: "💎 Surat Diamond Bourse — The Heart of Global Trade" },
  ];

  return <AutoCarousel images={images} />;
};

/* Previous Edition Carousel */
const PreviousEditionCarousel = () => {
  const images = [
    { src: "/images/conference-1.png", caption: "" },
    { src: "/images/conference-2.png", caption: "" },
    { src: "/images/conference-3.png", caption: "" },
  ];

  return <AutoCarousel images={images} />;
};

/* Shared Auto Carousel */
const AutoCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % images.length),
      3500
    );
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full text-center">
      <div className="overflow-hidden rounded-xl shadow-lg transition-all duration-700 ease-in-out">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].caption}
          className="w-full h-64 md:h-72 object-contain bg-black/5"
        />
      </div>
      <div className="mt-4 flex justify-center">
        <p className="bg-white/40 backdrop-blur-md text-primary font-medium px-4 py-2 rounded-full text-sm md:text-base shadow-sm border border-white/60 inline-flex items-center gap-2 transition-all duration-500">
          {images[currentIndex].caption}
        </p>
      </div>
    </div>
  );
};

export default Index;