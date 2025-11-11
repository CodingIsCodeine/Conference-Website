import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-academic-dark text-white mt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Two cards layout - perfectly balanced */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {/* CARD 1 - Contact Us */}
          <div
            className="group w-full max-w-[28rem] h-64 bg-white/5 backdrop-blur-sm rounded-2xl p-6 flex flex-col justify-center items-center text-center transform transition-transform duration-300 ease-out shadow-md hover:shadow-2xl"
            aria-label="Contact card"
          >
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 ring-1 ring-white/8 group-hover:ring-primary/40 transition-all duration-300 mb-3">
              <Mail className="h-5 w-5 text-primary" />
            </div>

            {/* Title */}
            <h4 className="text-lg font-semibold tracking-wide mb-3">
              Contact Us
            </h4>

            {/* Centered Contact Info */}
            <div className="flex flex-col items-center justify-center space-y-5 text-sm text-white/80 leading-relaxed">
              <div>
                <p className="text-xs text-white/70 mb-0.5">Email</p>
                <a
                  href="mailto:gcesdip2026@gmail.com"
                  className="block text-sm hover:text-primary transition-colors"
                >
                  gcesdip2026@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs text-white/70 mb-0.5">Phone</p>
                <a
                  href="tel:02612201649"
                  className="block text-sm hover:text-primary transition-colors"
                >
                  0261-2201649 / 1657 / 1658
                </a>
              </div>

              <div>
                <p className="text-xs text-white/70 mb-1">
                  Student Coordinators
                </p>
                <div className="space-y-0.5">
                  <a
                    href="tel:+917977438476"
                    className="block text-sm hover:text-primary transition-colors"
                  >
                    +91 79774 38476
                  </a>
                  <a
                    href="tel:+917016303793"
                    className="block text-sm hover:text-primary transition-colors"
                  >
                    +91 70163 03793
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2 - Location */}
          <div
            className="group w-full max-w-[28rem] h-64 bg-white/5 backdrop-blur-sm rounded-2xl p-6 flex flex-col justify-center items-center text-center transform transition-transform duration-300 ease-out shadow-md hover:shadow-2xl"
            aria-label="Location card"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 ring-1 ring-white/8 group-hover:ring-primary/40 transition-all duration-300 mb-3">
              <MapPin className="h-5 w-5 text-primary" />
            </div>

            <h4 className="text-lg font-semibold tracking-wide mb-3">
              Location
            </h4>

            <div className="text-sm text-white/80 leading-relaxed max-w-[20rem]">
              <p className="text-sm font-medium text-white mb-1">
                Department of Chemical Engineering
              </p>
              <p className="text-sm text-white/80">
                Sardar Vallabhbhai National Institute of Technology
              </p>
              <p className="text-sm text-white/70">Ichchhanath, Surat – 395007</p>
              <p className="text-sm text-white/70 mb-3">Gujarat, India</p>

              <a
                href="https://maps.google.com/?q=SVNIT+Surat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-all"
              >
                <MapPin className="h-4 w-4 mr-1" /> View on Map
              </a>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-sm text-white/70">
            Organised by{" "}
            <span className="text-primary font-semibold">
              Sardar Vallabhbhai National Institute of Technology, Surat
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
