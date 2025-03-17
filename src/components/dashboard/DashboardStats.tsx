import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Coins, GraduationCap, CalendarClock, TrendingUp } from "lucide-react";

interface DashboardStatsProps {
  totalPaid?: number;
  remainingAmount?: number;
  nextPaymentDate?: string;
  completionPercentage?: number;
}

const DashboardStats = ({
  totalPaid = 25000,
  remainingAmount = 25000,
  nextPaymentDate = "Jun 15, 2023",
  completionPercentage = 50,
}: DashboardStatsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white">
        <CardContent className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Paid</p>
              <p className="text-2xl font-bold mt-1">
                Le {totalPaid.toLocaleString()}
              </p>
            </div>
            <div className="rounded-full bg-green-100 p-2">
              <Coins className="h-5 w-5 text-green-600" />
            </div>
          </div>
          <div className="mt-2">
            <p className="text-xs text-green-600 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" /> On track
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white">
        <CardContent className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Remaining</p>
              <p className="text-2xl font-bold mt-1">
                Le {remainingAmount.toLocaleString()}
              </p>
            </div>
            <div className="rounded-full bg-blue-100 p-2">
              <GraduationCap className="h-5 w-5 text-blue-600" />
            </div>
          </div>
          <div className="mt-2">
            <p className="text-xs text-gray-500">
              {completionPercentage}% completed
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white">
        <CardContent className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Next Payment</p>
              <p className="text-2xl font-bold mt-1">{nextPaymentDate}</p>
            </div>
            <div className="rounded-full bg-yellow-100 p-2">
              <CalendarClock className="h-5 w-5 text-yellow-600" />
            </div>
          </div>
          <div className="mt-2">
            <p className="text-xs text-yellow-600">
              Due in {Math.floor(Math.random() * 10) + 1} days
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white">
        <CardContent className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">NASSIT Status</p>
              <p className="text-2xl font-bold mt-1">Active</p>
            </div>
            <div className="rounded-full bg-green-100 p-2">
              <svg
                className="h-5 w-5 text-green-600"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="mt-2">
            <p className="text-xs text-green-600">Auto-deduction enabled</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardStats;
