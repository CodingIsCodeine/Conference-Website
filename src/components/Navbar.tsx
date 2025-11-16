import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; // ✅ Search removed
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/committee", label: "Committee & Speakers" },
    { to: "/abstract", label: "Abstract Submission" },
    { to: "/sponsors", label: "Sponsors & Exhibitors" },
    { to: "/registration", label: "Registration" },
    { to: "/programme", label: "Programme" },
    { to: "/organising", label: "Organising Committee" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-academic-dark text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            {/* 👉 Replace the src with your file in /public/images/ */}
            <div className="h-[68px] w-[68px] flex items-center justify-center rounded-full bg-white p-[4px] overflow-hidden translate-y-[-1px] ring-2 ring-white">
              <img
                src="/images/gcesdiplogo.png"
                alt="GCESDIP Logo"
                className="object-contain h-full w-full translate-y-[-3px] translate-x-[-0px]"
              />
            </div>

            {/* Optional fallback placeholder (remove if not needed) */}
            {/* <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold text-[10px] tracking-wider">
              GCESDIP
            </div> */}
          </div>

          {/* Center Title - Hidden on mobile */}
          <div className="hidden lg:block text-center">
            <h1 className="text-xl font-bold tracking-wide">GCESDIP 2.0</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-smooth"
                activeClassName="bg-primary text-white"
              >
                {link.label}
              </NavLink>
            ))}
            {/* ✅ Search button removed */}
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-academic-dark text-white border-l border-white/10"
            >
              <div className="flex flex-col space-y-4 mt-8">
                <h2 className="text-xl font-bold mb-4">GCESDIP 2.0</h2>
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-smooth"
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
    </nav>
  );
};

export default Navbar;
