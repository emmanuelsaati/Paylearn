import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Help = () => {
  const { toast } = useToast();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Your message has been sent to our support team.",
    });
  };

  return (
    <Layout>
      <div className="container mx-auto py-6">
        <h1 className="text-2xl font-bold mb-6">Help & Support</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      How do I apply for a student loan?
                    </AccordionTrigger>
                    <AccordionContent>
                      To apply for a student loan, navigate to the Application
                      section from the dashboard. Fill out the required
                      information about yourself, the student, and the
                      university. Upload the necessary documents and submit your
                      application. Our team will review it and get back to you
                      within 3-5 business days.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      What are the repayment options?
                    </AccordionTrigger>
                    <AccordionContent>
                      We offer multiple repayment options including automatic
                      salary deduction, bank transfers, and mobile money
                      payments. You can set up your preferred payment method in
                      the Payments section. We also offer flexible repayment
                      terms ranging from 12 to 60 months.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      What documents do I need to provide?
                    </AccordionTrigger>
                    <AccordionContent>
                      Required documents include: valid ID (passport, driver's
                      license, or national ID), proof of income (pay slips, bank
                      statements), proof of student enrollment (admission
                      letter, student ID), and the university fee structure. All
                      documents should be clear, legible, and in PDF, JPG, or
                      PNG format.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>
                      How long does the approval process take?
                    </AccordionTrigger>
                    <AccordionContent>
                      The loan approval process typically takes 3-5 business
                      days after all required documents have been submitted and
                      verified. You will receive notifications about your
                      application status through email and on your dashboard.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger>
                      What are the interest rates?
                    </AccordionTrigger>
                    <AccordionContent>
                      Our interest rates are competitive and depend on the loan
                      amount and term. The current rates range from 5% to 8% per
                      annum. The exact rate for your loan will be displayed
                      during the application process before you submit your
                      application.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6">
                    <AccordionTrigger>
                      Can I pay off my loan early?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes, you can pay off your loan early without any
                      prepayment penalties. You can make additional payments or
                      pay off the entire balance at any time through the
                      Payments section of your dashboard.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Contact Support</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Input placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <Input type="email" placeholder="Your Email" />
                  </div>
                  <div className="space-y-2">
                    <Input placeholder="Subject" />
                  </div>
                  <div className="space-y-2">
                    <Textarea placeholder="Your Message" rows={5} />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-medium mb-2">Other Ways to Reach Us</h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Email:</strong> support@paylearn.sl
                    </p>
                    <p>
                      <strong>Phone:</strong> +232 76 123 4567
                    </p>
                    <p>
                      <strong>Hours:</strong> Monday-Friday, 8am-5pm
                    </p>
                    <p>
                      <strong>Address:</strong> 25 Siaka Stevens St, Freetown,
                      Sierra Leone
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Help;
