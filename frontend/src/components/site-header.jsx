import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useLocation } from "react-router-dom";

const routeMapping = {
  dashboard: "Dashboard",
  applications: "Başvurular",
  "manage-postings": "İlan Yönetimi",
  "manage-roles": "Rol Yönetimi",
  postings: "İlanlar",
};

const formatPath = (path) => {
  const pathParts = path.split("/").filter((part) => part);
  const formattedParts = pathParts.map((part) => {
    return routeMapping[part] || part.charAt(0).toUpperCase() + part.slice(1);
  });
  return formattedParts.join(" - ");
};

export function SiteHeader() {
  const location = useLocation();
  console.log("Location:", location.pathname);
  const formattedPath = formatPath(location.pathname);
  console.log("Formatted Path:", formattedPath);
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1 hover:bg-green-200 hover:text-green-700" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4 bg-gray-600"
        />
        <h1 className="text-black font-medium">{formattedPath}</h1>
      </div>
    </header>
  );
}
