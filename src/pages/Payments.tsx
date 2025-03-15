import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import PaymentMethodsForm from "@/components/payments/PaymentMethodsForm";
import MakePaymentForm from "@/components/payments/MakePaymentForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

const Payments = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("make-payment");

  const handlePaymentMethodSubmit = (values: any) => {
    console.log("Payment method saved:", values);
    toast({
      title: "Payment Method Saved",
      description: "Your payment method has been saved successfully!",
    });
  };

  const handleMakePayment = (values: any) => {
    console.log("Payment made:", values);
    toast({
      title: "Payment Successful",
      description: `Your payment of Le ${values.amount} has been processed successfully!`,
    });
  };

  return (
    <Layout>
      <div className="container mx-auto py-6">
        <h1 className="text-2xl font-bold mb-6">Payments</h1>

        <Tabs
          defaultValue={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="make-payment">Make a Payment</TabsTrigger>
            <TabsTrigger value="payment-methods">Payment Methods</TabsTrigger>
          </TabsList>
          <TabsContent value="make-payment" className="mt-6">
            <div className="flex justify-center">
              <MakePaymentForm onSubmit={handleMakePayment} />
            </div>
          </TabsContent>
          <TabsContent value="payment-methods" className="mt-6">
            <PaymentMethodsForm onSubmit={handlePaymentMethodSubmit} />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Payments;
