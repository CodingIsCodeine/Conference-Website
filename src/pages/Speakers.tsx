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
}

const Committee = () => {

  // -------------------- NEW SPEAKER LISTS --------------------

  const plenarySpeaker: Member[] = [
    {
      name: "Prof. A. B. Pandit",
      title: "Vice Chancellor, ICT Mumbai",
      initials: "AP",
      image: "/images/pandit.png"
    }
  ];

  const keynoteSpeakers: Member[] = [
    {
      name: "Prof. S. Sridhar",
      title: "CSIR-IICT Hyderabad",
      initials: "SS",
      image: "/images/sridhar.png"
    },
    {
      name: "Dr. Gaurav Sharma",
      title: "IIT Roorkee",
      initials: "GS",
      image: "/images/gaurav.png"
    },
    {
      name: "Mr. Nilesh Bhatt",
      title: "L&T Technology Services, Vadodara",
      initials: "NB",
      image: "/images/dignitaries/nilesh.png"
    },
    {
      name: "Mr. Thummapudi Subrahmanyam",
      title: "ExxonMobil, Singapore",
      initials: "TS",
      image: "/images/dignitaries/thummapudis.png"
    }
  ];

  // ------------- RENDER FUNCTION (UNCHANGED CSS) ---------------

  const renderCommitteeSection = (title: string, members: Member[]) => (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-primary">{title}</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {members.map((member) => (
          <Card
            key={member.name}
            className="shadow-card hover:shadow-hover transition-smooth group w-full sm:w-[48%] md:w-[31%] lg:w-[23%] max-w-[320px]"
          >
            <CardContent className="p-6">

              <div className="flex justify-center mb-4">
                <div className="relative h-40 w-40 rounded-full p-[3px] bg-gradient-to-b from-primary/90 to-primary overflow-hidden transition-all duration-300 group-hover:scale-105">

                  {/* No CV link — plain avatar */}
                  <Avatar className="w-full h-full rounded-none">
                    <AvatarImage src={member.image} alt={member.name} className="object-cover w-full h-full" />
                    <AvatarFallback className="text-secondary-foreground text-lg">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>

                </div>
              </div>

              <div className="flex-1 text-center">
                <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{member.title}</p>
              </div>

            </CardContent>
          </Card>
        ))}
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

          {renderCommitteeSection("Plenary Speaker", plenarySpeaker)}
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
