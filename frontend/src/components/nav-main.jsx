import { IconCirclePlusFilled, IconMail } from "@tabler/icons-react";

import { Button } from "./ui/button";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

import { useNavigate } from "react-router-dom";

export function NavMain({ items }) {
  const navigate = useNavigate();

  const handleButtonClick = (url) => {
    console.log("Button clicked for item:", url);
    navigate(url);
  };
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items?.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                className="hover:bg-green-200 hover:text-green-900"
                tooltip={item.title}
                onClick={() => handleButtonClick(item.url)}
              >
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
