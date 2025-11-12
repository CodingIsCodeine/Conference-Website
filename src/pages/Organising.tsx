
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
    { name: "Prof.(Dr.) A. B. Pandit", title: "VC, ICT Mumbai", initials: "ABP", hasCv: true, cvLink: "/assets/cvs/blr.pdf", imageSrc: "/" },
    { name: "Prof.(Dr.) Manoj Singh Gaur", title: "Director, IIT Jammu", initials: "MSG", hasCv: true, cvLink: "/assets/cvs/csn.pdf", imageSrc: "" },
  ];

  const patron: Person = { name: "Prof.(Dr.) V. N. Lad", title: "Professor & Head, DoChE, SVNIT, Surat", initials: "VNL", hasCv: true, cvLink: "http://svnit.ac.in/facup/homepage__vnl/web%20page%204.htm", imageSrc: "/images/dignitaries/laad.png" };

  const chairmen: Person[] = [
    { name: "Prof.(Dr.) Jigisha K. Parikh", title: "Professor, DoChE, SVNIT, Surat ", initials: "JKP", hasCv: true, cvLink: "https://www.svnit.ac.in/facup/jkp.pdf", imageSrc: "/images/dignitaries/jigisha.png" },
    { name: "Prof.(Dr.) Meghal A. Desai", title: "Professor, DoChE, SVNIT, Surat ", initials: "MAD", hasCv: true, cvLink: "https://svnit.ac.in/facup/CV_Meghal_Website_July2025.pdf", imageSrc: "/images/dignitaries/desai.png" },
  ];

  const organisingSecretaries: Person[] = [
    { name: "Prof.(Dr.) Sanjaykumar R. Patel", title: "Professor, DoChE, SVNIT, Surat ", initials: "SRP", hasCv: true, cvLink: "https://www.svnit.ac.in/facup/C.V._%20Sanjay_17-01-24.pdf", imageSrc: "/images/dignitaries/sanjay.png" },
    { name: "Prof.(Dr.) G. C. Jadeja", title: "Professor, DoChE, SVNIT, Surat ", initials: "GCJ", hasCv: true, cvLink: "https://www.svnit.ac.in/facup/GC%20Jadeja.pdf", imageSrc: "/images/dignitaries/jadeja.png" },
    { name: "Prof.(Dr.) Sarita Kalla", title: "Professor, DoChE, SVNIT, Surat ", initials: "SK", hasCv: true, cvLink: "https://www.svnit.ac.in/facup/Resume_SVNIT.pdf", imageSrc: "/images/dignitaries/kalla.png" },
    { name: "Prof.(Dr.) Sundar S. K.", title: "Professor, DoChE, SVNIT, Surat ", initials: "SSK", hasCv: true, cvLink: "https://www.svnit.ac.in/facup/SUNDARSK_CV.pdf", imageSrc: "/images/dignitaries/sundar.png" },
    { name: "Prof.(Dr.) Yogesh Nimdeo", title: "Professor, DoChE, SVNIT, Surat ", initials: "YN", hasCv: true, cvLink: "", imageSrc: "/images/dignitaries/nimdeo.png" },
  ];

  const scholars: Person[] = [
    { name: "Mr. Miraj Savani", title: "PhD Scholar", initials: "MS", imageSrc: "/images/dignitaries/miraj.png", description: "Drug Delivery, Emulation, Thermoresponsive polymers, Advance materials" },
    { name: "Ms. Rashmi Pathania", title: "PhD Scholar", initials: "RP", imageSrc: "/images/dignitaries/rashmi.png", description: "Development of hydrophobic nano coating on different substrates"},
    { name: "Ms. Khushbu Bhavsar", title: "Research Scholar", initials: "KB", imageSrc: "/images/dignitaries/khushbu.png", description: "Valorization of biomass through chemo-catalytic routes, Carbon capture"},
    { name: "Mr. Purusottam Tripathy", title: "Research Scholar", initials: "PT", imageSrc: "/images/dignitaries/purusottam.png", description: " Membrane Technology, Wastewater treatment, Water purification, Advanced oxidation processes"},
    { name: "Ms. Priya Sharma", title: "MTech Student", initials: "PS", imageSrc: "/images/dignitaries/priya.png", description: "Valorization of lignin to develop sustainable functional materials for diverse applications in material science"},
    { name: "Mr. Aamir Vhora", title: "MTech Student", initials: "AV", imageSrc: "/images/dignitaries/amir.png", description: "Advanced membrane separation systems through innovative membrane fabrication integrated with biomaterial nanoparticles to enhance selectivity, permeability, and sustainability"},
    { name: "Ms. Shalinee Gupta", title: "PhD Scholar", initials: "SG", imageSrc: "/images/dignitaries/shalinee.png", description: "Advance membrane separation process, Nanobubbles technology"},
    { name: "Ms. Sachin Thorat", title: "Research Scholar", initials: "ST", imageSrc: "/images/dignitaries/sachin.png", description: "Nano- drug delivery systems, Membrane synthesis and engineering, membrane assisted crystallization, liquid extraction, Mathematical modeling and simulation"},
    { name: "Mr. Hriday K. Samdani", title: "BTech Student", initials: "HKS", imageSrc: "/images/dignitaries/hriday.png", description: "Student"},
    { name: "Vikash Patil", title: "MTech Student", initials: "VP", imageSrc: "/images/dignitaries/vikash.png" },
    { name: "Ritu Menon", title: "PhD Scholar", initials: "RMN", imageSrc: "" },
    { name: "Sanjay Kulkarni", title: "Research Scholar", initials: "SKU", imageSrc: "" },
    { name: "Nisha Gupta", title: "MTech Student", initials: "NG", imageSrc: "" },
  ];

  // --- RENDER HELPERS ---
  const renderAuthority = (person: Person, size: "large" | "medium" = "large") => {
    const avatarSize = size === "large" ? "h-32 w-32" : "h-24 w-24";
    const cardClasses =
      size === "large"
        ? "shadow-card hover:shadow-hover transition-smooth cursor-pointer group"
        : "shadow-card hover:shadow-hover transition-smooth group";

    const avatarInner = (
      <div className="relative inline-flex items-center justify-center mx-auto mb-4">
        {/* Outer glow ring */}
        <div
          className={`relative ${avatarSize} rounded-full p-[4px] bg-gradient-to-b from-primary/90 to-primary overflow-visible transition-all duration-300 group-hover:scale-105`}
        >
          {/* Circular image container */}
          <div className="w-full h-full rounded-full overflow-hidden bg-secondary flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
            <Avatar className="w-full h-full rounded-none">
              <AvatarImage src={person.imageSrc} alt={person.name} className="object-cover w-full h-full" />
              <AvatarFallback
                className={`text-secondary-foreground ${
                  size === "large" ? "text-2xl" : "text-lg"
                }`}
              >
                {person.initials}
              </AvatarFallback>
            </Avatar>

            {person.hasCv && (
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

  const renderScholar = (person: Person) => (
    <TooltipProvider delayDuration={150} skipDelayDuration={0} key={person.name}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Card className="shadow-card hover:shadow-hover transition-smooth cursor-pointer hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] duration-300">
            <CardContent className="p-6 text-center">
              <Avatar className="h-20 w-20 mx-auto mb-3 border-2 border-primary">
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
        <TooltipContent>
          <p className="max-w-xs">{person.description ?? "Student/Scholar — short bio or role."}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Organising Committee</h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Meet the team behind GCESDIP 2.0
          </p>

          {/* Chief Patrons */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-6 text-primary">Chief Patrons</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {chiefPatrons.map((p) => renderAuthority(p, "medium"))}
            </div>
          </section>

          {/* Patron */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-6 text-primary">Patron</h2>
            <div className="max-w-md mx-auto">{renderAuthority(patron, "large")}</div>
          </section>

          {/* Chairmen */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-6 text-primary">Chairmen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {chairmen.map((person) => renderAuthority(person, "medium"))}
            </div>
          </section>

          {/* Organising Secretaries */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-6 text-primary">Organising Secretaries</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {organisingSecretaries.map((person) => renderAuthority(person, "medium"))}
            </div>
          </section>

          {/* Scholars */}
          <section>
            <h2 className="text-2xl font-bold text-center mb-6 text-primary">
              Research Scholars & Student Volunteers
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {scholars.map(renderScholar)}
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