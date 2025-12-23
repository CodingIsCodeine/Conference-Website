import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, Award, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import ImageCarousel from "@/components/ui/ImageCarousel";
import jmpLogo from "@/assets/jmp-logo.png"; // adjust path if needed


const Index = () => {
  const [showHeroText, setShowHeroText] = useState(true);
  const [showWorkshop, setShowWorkshop] = useState(false);
  const [showLogos, setShowLogos] = useState(false);


  useEffect(() => {
    const runAnimation = () => {
      // Reset
      setShowHeroText(true);
      setShowWorkshop(false);
      setShowLogos(false);

      // 1️⃣ Conference Title
      setTimeout(() => setShowHeroText(false), 3800);

      // 2️⃣ JMP Workshop (clean gap + fade)
      setTimeout(() => setShowWorkshop(true), 4200);
      setTimeout(() => setShowWorkshop(false), 6500);

      // 3️⃣ Logos
      setTimeout(() => setShowLogos(true), 6900);
    };

    runAnimation();

    const loopInterval = setInterval(runAnimation, 10000);

    return () => clearInterval(loopInterval);
  }, []);


  const deadlines = [
    { title: "Last date of Abstract Submission", date: <>1<sup>st</sup> March 2026</> },
    { title: "Intimation of Acceptance", date: <>16<sup>th</sup> March 2026</> },
    { title: "Last date of Registration", date: <>10<sup>th</sup> April 2026</> },
    { title: "Full Paper Submission", date: "Will be announced soon" },
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
            {/* DOE helps identify critical factors and interaction effects that significantly
            influence outcomes, allowing designers and engineers to correct issues and
            achieve improved and reliable performance before full-scale implementation. */}
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

          {/* <p>
            The primary objective of this workshop is to guide participants through
            the complete DOE workflow — from experiment design and statistical analysis
            to optimization — ensuring a comprehensive and application-oriented learning experience.
          </p> */}

          <p>
            By the end of the program, participants will gain enhanced proficiency in
            DOE methodologies and JMP software, empowering them to make data-driven
            decisions and drive continuous improvement in their respective domains.
          </p>

          <div className="mt-4 space-y-1">
            <p className="font-semibold">Resource Person:</p>
            <p>Dr. Muralidhara A., Global JMP Team</p>
          </div>

          {/* 🔔 Highlighted Note */}
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
            Established in 1995, the Department of Chemical Engineering, SVNIT, Surat, offers programmes leading to Bachelor’s, Master’s, and Ph.D. degrees in Chemical Engineering. The department has built a comprehensive research infrastructure with top-notch facilities for carrying out cutting-edge research.
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
      {/* HERO SECTION WITH SLIDE-OUT + Organizing + LOGOS */}
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

          {/* Hero original text */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
              showHeroText ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
          >
            <div className="container mx-auto px-4 text-center">
              <p className="text-xl md:text-2xl font-semibold mb-4">
                17<sup>th</sup> – 18<sup>th</sup> April 2026
              </p>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-5xl mx-auto leading-tight">
                2<sup>nd</sup> International Conference on "Green Chemistry and Engineering towards Sustainable Development - An Industrial Perspective"
              </h1>

              <p className="text-xl md:text-2xl mb-8">GCESDIP 2.0</p>
              {/* <p className="text-lg md:text-xl">SVNIT, Surat, Gujarat, India</p> */}
            </div>
          </div>

          {/* JMP PRE-CONFERENCE WORKSHOP */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${
              showWorkshop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="container mx-auto px-4 text-center max-w-4xl">

              <p className="text-sm md:text-base uppercase tracking-widest text-white/80 mb-4">
                Preconference Workshop
              </p>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="block">
                  Design of Experiments with
                </span>
                <span className="block mt-3 text-white">
                  JMP
                </span>
              </h2>

              <p className="text-lg md:text-xl text-white/90 mb-6">
                Hands-on training for researchers, academicians & industry professionals
              </p>

              {/* Date */}
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md text-lg md:text-xl font-semibold mb-6">
                📅 <span>16<sup>th</sup> April 2026</span>
              </div>

              {/* Knowledge Partner */}
              <div className="flex flex-col items-center justify-center gap-3 opacity-95 mt-2">
                <span className="text-sm md:text-base uppercase tracking-widest text-white/80">
                  Knowledge Partner
                </span>

                <img
                  src={jmpLogo}
                  alt="JMP Software"
                  className="h-14 md:h-16 lg:h-20 object-contain"
                />
              </div>

            </div>
          </div>


          {/* Organizing + Logos (All together) */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
              showLogos ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="container mx-auto px-4 text-center -mt-12 md:-mt-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 drop-shadow-lg">
                Organized by
              </h2>

              {/* COLLEGE LOGO */}
              <img
                src="/images/svnit.png"
                alt="College Logo"
                className="mx-auto h-32 md:h-40 object-contain drop-shadow-xl mb-10"
              />

              {/* In Association With */}
              <h3 className="text-xl md:text-2xl font-semibold mb-6 drop-shadow-lg">
                In association with
              </h3>

              <div className="flex justify-center gap-10">
                <img
                  src="/images/ict.png"
                  alt="Institute 2"
                  className="h-36 md:h-40 object-contain drop-shadow-xl"
                />
                {/* LOGO 1 */}
                <img
                  src="/images/dignitaries/jammu.jpg"
                  alt="Institute 1"
                  className="h-32 md:h-36 object-contain drop-shadow-xl"
                />

                {/* LOGO 2 */}
              </div>
            </div>
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

                // Identify cards in last row
                const isLastRow =
                  index >= totalCards - remainder && remainder !== 0;

                // Centering logic
                let alignmentClass = "";
                if (isLastRow) {
                  if (remainder === 1) {
                    // Single card → center column
                    alignmentClass = "md:col-start-2";
                  } else if (remainder === 2) {
                    // Two cards → shift both to center
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
                      <p className="text-sm text-muted-foreground text-center leading-relaxed whitespace-pre-line">
                        {section.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
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
Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat, established in 1961 by the Government of India and recognized as an Institute of National Importance since 2007 by Parliament of India, is among India’s premier engineering institutions. Spanning over 256 acres of lush green campus, SVNIT offers diverse programs including 11 undergraduate, 21 postgraduate, integrated M.Sc., dual-degree (B.Tech.+M.Tech./MBA), and Ph.D. programs across engineering and applied sciences.                      </p>
                      <p className="text-muted-foreground leading-relaxed">
The institute emphasizes interdisciplinary research, innovation, and industry collaboration, fostering academic excellence and professional growth. With an outstanding placement record and a strong network of eminent alumni, SVNIT continues to play a vital role in advancing engineering education and research in India.</p>
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
With its rich cultural heritage, modern infrastructure, and thriving industrial base, Surat offers an ideal setting for this international conference on green chemistry and sustainable development.                      </p>
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

                      <p className="text-muted-foreground leading-relaxed mb-4"> The event attracted researchers from IITs, NITs, CSIR labs and global institutions in <strong>Japan, Indonesia, Korea, and Canada.</strong> Keynote lectures highlighted emerging trends in Green Chemistry and Sustainable Development. {/* Around 30 additional participants joined to explore recent advances and research opportunities. */} </p> 
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
              Be part of the journey on sustainable development and green chemistry</p>
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
    { src: "/images/svnit-3.jpg", },
    { src: "/images/svnit-5.jpg", },
    { src: "/images/svnit-7.jpg", },
    { src: "/images/svnit-8.jpg", },
    { src: "/images/svnit-9.jpg", },
    { src: "/images/svnit-10.jpg", },
    { src: "/images/svnit-6.jpg", },
    { src: "/images/svnit-11.jpg", },
  ];

  return <AutoCarousel images={images} />;
};
/* Surat Image Carousel */
const SuratImageCarousel = () => {
  const images = [
    { src: "/images/surat-2.jpg", caption: "🌄 Saputara — Gujarat’s Scenic Hill Station" },
    { src: "/images/surat-3.jpeg", caption: "🏖️ Daman Beach — Calm Waters & Coastal Charm" },
    { src: "/images/surat-7.jpg", caption: "🗿 Statue of Unity — The World's Tallest Statue" },
    { src: "/images/surat-4.jpg", caption: "🌅 Dumas Beach — Tranquil Waves & Sunset Views " },
    { src: "/images/surat-6.jpg", caption: "🏞️ Gopi Talav — A Serene Heritage Lake " },
    { src: "/images/surat-5.jpg", caption: "💎 Surat Diamond Bourse — The Heart of Global Trade" },
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