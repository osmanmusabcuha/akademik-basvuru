import * as React from "react";
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
  IconFile,
  IconUserShield,
} from "@tabler/icons-react";

import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "./nav-main.jsx";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "./nav-user.jsx";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar.jsx";
import { useAuthStore } from "../store/auth-store.jsx";

const data = {
  navAdmin: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Roller",
      url: "/dashboard/manage-roles",
      icon: IconUserShield,
    },
    {
      title: "İlanlar",
      url: "/dashboard/manage-postings",
      icon: IconFile,
    },
  ],
  navUser: [
    {
      title: "Dashboard",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "İlanlar",
      url: "/dashboard/postings",
      icon: IconFile,
    },
    {
      title: "Başvurularım",
      url: "/dashboard/applications",
      icon: IconFileDescription,
    },
    {
      title: "İlanlar",
      url: "/dashboard/announcements",
      icon: IconFile,
    },
  ],
  navJury: [
    {
      title: "Dashboard",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "Başvurularım",
      url: "/dashboard/applications",
      icon: IconFileDescription,
    },
    {
      title: "İlanlar",
      url: "/dashboard/announcements",
      icon: IconFile,
    },
  ],
};

export function AppSidebar({ ...props }) {
  const { user } = useAuthStore();
  const role = user?.role;

  const navItemsByRole = {
    admin: data.navAdmin,
    user: data.navUser,
    jury: data.navJury,
  };

  const navItems = navItemsByRole[role] || [];
  console.log("navItems", navItems);

  return (
    <Sidebar collapsible="offcanvas" {...props} className="">
      <SidebarHeader className="border-b bg-gray-50">
        <SidebarMenu className="">
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5 rounded-none"
            >
              <a href="#">
                <span className="text-base font-semibold">
                  Akademik Başvuru Sistemi
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-gray-50">
        <NavMain items={navItems} />
      </SidebarContent>
      <SidebarFooter className="bg-gray-50">
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
