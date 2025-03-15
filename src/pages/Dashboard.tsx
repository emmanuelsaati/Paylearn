import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/layout/Layout";
import LoanStatusCard from "@/components/dashboard/LoanStatusCard";
import PaymentScheduleCard from "@/components/dashboard/PaymentScheduleCard";
import QuickActionsCard from "@/components/dashboard/QuickActionsCard";
import NotificationsCard from "@/components/dashboard/NotificationsCard";
import PaymentHistoryCard from "@/components/dashboard/PaymentHistoryCard";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const Dashboard = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    studentName: "Sarah Doe",
    universityName: "Sierra Leone University",
    totalAmount: 50000,
    disbursedAmount: 25000,
    approvalStatus: "approved" as const,
  });

  const [notifications, setNotifications] = useState([
    {
      id: "1",
      type: "payment" as const,
      title: "Payment Due",
      message: "Your next payment of Le 250 is due in 3 days",
      date: "2023-06-15",
      read: false,
    },
    {
      id: "2",
      type: "application" as const,
      title: "Application Update",
      message: "Your loan application has been approved",
      date: "2023-06-10",
      read: true,
    },
    {
      id: "3",
      type: "system" as const,
      title: "System Maintenance",
      message: "The system will be down for maintenance on Sunday",
      date: "2023-06-08",
      read: false,
    },
    {
      id: "4",
      type: "document" as const,
      title: "Document Required",
      message: "Please upload your latest income statement",
      date: "2023-06-05",
      read: true,
    },
  ]);

  const [payments, setPayments] = useState([
    {
      id: "1",
      date: "2023-05-15",
      amount: 250.0,
      method: "Bank Transfer",
      status: "completed" as const,
      reference: "PAY-2023051501",
    },
    {
      id: "2",
      date: "2023-06-15",
      amount: 250.0,
      method: "Mobile Money",
      status: "completed" as const,
      reference: "PAY-2023061501",
    },
    {
      id: "3",
      date: "2023-07-15",
      amount: 250.0,
      method: "Salary Deduction",
      status: "pending" as const,
      reference: "PAY-2023071501",
    },
    {
      id: "4",
      date: "2023-08-15",
      amount: 250.0,
      method: "Bank Transfer",
      status: "failed" as const,
      reference: "PAY-2023081501",
    },
    {
      id: "5",
      date: "2023-09-15",
      amount: 250.0,
      method: "Mobile Money",
      status: "completed" as const,
      reference: "PAY-2023091501",
    },
  ]);

  const handleMarkAsRead = (id: string) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification,
      ),
    );
    toast({
      title: "Notification marked as read",
      description: "The notification has been marked as read.",
    });
  };

  const handleViewAllNotifications = () => {
    // In a real app, this would navigate to a notifications page
    toast({
      title: "View All Notifications",
      description: "Navigating to all notifications...",
    });
  };

  const handleQuickAction = (action: string) => {
    toast({
      title: "Action Triggered",
      description: `You clicked on ${action}`,
    });
  };

  // Create custom quick actions with handlers
  const quickActions = [
    {
      label: "Make Payment",
      icon: <span className="h-4 w-4 mr-2">💰</span>,
      onClick: () => handleQuickAction("Make Payment"),
    },
    {
      label: "New Application",
      icon: <span className="h-4 w-4 mr-2">📝</span>,
      onClick: () => handleQuickAction("New Application"),
    },
    {
      label: "View Documents",
      icon: <span className="h-4 w-4 mr-2">📄</span>,
      onClick: () => handleQuickAction("View Documents"),
    },
    {
      label: "Contact Support",
      icon: <span className="h-4 w-4 mr-2">🆘</span>,
      onClick: () => handleQuickAction("Contact Support"),
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto">
        {/* Welcome Card */}
        <Card className="mb-6 bg-gradient-to-r from-primary/10 to-primary/5">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-2">
              Welcome back, {user?.name || userData.name}!
            </h2>
            <p className="text-gray-600">
              Here's an overview of your student loan for {userData.studentName}{" "}
              at {userData.universityName}.
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
            <QuickActionsCard actions={quickActions} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="md:col-span-2">
            <PaymentScheduleCard />
          </div>
          <div>
            <NotificationsCard
              notifications={notifications}
              onMarkAsRead={handleMarkAsRead}
              onViewAll={handleViewAllNotifications}
            />
          </div>
        </div>

        <div className="mb-6">
          <PaymentHistoryCard payments={payments} />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
