import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Calendar,
  Briefcase,
  BookOpen,
  Gift,
  FileText,
  ChevronLeft,
  Home,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AdminSidebarProps {
  isCollapsed: boolean;
}

const AdminSidebar = ({ isCollapsed }: AdminSidebarProps) => {
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin/dashboard" },
    { icon: Users, label: "Users", path: "/admin/users" },
    { icon: Calendar, label: "Events", path: "/admin/events" },
    { icon: Briefcase, label: "Services", path: "/admin/services" },
    { icon: BookOpen, label: "Bookings", path: "/admin/bookings" },
    { icon: Gift, label: "Rewards", path: "/admin/rewards" },
    { icon: FileText, label: "CMS", path: "/admin/cms" },
  ];

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-full bg-card border-r border-border transition-all duration-300 z-40",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <Link to="/admin/dashboard" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">MY</span>
            </div>
            {!isCollapsed && (
              <div>
                <h2 className="font-serif font-bold text-foreground">Mindful Yogi</h2>
                <p className="text-xs text-muted-foreground">Admin Panel</p>
              </div>
            )}
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                  isActive
                    ? "bg-primary text-white shadow-md"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                )}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                {!isCollapsed && <span className="font-medium">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Back to Site */}
        {!isCollapsed && (
          <div className="p-4 border-t border-border">
            <Link
              to="/"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
            >
              <Home className="h-5 w-5" />
              <span className="font-medium">Back to Site</span>
            </Link>
          </div>
        )}
      </div>
    </aside>
  );
};

export default AdminSidebar;
