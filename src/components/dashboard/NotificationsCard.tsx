import React from "react";
import { Bell, AlertCircle, Calendar, FileText, Info } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NotificationType = "payment" | "application" | "system" | "document";

interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  date: string;
  read: boolean;
}

interface NotificationsCardProps {
  notifications?: Notification[];
  onMarkAsRead?: (id: string) => void;
  onViewAll?: () => void;
}

const getNotificationIcon = (type: NotificationType) => {
  switch (type) {
    case "payment":
      return <Bell className="h-4 w-4 text-blue-500" />;
    case "application":
      return <FileText className="h-4 w-4 text-green-500" />;
    case "system":
      return <Info className="h-4 w-4 text-yellow-500" />;
    case "document":
      return <Calendar className="h-4 w-4 text-purple-500" />;
    default:
      return <AlertCircle className="h-4 w-4 text-gray-500" />;
  }
};

const NotificationsCard: React.FC<NotificationsCardProps> = ({
  notifications = [
    {
      id: "1",
      type: "payment",
      title: "Payment Due",
      message: "Your next payment of $250 is due in 3 days",
      date: "2023-06-15",
      read: false,
    },
    {
      id: "2",
      type: "application",
      title: "Application Update",
      message: "Your loan application has been approved",
      date: "2023-06-10",
      read: true,
    },
    {
      id: "3",
      type: "system",
      title: "System Maintenance",
      message: "The system will be down for maintenance on Sunday",
      date: "2023-06-08",
      read: false,
    },
    {
      id: "4",
      type: "document",
      title: "Document Required",
      message: "Please upload your latest income statement",
      date: "2023-06-05",
      read: true,
    },
  ],
  onMarkAsRead = () => {},
  onViewAll = () => {},
}) => {
  return (
    <Card className="w-full h-full bg-white overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-semibold">Notifications</CardTitle>
          <Button variant="ghost" size="sm" onClick={onViewAll}>
            View all
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="max-h-[300px] overflow-y-auto px-6 py-2">
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <Bell className="h-8 w-8 text-gray-400 mb-2" />
              <p className="text-sm text-gray-500">No notifications yet</p>
            </div>
          ) : (
            <ul className="space-y-3">
              {notifications.map((notification) => (
                <li
                  key={notification.id}
                  className={cn(
                    "flex items-start p-3 rounded-md transition-colors",
                    notification.read ? "bg-gray-50" : "bg-blue-50",
                    !notification.read && "border-l-4 border-blue-500",
                  )}
                >
                  <div className="flex-shrink-0 mr-3 mt-1">
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {notification.title}
                      </p>
                      <span className="text-xs text-gray-500">
                        {new Date(notification.date).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                          },
                        )}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      {notification.message}
                    </p>
                  </div>
                  {!notification.read && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="ml-2 h-6 px-2 text-xs"
                      onClick={() => onMarkAsRead(notification.id)}
                    >
                      Mark read
                    </Button>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationsCard;
