import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CreditCard, Building2, Smartphone } from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";

const formSchema = z.object({
  paymentMethod: z.enum(["salary", "manual"]),
  bankName: z.string().optional(),
  accountNumber: z.string().optional(),
  accountName: z.string().optional(),
  mobileProvider: z.string().optional(),
  mobileNumber: z.string().optional(),
  enableAutoPayment: z.boolean().default(false),
  paymentDay: z.string().optional(),
});

type PaymentMethodsFormValues = z.infer<typeof formSchema>;

interface PaymentMethodsFormProps {
  onSubmit?: (values: PaymentMethodsFormValues) => void;
  defaultValues?: Partial<PaymentMethodsFormValues>;
}

const PaymentMethodsForm = ({
  onSubmit = () => {},
  defaultValues = {
    paymentMethod: "salary",
    enableAutoPayment: true,
    paymentDay: "15",
  },
}: PaymentMethodsFormProps) => {
  const form = useForm<PaymentMethodsFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const watchPaymentMethod = form.watch("paymentMethod");

  const handleSubmit = (values: PaymentMethodsFormValues) => {
    onSubmit(values);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto bg-white">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Payment Methods</CardTitle>
        <CardDescription>
          Set up how you want to make payments for your student loan.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="paymentMethod"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-base">Payment Method</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-6"
                    >
                      <div className="flex items-center space-x-2 border rounded-md p-4 hover:bg-slate-50 cursor-pointer">
                        <RadioGroupItem value="salary" id="salary" />
                        <FormLabel
                          htmlFor="salary"
                          className="cursor-pointer flex items-center"
                        >
                          <CreditCard className="mr-2 h-5 w-5" />
                          Automatic Salary Deduction
                        </FormLabel>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-md p-4 hover:bg-slate-50 cursor-pointer">
                        <RadioGroupItem value="manual" id="manual" />
                        <FormLabel
                          htmlFor="manual"
                          className="cursor-pointer flex items-center"
                        >
                          <Building2 className="mr-2 h-5 w-5" />
                          Manual Payment Options
                        </FormLabel>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormDescription>
                    Choose how you want to make your loan payments.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {watchPaymentMethod === "salary" && (
              <div className="space-y-4 border rounded-md p-6 bg-slate-50">
                <h3 className="text-lg font-medium">Salary Deduction Setup</h3>
                <p className="text-sm text-slate-500">
                  We'll automatically deduct your monthly payment from your
                  salary. Please provide your employer information.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="accountName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Employer Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your employer's name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="enableAutoPayment"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                        <div className="space-y-0.5">
                          <FormLabel>Enable Automatic Payments</FormLabel>
                          <FormDescription>
                            Automatically deduct payments on the selected day
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  {form.watch("enableAutoPayment") && (
                    <FormField
                      control={form.control}
                      name="paymentDay"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Payment Day</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select payment day" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {[1, 5, 10, 15, 20, 25, 30].map((day) => (
                                <SelectItem key={day} value={day.toString()}>
                                  {day}th of each month
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                </div>
              </div>
            )}

            {watchPaymentMethod === "manual" && (
              <div className="space-y-4 border rounded-md p-6 bg-slate-50">
                <h3 className="text-lg font-medium">Manual Payment Setup</h3>
                <p className="text-sm text-slate-500">
                  Set up your bank account or mobile money details for manual
                  payments.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="bankName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bank Name</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your bank" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="sierra-leone-commercial-bank">
                              Sierra Leone Commercial Bank
                            </SelectItem>
                            <SelectItem value="rokel-commercial-bank">
                              Rokel Commercial Bank
                            </SelectItem>
                            <SelectItem value="united-bank-for-africa">
                              United Bank for Africa
                            </SelectItem>
                            <SelectItem value="guaranty-trust-bank">
                              Guaranty Trust Bank
                            </SelectItem>
                            <SelectItem value="ecobank">Ecobank</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="accountNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Account Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Your account number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="accountName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Account Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Name on your account"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h4 className="text-md font-medium mb-4 flex items-center">
                    <Smartphone className="mr-2 h-5 w-5" />
                    Mobile Money (Optional)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="mobileProvider"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mobile Provider</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select provider" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="orange-money">
                                Orange Money
                              </SelectItem>
                              <SelectItem value="africell-money">
                                Africell Money
                              </SelectItem>
                              <SelectItem value="qmoney">QMoney</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="mobileNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mobile Number</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your mobile money number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
            )}

            <CardFooter className="flex justify-end px-0 pt-4">
              <Button type="button" variant="outline" className="mr-2">
                Cancel
              </Button>
              <Button type="submit">Save Payment Method</Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default PaymentMethodsForm;
