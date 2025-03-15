import React from "react";
import LoanStatusCard from "./dashboard/LoanStatusCard";
import PaymentScheduleCard from "./dashboard/PaymentScheduleCard";
import QuickActionsCard from "./dashboard/QuickActionsCard";
import NotificationsCard from "./dashboard/NotificationsCard";
import PaymentHistoryCard from "./dashboard/PaymentHistoryCard";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  User,
  Bell,
  Settings,
  LogOut,
  Home,
  FileText,
  CreditCard,
  HelpCircle,
} from "lucide-react";

const HomePage = () => {
  // Mock user data
  const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    studentName: "Sarah Doe",
    universityName: "Sierra Leone University",
    totalAmount: 50000,
    disbursedAmount: 25000,
    approvalStatus: "approved" as const,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-10 bg-white border-b shadow-sm h-[70px]">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-primary">Pay-As-You-Learn</h1>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                <User className="h-4 w-4" />
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium">{userData.name}</p>
                <p className="text-xs text-gray-500">{userData.email}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Left Sidebar */}
        <aside className="w-[280px] bg-white border-r h-[calc(100vh-70px)] sticky top-[70px] hidden md:block">
          <div className="p-4 space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <FileText className="mr-2 h-4 w-4" />
              Application
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <CreditCard className="mr-2 h-4 w-4" />
              Payments
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <FileText className="mr-2 h-4 w-4" />
              Documents
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <HelpCircle className="mr-2 h-4 w-4" />
              Support
            </Button>
          </div>

          <div className="mt-auto p-4 border-t">
            <Button
              variant="ghost"
              className="w-full justify-start text-red-500 hover:text-red-700 hover:bg-red-50"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="container mx-auto">
            {/* Welcome Card */}
            <Card className="mb-6 bg-gradient-to-r from-primary/10 to-primary/5">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-2">
                  Welcome back, {userData.name}!
                </h2>
                <p className="text-gray-600">
                  Here's an overview of your student loan for{" "}
                  {userData.studentName} at {userData.universityName}.
                </p>
              </CardContent>
            </Card>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="md:col-span-2">
                <LoanStatusCard
                  totalAmount={userData.totalAmount}
                  disbursedAmount={userData.disbursedAmount}
                  approvalStatus={userData.approvalStatus}
                  studentName={userData.studentName}
                  universityName={userData.universityName}
                />
              </div>
              <div>
                <QuickActionsCard />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="md:col-span-2">
                <PaymentScheduleCard />
              </div>
              <div>
                <NotificationsCard />
              </div>
            </div>

            <div className="mb-6">
              <PaymentHistoryCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
