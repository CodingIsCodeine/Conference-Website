import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Ticker from "@/components/Ticker";

interface Member {
  name: string;
  title: string;
  initials: string;
  image: string;
  link?: string;
}

const Committee = () => {

  // -------------------- NEW SPEAKER LISTS --------------------

  const plenarySpeaker: Member[] = [
    {
      name: "Prof. A. B. Pandit",
      title: "Vice Chancellor, ICT Mumbai",
      initials: "AP",
      image: "/images/pandit.png",
      link: "https://www.ictmumbai.edu.in/emp_profiledetail.aspx?nDeptID=em"
    },
    {
      name: "Prof. Ajay K Dalai", 
      title: "University of Saskatchewan, Canada", 
      initials: "AD", 
      image: "/images/dignitaries/AjayKDalai.png", 
      link: "https://engineering.usask.ca/people/cbe/dalai,ajay.php"

    },
    {
      name: "Prof. K.K. Pant", 
      title: "Director, IIT Roorkee", 
      initials: "KP", 
      image: "/images/pant.png", 
      link: "https://web.iitd.ac.in/~kkpant/biosketch.html"

    },
    {
      name: "Prof. Neeraj Rai", 
      title: "Mississippi University, USA", 
      initials: "NR", 
      image: "/images/rai.png", 
      link: "https://www.che.msstate.edu/people/faculty/neeraj-rai/" },

  ];

  const keynoteSpeakers: Member[] = [
    {
      name: "Dr. S. Sridhar",
      title: "CSIR-IICT Hyderabad",
      initials: "SS",
      image: "/images/sridhar.png",
      link: "https://www.linkedin.com/in/dr-s-sridhar-iict-7601011/"
    },
    { 
      name: "Prof. Parameswar K. Iyer", 
      title: "IIT Guwahati", 
      initials: "PI", 
      image: "/images/iyer.png", 
      link: "https://www.iitg.ac.in/chemistry/fac/pki/profile.html" 
    },
    { 
      name: "Prof. Parag R. Gogate", 
      title: "ICT Mumbai", 
      initials: "PG", 
      image: "/images/parag.png", 
      link: "https://www.ictmumbai.edu.in/emp_profiledetail.aspx?nDeptID=gq" 
    },
    {
      name: "Dr. Gaurav Sharma",
      title: "IIT Roorkee",
      initials: "GS",
      image: "/images/gaurav.png",
      link: "https://www.iitr.ac.in/~CH/goravfch"
    },
    {
      name: "Mr. Nilesh Bhatt",
      title: "L&T Technology Services, Vadodara",
      initials: "NB",
      image: "/images/dignitaries/nilesh.png",
      link: "https://www.linkedin.com/in/nilesh-bhatt-01729254/"
    },
    {
      name: "Mr. Thummapudi Subrahmanyam",
      title: "ExxonMobil, Singapore",
      initials: "TS",
      image: "/images/dignitaries/thummapudis.png",
      link: "https://www.linkedin.com/in/subrahmanyam-thummapudi-0a331512/?originalSubdomain=sg"
    },
    { 
      name: "Dr. Nalin Maniya", 
      title: "Elanco, USA", 
      initials: "NM", 
      image: "/images/dignitaries/nalin.png", 
      link: "https://www.linkedin.com/in/nalin-maniya/" 
    },
    { 
      name: "Dr. Muralidhara A.", 
      title: "Global JMP Team", 
      initials: "MA", 
      image: "/images/dignitaries/muralidhara.png", 
      link: "https://in.linkedin.com/in/muralidhara-anandamurthy-97012060" },
  ];

  // ------------- RENDER FUNCTION (UNCHANGED CSS) ---------------

  const renderCommitteeSection = (title: string, members: Member[]) => (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-primary">
        {title}
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {members.map((member) => {
          const card = (
            <Card
              className="shadow-card hover:shadow-hover transition-smooth group w-full sm:w-[48%] md:w-[31%] lg:w-[23%] max-w-[320px]"
            >
              <CardContent className="p-6">

                <div className="flex justify-center mb-4">
                  <div className="relative h-40 w-40 rounded-full p-[3px] bg-gradient-to-b from-primary/90 to-primary overflow-hidden transition-all duration-300 group-hover:scale-105">

                    <Avatar className="w-full h-full rounded-none">
                      <AvatarImage
                        src={member.image}
                        alt={member.name}
                        className={`
                          object-cover w-full h-full
                          ${member.link ? "group-hover:opacity-70 transition-opacity" : ""}
                        `}
                      />
                      <AvatarFallback className="text-secondary-foreground text-lg">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>

                    {/* Hover overlay — ONLY visual, no layout impact */}
                    {member.link && (
                      <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <span className="text-white text-sm font-medium tracking-wide">
                          Click for more info
                        </span>
                      </div>
                    )}

                  </div>
                </div>

                <div className="flex-1 text-center">
                  <h3 className="text-lg font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {member.title}
                  </p>
                </div>

              </CardContent>
            </Card>
          );

          return member.link ? (
            <a
              key={member.name}
              href={member.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "contents" }}
            >
              {card}
            </a>
          ) : (
            <React.Fragment key={member.name}>
              {card}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );

  // --------------------- PAGE STRUCTURE ----------------------

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Ticker />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Speakers
          </h1>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Plenary and Keynote Speakers for GCESDIP 2.0
          </p>

          {renderCommitteeSection("Plenary Speakers", plenarySpeaker)}
          {renderCommitteeSection("Keynote Speakers", keynoteSpeakers)}

        </div>
      </main>

      <Footer />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Committee;
