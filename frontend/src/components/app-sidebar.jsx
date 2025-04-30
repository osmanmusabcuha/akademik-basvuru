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
      title: "İlanı Düzenle",
      url: "/dashboard/manage-postings",
      icon: IconFile,
    },
    {
      title: "Başvurular",
      url: "/dashboard/all-applications",
      icon: IconFileDescription,
    },
  ],
  navMenager: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "İlanı Düzenle",
      url: "/dashboard/manage-postings",
      icon: IconFile,
    },
    {
      title: "Başvurular",
      url: "/dashboard/all-applications",
      icon: IconFileDescription,
    },
  ],
  navUser: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Başvurularım",
      url: "/dashboard/applications",
      icon: IconFileDescription,
    },
    {
      title: "İlanlar",
      url: "/dashboard/postings",
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
      title: "Degerlendirmeler",
      url: "/dashboard/evaluations",
      icon: IconFileDescription,
    },
  ],
};

export function AppSidebar({ ...props }) {
  const { user } = useAuthStore();
  const role = user?.role;

  const navItemsByRole = {
    admin: data.navAdmin,
    aday: data.navUser,
    juri: data.navJury,
    yonetici: data.navMenager,
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
