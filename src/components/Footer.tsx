import { Mail, MapPin, Link as Chain } from "lucide-react";
import FooterSponsorsTicker from "@/components/FooterSponsorsTicker";

const Footer = () => {
  return (
    <footer className="bg-academic-dark text-white mt-20">
      <div className="container mx-auto px-4 py-16">

        {/* Three cards layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">

          {/* CARD 1 */}
          <div className="w-full max-w-[28rem] h-64 bg-white/5 backdrop-blur-sm rounded-2xl p-6 flex flex-col justify-center items-center text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 ring-1 ring-white/8 mb-3">
              <Chain className="h-5 w-5 text-primary" />
            </div>

            <h4 className="text-lg font-semibold tracking-wide mb-3">
              Important Links
            </h4>

            <div className="flex flex-col items-center space-y-3 text-sm text-white/80">
              <a href="#" className="hover:text-primary">Abstract Submission</a>
              <a href="#" className="hover:text-primary">Register Now</a>
              <a href="#" className="hover:text-primary">Download Brochure</a>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="w-full max-w-[28rem] h-64 bg-white/5 backdrop-blur-sm rounded-2xl p-6 flex flex-col justify-center items-center text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 ring-1 ring-white/8 mb-3">
              <MapPin className="h-5 w-5 text-primary" />
            </div>

            <h4 className="text-lg font-semibold tracking-wide mb-3">
              Location
            </h4>

            <div className="text-sm text-white/80 max-w-[20rem]">
              <p className="text-white font-medium">Department of Chemical Engineering</p>
              <p>Sardar Vallabhbhai National Institute of Technology</p>
              <p>Ichchhanath, Surat – 395007</p>
              <p className="mb-2">Gujarat, India</p>

              <a
                href="https://maps.google.com/?q=SVNIT+Surat"
                target="_blank"
                className="inline-flex items-center text-primary"
              >
                <MapPin className="h-4 w-4 mr-1" /> View on Map
              </a>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="w-full max-w-[28rem] h-64 bg-white/5 backdrop-blur-sm rounded-2xl p-6 flex flex-col justify-center items-center text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 ring-1 ring-white/8 mb-3">
              <Mail className="h-5 w-5 text-primary" />
            </div>

            <h4 className="text-lg font-semibold tracking-wide mb-3">
              Contact Us
            </h4>

            <div className="space-y-4 text-sm text-white/80">
              <div>
                <p className="text-xs text-white/70">Email</p>
                <a href="mailto:gcesdip2026@gmail.com" className="hover:text-primary">
                  gcesdip2026@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs text-white/70">Phone</p>
                <div className="space-y-1">
                  <a href="tel:+919869607692">+91 98696 07692</a>
                  <a href="tel:+917977438476">+91 79774 38476</a>
                  <a href="tel:+917016303793">+91 70163 03793</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SPONSOR SECTION ================= */}
        <div className="mt-4">

          {/* TOP LINE */}
          <div className="border-t border-white/10 mb-12" />

          {/* Supported by (ONLY this stays here) */}
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <p className="text-sm uppercase tracking-widest text-white/60">
              Supported by
            </p>
            <img
              src="/images/royal.jpeg"
              alt="RSC Logo"
              className="h-24 object-contain bg-white rounded-sm px-3 py-1"
            />
          </div>

          {/* Ticker handles Knowledge + Media + Journal + Gold */}
          <FooterSponsorsTicker />

          {/* BOTTOM LINE */}
          <div className="border-t border-white/10 mt-12 pt-6 text-center">
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