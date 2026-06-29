import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, Award, Users, Camera, ChevronLeft, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import ImageCarousel from "@/components/ui/ImageCarousel";
import jmpLogo from "@/assets/jmp-logo.png";
import mediaPartnerLogo from "@/assets/icn_logo.png";
import cabeqLogo from "@/assets/cabeq.png";
import proceedingsLogo from "@/assets/proceedings.png";
import { usePageMeta } from "@/hooks/usePageMeta";


const Index = () => {
  usePageMeta({
    title: "GCESDIP 2.0 — Green Chemistry Conference | SVNIT Surat",
    description:
      "2nd International Conference on Green Chemistry and Engineering towards Sustainable Development — An Industrial Perspective, hosted by SVNIT Surat on 17th–18th April 2026.",
    path: "/",
  });

  const [showHeroText, setShowHeroText] = useState(true);
  const [showWorkshop, setShowWorkshop] = useState(false);
  const [showLogos, setShowLogos] = useState(false);
  const [showGoldSponsor, setShowGoldSponsor] = useState(false);
  const [showMediaPartner, setShowMediaPartner] = useState(false);
  const [showJournalPartner, setShowJournalPartner] = useState(false);
  const [showAnrf, setShowAnrf] = useState(false);
  const [showAwards, setShowAwards] = useState(false);

  const goldSponsors = [
    { name: "Sahajanand Medical Technologies Limited", logo: "/images/sponsors/smt.png" },
    { name: "Meril Life Sciences Private Limited", logo: "/images/sponsors/meril.jpeg" },
  ];

  useEffect(() => {
    const DISPLAY = 3800;
    const FADE = 700;
    const TOTAL = DISPLAY + FADE;

    const runAnimation = () => {
      setShowHeroText(false);
      setShowWorkshop(false);
      setShowLogos(false);
      setShowAnrf(false);
      setShowGoldSponsor(false);
      setShowMediaPartner(false);
      setShowJournalPartner(false);
      setShowAwards(false);

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

      // Slide 3 — ANRF
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
    { title: "Intimation of Acceptance",         date: <>1<sup>st</sup> April 2026</> },
    { title: "Last date of Registration",        date: <>10<sup>th</sup> April 2026</> },
    { title: "Full Paper Submission",            date: "Will be announced soon" },
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
      winners: ["Abhishek Yadav"],
      coauthors: "Naziya Syed, Deepak Kumar, Debabrata Chanda, Prasant Kumar Rout",
    },
    {
      id: "GCE_P_04",
      title: "Amine Functionalized Radiation-Induced Glycidyl Methacrylate Grafted Polyamide-6 for CO₂ Adsorption",
      winners: ["Jasmine Kaur"],
      coauthors: "Sudhir Kumar Singh, Raj Kumar Gupta, Haripada Bhunia",
    },
    {
      id: "GCE_P_05",
      title: "Facile Synthesis of a Bismuth Sulphide/Sulphur-Doped Graphitic Carbon Nitride Nanocomposite for Electrocatalytic Detection of a Metronidazole Drug",
      winners: ["Ravneet Kaur"],
      coauthors: "Davinder Kumar",
    },
  ];

  // RSC Award Winners — oral: GCE_O_66, 64, 06 · poster: all three
  const rscOralWinners = [
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
      session: "Session VI",
      theme: "Green Catalysis for Sustainable Processes",
      id: "GCE_O_06",
      title: "Catalytic Conversion of Fructose to 5-Ethoxymethylfurfural over Defect-Induced Metal Dichalcogenide",
      winners: ["Nidhi Kushwaha"],
      coauthors: "Kamal K. Pant",
    },
  ];

  const rscPosterWinners = posterWinners;

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
            various optimization techniques including <strong>Central Composite Design (CCD)</strong>,{" "}
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
          <div className="mt-6 rounded-xl border border-cyan-400/50 bg-cyan-50/40 px-4 py-3 text-cyan-900 shadow-sm">
            <p className="font-semibold">📌 Note:</p>
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
            The department strives to provide a conducive environment for creative and dynamic research work. Faculty members are granted several R&D projects from organizations like GUJCOST, DST, DBT, etc., and have high-quality research publications and patents.
          </p>
          <p>Currently, the department has 19 faculty members with expertise in various domains of Chemical Engineering.</p>
          <div className="pt-2">
            <ImageCarousel
              images={[
                "/images/galleries/department/dept-6.jpg",
                "/images/galleries/department/dept-4.jpg",
                "/images/galleries/department/dept-7.png",
                "/images/galleries/department/dept-8.jpg",
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
              <img src="/images/logos/svnit.png" alt="SVNIT Surat logo" className="mx-auto h-36 mb-10" />
              <h3 className="text-xl font-semibold mb-6">In association with</h3>
              <div className="flex justify-center gap-10">
                <img src="/images/logos/ict.png" alt="ICT Mumbai logo" className="h-36" />
                <img src="/images/logos/jammu.jpg" alt="IIT Jammu logo" className="h-32 rounded-sm" />
              </div>
            </div>
          </div>

          {/* Slide 3 — ANRF Sponsor */}
          <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
            showAnrf ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <p className="text-lg md:text-xl font-semibold mb-4 text-white drop-shadow-lg">
              Sponsored by
            </p>
            <img
              src="/images/logos/anrf.jpg"
              alt="ANRF Logo"
              className="h-20 md:h-28 object-contain mb-3 bg-white/10 p-2 rounded-xl backdrop-blur-sm"
            />
            <p className="text-sm md:text-base text-gray-200 text-center drop-shadow-md">
              Anusandhan National Research Foundation
            </p>
          </div>

          {/* Slide 4 — Gold Sponsors */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
            showGoldSponsor ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div className="text-center relative w-full max-w-5xl mx-auto px-6">
              <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <div className="w-[420px] h-[420px] rounded-full bg-yellow-400/15 blur-3xl animate-pulse" />
              </div>
              <p className="uppercase tracking-widest mb-6 text-yellow-200 font-semibold">
                Gold Sponsors
              </p>
              <div className={`grid gap-8 items-center justify-center ${
                goldSponsors.length === 1
                  ? "grid-cols-1"
                  : goldSponsors.length === 2
                  ? "grid-cols-1 sm:grid-cols-2"
                  : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
              }`}>
                {goldSponsors.map((sponsor, index) => (
                  <div key={index} className="flex flex-col items-center gap-3 opacity-90 hover:opacity-100 transition-all duration-300">
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
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
            showMediaPartner ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
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
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
            showJournalPartner ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
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
          <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
            showAwards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <p className="text-lg md:text-xl font-semibold mb-4 text-white drop-shadow-lg">
              Awards Supported by
            </p>
            <img
              src="/images/logos/royal.jpeg"
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
      {/* PRE-CONFERENCE WORKSHOP */}
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
{/* AWARDS & RECOGNITIONS (FINAL FLOWING VERSION) */}
{/* -------------------------------------------------------- */}
<section
  className="py-20 relative overflow-hidden"
  style={{
    background: "linear-gradient(120deg, #eef2f7, #d1fae5, #a7f3d0, #fef9c3, #fde68a, #d1fae5)",
    backgroundSize: "300% 300%",
    animation: "gradientFlow 6s linear infinite"
  }}
> 

  {/* SOFT OVERLAY (reduces harshness + adds premium feel) */}
  <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px] pointer-events-none" />

  {/* OPTIONAL GLOW BLOBS (keep if you liked earlier effect) */}
  <div className="absolute inset-0 -z-10 flex items-center justify-center">
    <div className="w-[500px] h-[500px] bg-yellow-300/20 rounded-full blur-3xl animate-pulse" />
    <div className="w-[400px] h-[400px] bg-emerald-300/20 rounded-full blur-3xl absolute top-10 left-10" />
  </div>

  <div className="container mx-auto px-4 relative z-10">

    {/* HEADER */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
        Awards & Recognitions
      </h2>
      <p className="text-muted-foreground text-sm uppercase tracking-widest">
        GCESDIP 2.0 · April 17–18, 2026
      </p>
      <div className="mt-5 mx-auto w-20 h-[2px] rounded-full bg-primary/30" />
    </div>

    {/* ===================== */}
    {/* 🟦 RSC ORAL */}
    {/* ===================== */}
    <div className="max-w-5xl mx-auto mb-16">
      <h3 className="text-center text-lg font-semibold mb-4 text-cyan-700 flex items-center justify-center gap-2">
        RSC Oral Presentation Awards
      </h3>
      <div className="mx-auto mb-8 w-24 h-[2px] rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {rscOralWinners.map((winner, index) => (
          <div
            key={index}
            className="rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:scale-[1.02] border border-cyan-200 border-l-[4px] border-l-cyan-500 bg-white/90"
          >
            <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 bg-cyan-100 text-cyan-800 border border-cyan-300">
              {winner.id}
            </span>

            {/* <p className="text-xs font-medium text-tertiaryTeal uppercase tracking-wide mb-1"></p> */}
            <p className="text-xs text-muted-foreground leading-relaxed mb-3 font-medium">{winner.title}</p>

            <div className="flex flex-col gap-0.5 text-sm">
              {/* Main authors */}
              <span className="font-semibold text-tertiary">
                {winner.winners.join(", ")}
              </span>

              {/* Co-authors */}
              {winner.coauthors && (
                <span className="text-xs text-tertiaryEmerald">
                  {winner.coauthors}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* DIVIDER */}
    <div className="my-14 h-[1px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

{/* ===================== */}
{/* 🟢 GCESDIP ORAL */}
{/* ===================== */}
<div className="max-w-6xl mx-auto mb-16">
  <h3 className="text-center text-lg font-semibold mb-4 text-primary flex items-center justify-center gap-2">
    GCESDIP 2.0 Oral Presentation Awards
  </h3>
  <div className="mx-auto mb-8 w-24 h-[2px] rounded-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {oralWinners.map((winner, index) => (
      <Card
        key={index}
        className="shadow-card hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-primary/20 border-l-[4px] border-l-primary gradient-card"
      >
        <CardContent className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block text-xs font-semibold text-primary-foreground bg-primary rounded-full px-3 py-0.5">
              {winner.id}
            </span>
            {/* <span className="text-xs text-muted-foreground font-mono">
              
            </span> */}
          </div>

          <p className="text-xs font-medium text-lime-600 uppercase tracking-wide mb-1">
            {winner.theme}
          </p>

          <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2 font-medium">
            {winner.title}
          </p>

          <div className="flex flex-col gap-1">
            {/* Main authors */}
            <span className="font-semibold text-sm text-primary">
              {winner.winners.join(", ")}
            </span>

            {/* Co-authors */}
            {winner.coauthors && (
              <span className="text-xs text-emerald-700/80">
                {winner.coauthors}
              </span>
            )}
          </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

    {/* DIVIDER */}
    <div className="my-14 h-[1px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

    {/* ===================== */}
    {/* 🟡 POSTER (JOINT) */}
    {/* ===================== */}
    <div className="max-w-5xl mx-auto">
      <h3 className="text-center text-lg font-semibold mb-4 text-yellow-700 flex items-center justify-center gap-2">
        RSC & GCESDIP 2.0 Poster Presentation Awards
      </h3>
      <div className="mx-auto mb-8 w-24 h-[2px] rounded-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {rscPosterWinners.map((winner, index) => (
          <div
            key={index}
            className="rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:scale-[1.02] border border-yellow-200 border-l-[4px] border-l-yellow-500 bg-white/90"
          >
            <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 bg-yellow-100 text-yellow-800 border border-yellow-300">
              {winner.id}
            </span>

            <p className="text-xs text-muted-foreground leading-relaxed mb-3 font-medium">
              {winner.title}
            </p>

            <div className="flex flex-col gap-1 text-sm">
              {/* Main authors */}
              <span className="font-semibold text-quaternaryAnalogousDeep">
                {winner.winners.join(", ")}
              </span>

              {/* Co-authors */}
              {winner.coauthors && (
                <span className="text-xs text-quaternaryAnalogous">
                  {winner.coauthors}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

              <p className="text-center text-sm text-muted-foreground mt-10 italic">
                Congratulations to all the winners and thank you to each and every participant for making GCESDIP 2.0 a grand success!
              </p>
    </div>

  </div>
</section>
        {/* -------------------------------------------------------- */}
        {/* CONFERENCE GALLERY */}
        {/* -------------------------------------------------------- */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">

            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
                Conference Gallery
              </h2>
              <p className="text-muted-foreground text-sm uppercase tracking-widest mb-1">
                GCESDIP 2.0 · April 16–18, 2026 · SVNIT, Surat
              </p>
              <p className="text-muted-foreground text-base max-w-xl mx-auto mt-2">
                Moments captured from the conference — workshops, keynotes, award ceremonies, and more.
              </p>
              <div className="mt-5 mx-auto w-16 h-1 rounded-full bg-primary/30" />
            </div>

            <ConferenceGallery />

          </div>
        </section>

        {/* -------------------------------------------------------- */}
        {/* CONFERENCE DEADLINES */}
        {/* -------------------------------------------------------- */}
        <section className="py-16">
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

        {/* -------------------------------------------------------- */}
        {/* ABOUT SECTIONS */}
        {/* -------------------------------------------------------- */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              About
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {aboutSections.map((section, index) => {
                const Icon = section.icon;
                const totalCards = aboutSections.length;
                const remainder = totalCards % 3;
                const isLastRow = index >= totalCards - remainder && remainder !== 0;

                let alignmentClass = "";
                if (isLastRow) {
                  if (remainder === 1) alignmentClass = "md:col-start-2";
                  else if (remainder === 2) alignmentClass = index === totalCards - 2 ? "md:col-start-2" : "";
                }

                return (
                  <Card key={index} className={`shadow-card hover:shadow-hover transition-smooth ${alignmentClass}`}>
                    <CardHeader>
                      <div className="flex justify-center mb-4">
                        {Icon && <Icon className="h-12 w-12 text-primary" />}
                      </div>
                      <CardTitle className="text-center text-xl">{section.title}</CardTitle>
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

        {/* -------------------------------------------------------- */}
        {/* ABOUT JOURNAL (CABEQ) */}
        {/* -------------------------------------------------------- */}
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

        {/* -------------------------------------------------------- */}
        {/* ABOUT SVNIT */}
        {/* -------------------------------------------------------- */}
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

        {/* -------------------------------------------------------- */}
        {/* ABOUT SURAT */}
        {/* -------------------------------------------------------- */}
        <section className="py-16">
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

        {/* -------------------------------------------------------- */}
        {/* PREVIOUS EDITION */}
        {/* -------------------------------------------------------- */}
        <section className="py-16 bg-muted">
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
                        GCESDIP 1.0 was conducted virtually from 16<sup>th</sup>–18<sup>th</sup> June 2021, bringing together participants from academia, research institutes, industries, and international universities. A total of <strong>90 presentations</strong> were delivered across 12 theme-based sessions.
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        The event attracted researchers from IITs, NITs, CSIR labs and global institutions in <strong>Japan, Indonesia, Korea, and Canada.</strong> Keynote lectures highlighted emerging trends in Green Chemistry and Sustainable Development.
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Conference abstracts were published in <strong>Proceedings International</strong>. Partner journals such as <strong>Waste and Biomass Valorization</strong> and <strong>Materials Today: Proceedings</strong> supported full-length paper submissions.
                      </p>
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

        {/* -------------------------------------------------------- */}
        {/* CALL TO ACTION */}
        {/* -------------------------------------------------------- */}
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


/* ------------------------------------------------------------------ */
/* Conference Gallery — tabbed (Pre-Conference / Day 1 / Day 2)         */
/*                                                                      */
/* 👉 PLACEHOLDERS: drop 15 photos per section at the paths below.      */
/*    Folders: public/images/galleries/conference/{pre-conference,      */
/*    day-1, day-2}/  — edit `src` and add a `caption` if you like.     */
/*    Until a photo exists, that slot shows a styled placeholder tile.  */
/* ------------------------------------------------------------------ */
type GalleryImage = { src: string; caption?: string };
type GallerySection = { id: string; label: string; images: GalleryImage[] };

const CONFERENCE_GALLERY: GallerySection[] = [
  {
    id: "pre-conference",
    label: "Pre-Conference",
    images: [
      { src: "dist/images/galleries/conference/pre-conference/01.jpg", caption: "" },
      { src: "dist/images/galleries/conference/pre-conference/02.jpg", caption: "" },
      { src: "dist/images/galleries/conference/pre-conference/03.jpg", caption: "" },
      { src: "dist/images/galleries/conference/pre-conference/04.jpg", caption: "" },
      { src: "dist/images/galleries/conference/pre-conference/05.jpg", caption: "" },
      { src: "dist/images/galleries/conference/pre-conference/06.jpg", caption: "" },
      { src: "dist/images/galleries/conference/pre-conference/07.jpg", caption: "" },
      { src: "dist/images/galleries/conference/pre-conference/08.jpg", caption: "" },
      { src: "dist/images/galleries/conference/pre-conference/09.jpg", caption: "" },
      { src: "dist/images/galleries/conference/pre-conference/10.jpg", caption: "" },
      { src: "dist/images/galleries/conference/pre-conference/11.jpg", caption: "" },
      { src: "dist/images/galleries/conference/pre-conference/12.jpg", caption: "" },
      { src: "dist/images/galleries/conference/pre-conference/13.jpg", caption: "" },
      { src: "dist/images/galleries/conference/pre-conference/14.jpg", caption: "" },
      // { src: "dist/images/galleries/conference/pre-conference/15.jpg", caption: "" },
    ],
  },
  {
    id: "day-1",
    label: "Day 1",
    images: [
      { src: "dist/images/galleries/conference/day-1/01.jpg", caption: "" },
      { src: "dist/images/galleries/conference/day-1/02.jpg", caption: "" },
      { src: "dist/images/galleries/conference/day-1/03.jpg", caption: "" },
      { src: "dist/images/galleries/conference/day-1/04.jpg", caption: "" },
      { src: "dist/images/galleries/conference/day-1/05.jpg", caption: "" },
      { src: "dist/images/galleries/conference/day-1/06.jpg", caption: "" },
      { src: "dist/images/galleries/conference/day-1/07.jpg", caption: "" },
      { src: "dist/images/galleries/conference/day-1/08.jpg", caption: "" },
      { src: "dist/images/galleries/conference/day-1/09.jpg", caption: "" },
      { src: "dist/images/galleries/conference/day-1/10.jpg", caption: "" },
      { src: "dist/images/galleries/conference/day-1/11.jpg", caption: "" },
      { src: "dist/images/galleries/conference/day-1/12.jpg", caption: "" },
      { src: "dist/images/galleries/conference/day-1/13.jpg", caption: "" },
      { src: "dist/images/galleries/conference/day-1/14.jpg", caption: "" },
      // { src: "dist/images/galleries/conference/day-1/15.jpg", caption: "" },
    ],
  },
  {
    id: "day-2",
    label: "Day 2",
    images: [
      { src: "dist/images/galleries/conference/day-2/01.jpg", caption: "" },
      { src: "dist/images/galleries/conference/day-2/02.jpg", caption: "" },
      { src: "dist/images/galleries/conference/day-2/03.jpg", caption: "" },
      { src: "dist/images/galleries/conference/day-2/04.jpg", caption: "" },
      { src: "dist/images/galleries/conference/day-2/05.jpg", caption: "" },
      { src: "dist/images/galleries/conference/day-2/06.jpg", caption: "" },
      { src: "dist/images/galleries/conference/day-2/07.jpg", caption: "" },
      { src: "dist/images/galleries/conference/day-2/08.jpg", caption: "" },
      { src: "dist/images/galleries/conference/day-2/09.jpg", caption: "" },
      { src: "dist/images/galleries/conference/day-2/10.jpg", caption: "" },
      { src: "dist/images/galleries/conference/day-2/11.jpg", caption: "" },
      { src: "dist/images/galleries/conference/day-2/12.jpg", caption: "" },
      { src: "dist/images/galleries/conference/day-2/13.jpg", caption: "" },
      { src: "dist/images/galleries/conference/day-2/14.jpg", caption: "" },
      { src: "dist/images/galleries/conference/day-2/15.jpg", caption: "" },
    ],
  },
];

const ConferenceGallery = () => {
  const [sectionIdx, setSectionIdx] = useState(0);
  const [current, setCurrent] = useState(0);
  const [errored, setErrored] = useState<Record<string, boolean>>({});
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const section = CONFERENCE_GALLERY[sectionIdx];
  const images = section.images;
  const total = images.length;
  const activeImg = images[current];

  const keyOf = (i: number) => `${section.id}:${i}`;
  const isErrored = (i: number) => !!errored[keyOf(i)];
  const markErrored = (i: number) => setErrored((e) => ({ ...e, [keyOf(i)]: true }));

  const goPrev = () => setCurrent((i) => (i - 1 + total) % total);
  const goNext = () => setCurrent((i) => (i + 1) % total);

  // Reset to the first photo when switching sections.
  useEffect(() => {
    setCurrent(0);
  }, [sectionIdx]);

  // Gentle auto-advance — pauses on hover and is disabled for reduced motion.
  useEffect(() => {
    if (paused) return;
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setCurrent((i) => (i + 1) % total), 4500);
    return () => clearInterval(id);
  }, [paused, total, sectionIdx]);

  // Keep the active thumbnail centered within the strip (never scrolls the page).
  useEffect(() => {
    const strip = stripRef.current;
    const thumb = thumbRefs.current[current];
    if (strip && thumb) {
      strip.scrollTo({ left: thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2, behavior: "smooth" });
    }
  }, [current, sectionIdx]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) dx > 0 ? goPrev() : goNext();
    touchStartX.current = null;
  };
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") goPrev();
    if (e.key === "ArrowRight") goNext();
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Section tabs */}
      <div role="tablist" aria-label="Gallery sections" className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
        {CONFERENCE_GALLERY.map((s, i) => {
          const activeTab = i === sectionIdx;
          return (
            <button
              key={s.id}
              role="tab"
              aria-selected={activeTab}
              onClick={() => setSectionIdx(i)}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                activeTab
                  ? "bg-primary text-primary-foreground border-primary shadow-card"
                  : "bg-card text-muted-foreground border-border hover:text-primary hover:border-primary/40"
              }`}
            >
              {s.label}
              <span className={`ml-2 text-xs ${activeTab ? "text-primary-foreground/80" : "text-muted-foreground/70"}`}>
                {s.images.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Featured viewer */}
      <div
        className="relative w-full overflow-hidden rounded-2xl shadow-card bg-gray-50 select-none h-[300px] sm:h-[380px] lg:h-[460px]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onKeyDown={onKeyDown}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label={`${section.label} photos`}
      >
        {isErrored(current) ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-secondary/60 via-muted to-secondary/40 text-muted-foreground">
            <Camera className="h-10 w-10 opacity-40" />
            <p className="text-sm font-medium">{section.label} · Photo {current + 1}</p>
            <p className="text-xs opacity-70">Photo coming soon</p>
          </div>
        ) : (
          <>
            {/* Blurred backdrop fills the letterbox bars (the photo is never cropped). */}
            <div
              className="absolute inset-0 scale-110 bg-cover bg-center blur-xl"
              style={{ backgroundImage: `url("${activeImg.src}")` }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-white/40" aria-hidden="true" />
            <img
              key={keyOf(current)}
              src={activeImg.src}
              alt={activeImg.caption || `${section.label} photo ${current + 1}`}
              onError={() => markErrored(current)}
              className="gallery-fade relative z-[1] w-full h-full object-contain"
            />
          </>
        )}

        {/* Caption */}
        {activeImg.caption && !isErrored(current) && (
          <div className="absolute bottom-0 inset-x-0 z-[2] bg-gradient-to-t from-black/55 to-transparent px-5 pt-10 pb-4 pointer-events-none">
            <p className="text-white text-sm md:text-base font-medium drop-shadow">{activeImg.caption}</p>
          </div>
        )}

        {/* Counter */}
        <div className="absolute top-3 right-3 z-[2] rounded-full bg-black/40 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
          {current + 1} / {total}
        </div>

        {/* Prev / Next */}
        <button
          onClick={goPrev}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-[2] grid place-items-center w-9 h-9 rounded-full bg-white/85 text-gray-700 shadow-sm hover:bg-white hover:scale-105 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={goNext}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-[2] grid place-items-center w-9 h-9 rounded-full bg-white/85 text-gray-700 shadow-sm hover:bg-white hover:scale-105 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Thumbnail strip */}
      <div ref={stripRef} className="mt-4 flex gap-2 overflow-x-auto pb-2">
        {images.map((img, i) => {
          const activeThumb = i === current;
          return (
            <button
              key={keyOf(i)}
              ref={(el) => {
                thumbRefs.current[i] = el;
              }}
              onClick={() => setCurrent(i)}
              aria-label={`Go to photo ${i + 1}`}
              aria-current={activeThumb ? "true" : undefined}
              className={`relative flex-shrink-0 w-20 h-14 sm:w-24 sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                activeThumb ? "border-primary shadow-card scale-[1.03]" : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              {isErrored(i) ? (
                <span className="absolute inset-0 grid place-items-center bg-gradient-to-br from-secondary/60 to-muted text-muted-foreground">
                  <Camera className="h-4 w-4 opacity-50" />
                </span>
              ) : (
                <img
                  src={img.src}
                  alt=""
                  loading="lazy"
                  onError={() => markErrored(i)}
                  className="w-full h-full object-cover"
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* SVNIT Image Carousel                                                 */
/* ------------------------------------------------------------------ */
const SVNITImageCarousel = () => {
  const images = [
    { src: "/images/galleries/svnit/svnit-3.jpg" },
    { src: "/images/galleries/svnit/svnit-5.jpg" },
    { src: "/images/galleries/svnit/svnit-7.jpg" },
    { src: "/images/galleries/svnit/svnit-8.jpg" },
    { src: "/images/galleries/svnit/svnit-9.jpg" },
    { src: "/images/galleries/svnit/svnit-10.jpg" },
    { src: "/images/galleries/svnit/svnit-6.jpg" },
    { src: "/images/galleries/svnit/svnit-11.jpg" },
  ];
  return <ImageCarousel images={images} />;
};

/* ------------------------------------------------------------------ */
/* Surat Image Carousel                                                 */
/* ------------------------------------------------------------------ */
const SuratImageCarousel = () => {
  const images = [
    { src: "/images/galleries/surat/surat-2.jpg",  caption: "🌄 Saputara — Gujarat's Scenic Hill Station" },
    { src: "/images/galleries/surat/surat-3.jpeg", caption: "🏖️ Daman Beach — Calm Waters & Coastal Charm" },
    { src: "/images/galleries/surat/surat-7.jpg",  caption: "🗿 Statue of Unity — The World's Tallest Statue" },
    { src: "/images/galleries/surat/surat-4.jpg",  caption: "🌅 Dumas Beach — Tranquil Waves & Sunset Views" },
    { src: "/images/galleries/surat/surat-6.jpg",  caption: "🏞️ Gopi Talav — A Serene Heritage Lake" },
    { src: "/images/galleries/surat/surat-5.jpg",  caption: "💎 Surat Diamond Bourse — The Heart of Global Trade" },
  ];
  return <AutoCarousel images={images} />;
};

/* ------------------------------------------------------------------ */
/* Previous Edition Carousel                                            */
/* ------------------------------------------------------------------ */
const PreviousEditionCarousel = () => {
  const images = [
    { src: "/images/galleries/previous-edition/conference-1.png", caption: "" },
    { src: "/images/galleries/previous-edition/conference-2.png", caption: "" },
    { src: "/images/galleries/previous-edition/conference-3.png", caption: "" },
  ];
  return <AutoCarousel images={images} />;
};

/* ------------------------------------------------------------------ */
/* Shared Auto Carousel — object-contain, prev/next arrows, dots       */
/* ------------------------------------------------------------------ */
const AutoCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const total = images.length;

  useEffect(() => {
    const id = setInterval(() => setCurrentIndex((prev) => (prev + 1) % total), 3500);
    return () => clearInterval(id);
  }, [total]);

  const goToPrev = () => setCurrentIndex((i) => (i - 1 + total) % total);
  const goToNext = () => setCurrentIndex((i) => (i + 1) % total);

  const handleTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) delta > 0 ? goToPrev() : goToNext();
    touchStartX.current = null;
  };

  return (
    <div className="relative w-full text-center">

      {/* Image container */}
      <div
        className="relative overflow-hidden rounded-xl shadow-lg bg-gray-50"
        style={{ height: "288px" }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Blurred backdrop of the current image fills the letterbox bars
            (single cheap layer; images are never cropped). */}
        <div
          className="absolute inset-0 scale-110 bg-cover bg-center blur-xl"
          style={{ backgroundImage: `url("${images[currentIndex].src}")` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-white/30" aria-hidden="true" />

        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.caption || `slide-${i + 1}`}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out ${
              i === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            loading={i === currentIndex ? "eager" : "lazy"}
          />
        ))}

        {/* Prev button */}
        <button
          onClick={goToPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 hover:bg-white transition-all focus:outline-none z-10"
          aria-label="Previous"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Next button */}
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 hover:bg-white transition-all focus:outline-none z-10"
          aria-label="Next"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === currentIndex ? "w-2.5 h-2.5 bg-primary" : "w-2 h-2 bg-gray-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Caption */}
      {images[currentIndex].caption && (
        <div className="mt-3 flex justify-center">
          <p className="bg-white/40 backdrop-blur-md text-primary font-medium px-4 py-2 rounded-full text-sm md:text-base shadow-sm border border-white/60 inline-flex items-center gap-2 transition-all duration-500">
            {images[currentIndex].caption}
          </p>
        </div>
      )}

    </div>
  );
};

export default Index;
