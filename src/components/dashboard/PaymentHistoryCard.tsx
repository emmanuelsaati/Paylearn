import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, DownloadIcon, FilterIcon } from "lucide-react";

interface Payment {
  id: string;
  date: string;
  amount: number;
  method: string;
  status: "completed" | "pending" | "failed";
  reference: string;
}

interface PaymentHistoryCardProps {
  payments?: Payment[];
  title?: string;
}

const PaymentHistoryCard = ({
  payments = [
    {
      id: "1",
      date: "2023-05-15",
      amount: 250.0,
      method: "Bank Transfer",
      status: "completed",
      reference: "PAY-2023051501",
    },
    {
      id: "2",
      date: "2023-06-15",
      amount: 250.0,
      method: "Mobile Money",
      status: "completed",
      reference: "PAY-2023061501",
    },
    {
      id: "3",
      date: "2023-07-15",
      amount: 250.0,
      method: "Salary Deduction",
      status: "pending",
      reference: "PAY-2023071501",
    },
    {
      id: "4",
      date: "2023-08-15",
      amount: 250.0,
      method: "Bank Transfer",
      status: "failed",
      reference: "PAY-2023081501",
    },
    {
      id: "5",
      date: "2023-09-15",
      amount: 250.0,
      method: "Mobile Money",
      status: "completed",
      reference: "PAY-2023091501",
    },
  ],
  title = "Payment History",
}: PaymentHistoryCardProps) => {
  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "SLL",
    }).format(amount);
  };

  // Get status badge color
  const getStatusBadge = (status: Payment["status"]) => {
    switch (status) {
      case "completed":
        return (
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Completed
          </Badge>
        );
      case "pending":
        return (
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
            Pending
          </Badge>
        );
      case "failed":
        return <Badge variant="destructive">Failed</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <Card className="w-full bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-md hover:bg-gray-100">
            <FilterIcon className="h-4 w-4 text-gray-500" />
          </button>
          <button className="p-2 rounded-md hover:bg-gray-100">
            <CalendarIcon className="h-4 w-4 text-gray-500" />
          </button>
          <button className="p-2 rounded-md hover:bg-gray-100">
            <DownloadIcon className="h-4 w-4 text-gray-500" />
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Reference</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell>{formatDate(payment.date)}</TableCell>
                  <TableCell className="font-medium">
                    {formatCurrency(payment.amount)}
                  </TableCell>
                  <TableCell>{payment.method}</TableCell>
                  <TableCell>{getStatusBadge(payment.status)}</TableCell>
                  <TableCell className="text-xs text-gray-500">
                    {payment.reference}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {payments.length === 0 && (
          <div className="py-8 text-center text-gray-500">
            <p>No payment history available</p>
          </div>
        )}
        {payments.length > 0 && (
          <div className="mt-4 flex justify-center">
            <button className="text-sm text-primary hover:underline">
              View all payment history
            </button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PaymentHistoryCard;
