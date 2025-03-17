import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Activity, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ActivityItem {
  id: string;
  description: string;
  date: string;
  type: "payment" | "application" | "document" | "system";
}

interface RecentActivitiesProps {
  activities?: ActivityItem[];
  onViewAll?: () => void;
}

const RecentActivities = ({
  activities = [
    {
      id: "1",
      description: "Payment of Le 250 processed successfully",
      date: "2023-06-15T10:30:00",
      type: "payment",
    },
    {
      id: "2",
      description: "NASSIT pension deduction setup completed",
      date: "2023-06-14T14:45:00",
      type: "system",
    },
    {
      id: "3",
      description: "University confirmed enrollment for Sarah Doe",
      date: "2023-06-12T09:15:00",
      type: "application",
    },
    {
      id: "4",
      description: "Income verification document uploaded",
      date: "2023-06-10T16:20:00",
      type: "document",
    },
    {
      id: "5",
      description: "Payment schedule updated for next semester",
      date: "2023-06-08T11:05:00",
      type: "system",
    },
  ],
  onViewAll = () => {},
}: RecentActivitiesProps) => {
  const getActivityIcon = (type: ActivityItem["type"]) => {
    switch (type) {
      case "payment":
        return (
          <span className="h-8 w-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
            💰
          </span>
        );
      case "application":
        return (
          <span className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
            📝
          </span>
        );
      case "document":
        return (
          <span className="h-8 w-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
            📄
          </span>
        );
      case "system":
        return (
          <span className="h-8 w-8 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center">
            ⚙️
          </span>
        );
      default:
        return (
          <span className="h-8 w-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center">
            ❓
          </span>
        );
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24),
    );

    if (diffInDays === 0) {
      return "Today";
    } else if (diffInDays === 1) {
      return "Yesterday";
    } else if (diffInDays < 7) {
      return `${diffInDays} days ago`;
    } else {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    }
  };

  return (
    <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-primary" />
          <CardTitle className="text-lg font-semibold">
            Recent Activities
          </CardTitle>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onViewAll}
          className="text-primary"
        >
          View all <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.length === 0 ? (
            <div className="text-center py-6">
              <p className="text-gray-500">No recent activities</p>
            </div>
          ) : (
            activities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0"
              >
                {getActivityIcon(activity.type)}
                <div className="flex-1">
                  <p className="text-sm">{activity.description}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {formatDate(activity.date)}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivities;
