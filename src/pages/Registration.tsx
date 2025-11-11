import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle2 } from "lucide-react";

const Registration = () => {
  const registrationFees = [
    { category: "Indian Academician", early: "₹4,000", regular: "₹5,000" },
    { category: "Foreign Academician", early: "$150", regular: "$200" },
    { category: "Indian Industry Professional", early: "₹6,000", regular: "₹7,500" },
    { category: "Foreign Industry Professional", early: "$200", regular: "$250" },
    { category: "Indian Student", early: "₹2,000", regular: "₹2,500" },
    { category: "Foreign Student", early: "$75", regular: "$100" },
  ];

  const includes = [
    "Access to all technical sessions",
    "Conference kit and proceedings",
    "Breakfast, lunch, and refreshments",
    "Welcome dinner and cultural evening",
    "Conference certificate",
    "Networking opportunities",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Registration</h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Register now to secure your spot at GCESDIP 2.0
          </p>

          {/* Registration Button */}
          <Card className="mb-12 shadow-card bg-gradient-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Register for GCESDIP 2.0</CardTitle>
              <CardDescription>Complete your registration using our online form</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button size="lg" className="text-lg px-8">
                Click Here to Register
              </Button>
            </CardContent>
          </Card>

          {/* Registration Fees */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">Registration Fees</h2>
            <Card className="shadow-card">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold">Category</TableHead>
                        <TableHead className="font-semibold">Early Bird (Before 1 March 2026)</TableHead>
                        <TableHead className="font-semibold">Regular (After 1 March 2026)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {registrationFees.map((fee, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{fee.category}</TableCell>
                          <TableCell>{fee.early}</TableCell>
                          <TableCell>{fee.regular}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
            <p className="text-sm text-muted-foreground text-center mt-4">
              * All fees are inclusive of GST
            </p>
          </section>

          {/* What's Included */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">Your Registration Includes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {includes.map((item, index) => (
                <Card key={index} className="shadow-card hover:shadow-hover transition-smooth">
                  <CardContent className="flex items-start space-x-3 p-6">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-base">{item}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Payment Method */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">Payment Method</h2>
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Bank Transfer Details</CardTitle>
                <CardDescription>Please use the following details for payment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">Account Name</p>
                    <p className="text-base">GCESDIP 2.0 - SVNIT Surat</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">Bank Name</p>
                    <p className="text-base">State Bank of India</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">Account Number</p>
                    <p className="text-base">1234567890</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">IFSC Code</p>
                    <p className="text-base">SBIN0001234</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">Branch</p>
                    <p className="text-base">SVNIT Campus, Surat</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">SWIFT Code</p>
                    <p className="text-base">SBININBB123 (For international transfers)</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <p className="text-sm font-semibold mb-2">Payment Guidelines:</p>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>After payment, email the transaction receipt to gcesdip@ched.svnit.ac.in</li>
                    <li>Include your name and registration ID in the email</li>
                    <li>Payment confirmation will be sent within 2 working days</li>
                    <li>For UPI payments, scan the QR code provided in the registration form</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Registration;
