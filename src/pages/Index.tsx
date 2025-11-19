import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, Award, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import ImageCarousel from "@/components/ui/ImageCarousel";

const Index = () => {
  const [showHeroText, setShowHeroText] = useState(true);
  const [showLogos, setShowLogos] = useState(false);

  useEffect(() => {
    const runAnimation = () => {
      // Reset all states
      setShowHeroText(true);
      setShowLogos(false);

      // Step 1: Show hero text initially, hide after 2 seconds
      setTimeout(() => setShowHeroText(false), 2000);

      // Step 2: Show all logos together after hero text disappears
      setTimeout(() => setShowLogos(true), 2500);
    };

    // Run animation immediately
    runAnimation();

    // Loop the animation every 10 seconds
    const loopInterval = setInterval(runAnimation, 10000);

    // Cleanup interval on component unmount
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
            The 2030 Agenda for Sustainable Development envisions a world of peace,
            prosperity, and environmental balance through its 17 Sustainable Development
            Goals (SDGs). Achieving these goals demands greener, cleaner, and more
            efficient approaches in every sphere — from clean energy and sustainable
            cities to responsible production and climate action.
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
      title: "SVNIT",
      icon: Award,
      description: (
        <div className="space-y-4">
          <p>
            Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat, established in 1961
            by the Government of India and recognized as an Institute of National Importance since
            2007 by Parliament of India, is among India's premier engineering institutions.
          </p>

          <p>
            The institute emphasizes interdisciplinary research, innovation, and industry
            collaboration, fostering academic excellence and professional growth.
          </p>

          <div className="pt-2">
            <ImageCarousel
              images={[
                "/images/svnit-3.jpg",
                "/images/svnit-5.jpg",
                "/images/svnit-7.jpg",
                "/images/svnit-8.jpg",
                "/images/svnit-9.jpg",
                "/images/svnit-10.jpg",
                "/images/svnit-6.jpg",
                "/images/svnit-11.jpg",
              ]}
              interval={3500}
              className="mt-4"
            />
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
            Established in 1995, the Department of Chemical Engineering, SVNIT, Surat, offers programmes
            leading to Bachelor's, Master's, and Ph.D. degrees in Chemical Engineering.
          </p>

          <p>
            The department strives to provide a conducive environment for creative and dynamic research work.
          </p>

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
      {/* HERO SECTION WITH SLIDE-OUT + ORGANISING + LOGOS */}
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
              <p className="text-lg md:text-xl">SVNIT, Surat, Gujarat, India</p>
            </div>
          </div>

          {/* Organising + Logos (All together) */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
              showLogos ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="container mx-auto px-4 text-center -mt-12 md:-mt-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 drop-shadow-lg">
                <i>Organised by</i>
              </h2>

              {/* COLLEGE LOGO */}
              <img
                src="/images/svnit.png"
                alt="College Logo"
                className="mx-auto h-32 md:h-40 object-contain drop-shadow-xl mb-10"
              />

              {/* In Association With */}
              <h3 className="text-xl md:text-2xl font-semibold mb-6 drop-shadow-lg">
                <i>In association with</i>
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
      {/* REST OF YOUR ORIGINAL CODE UNTOUCHED BELOW */}
      {/* -------------------------------------------------------- */}

      <main className="flex-1">
        {/* Conference Deadlines */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              Important Deadlines
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">About</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {aboutSections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <Card key={index} className="shadow-card hover:shadow-hover transition-smooth">
                    <CardHeader>
                      <div className="flex justify-center mb-4">
                        {Icon && <Icon className="h-12 w-12 text-primary" />}
                      </div>
                      <CardTitle className="text-center text-xl">{section.title}</CardTitle>
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
                        Surat, known as the "Diamond City" and "Silk City" of India.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        With its rich cultural heritage and thriving industrial base.
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
              Previous Edition
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        GCESDIP 1.0 was conducted virtually.
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

        {/* Call to Action */}
        <section className="py-16 gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us at GCESDIP 2.0</h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Be part of the conversation on sustainable development
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

/* Surat Image Carousel */
const SuratImageCarousel = () => {
  const images = [
    { src: "/images/surat-2.jpg", caption: "🌄 Saputara" },
    { src: "/images/surat-3.jpeg", caption: "🏖️ Daman Beach" },
    { src: "/images/surat-7.jpg", caption: "🗿 Statue of Unity" },
    { src: "/images/surat-4.jpg", caption: "🌅 Dumas Beach" },
    { src: "/images/surat-6.jpg", caption: "🏞️ Gopi Talav" },
    { src: "/images/surat-5.jpg", caption: "💎 Surat Diamond Bourse" },
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