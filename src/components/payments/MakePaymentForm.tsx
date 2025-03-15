import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CreditCard, Check, AlertCircle } from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  amount: z.string().min(1, { message: "Amount is required" }),
  paymentMethod: z.string().min(1, { message: "Payment method is required" }),
  accountNumber: z.string().optional(),
  phoneNumber: z.string().optional(),
});

interface MakePaymentFormProps {
  onSubmit?: (values: z.infer<typeof formSchema>) => void;
  isOpen?: boolean;
}

const MakePaymentForm = ({
  onSubmit = () => {},
  isOpen = true,
}: MakePaymentFormProps) => {
  const [step, setStep] = useState<"details" | "confirmation" | "success">(
    "details",
  );
  const [formData, setFormData] = useState<z.infer<typeof formSchema> | null>(
    null,
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "",
      paymentMethod: "",
      accountNumber: "",
      phoneNumber: "",
    },
  });

  const handleSubmitDetails = (values: z.infer<typeof formSchema>) => {
    setFormData(values);
    setStep("confirmation");
  };

  const handleConfirm = () => {
    if (formData) {
      onSubmit(formData);
      setStep("success");
    }
  };

  const handleReset = () => {
    form.reset();
    setStep("details");
    setFormData(null);
  };

  if (!isOpen) return null;

  return (
    <Card className="w-full max-w-md mx-auto bg-white">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-center">
          {step === "details" && "Make a Payment"}
          {step === "confirmation" && "Confirm Payment"}
          {step === "success" && "Payment Successful"}
        </CardTitle>
        <CardDescription className="text-center">
          {step === "details" && "Enter your payment details below"}
          {step === "confirmation" && "Please review your payment details"}
          {step === "success" && "Your payment has been processed successfully"}
        </CardDescription>
      </CardHeader>

      <CardContent>
        {step === "details" && (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmitDetails)}
              className="space-y-4"
            >
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount (SLL)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter amount"
                        type="number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Payment Method</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select payment method" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="bank_transfer">
                          Bank Transfer
                        </SelectItem>
                        <SelectItem value="mobile_money">
                          Mobile Money
                        </SelectItem>
                        <SelectItem value="credit_card">Credit Card</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {form.watch("paymentMethod") === "bank_transfer" && (
                <FormField
                  control={form.control}
                  name="accountNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Account Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter account number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              {form.watch("paymentMethod") === "mobile_money" && (
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <Button type="submit" className="w-full">
                Continue
              </Button>
            </form>
          </Form>
        )}

        {step === "confirmation" && formData && (
          <div className="space-y-4">
            <div className="rounded-lg border p-4 bg-muted/50">
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm font-medium">Amount:</div>
                <div className="text-sm">{formData.amount} SLL</div>

                <div className="text-sm font-medium">Payment Method:</div>
                <div className="text-sm">
                  {formData.paymentMethod === "bank_transfer" &&
                    "Bank Transfer"}
                  {formData.paymentMethod === "mobile_money" && "Mobile Money"}
                  {formData.paymentMethod === "credit_card" && "Credit Card"}
                </div>

                {formData.paymentMethod === "bank_transfer" &&
                  formData.accountNumber && (
                    <>
                      <div className="text-sm font-medium">Account Number:</div>
                      <div className="text-sm">{formData.accountNumber}</div>
                    </>
                  )}

                {formData.paymentMethod === "mobile_money" &&
                  formData.phoneNumber && (
                    <>
                      <div className="text-sm font-medium">Phone Number:</div>
                      <div className="text-sm">{formData.phoneNumber}</div>
                    </>
                  )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Button onClick={handleConfirm} className="w-full">
                Confirm Payment
              </Button>
              <Button
                variant="outline"
                onClick={() => setStep("details")}
                className="w-full"
              >
                Edit Details
              </Button>
            </div>
          </div>
        )}

        {step === "success" && (
          <div className="flex flex-col items-center justify-center space-y-4 py-6">
            <div className="rounded-full bg-green-100 p-3">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium">Payment Successful</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Your payment of {formData?.amount} SLL has been processed
                successfully.
              </p>
            </div>
            <Button onClick={handleReset} className="mt-4">
              Make Another Payment
            </Button>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-center border-t pt-4">
        <div className="flex items-center text-xs text-muted-foreground">
          <CreditCard className="mr-2 h-4 w-4" />
          <span>Secure payment processing</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default MakePaymentForm;
