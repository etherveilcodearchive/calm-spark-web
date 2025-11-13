import { Link, useLocation } from "react-router-dom";
import { Home, Activity, BookOpen, Award, User, LogOut, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const PortalSidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { path: "/portal/dashboard", label: "Dashboard", icon: Home },
    { path: "/portal/tracker", label: "Wellness Tracker", icon: Activity },
    { path: "/portal/courses", label: "My Courses", icon: BookOpen },
    { path: "/portal/rewards", label: "Rewards", icon: Award },
    { path: "/portal/profile", label: "Profile", icon: User },
  ];

  return (
    <aside className="w-64 min-h-screen bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <Link to="/" className="flex items-center gap-2 group">
          <Sparkles className="h-6 w-6 text-sidebar-primary transition-smooth group-hover:text-accent" />
          <span className="text-xl font-bold bg-gradient-to-r from-sidebar-primary to-accent bg-clip-text text-transparent">
            Mindful Yogi
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-smooth ${
                isActive(item.path)
                  ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium shadow-soft"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-sidebar-border">
        <Link to="/login">
          <Button variant="ghost" className="w-full justify-start gap-3">
            <LogOut className="h-5 w-5" />
            <span className="text-sm">Logout</span>
          </Button>
        </Link>
      </div>
    </aside>
  );
};

export default PortalSidebar;
