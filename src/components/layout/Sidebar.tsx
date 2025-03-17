import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Home,
  FileText,
  CreditCard,
  FileCheck,
  Settings,
  LogOut,
  HelpCircle,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/components/ui/use-toast";

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  className?: string;
}

const SidebarLink = ({
  to,
  icon,
  label,
  active = false,
  className,
}: SidebarLinkProps) => {
  return (
    <Link to={to}>
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start gap-3 px-3 py-2 text-left",
          active
            ? "bg-primary/10 text-primary hover:bg-primary/20"
            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
          className,
        )}
      >
        {icon}
        <span>{label}</span>
      </Button>
    </Link>
  );
};

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className = "" }: SidebarProps) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate("/login");
  };

  const navLinks = [
    {
      to: "/dashboard",
      icon: <Home size={20} />,
      label: "Dashboard",
    },
    {
      to: "/application",
      icon: <FileText size={20} />,
      label: "Application",
    },
    {
      to: "/payments",
      icon: <CreditCard size={20} />,
      label: "Payments",
    },
    {
      to: "/documents",
      icon: <FileCheck size={20} />,
      label: "Documents",
    },
    {
      to: "/settings",
      icon: <Settings size={20} />,
      label: "Settings",
    },
  ];

  return (
    <div
      className={cn(
        "flex h-full w-[280px] flex-col bg-card p-4 shadow-md sticky top-[70px]",
        className,
      )}
    >
      <div className="flex flex-col space-y-6">
        <div className="flex items-center justify-center py-4">
          <div className="text-center">
            <h2 className="text-xl font-bold text-primary">Payfee</h2>
            <p className="text-xs text-gray-500 italic mt-1">
              "Education is the passport to the future"
            </p>
          </div>
        </div>

        <SidebarLink
          to="/website"
          icon={<Globe size={20} />}
          label="Visit Website"
          active={currentPath === "/website"}
          className="bg-primary/5 border border-primary/20 text-primary font-medium hover:bg-primary/10"
        />

        <div className="flex flex-col space-y-1">
          {navLinks.map((link) => (
            <SidebarLink
              key={link.to}
              to={link.to}
              icon={link.icon}
              label={link.label}
              active={currentPath === link.to}
            />
          ))}
        </div>

        <Separator className="my-2" />

        <div className="mt-auto flex flex-col space-y-1">
          <SidebarLink
            to="/help"
            icon={<HelpCircle size={20} />}
            label="Help & Support"
            active={currentPath === "/help"}
          />
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 px-3 py-2 text-left text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
            onClick={handleLogout}
          >
            <LogOut size={20} />
            <span>Logout</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
