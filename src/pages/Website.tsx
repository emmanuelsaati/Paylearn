import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle,
  BookOpen,
  CreditCard,
  Users,
  School,
  Shield,
} from "lucide-react";

const Website = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header
        className="relative text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80 opacity-95"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1588072432836-e10032774350?w=1200&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 py-6 relative z-10">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-md p-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    fill="hsl(var(--primary))"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="font-bold text-xl">Payfee</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="hover:text-white/80 transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="hover:text-white/80 transition-colors"
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="hover:text-white/80 transition-colors"
              >
                Testimonials
              </a>
              <Link
                to="/dashboard"
                className="hover:text-white/80 transition-colors"
              >
                Dashboard
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button
                  variant="outline"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Login
                </Button>
              </Link>
              <Link to="/register" className="hidden md:block">
                <Button className="bg-white text-primary hover:bg-white/90">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center relative z-10">
          <div className="w-full text-center mb-10 md:mb-0 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Parents Fund,{" "}
              <span className="text-yellow-300">Children Learn</span>
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Empowering Sierra Leone's parents to finance their children's
              education through NASSIT pension deductions and salary payments
              with manageable monthly installments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/application">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto"
                >
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="#how-it-works">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white bg-white/10 w-full sm:w-auto backdrop-blur-sm shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-white/20 hover:border-opacity-80 flex items-center gap-2"
                >
                  Learn More
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
      </header>

      {/* Stats Section */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-primary/5"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-primary/5"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">
                5,000+
              </p>
              <p className="text-gray-600">Students Funded</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">10+</p>
              <p className="text-gray-600">University Partners</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">98%</p>
              <p className="text-gray-600">Completion Rate</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">
                $2M+
              </p>
              <p className="text-gray-600">Disbursed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 bg-gray-50 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute -right-40 top-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -left-40 bottom-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Parents Choose Payfee?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform makes education financing simple, transparent, and
              accessible for all Sierra Leonean parents, especially NASSIT
              pensioners.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Flexible Payments</h3>
                <p className="text-gray-600">
                  Choose from multiple payment options including NASSIT pension
                  deductions, direct salary payments, bank transfers, and mobile
                  money.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">No Hidden Fees</h3>
                <p className="text-gray-600">
                  Transparent pricing with no surprise charges. Know exactly
                  what you're paying from day one.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <School className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Direct University Payments
                </h3>
                <p className="text-gray-600">
                  We pay your university directly, ensuring your tuition is
                  always covered on time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Getting started with Payfee is simple and straightforward for
              parents.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="rounded-full bg-primary text-white w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Apply Online</h3>
              <p className="text-gray-600">
                Complete our simple online application form with your personal
                information, your child's details, and your NASSIT or employment
                information.
              </p>
            </div>

            <div className="text-center">
              <div className="rounded-full bg-primary text-white w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Get Approved</h3>
              <p className="text-gray-600">
                Our team reviews your application and provides a quick decision,
                usually within 48 hours.
              </p>
            </div>

            <div className="text-center">
              <div className="rounded-full bg-primary text-white w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">University Payment</h3>
              <p className="text-gray-600">
                We disburse funds directly to your university to cover tuition
                and fees.
              </p>
            </div>

            <div className="text-center">
              <div className="rounded-full bg-primary text-white w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Repayment</h3>
              <p className="text-gray-600">
                Make manageable monthly payments through automatic NASSIT
                pension deductions, salary payments, or your preferred payment
                method.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link to="/application">
              <Button
                size="lg"
                className="bg-primary text-white hover:bg-primary/90"
              >
                Start Your Application
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from parents, including NASSIT pensioners, who have
              transformed their children's educational journey with Payfee.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=john"
                    alt="John Kamara"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold">John Kamara</h4>
                    <p className="text-gray-600 text-sm">Parent</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "As a NASSIT pensioner, Payfee made it possible for my
                  daughter to attend university without financial stress. The
                  automatic pension deductions fit perfectly with my monthly
                  payments."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=amina"
                    alt="Amina Sesay"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold">Amina Sesay</h4>
                    <p className="text-gray-600 text-sm">
                      Parent - Civil Servant
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Without Payfee, I wouldn't have been able to send my son to
                  university. The salary deduction process was simple, and the
                  support team was incredibly helpful with all my questions."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=ibrahim"
                    alt="Ibrahim Conteh"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold">Ibrahim Conteh</h4>
                    <p className="text-gray-600 text-sm">
                      University Administrator
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Our partnership with Payfee has increased enrollment and
                  reduced dropout rates. Their system ensures timely payments
                  and seamless integration with our finance department."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* University Partners */}
      <section id="universities" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our University Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We work with leading universities across Sierra Leone to make
              education accessible.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 rounded-full p-4 mb-4">
                <School className="h-12 w-12 text-primary" />
              </div>
              <h3 className="font-bold text-center">
                University of Sierra Leone
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 rounded-full p-4 mb-4">
                <School className="h-12 w-12 text-primary" />
              </div>
              <h3 className="font-bold text-center">Njala University</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 rounded-full p-4 mb-4">
                <School className="h-12 w-12 text-primary" />
              </div>
              <h3 className="font-bold text-center">
                Ernest Bai Koroma University
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 rounded-full p-4 mb-4">
                <School className="h-12 w-12 text-primary" />
              </div>
              <h3 className="font-bold text-center">Limkokwing University</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Fund Your Child's Education?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Apply today and take the first step towards your child's brighter
            future with Payfee's flexible education financing through NASSIT
            pension or salary deductions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/application">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto"
              >
                Apply Now
              </Button>
            </Link>
            <Link to="/login">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
              >
                Login to Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-white rounded-md p-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      fill="hsl(var(--primary))"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="font-bold text-xl">Payfee</span>
              </div>
              <p className="text-gray-400">
                Empowering Sierra Leone's future through accessible education
                financing.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/dashboard"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    University Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/help"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>25 Siaka Stevens St, Freetown</li>
                <li>Sierra Leone</li>
                <li>Email: info@payfee.sl</li>
                <li>Phone: +232 76 123 4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Payfee. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Website;
