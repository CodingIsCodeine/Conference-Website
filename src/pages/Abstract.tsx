import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Award, BookOpen, Newspaper } from "lucide-react";
import Ticker from "@/components/Ticker";
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
import { useEffect } from "react";

const Abstract = () => {
  const topics = [
    "Process Intensification Techniques",
    "Sustainable approaches in Pharmaceutical and Chemical Industries",
    "Catalysis",
    "Novel Separation Methods",
    "Green Solvents",
    "Functional Foods and Nutraceuticals",
    "Green and Sustainable Chemistry in the Environment",
    "Green Nanotechnology",
    "Waste to Wealth",
    "Renewable Energy and Clean Energy",
    "Energy Storage",
    "Process Modelling and CFD",
    "Future Trends in Green Chemistry and Engineering",
    "Any other area relevant to the theme of the conference",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Ticker />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Abstract Submission
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Share your research and contribute to sustainable development
          </p>

          {/* Submit Abstract Card */}
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
                  <ul className="text-sm text-muted-foreground mb-4 list-disc pl-6 space-y-2">
                    <li>
                      Abstracts should be submitted in <strong>PDF format</strong> with a
                      maximum of <strong>250 words</strong>.
                    </li>
                    <li>
                      Include <strong>title</strong>, <strong>authors</strong>,{" "}
                      <strong>affiliations</strong>, and <strong>keywords</strong> as per the template.
                    </li>
                    <li>
                      Authors are invited to submit abstracts highlighting{" "}
                      <strong>original research</strong> or{" "}
                      <strong>innovative practices</strong> aligned with the conference
                      themes.
                    </li>
                    <li>
                      The abstract should contain a brief <strong>context or motivation</strong> for the work, the <strong>objective or hypothesis</strong> of the study, the <strong>methodology</strong>, <strong>key findings</strong>, <strong>observations</strong>, <strong>inferences</strong>, and the overall <strong>significance</strong> along with its <strong>potential applications</strong>.

                    </li>
                    <li>
                      Accepted abstracts will be presented as <strong>oral</strong> or{" "}
                      <strong>poster sessions</strong> during the conference.
                    </li>
                  </ul>

                  {/* Google Form Button */}
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

                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScHFyvWELZv5HZOM6Z7mOL8uqkqgJrWbZA2iMKWPtQPZph05w/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="w-full mt-4 border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                      size="lg"
                    >
                      <span className="relative z-10">Download Abstract Template</span>
                      {/* <span className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-md"></span> */}
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
                </ul>
              </CardContent>
            </Card>

            {/* Conference Themes */}
            <Card className="shadow-card hover:shadow-hover transition-smooth">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Conference Themes</CardTitle>
                </div>
                <CardDescription>Research areas of interest</CardDescription>
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
                <CardDescription>Publication opportunities</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Abstract will be published in the proceedings with an ISSN number.
                </p>
                <p className="text-sm mb-4">
                  Selected papers will be published in a special issue of a peer-reviewed
                  journal (Scopus/SCI indexed/Web of Science indexed), adopting a regular
                  peer review process as per the norms of the concerned journal.
                </p>
                <p className="text-sm mb-4">
                  The full paper must be submitted as per the format and guidelines of the
                  concerned journal.
                </p>
                <p className="text-sm mb-4">
                  The originality of the research contribution is vested with the authors.
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Journal Partner:</strong> To be announced
                  </p>
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
