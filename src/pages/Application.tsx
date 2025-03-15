import React from "react";
import Layout from "@/components/layout/Layout";
import LoanApplicationForm from "@/components/application/LoanApplicationForm";
import { useToast } from "@/components/ui/use-toast";

const Application = () => {
  const { toast } = useToast();

  const handleSubmit = (values: any) => {
    console.log("Application submitted:", values);
    toast({
      title: "Application Submitted",
      description: "Your loan application has been submitted successfully!",
    });
  };

  return (
    <Layout>
      <div className="container mx-auto py-6">
        <LoanApplicationForm onSubmit={handleSubmit} />
      </div>
    </Layout>
  );
};

export default Application;
