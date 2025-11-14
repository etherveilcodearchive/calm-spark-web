import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminNavbar from "@/components/admin/AdminNavbar";
import { cn } from "@/lib/utils";

const AdminLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <AdminSidebar isCollapsed={isSidebarCollapsed} />
      <div
        className={cn(
          "transition-all duration-300",
          isSidebarCollapsed ? "ml-20" : "ml-64"
        )}
      >
        <AdminNavbar onToggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)} />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
