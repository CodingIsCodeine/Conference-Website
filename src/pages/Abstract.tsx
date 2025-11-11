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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Submit Abstract */}
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
                  Include title, authors, affiliations, and keywords.
                </p>
                <Button className="w-full" size="lg">
                  Submit Your Abstract
                </Button>
              </CardContent>
            </Card>

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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Topics */}
            <Card className="shadow-card">
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
            <Card className="shadow-card">
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
