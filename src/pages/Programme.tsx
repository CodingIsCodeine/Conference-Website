import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const Programme = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Programme</h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Detailed conference schedule and programme
          </p>

          <Card className="shadow-card">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Calendar className="h-16 w-16 text-primary" />
              </div>
              <CardTitle className="text-2xl">Programme Schedule Coming Soon</CardTitle>
              <CardDescription className="text-base mt-2">
                The detailed programme schedule will be updated soon
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Conference Dates</h3>
                <p className="text-2xl font-bold text-primary mb-2">17th - 18th April 2026</p>
                <p className="text-muted-foreground">
                  SVNIT Surat, Gujarat, India
                </p>
              </div>

              <div className="text-left space-y-4">
                <h3 className="font-semibold text-lg">Expected Programme Highlights:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Keynote addresses by distinguished speakers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Plenary sessions on green chemistry innovations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Parallel technical sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Poster presentations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Industrial exhibition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Cultural evening and networking sessions</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t">
                <p className="text-sm text-muted-foreground">
                  Please check back later for the complete schedule with session timings, 
                  speaker details, and venue information.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Programme;
