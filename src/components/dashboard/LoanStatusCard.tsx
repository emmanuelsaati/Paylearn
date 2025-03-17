import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, AlertCircle } from "lucide-react";

interface LoanStatusCardProps {
  totalAmount?: number;
  disbursedAmount?: number;
  approvalStatus?: "approved" | "pending" | "rejected";
  startDate?: string;
  endDate?: string;
  universityName?: string;
  studentName?: string;
}

const LoanStatusCard = ({
  totalAmount = 50000,
  disbursedAmount = 25000,
  approvalStatus = "approved",
  startDate = "Jan 2023",
  endDate = "Dec 2025",
  universityName = "Sierra Leone University",
  studentName = "John Doe",
}: LoanStatusCardProps) => {
  const progressPercentage = Math.round((disbursedAmount / totalAmount) * 100);

  const getStatusBadge = () => {
    switch (approvalStatus) {
      case "approved":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
            <CheckCircle className="mr-1 h-3 w-3" /> Approved
          </Badge>
        );
      case "pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
            <Clock className="mr-1 h-3 w-3" /> Pending
          </Badge>
        );
      case "rejected":
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-200">
            <AlertCircle className="mr-1 h-3 w-3" /> Rejected
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="w-full max-w-[600px] h-[200px] bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative">
      <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-primary/5 blur-2xl"></div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold">Loan Status</CardTitle>
          {getStatusBadge()}
        </div>
        <p className="text-sm text-gray-500">
          For {studentName} at {universityName}
        </p>
        <div className="bg-primary/10 px-3 py-2 rounded-md text-sm font-medium text-primary inline-flex items-center mt-2">
          <span className="mr-2">💼</span> NASSIT Pension Deduction Active
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Total Loan Amount
              </p>
              <p className="text-2xl font-bold">
                Le {totalAmount.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">
                Disbursed Amount
              </p>
              <p className="text-2xl font-bold">
                Le {disbursedAmount.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>Disbursement Progress</span>
              <span>{progressPercentage}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>

          <div className="flex justify-between text-sm text-gray-500">
            <span>
              Term: {startDate} - {endDate}
            </span>
            <span>
              Remaining: Le {(totalAmount - disbursedAmount).toLocaleString()}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoanStatusCard;
