import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Member {
  name: string;
  title: string;
  initials: string;
  image: string;
}

const Committee = () => {
  const internationalAdvisory: Member[] = [
    { name: "Shri Rajesh Shah", title: "Professor, MIT, USA", initials: "JS", image: "/images/dignitaries/rajesh shah.jpg" },
    { name: "Prof. Dr. Benu Adhikari", title: "Research Director, Cambridge, UK", initials: "MG", image: "https://placehold.co/160x160?text=MG" },
    { name: "Prof. Dr. Muthupandian Ashokkumar", title: "Dean, Tsinghua University, China", initials: "LW", image: "https://placehold.co/160x160?text=LW" },
    { name: "Dr. Hans Mueller", title: "Head of Department, TU Munich, Germany", initials: "HM", image: "https://placehold.co/160x160?text=HM" },
    { name: "Prof. Elena Petrova", title: "Professor, Lomonosov Moscow State University, Russia", initials: "EP", image: "https://placehold.co/160x160?text=EP" },
    { name: "Dr. Akiko Yamamoto", title: "Professor, University of Tokyo, Japan", initials: "AY", image: "https://placehold.co/160x160?text=AY" },
    { name: "Prof. Carlos Mendes", title: "Director, University of São Paulo, Brazil", initials: "CM", image: "https://placehold.co/160x160?text=CM" },
    { name: "Dr. Aisha Al-Farsi", title: "Senior Researcher, KAUST, Saudi Arabia", initials: "AA", image: "https://placehold.co/160x160?text=AA" },
    { name: "Prof. Pierre Dubois", title: "Professor, Sorbonne University, France", initials: "PD", image: "https://placehold.co/160x160?text=PD" },
    { name: "Dr. Michael O'Connor", title: "Research Lead, Trinity College Dublin, Ireland", initials: "MO", image: "https://placehold.co/160x160?text=MO" },
    { name: "Prof. Natasha Ivanova", title: "Professor, University of Toronto, Canada", initials: "NI", image: "https://placehold.co/160x160?text=NI" },
    { name: "Dr. Sung-Ho Kim", title: "Professor, KAIST, South Korea", initials: "SK", image: "https://placehold.co/160x160?text=SK" },
    { name: "Prof. Giorgio Rossi", title: "Chair, Sapienza University, Italy", initials: "GR", image: "https://placehold.co/160x160?text=GR" },
    { name: "Dr. Laila Hassan", title: "Associate Professor, American University in Cairo, Egypt", initials: "LH", image: "https://placehold.co/160x160?text=LH" },
    { name: "Prof. Emma Johnson", title: "Professor, University of Melbourne, Australia", initials: "EJ", image: "https://placehold.co/160x160?text=EJ" },
  ];

  const nationalAdvisory: Member[] = [
    { name: "Dr. Rajesh Kumar", title: "Director, IIT Delhi", initials: "RK", image: "https://placehold.co/160x160?text=RK" },
    { name: "Dr. Priya Sharma", title: "Professor, IISc Bangalore", initials: "PS", image: "https://placehold.co/160x160?text=PS" },
    { name: "Dr. Amit Patel", title: "Head, CSIR-NCL Pune", initials: "AP", image: "https://placehold.co/160x160?text=AP" },
    { name: "Dr. Sunita Reddy", title: "Dean, IIT Bombay", initials: "SR", image: "https://placehold.co/160x160?text=SR" },
    { name: "Prof. Vikram Desai", title: "Professor, IIT Madras", initials: "VD", image: "https://placehold.co/160x160?text=VD" },
    { name: "Dr. Meera Nair", title: "Research Scientist, IISER Pune", initials: "MN", image: "https://placehold.co/160x160?text=MN" },
    { name: "Prof. Karan Mehta", title: "Professor, BITS Pilani", initials: "KM", image: "https://placehold.co/160x160?text=KM" },
    { name: "Dr. Ritu Kapoor", title: "Director, NIPER Mohali", initials: "RK2", image: "https://placehold.co/160x160?text=RK" },
    { name: "Prof. Suresh Iyer", title: "Professor, IIT Kharagpur", initials: "SI", image: "https://placehold.co/160x160?text=SI" },
    { name: "Dr. Anjali Menon", title: "Associate Professor, Anna University", initials: "AM", image: "https://placehold.co/160x160?text=AM" },
    { name: "Prof. Nikhil Bansal", title: "Professor, Jadavpur University", initials: "NB", image: "https://placehold.co/160x160?text=NB" },
    { name: "Dr. Pallavi Deshmukh", title: "Research Head, IISC", initials: "PD2", image: "https://placehold.co/160x160?text=PD" },
    { name: "Prof. Manoj Shah", title: "Professor, IIT Guwahati", initials: "MS", image: "https://placehold.co/160x160?text=MS" },
    { name: "Dr. Kavita Rao", title: "Scientist, DRDO", initials: "KR", image: "https://placehold.co/160x160?text=KR" },
    { name: "Prof. Deepak Joshi", title: "Professor, University of Delhi", initials: "DJ", image: "https://placehold.co/160x160?text=DJ" },
    { name: "Dr. Shreya Bhattacharya", title: "Lecturer, Calcutta University", initials: "SB", image: "https://placehold.co/160x160?text=SB" },
  ];

  const renderCommitteeSection = (title: string, members: Member[]) => (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-primary">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {members.map((member) => (
          <Card key={member.name} className="shadow-card hover:shadow-hover transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20 border-2 border-primary">
                  <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                  <AvatarFallback className="bg-secondary text-secondary-foreground text-xl">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{member.title}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Ticker */}
      <div className="bg-primary text-primary-foreground py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-sm font-medium mx-4">📢 Last date of abstract submission is 1 March 2026</span>
          <span className="text-sm font-medium mx-4">📢 Last date of abstract submission is 1 March 2026</span>
          <span className="text-sm font-medium mx-4">📢 Last date of abstract submission is 1 March 2026</span>
        </div>
      </div>

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Committee & Speakers</h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Distinguished experts from around the world guiding GCESDIP 2.0
          </p>

          {renderCommitteeSection("International Advisory Committee", internationalAdvisory)}
          {renderCommitteeSection("National Advisory Committee", nationalAdvisory)}
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
