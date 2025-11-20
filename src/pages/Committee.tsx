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
  const internationalAdvisory: Member[] = [
    { name: "Prof. Ram Gupta", title: "Virginia Commonwealth University, USA", initials: "RG", image: "/images/dignitaries/RamGupta.png", link: "https://egr.vcu.edu/directory/ram.gupta/" }, 
    { name: "Prof. Ajay K Dalai", title: "University of Saskatchewan, Canada", initials: "AD", image: "/images/dignitaries/AjayKDalai.png", link: "https://engineering.usask.ca/people/cbe/dalai,ajay.php" },
    { name: "Prof. Muthupandian Ashokkumar", title: "University of Melbourne, Australia", initials: "MA", image: "/images/dignitaries/muthupandian.png", link: "https://findanexpert.unimelb.edu.au/profile/1590-muthupandian-ashokkumar" },
    { name: "Prof. Sandeep Kumar", title: "Old Dominion University, USA", initials: "SK", image: "/images/dignitaries/sandeepkumar.png", link: "https://www.odu.edu/directory/sandeep-kumar" },
    { name: "Prof. Benu Adhikari", title: "RMIT University, Australia", initials: "BA", image: "/images/dignitaries/benuadhikari.png", link: "https://academics.rmit.edu.au/benu-adhikari?_gl=1*rv0fq9*_gcl_au*MjA1NTEwMjYzMy4n/dedssssssssxNzYyMzY3MDM5" },
    { name: "Prof. Zoltan Nagy", title: "Purdue University, USA", initials: "ZN", image: "/images/dignitaries/zoltan.png", link: "https://engineering.purdue.edu/ChE/people/ptProfile?id=79574" },
    { name: "Prof. Beom Soo Kim", title: "Chungbuk National University, The Republic of Korea", initials: "BK", image: "/images/dignitaries/beomsookim.png", link: "https://sites.google.com/view/cbnu-bel/people/professor?authuser=0" },
    { name: "Prof. Neeraj Rai", title: "Mississippi University, USA", initials: "NR", image: "/images/rai.png", link: "https://www.che.msstate.edu/people/faculty/neeraj-rai/" },
    { name: "Prof. Mahfud Mahfud", title: "Institut Teknologi Sepuluh Nopember (ITS), Indonesia", initials: "MM", image: "/images/dignitaries/mahfud.png", link: "https://scholar.its.ac.id/en/persons/mahfud/" },
    { name: "Prof. Meenesh R. Singh", title: "UIC Catalyst (CAT) Centre, USA", initials: "MS", image: "/images/dignitaries/meenesh.png", link: "https://www.singh-lab.com/meenesh" },
    { name: "Prof. Anet Resek Jambrak", title: "University of Zagreb, Croatia", initials: "AJ", image: "/images/dignitaries/anet.png", link: "https://www.pbf.unizg.hr/en/departments/department_for_general_programmes/laboratory_for_sustainable_development/anet_rezek_jambrak" },
    { name: "Dr. Yaqiang Xie", title: "Xiamen University, China", initials: "YX", image: "/images/dignitaries/xie.png", link: "https://cee.xmu.edu.cn/info/1031/13374.htm" },
    { name: "Dr. Oishi Sanyal", title: "West Virginia University, USA", initials: "OS", image: "/images/dignitaries/oishi.png", link: "https://directory.statler.wvu.edu/faculty-staff-directory/oishi-sanyal" },
    { name: "Dr. Alexandar Knebel", title: "Friedrich Schiller University Jena, Germany", initials: "AK", image: "/images/knebel.png", link: "https://www.linkedin.com/in/alexander-knebel/?originalSubdomain=de" },
    { name: "Shri Rajesh Shah", title: "Worley Oman Engineering LLC, Oman", initials: "RS", image: "/images/dignitaries/rajesh.png", link: "https://www.linkedin.com/in/rajesh-shah-8b650114/" },
    { name: "Mr. Thummapudi Subrahmanyam", title: "ExxonMobil, Singapore", initials: "TS", image: "/images/dignitaries/thummapudis.png", link: "https://www.linkedin.com/in/subrahmanyam-thummapudi-0a331512/?originalSubdomain=sg" },
    { name: "Dr. Nalin Maniya", title: "Elanco, USA", initials: "NM", image: "/images/dignitaries/nalin.png", link: "https://www.linkedin.com/in/nalin-maniya/" },
  ];

  const nationalAdvisory: Member[] = [
    { name: "Prof. K. K. Pant", title: "Director, IIT Roorkee", initials: "KP", image: "/images/pant.png", link: "https://web.iitd.ac.in/~kkpant/biosketch.html" }, 
    { name: "Prof. P. K. Mishra", title: "IIT BHU", initials: "PM", image: "/images/dignitaries/mishra.png", link: "https://www.iitbhu.ac.in/dept/che/people/pkmishrache" },
    { name: "Dr. N. V. Choudhary", title: "CSIR-IICT Hyderabad", initials: "NC", image: "/images/nvc.png", link: "https://nvchoudary.com/" },
    { name: "Dr. S. Sridhar", title: "CSIR-IICT Hyderabad", initials: "SS", image: "/images/sridhar.png", link: "https://www.linkedin.com/in/dr-s-sridhar-iict-7601011/" },
    { name: "Prof. Parameswar K. Iyer", title: "IIT Guwahati", initials: "PI", image: "/images/iyer.png", link: "https://www.iitg.ac.in/chemistry/fac/pki/profile.html" },
    { name: "Prof. Yogendra Shastri", title: "IIT Bombay", initials: "YS", image: "/images/yogendra.png", link: "https://homepages.iitb.ac.in/~yshastri/Y%20Shastri_CV_Full.pdf" },
    { name: "Prof. Debapriya Mandal", title: "IIT Jammu", initials: "DM", image: "/images/mandal.png", link: "https://www.iitjammu.ac.in/post/prof-debapriya-mandal-wins-the-insa-visiting-scientist-programme-2024-25" },
    { name: "Prof. Chinmay Ghoroi", title: "IIT Gandhinagar", initials: "CG", image: "/images/chinmay.png", link: "https://iitgn.ac.in/faculty/chemical/fac-chinmay" },
    { name: "Prof. Parag R. Gorate", title: "ICT Mumbai", initials: "PG", image: "/images/parag.png", link: "https://www.ictmumbai.edu.in/emp_profiledetail.aspx?nDeptID=gq" },
    { name: "Dr. P. K. Rout", title: "CSIR-CIMAP Lucknow", initials: "PR", image: "/images/pk.png", link: "https://www.cimap.res.in/EmployeeProfile/EmployeeProfile.aspx?id=634" },
    { name: "Prof. Kailash Singh", title: "MNIT Jaipur", initials: "KS", image: "/images/kailash.png", link: "https://www.mnit.ac.in/dept_chemical/profile?fid=TK4=" },
    { name: "Prof. Shirish Sonawane", title: "NIT Warangal", initials: "SSo", image: "/images/sonawane.png", link: "https://erp.nitw.ac.in/ext/profile/ch-shirish" },
    { name: "Prof. Sachin Mandavgane", title: "VNIT Nagpur", initials: "SM", image: "/images/mandavgane.png", link: "https://vnit.ac.in/engineering/chemical/2023/06/05/dr-sachin-a-mandavgane/" },
    { name: "Dr. Gaurav Sharma", title: "IIT Roorkee", initials: "GS", image: "/images/gaurav.png", link: "https://www.iitr.ac.in/~CH/goravfch" },
    { name: "Dr. Bharat Modhera", title: "MANIT Bhopal", initials: "BM", image: "/images/bharat.png", link: "https://cse.manit.ac.in/content/dr-bharatkumar-k-modhera" },
    { name: "Dr. Susmita Das", title: "NIT Calicut", initials: "SD", image: "/images/sushmita.png", link: "https://nitc.ac.in/department/chemical-engineering/faculty-and-staff/faculty/dccce194-e151-4e30-a2e1-f5b418b0357e" },
    { name: "Dr. Deepak Jain", title: "Zoetis Pharmaceutical Research Pvt. Ltd., Navi Mumbai", initials: "DJ", image: "/images/deepak.png", link: "https://www.linkedin.com/in/deepak-jain-7a407170/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Dr. Narendra Kumar Agnihotri", title: "HPCL-Mittal Energy Limited, Noida", initials: "NA", image: "/images/dignitaries/narendra.png", link: "https://www.linkedin.com/in/narendra-kumar-agnihotri-6739b814/" },
    { name: "Mr. Nilesh Bhatt", title: "L&T Technology Services, Vadodara", initials: "NB", image: "/images/dignitaries/nilesh.png", link: "https://www.linkedin.com/in/nilesh-bhatt-01729254/" },
    { name: "Mr. Vipul Prajapati", title: "MYK Laticrete, Hyderabad", initials: "VP", image: "/images/vipul.png", link: "/images/prajapati.pdf" },
    { name: "Mr. Sanjay Tavethiya", title: "Shreeneel Chemicals, Ankleshwar", initials: "ST", image: "/images/dignitaries/sanjay.png", link: "https://www.linkedin.com/in/sanjay-tavethiya-37094928/?originalSubdomain=in" },
    { name: "Dr. Ami Raval", title: "Sahajanand Medical Technologies, Surat", initials: "AR", image: "/images/dignitaries/ami.png", link: "/images/dignitaries/amiraval.pdf" },
  ];

