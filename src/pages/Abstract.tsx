import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Award, BookOpen, Newspaper } from "lucide-react";

const Abstract = () => {
  const topics = [
    "Green synthesis and catalysis",
    "Renewable energy technologies",
    "Sustainable materials and processes",
    "Carbon capture and utilization",
    "Waste valorization",
    "Bio-based chemicals and fuels",
    "Process intensification",
    "Life cycle assessment",
    "Industrial ecology",
    "Green analytical chemistry",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Abstract Submission</h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Share your research and contribute to sustainable development
          </p>

          {/* Submit Abstract Card - centered subtle highlight */}
          <div className="flex justify-center mb-12">
            <div className="w-full max-w-3xl">
              <Card className="shadow-card hover:shadow-hover transition-smooth">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <FileText className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl">Submit Abstract</CardTitle>
                  </div>
                  <CardDescription>
                    Submit your research abstract for consideration at GCESDIP 2.0
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Abstracts should be submitted in PDF format with a maximum of 500 words. 
                    Include title, authors, affiliations, and keywords. Authors are invited to submit abstracts highlighting original research or innovative practices aligned with the conference themes. Submissions should clearly present objectives, methods, results, and conclusions, focusing on sustainable and green approaches.
                    Accepted abstracts will be presented as oral or poster sessions during the conference.
                    </p>

                  {/* Google Form Button with Glowing Hover */}
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScHFyvWELZv5HZOM6Z7mOL8uqkqgJrWbZA2iMKWPtQPZph05w/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className="w-full relative overflow-hidden transition-all duration-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.6)] hover:scale-[1.03]"
                      size="lg"
                    >
                      <span className="relative z-10">Submit Your Abstract</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-md"></span>
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* 3-card grid below */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Awards */}
            <Card className="shadow-card hover:shadow-hover transition-smooth">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <Award className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Awards</CardTitle>
                </div>
                <CardDescription>
                  Recognition for outstanding contributions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Best Oral Presentation Award</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Best Poster Presentation Award</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Young Researcher Award</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Best Industrial Paper Award</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Conference Topics */}
            <Card className="shadow-card hover:shadow-hover transition-smooth">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Conference Topics</CardTitle>
                </div>
                <CardDescription>
                  Research areas of interest
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {topics.map((topic, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <span className="text-primary mr-2 mt-1">✓</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Special Issue */}
            <Card className="shadow-card hover:shadow-hover transition-smooth">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <Newspaper className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Special Issue</CardTitle>
                </div>
                <CardDescription>
                  Publication opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Selected papers will be published in a special issue of a peer-reviewed journal 
                  (Scopus/SCI indexed).
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Journal Partner:</strong> To be announced</p>
                  <p><strong>Selection Criteria:</strong> Based on presentation quality and reviewer feedback</p>
                  <p><strong>Publication Fee:</strong> As per journal guidelines</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Abstract;
