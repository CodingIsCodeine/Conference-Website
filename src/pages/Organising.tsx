import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";
import Ticker from "@/components/Ticker";


type Person = {
  name: string;
  title: string;
  initials: string;
  hasCv?: boolean;
  cvLink?: string;
  description?: string;
  imageSrc?: string;
};

const Organising = () => {
  // --- DATA ---
  const chiefPatrons: Person[] = [
    { name: "Prof.(Dr.) Anupam Shukla", title: "Director, SVNIT, Surat", initials: "AS", hasCv: true, cvLink: "/assets/cvs/akv.pdf", imageSrc: "/images/dignitaries/anupam.png" },
    // { name: "Prof.(Dr.) A. B. Pandit", title: "VC, ICT Mumbai", initials: "ABP", hasCv: true, cvLink: "/assets/cvs/blr.pdf", imageSrc: "/" },
    // { name: "Prof.(Dr.) Manoj Singh Gaur", title: "Director, IIT Jammu", initials: "MSG", hasCv: true, cvLink: "/assets/cvs/csn.pdf", imageSrc: "" },
  ];

  const patron: Person = { name: "Dr. V. N. Lad", title: "Professor & Head, DoChE, SVNIT, Surat", initials: "VNL", hasCv: false, imageSrc: "/images/dignitaries/laad.png" };

  const chairmen: Person[] = [
    { name: "Dr. Jigisha K. Parikh", title: "Professor, DoChE, SVNIT, Surat ", initials: "JKP", hasCv: true, cvLink: "https://www.svnit.ac.in/facup/jkp.pdf", imageSrc: "/images/dignitaries/jigisha.png" },
    { name: "Dr. Meghal A. Desai", title: "Professor, DoChE, SVNIT, Surat ", initials: "MAD", hasCv: true, cvLink: "https://svnit.ac.in/facup/CV_Meghal_Website_July2025.pdf", imageSrc: "/images/dignitaries/desai.png" },
  ];

  const organisingSecretaries: Person[] = [
    { name: "Dr. Sanjay R. Patel", title: "Professor, DoChE, SVNIT, Surat ", initials: "SRP", hasCv: true, cvLink: "https://www.svnit.ac.in/facup/C.V._%20Sanjay_17-01-24.pdf", imageSrc: "/images/dignitaries/srp.png" },
    { name: "Dr. G. C. Jadeja", title: "Associate Professor, DoChE, SVNIT, Surat ", initials: "GCJ", hasCv: true, cvLink: "https://www.svnit.ac.in/facup/GC%20Jadeja.pdf", imageSrc: "/images/dignitaries/jadeja.png" },
    { name: "Dr. Sarita Kalla", title: "Assistant Professor, DoChE, SVNIT, Surat ", initials: "SK", hasCv: true, cvLink: "https://www.svnit.ac.in/facup/Resume_SVNIT.pdf", imageSrc: "/images/dignitaries/kalla.png" },
    { name: "Dr. S. K. Sundar ", title: "Assistant Professor, DoChE, SVNIT, Surat ", initials: "SSK", hasCv: true, cvLink: "https://www.svnit.ac.in/facup/SUNDARSK_CV.pdf", imageSrc: "/images/dignitaries/sundar.png" },
    // { name: "Dr. Yogesh Nimdeo", title: "Assistant Professor, IIT Jammu", initials: "YN", hasCv: true, cvLink: "", imageSrc: "/images/dignitaries/nimdeo.png" },
  ];

  const phdScholars: Person[] = [
    { name: "Mr. Miraj Savani", title: "", initials: "MS", imageSrc: "/images/dignitaries/miraj.png", description: "Drug Delivery, Emulation, Thermoresponsive polymers, Advance materials" },
    { name: "Ms. Rashmi Pathania", title: "", initials: "RP", imageSrc: "/images/dignitaries/rashmi.png", description: "Development of hydrophobic nano coating on different substrates"},
    { name: "Ms. Khushbu Bhavsar", title: "", initials: "KB", imageSrc: "/images/dignitaries/khushbu.png", description: "Valorization of biomass through chemo-catalytic routes, Carbon capture"},
    { name: "Mr. Purusottam Tripathy", title: "", initials: "PT", imageSrc: "/images/dignitaries/purusottam.png", description: "Membrane Technology, Wastewater treatment, Water purification, Advanced oxidation processes"},
    { name: "Ms. Priya Sharma", title: "", initials: "PS", imageSrc: "/images/dignitaries/priya.png", description: "Valorization of lignin to develop sustainable functional materials for diverse applications in material science"},
    { name: "Mr. Aamir Vhora", title: "", initials: "AV", imageSrc: "/images/dignitaries/amir.png", description:"Developing Advanced membrane separation systems through innovative membrane fabrication integrated with biomaterial nanoparticles to enhance selectivity, permeability, and sustainability"},
    { name: "Ms. Shalinee Gupta", title: "", initials: "SG", imageSrc: "/images/dignitaries/shalinee.png", description: "Advance membrane separation process, Nanobubbles technology"},
    { name: "Ms. Sachin Thorat", title: "", initials: "ST", imageSrc: "/images/dignitaries/sachin.png", description: "Nano- drug delivery systems, Membrane synthesis and engineering, membrane assisted crystallization, liquid extraction, Mathematical modeling and simulation"},
  ];

  const mtechStudents: Person[] = [
    { name: "Ms. Jemish Dattani", title: "", initials: "JD", imageSrc: "/images/dignitaries/jemish.png", description: "Eco-friendly techniques to extract cellulose from aquatic biomass using innovative physical and chemical methods. Research emphasizes sustainable resource utilisation through integrated extraction strategies."},
    { name: "Mr. Kishan Patel", title: "", initials: "KP", imageSrc: "/images/dignitaries/kishan.png", description: "Flue gas separation through mixed matrix membranes enhances gas selectivity and permeability by combining the robustness of polymers with the superior adsorption and diffusion properties of inorganic fillers."},
    { name: "Mr. Harshil Patel", title: "", initials: "H", imageSrc: "/images/dignitaries/harshil.png", description: "Extraction of bio active substances and their encapsulation in hydrogel based drug delivery system."},
    { name: "Mr. Ansu Silawat", title: "", initials: "A", imageSrc: "/images/dignitaries/anshul.png", description: "A study on ultrasound reactive Crystallisation of Lithium Carbonate using Through Microfludic channels." },
  ];

  const btechStudents: Person[] = [
    { name: "Mr. Hriday K. Samdani", title: "", initials: "HKS", imageSrc: "/images/dignitaries/hriday.png", description: "AIML Enthusiast, AI in Drug Discovery and Development" },
    { name: "Ms. Diya Sharma", title: "", initials: "DS", imageSrc: "/images/diya.png", description: "Antisolvent crystallization and its application in improving the solubility and solid-state properties of pharmaceutical drugs" },
    { name: "Ms. Vedica Mahendian", title: "", initials: "VM", imageSrc: "/images/Vedica.png", description: "Nanotechnology and applications of engineering in the pharmaceutical sector, sustainable energy and waste valorization." },
    { name: "Ms. Akshita Jain", title: "", initials: "AJ", imageSrc: "/images/akshita.png", description: "Nanotechnology, Drug Delivery, Microbial Fuel Cells,Process Economics, Public speaking, Event logistics." },
  ];

  // --- RENDER HELPERS ---
  const renderAuthority = (person: Person, size: "large" | "medium" = "large", showOverlay: boolean = true) => {
    const avatarSize = size === "large" ? "h-60 w-60" : "h-40 w-40";
    const cardClasses =
      size === "large"
        ? "shadow-card hover:shadow-hover transition-smooth cursor-pointer group"
        : "shadow-card hover:shadow-hover transition-smooth group";

    const avatarInner = (
      <div className="relative inline-flex items-center justify-center mx-auto mb-4">
        <div
          className={`relative ${avatarSize} rounded-full p-[4px] bg-gradient-to-b from-primary/90 to-primary overflow-visible transition-all duration-300 group-hover:scale-105`}
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-secondary flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
            <Avatar className="w-full h-full rounded-none">
              <AvatarImage src={person.imageSrc} alt={person.name} className="object-cover w-full h-full" />
              <AvatarFallback
                className={`text-secondary-foreground ${size === "large" ? "text-2xl" : "text-lg"}`}
              >
                {person.initials}
              </AvatarFallback>
            </Avatar>

            {person.hasCv && showOverlay && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/45 opacity-0 group-hover:opacity-100 transition-all duration-250 ease-out rounded-full"
              >
                <span className="text-xs md:text-sm text-white font-medium tracking-wide opacity-90">
                  Click for more info
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    );

    return (
      <Card className={cardClasses} key={person.name}>
        <CardContent className="p-8 text-center">
          {person.hasCv && person.cvLink ? (
            <a href={person.cvLink} target="_blank" rel="noopener noreferrer">
              {avatarInner}
            </a>
          ) : (
            avatarInner
          )}
          <h3 className="text-xl font-semibold mb-1">{person.name}</h3>
          <p className="text-sm text-muted-foreground">{person.title}</p>
        </CardContent>
      </Card>
    );
  };

const renderScholar = (person: Person) => {
  const [open, setOpen] = React.useState(false);

  // Detect mobile screen width
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <TooltipProvider delayDuration={150} skipDelayDuration={0} key={person.name}>
      <Tooltip open={isMobile ? open : undefined} onOpenChange={setOpen}>
        <TooltipTrigger
          asChild
          onClick={() => {
            // Toggle tooltip manually on tap for mobile
            if (isMobile) setOpen((prev) => !prev);
          }}
        >
          <Card className="shadow-card hover:shadow-hover transition-smooth cursor-pointer hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] duration-300">
            <CardContent className="p-6 text-center">
              <Avatar className="h-40 w-40 mx-auto mb-3 border-2 border-primary">
                <AvatarImage src={person.imageSrc} alt={person.name} />
                <AvatarFallback className="bg-secondary text-secondary-foreground text-lg">
                  {person.initials}
                </AvatarFallback>
              </Avatar>
              <h4 className="text-base font-semibold mb-1">{person.name}</h4>
              <p className="text-xs text-muted-foreground">{person.title}</p>
            </CardContent>
          </Card>
        </TooltipTrigger>
        <TooltipContent side="top" className="text-sm text-center">
          <p className="max-w-xs">{person.description ?? "Student/Scholar — short bio or role."}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Ticker />  

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Organising Committee</h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Meet the team behind GCESDIP 2.0
          </p>

          {/* Chief Patrons */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-6 text-primary">Chief Patrons</h2>
            <div className="max-w-md mx-auto">
              {/* grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto */}
              {chiefPatrons.map((p) => renderAuthority(p, "medium", false))}
            </div>
          </section>

          {/* Patron */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-6 text-primary">Patron</h2>
            <div className="max-w-md mx-auto">{renderAuthority(patron, "medium")}</div>
          </section>

          {/* Chairpersons */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-6 text-primary">Chairpersons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {chairmen.map((person) => renderAuthority(person, "medium"))}
            </div>
          </section>

          {/* Organising Secretaries */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-6 text-primary">Organising Secretaries</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {organisingSecretaries.map((person) => renderAuthority(person, "medium"))}
            </div>
          </section>

          {/* Student Coordinators */}
          <section>
            <h2 className="text-2xl font-bold text-center mb-10 text-primary">Student Coordinators</h2>

            {/* PhD Research Scholars */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-center mb-6">PhD Research Scholars</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {phdScholars.map(renderScholar)}
              </div>
            </div>

            {/* MTech Students */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-center mb-6">M.Tech Students</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {mtechStudents.map(renderScholar)}
              </div>
            </div>

            {/* BTech Students */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-center mb-6">B.Tech Students</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {btechStudents.map(renderScholar)}
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Hover over photos to see research interests
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Organising;
