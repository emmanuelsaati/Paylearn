import React from "react";
import { format, addDays } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, AlertCircle, CheckCircle2 } from "lucide-react";

interface PaymentScheduleItem {
  date: Date;
  amount: number;
  status: "paid" | "pending" | "overdue";
}

interface PaymentScheduleCardProps {
  payments?: PaymentScheduleItem[];
  title?: string;
  description?: string;
}

const PaymentScheduleCard = ({
  payments = [
    { date: new Date(), amount: 250, status: "paid" },
    { date: addDays(new Date(), 30), amount: 250, status: "pending" },
    { date: addDays(new Date(), 60), amount: 250, status: "pending" },
    { date: addDays(new Date(), 90), amount: 250, status: "pending" },
  ],
  title = "Payment Schedule",
  description = "Your upcoming payment dates and amounts",
}: PaymentScheduleCardProps) => {
  // Dates with payments for highlighting in calendar
  const paymentDates = payments.map((payment) => payment.date);

  return (
    <Card className="w-full h-full bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <CalendarIcon className="h-5 w-5 text-primary" />
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium inline-flex items-center mt-2">
          <span className="mr-1">✓</span> NASSIT Automatic Deduction
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Upcoming Payments</h3>
            <div className="space-y-3">
              {payments.map((payment, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg border"
                >
                  <div className="flex items-center gap-3">
                    {payment.status === "paid" ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    ) : payment.status === "overdue" ? (
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    ) : (
                      <CalendarIcon className="h-5 w-5 text-blue-500" />
                    )}
                    <div>
                      <p className="font-medium">
                        {format(payment.date, "MMMM d, yyyy")}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {payment.status === "paid"
                          ? "Paid"
                          : payment.status === "overdue"
                            ? "Overdue"
                            : "Upcoming"}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-semibold">
                      Le {payment.amount.toLocaleString()}
                    </span>
                    <Badge
                      variant={
                        payment.status === "paid"
                          ? "outline"
                          : payment.status === "overdue"
                            ? "destructive"
                            : "secondary"
                      }
                      className="mt-1"
                    >
                      {payment.status === "paid"
                        ? "Paid"
                        : payment.status === "overdue"
                          ? "Overdue"
                          : "Pending"}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border rounded-lg p-3">
            <h3 className="text-sm font-medium mb-2">Payment Calendar</h3>
            <Calendar
              mode="single"
              selected={new Date()}
              className="rounded-md border"
              modifiers={{
                payment: paymentDates,
              }}
              modifiersStyles={{
                payment: {
                  fontWeight: "bold",
                  border: "2px solid currentColor",
                  color: "var(--primary)",
                },
              }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentScheduleCard;
