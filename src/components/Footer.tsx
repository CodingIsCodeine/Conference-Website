import { Mail, MapPin, Link as Chain } from "lucide-react";
import FooterSponsorsTicker from "@/components/FooterSponsorsTicker";

const Footer = () => {
  return (
    <footer className="bg-academic-dark text-white mt-20">
      <div className="container mx-auto px-4 py-16">

        {/* Three cards layout - symmetrical grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">

          {/* CARD 1 - Important Links */}
          <div
            className="w-full max-w-[28rem] h-64 bg-white/5 backdrop-blur-sm rounded-2xl p-6 flex flex-col justify-center items-center text-center"
            aria-label="Important Links card"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 ring-1 ring-white/8 mb-3">
              <Chain className="h-5 w-5 text-primary" />
            </div>

            <h4 className="text-lg font-semibold tracking-wide mb-3">
              Important Links
            </h4>

            <div className="flex flex-col items-center space-y-3 text-sm text-white/80 leading-relaxed">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScHFyvWELZv5HZOM6Z7mOL8uqkqgJrWbZA2iMKWPtQPZph05w/viewform"
                className="hover:text-primary transition-colors"
              >
                Abstract Submission
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeL--0f225-_T4cFpwBfiiZlxMU5HIsVmgKGpY_lOzlONkr_g/viewform"
                className="hover:text-primary transition-colors"
              >
                Register Now
              </a>
              <a
                href="/images/brochure_final.pdf"
                className="hover:text-primary transition-colors"
              >
                Download Brochure
              </a>
            </div>
          </div>

          {/* CARD 2 - Location */}
          <div
            className="w-full max-w-[28rem] h-64 bg-white/5 backdrop-blur-sm rounded-2xl p-6 flex flex-col justify-center items-center text-center"
            aria-label="Location card"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 ring-1 ring-white/8 mb-3">
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

          {/* CARD 3 - Contact Us */}
          <div
            className="w-full max-w-[28rem] h-64 bg-white/5 backdrop-blur-sm rounded-2xl p-6 flex flex-col justify-center items-center text-center"
            aria-label="Contact card"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 ring-1 ring-white/8 mb-3">
              <Mail className="h-5 w-5 text-primary" />
            </div>

            <h4 className="text-lg font-semibold tracking-wide mb-3">
              Contact Us
            </h4>

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
                <p className="text-xs text-white/70 mb-1">Phone</p>
                <div className="space-y-0.5">
                  <a href="tel:+919869607692" className="block hover:text-primary transition-colors">
                    +91 98696 07692
                  </a>
                  <a href="tel:+917977438476" className="block hover:text-primary transition-colors">
                    +91 79774 38476
                  </a>
                  <a href="tel:+917016303793" className="block hover:text-primary transition-colors">
                    +91 70163 03793
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER LOWER BAND */}
        <div className="mt-12">

          {/* TOP LINE */}
          <div className="border-t border-white/10" />

          {/* Sponsors ticker BETWEEN the two lines */}
          <FooterSponsorsTicker />

          {/* BOTTOM LINE + COPYRIGHT */}
          <div className="border-t border-white/10 pt-6 text-center">
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} All Rights Reserved —
              <span className="text-primary font-semibold">
                {" "}DoChE, SVNIT, Surat, Gujarat, India
              </span>
              <br />
              Developed and Managed by
              <span className="text-primary font-semibold"> GCESDIP Team </span>
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
