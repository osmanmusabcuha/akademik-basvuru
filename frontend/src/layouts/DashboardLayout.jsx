import { Outlet } from "react-router-dom";
import { AppSidebar } from "../components/app-sidebar.jsx";
import { SiteHeader } from "../components/site-header";
import { SidebarInset, SidebarProvider } from "../components/ui/sidebar.jsx";

const DashboardLayout = () => {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader />
          <div className="flex flex-1 flex-col bg-gray-50">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col px-4 gap-4 py-4 md:gap-6 md:py-6">
                <Outlet />
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
