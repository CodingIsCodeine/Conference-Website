import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  // MAIN LINKS (visible)
  const mainLinks = [
    { to: "/", label: "Home" },
    { to: "/committee", label: "Advisory Committee" },
    { to: "/abstract", label: "Abstract Submission" },
    { to: "/Speakers", label: "Speakers" },
    { to: "/registration", label: "Registration" },
    { to: "/programme", label: "Programme" },
  ];

  // ONLY THESE INSIDE MORE
  const moreLinks = [
    { to: "/sponsors", label: "Sponsors & Exhibitors" },
    { to: "/organising", label: "Organizing Committee" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-academic-dark text-white shadow-lg">
      <div className="max-w-[1300px] mx-auto px-4">
        <div className="flex items-center h-20">

          {/* Logo + Title (ORIGINAL POSITIONING RESTORED) */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="h-[68px] w-[68px] flex items-center justify-center rounded-full bg-white p-[4px] overflow-hidden translate-y-[-1px] ring-2 ring-white">
              <img
                src="/images/gcesdiplogo.png"
                alt="GCESDIP Logo"
                className="object-contain h-full w-full translate-y-[-3px] translate-x-[-0px]"
              />
            </div>

            <h1 className="hidden md:block text-xl font-bold tracking-wide whitespace-nowrap">
              GCESDIP 2.0
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 ml-auto relative">

            {mainLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-md whitespace-nowrap"
                activeClassName="bg-primary text-white"
              >
                {link.label}
              </NavLink>
            ))}

            {/* MORE DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-md flex items-center gap-1"
              >
                More <ChevronDown size={16} />
              </button>

              {moreOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-academic-dark border border-white/10 rounded-md shadow-lg py-2 z-50">
                  {moreLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      onClick={() => setMoreOpen(false)}
                      className="block px-4 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 whitespace-nowrap"
                      activeClassName="bg-primary text-white"
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="ml-auto lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[300px] bg-academic-dark text-white border-l border-white/10"
              >
                <div className="flex flex-col space-y-3 mt-8">
                  <h2 className="text-xl font-bold mb-4">GCESDIP 2.0</h2>

                  {[...mainLinks, ...moreLinks].map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-3 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-md"
                      activeClassName="bg-primary text-white"
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;