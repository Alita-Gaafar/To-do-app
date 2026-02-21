import * as React from "react";

import { NavMain } from "@/components/sidebar/NavMain";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Header from "./Header";
import { navBtns } from "@/util/data";
import Footer from "./Footer";

export function AppSidebar({ ...props }) {
  return (
    <Sidebar className="dark:bg-neutral-800" collapsible="icon" {...props}>
      <SidebarHeader>
        <Header />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navBtns} />
      </SidebarContent>
      <SidebarFooter>
        <Footer />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
