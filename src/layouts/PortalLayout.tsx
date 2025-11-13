import { Outlet } from "react-router-dom";
import PortalSidebar from "@/components/PortalSidebar";

const PortalLayout = () => {
  return (
    <div className="flex min-h-screen w-full bg-background">
      <PortalSidebar />
      <main className="flex-1 p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default PortalLayout;
