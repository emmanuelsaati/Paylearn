import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/layout/Layout";
import LoanStatusCard from "@/components/dashboard/LoanStatusCard";
import PaymentScheduleCard from "@/components/dashboard/PaymentScheduleCard";
import QuickActionsCard from "@/components/dashboard/QuickActionsCard";
import NotificationsCard from "@/components/dashboard/NotificationsCard";
import PaymentHistoryCard from "@/components/dashboard/PaymentHistoryCard";
import DashboardStats from "@/components/dashboard/DashboardStats";
import RecentActivities from "@/components/dashboard/RecentActivities";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
        <Card className="mb-6 bg-gradient-to-r from-primary/10 to-primary/5 border-none shadow-md overflow-hidden relative">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-primary/10 blur-2xl"></div>
          <div className="absolute -left-10 -top-10 w-20 h-20 rounded-full bg-primary/10 blur-xl"></div>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-2">
              Welcome back, {user?.name || userData.name}!
            </h2>
            <p className="text-gray-600">
              Here's an overview of your child's education financing for{" "}
              {userData.studentName} at {userData.universityName}.
            </p>
          </CardContent>
        </Card>

        {/* Dashboard Stats */}
        <div className="mb-6">
          <DashboardStats
            totalPaid={userData.disbursedAmount}
            remainingAmount={userData.totalAmount - userData.disbursedAmount}
            nextPaymentDate="Jun 15, 2023"
            completionPercentage={Math.round(
              (userData.disbursedAmount / userData.totalAmount) * 100,
            )}
          />
        </div>

        {/* Dashboard Tabs */}
        <Tabs defaultValue="overview" className="mb-6">
          <TabsList className="grid w-full grid-cols-4 mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <RecentActivities />
              </div>
              <div>
                <NotificationsCard
                  notifications={notifications}
                  onMarkAsRead={handleMarkAsRead}
                  onViewAll={handleViewAllNotifications}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="payments" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <PaymentScheduleCard />
              </div>
              <div>
                <QuickActionsCard
                  actions={[
                    {
                      label: "Make a Payment",
                      icon: <span className="h-4 w-4 mr-2">💰</span>,
                      onClick: () => handleQuickAction("Make Payment"),
                    },
                    {
                      label: "Setup Auto-Deduction",
                      icon: <span className="h-4 w-4 mr-2">⚙️</span>,
                      onClick: () => handleQuickAction("Setup Auto-Deduction"),
                    },
                    {
                      label: "Payment Methods",
                      icon: <span className="h-4 w-4 mr-2">💳</span>,
                      onClick: () => handleQuickAction("Payment Methods"),
                    },
                    {
                      label: "Download Receipt",
                      icon: <span className="h-4 w-4 mr-2">📄</span>,
                      onClick: () => handleQuickAction("Download Receipt"),
                    },
                  ]}
                />
              </div>
            </div>

            <div className="mb-6">
              <PaymentHistoryCard payments={payments} />
            </div>
          </TabsContent>

          <TabsContent value="documents" className="space-y-6">
            <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Required Documents
                </h3>
                <p className="text-gray-600 mb-4">
                  Upload and manage documents for your child's education
                  financing.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="border border-dashed border-gray-300 hover:border-primary hover:bg-primary/5 transition-colors cursor-pointer p-4 flex flex-col items-center justify-center text-center">
                    <div className="rounded-full bg-primary/10 p-3 mb-2">
                      <svg
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </div>
                    <h4 className="font-medium">NASSIT Verification</h4>
                    <p className="text-xs text-gray-500 mt-1">
                      Upload your NASSIT verification document
                    </p>
                  </Card>

                  <Card className="border border-dashed border-gray-300 hover:border-primary hover:bg-primary/5 transition-colors cursor-pointer p-4 flex flex-col items-center justify-center text-center">
                    <div className="rounded-full bg-primary/10 p-3 mb-2">
                      <svg
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </div>
                    <h4 className="font-medium">Child's School ID</h4>
                    <p className="text-xs text-gray-500 mt-1">
                      Upload your child's school identification
                    </p>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Account Settings</h3>
                <p className="text-gray-600 mb-4">
                  Manage your account preferences and notification settings.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <div>
                      <h4 className="font-medium">Email Notifications</h4>
                      <p className="text-sm text-gray-500">
                        Receive payment reminders via email
                      </p>
                    </div>
                    <div className="flex items-center h-5">
                      <input
                        id="email-notifications"
                        aria-describedby="email-notifications-description"
                        name="email-notifications"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        defaultChecked
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <div>
                      <h4 className="font-medium">SMS Notifications</h4>
                      <p className="text-sm text-gray-500">
                        Receive payment reminders via SMS
                      </p>
                    </div>
                    <div className="flex items-center h-5">
                      <input
                        id="sms-notifications"
                        aria-describedby="sms-notifications-description"
                        name="sms-notifications"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        defaultChecked
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Dashboard;