const renderCommitteeSection = (title: string, members: Member[]) => (
  <section className="mb-16">
    <h2 className="text-3xl font-bold text-center mb-10 text-primary">{title}</h2>

    {/* ↓↓↓ THE ONLY CHANGE — using flex to keep last row centered ↓↓↓ */}
    <div className="flex flex-wrap justify-center gap-6">
      {members.map((member) => (
        <Card
          key={member.name}
          className="shadow-card hover:shadow-hover transition-smooth group w-full sm:w-[48%] md:w-[31%] lg:w-[23%] max-w-[320px]"
        >
          <CardContent className="p-6">
            {/* ✅ Centered image container */}
            <div className="flex justify-center mb-4">
              <div className="relative h-40 w-40 rounded-full p-[3px] bg-gradient-to-b from-primary/90 to-primary overflow-hidden transition-all duration-300 group-hover:scale-105">
                {/* ✅ Clickable avatar if link exists */}
                {member.link ? (
                  <a
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block w-full h-full rounded-full group"
                  >
                    <Avatar className="w-30 h-30 rounded-none">
                      <AvatarImage src={member.image} alt={member.name} className="object-cover w-full h-full" />
                      <AvatarFallback className="text-secondary-foreground text-lg">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>

                    {/* ✅ Hover overlay text */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-center bg-black/45 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out rounded-full w-full h-full">
                      <span className="text-[10px] md:text-xs text-white font-medium tracking-wide opacity-90">
                        Click here for more info
                      </span>
                    </div>
                  </a>
                ) : (
                  <Avatar className="w-full h-full rounded-none">
                    <AvatarImage src={member.image} alt={member.name} className="object-cover w-full h-full" />
                    <AvatarFallback className="text-secondary-foreground text-lg">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
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
      ))}
    </div>
    {/* ↑↑↑ ONLY THIS WRAPPER CHANGED — everything else SAME ↑↑↑ */}
  </section>
);


  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Ticker />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Advisory Committee
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Distinguished experts from around the world supporting GCESDIP 2.0
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
