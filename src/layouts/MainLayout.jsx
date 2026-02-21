import { Outlet } from "react-router";
import { AppSidebar } from "@/components/sidebar/AppSidebar";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function MainLayout() {
  return (
    <SidebarProvider>
      <div className="flex w-full min-h-screen">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main content */}
        <SidebarInset className="flex-1 flex flex-col">
          {/* Optional header inside SidebarInset */}
          <header className="fixed p-3">
            <SidebarTrigger className="-ml-1 cursor-pointer bg-emerald-200 hover:bg-emerald-300 sm:bg-transparent " />
            {/* You can add Breadcrumb or other header items here */}
          </header>

          {/* Page content */}
          <Outlet />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
