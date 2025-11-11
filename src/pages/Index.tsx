import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, Award, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import ImageCarousel from "@/components/ui/ImageCarousel";
import AboutSurat from "@/components/ui/AboutSurat";

const Index = () => {
  const deadlines = [
    { title: "Abstract submission", date: "1 March 2026" },
    { title: "Intimation of acceptance", date: "16 March 2026" },
    { title: "Full paper submission", date: "31 March 2026" },
    { title: "Last day of registration", date: "10 April 2026" },
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
            organizations, and policymakers. The conference will bring together all
            stakeholders from academia, research, industry, and society to exchange ideas
            in the following thrust areas:
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
            2007 by Parliament of India, is among India’s premier engineering institutions. Spanning over 256 acres of lush
            green campus, SVNIT offers diverse programs including 11 undergraduate, 21 postgraduate,
            integrated M.Sc., dual-degree (B.Tech.+M.Tech./MBA), and Ph.D. programs across engineering
            and applied sciences.
          </p>

          <p>
            The institute emphasizes interdisciplinary research, innovation, and industry
            collaboration, fostering academic excellence and professional growth. With an outstanding
            placement record and a strong network of eminent alumni, SVNIT continues to play a vital
            role in advancing engineering education and research in India.
          </p>

          {/* Carousel - adjust image paths to match what you put in /public/images */}
          <div className="pt-2">
            <ImageCarousel
              images={[
                "/public/images/svnit-3.jpg",
                "/public/images/svnit-5.jpg",
                "/public/images/svnit-7.jpg",
                "/public/images/svnit-8.jpg",
                "/public/images/svnit-9.jpg",
                "/public/images/svnit-10.jpg",
                "/public/images/svnit-6.jpg",
                "/public/images/svnit-11.jpg",
                // add more if available
              ]}
              interval={3500} // milliseconds; change to taste
              className="mt-4"
            />
          </div>
        </div>
      ),
    },
    {
    title: "Dept. of Chemical Engineering",
    icon: Users,
    description: (
      <div className="space-y-4">
        <p>
          Established in 1995, the Department of Chemical Engineering, SVNIT, Surat, offers programmes
          leading to Bachelor’s, Master’s, and Ph.D. degrees in Chemical Engineering. The department
          has built a comprehensive research infrastructure with top-notch facilities for carrying out
          cutting-edge research.
        </p>

        <p>
          The department strives to provide a conducive environment for creative and dynamic research work.
          Faculty members are granted several R&D projects from organizations like GUJCOST, DST, DBT, etc.,
          and have high-quality research publications and patents. The department actively conducts faculty
          development programmes, short-term training programmes, and workshops for engineering faculty and
          industry personnel.
        </p>

        <p>
          Currently, the department has 19 faculty members with expertise in various domains of Chemical Engineering.
        </p>

        <div className="pt-2">
          <ImageCarousel
            images={[
              "/images/chemdept-1.jpg",
              "/images/chemdept-2.jpg",
              "/images/chemdept-3.jpg",
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

      {/* Hero Section */}
      <section
        className="relative h-[600px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <p className="text-xl md:text-2xl font-semibold mb-4">17th – 18th April 2026</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-5xl mx-auto leading-tight">
              2nd International Conference on Green Chemistry and Engineering towards Sustainable Development
            </h1>
            <p className="text-xl md:text-2xl mb-8">An Industrial Perspective (GCESDIP 2.0)</p>
            <p className="text-lg md:text-xl">SVNIT, Surat, Gujarat, India</p>
          </div>
        </div>
      </section>

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

        {/* Previous Edition */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              Previous Edition Highlights
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-8">
                    <div>
                      <p className="text-4xl font-bold text-primary mb-2">150+</p>
                      <p className="text-muted-foreground">Participants</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold text-primary mb-2">50+</p>
                      <p className="text-muted-foreground">Research Papers</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold text-primary mb-2">20+</p>
                      <p className="text-muted-foreground">Countries</p>
                    </div>
                  </div>
                  <p className="text-center text-muted-foreground">
                    The first edition of GCESDIP was a resounding success, bringing together leading experts 
                    from academia and industry to discuss sustainable solutions for a greener future.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <AboutSurat
  images={[
    '/public/images/surat2.jpg',
    '/public/images/surat3.jpeg',
    '/public/images/surat4.webpg',
  ]}
/>


        {/* Call to Action */}
        <section className="py-16 gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us at GCESDIP 2.0</h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Be part of the conversation on sustainable development and green chemistry
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Submit Abstract
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-primary"
              >
                Register Now
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
