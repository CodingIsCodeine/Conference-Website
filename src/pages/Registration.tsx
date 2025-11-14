import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle2 } from "lucide-react";
import Ticker from "@/components/Ticker";


const Registration = () => {
  const registrationFees = [
    { category: "UG Students", regular: "Rs. 3,540" },
    { category: "PG/PhD/Postdoc/Research Fellows", regular: "Rs. 7,050" },
    { category: "Academicians/Scientists/Researchers", regular: "Rs. 9,440" },
    { category: "Industry Delegate", regular: "Rs. 11,800" },
    { category: "Attendees", regular: "Rs. 3,540" },
    { category: "Foreign Students", regular: "118 USD" },
    { category: "Foreign Academicians/Delegates", regular: "147 USD" },
  ];

  const includes = [
    "Access to all technical sessions",
    "Conference kit",
    "Breakfast, lunch, and refreshments",
    "Conference certificate",
    "Networking opportunities",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Ticker />

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
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeL--0f225-_T4cFpwBfiiZlxMU5HIsVmgKGpY_lOzlONkr_g/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="w-full relative overflow-hidden transition-all duration-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.7)] hover:scale-[1.05] text-lg font-semibold bg-gradient-to-r from-green-600 to-emerald-500 text-white"
                  size="lg"
                >
                  <span className="relative z-10">Click Here to Register</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-green-700/30 to-emerald-400/30 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-md"></span>
                </Button>
              </a>
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
                        <TableHead className="font-semibold">Registration Fee</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {registrationFees.map((fee, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{fee.category}</TableCell>
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
  <h2 className="text-3xl font-bold text-center mb-8 text-primary">
    Your Registration Includes
  </h2>

          {/* Adaptive, centered, symmetric flex layout */}
          <div className="flex flex-wrap justify-center gap-6">
            {includes.map((item, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-hover transition-smooth w-full sm:w-[45%] lg:w-[30%] max-w-xs"
              >
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
                    <p className="text-base">Director, SVNIT-CCE</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">Bank Name</p>
                    <p className="text-base">State Bank of India (SVRCET Branch, Surat)</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">Account Number</p>
                    <p className="text-base">37030749143</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">IFSC Code</p>
                    <p className="text-base">SBIN0003320</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">MICR Code</p>
                    <p className="text-base">395002012</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">SWIFT Code</p>
                    <p className="text-base">SBININBB260 (For international transfers)</p>
                  </div>
                </div>

                {/* Highlighted Important Note */}
                <div className="mt-6 p-4 bg-yellow-100 text-yellow-800 rounded-lg border border-yellow-300 text-center font-medium">
                  The registration fee is <span className="font-semibold">Non-refundable</span> and should be paid <span className="font-semibold">ONLINE ONLY</span> to the above account.
                </div>

                {/* QR Code Placeholder */}
                <div className="flex justify-center mt-6">
                  {/* Replace the src link below with your actual QR code image */}
                  <img
                    src="/images/qrcode.png"
                    alt="QR Code for Payment"
                    className="w-48 h-48 object-contain border rounded-lg shadow-md"
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center mt-4">
                  Scan the QR code above for UPI payments
                </p>

                {/* <div className="mt-6 p-4 bg-muted rounded-lg">
                  <p className="text-sm font-semibold mb-2">Payment Guidelines:</p>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>After payment, email the transaction receipt to gcesdip@ched.svnit.ac.in</li>
                    <li>Include your name and registration ID in the email</li>
                    <li>Payment confirmation will be sent within 2 working days</li>
                    <li>For UPI payments, scan the QR code provided in the registration form</li>
                  </ul>
                </div> */}
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
