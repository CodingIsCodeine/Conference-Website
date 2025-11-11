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

const Organising = () => {
  const director = {
    name: "Prof. Manish Kumar Verma",
    title: "Director, SVNIT Surat",
    initials: "MKV",
    hasCv: true,
  };

  const hod = {
    name: "Prof. Rajesh K. Patel",
    title: "Head, Department of Chemical Engineering",
    initials: "RKP",
    hasCv: true,
  };

  const chairpersons = [
    { name: "Prof. Amit Sharma", title: "Professor, Chemical Engineering", initials: "AS", hasCv: true },
    { name: "Prof. Priya Gupta", title: "Professor, Chemical Engineering", initials: "PG", hasCv: true },
  ];

  const secretaries = [
    { name: "Dr. Suresh Kumar", title: "Associate Professor", initials: "SK" },
    { name: "Dr. Neha Desai", title: "Assistant Professor", initials: "ND" },
    { name: "Dr. Vikram Singh", title: "Assistant Professor", initials: "VS" },
    { name: "Dr. Anjali Reddy", title: "Assistant Professor", initials: "AR" },
  ];

  const scholars = [
    { name: "Rahul Mehta", title: "PhD Scholar", initials: "RM", description: "Research in green catalysis" },
    { name: "Sneha Joshi", title: "PhD Scholar", initials: "SJ", description: "Carbon capture technologies" },
    { name: "Arjun Patel", title: "Research Scholar", initials: "AP", description: "Sustainable materials" },
    { name: "Priyanka Shah", title: "Research Scholar", initials: "PS", description: "Bio-based chemicals" },
    { name: "Karan Trivedi", title: "MTech Student", initials: "KT", description: "Process optimization" },
    { name: "Divya Rao", title: "MTech Student", initials: "DR", description: "Waste valorization" },
  ];

  const renderAuthority = (person: typeof director, size: "large" | "medium" = "large") => {
    const avatarSize = size === "large" ? "h-32 w-32" : "h-24 w-24";
    const cardClasses = size === "large" 
      ? "shadow-card hover:shadow-hover transition-smooth cursor-pointer" 
      : "shadow-card hover:shadow-hover transition-smooth";

    return (
      <Card className={cardClasses}>
        <CardContent className="p-8 text-center">
          <Avatar className={`${avatarSize} mx-auto mb-4 border-4 border-primary`}>
            <AvatarImage src="" alt={person.name} />
            <AvatarFallback className="bg-secondary text-secondary-foreground text-2xl">
              {person.initials}
            </AvatarFallback>
          </Avatar>
          <h3 className="text-xl font-semibold mb-1">{person.name}</h3>
          <p className="text-sm text-muted-foreground">{person.title}</p>
          {person.hasCv && (
            <p className="text-xs text-primary mt-2">Click to view CV</p>
          )}
        </CardContent>
      </Card>
    );
  };

  const renderScholar = (person: typeof scholars[0]) => (
    <TooltipProvider key={person.name}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Card className="shadow-card hover:shadow-hover transition-smooth cursor-pointer">
            <CardContent className="p-6 text-center">
              <Avatar className="h-20 w-20 mx-auto mb-3 border-2 border-primary">
                <AvatarImage src="" alt={person.name} />
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
          <p className="max-w-xs">{person.description}</p>
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

          {/* Director */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-6 text-primary">Patron</h2>
            <div className="max-w-md mx-auto">
              {renderAuthority(director, "large")}
            </div>
          </section>

          {/* HOD */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-6 text-primary">Head of Department</h2>
            <div className="max-w-md mx-auto">
              {renderAuthority(hod, "large")}
            </div>
          </section>

          {/* Chairpersons */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-6 text-primary">Conference Chairpersons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {chairpersons.map((person) => (
                <div key={person.name}>
                  {renderAuthority(person, "medium")}
                </div>
              ))}
            </div>
          </section>

          {/* Organising Secretaries */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-6 text-primary">Organising Secretaries</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {secretaries.map((person) => (
                <Card key={person.name} className="shadow-card hover:shadow-hover transition-smooth">
                  <CardContent className="p-6 text-center">
                    <Avatar className="h-20 w-20 mx-auto mb-3 border-2 border-primary">
                      <AvatarImage src="" alt={person.name} />
                      <AvatarFallback className="bg-secondary text-secondary-foreground text-lg">
                        {person.initials}
                      </AvatarFallback>
                    </Avatar>
                    <h4 className="text-base font-semibold mb-1">{person.name}</h4>
                    <p className="text-xs text-muted-foreground">{person.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Research Scholars and Students */}
          <section>
            <h2 className="text-2xl font-bold text-center mb-6 text-primary">
              Research Scholars & Student Volunteers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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
