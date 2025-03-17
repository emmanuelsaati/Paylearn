import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, FileText, LifeBuoy, Plus } from "lucide-react";

interface QuickActionsCardProps {
  actions?: {
    label: string;
    icon: React.ReactNode;
    onClick?: () => void;
  }[];
}

const QuickActionsCard = ({
  actions = [
    {
      label: "Setup NASSIT Deduction",
      icon: <CreditCard className="h-4 w-4 mr-2" />,
      onClick: () => console.log("Setup NASSIT deduction clicked"),
    },
    {
      label: "New Child Application",
      icon: <Plus className="h-4 w-4 mr-2" />,
      onClick: () => console.log("New application clicked"),
    },
    {
      label: "View Child Documents",
      icon: <FileText className="h-4 w-4 mr-2" />,
      onClick: () => console.log("View documents clicked"),
    },
    {
      label: "Contact Support",
      icon: <LifeBuoy className="h-4 w-4 mr-2" />,
      onClick: () => console.log("Contact support clicked"),
    },
  ],
}: QuickActionsCardProps) => {
  return (
    <Card className="w-full h-full bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant="outline"
            className="w-full justify-start text-left"
            onClick={action.onClick}
          >
            {action.icon}
            {action.label}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};

export default QuickActionsCard;
