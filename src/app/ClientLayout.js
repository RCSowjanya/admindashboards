"use client";
import { usePathname } from "next/navigation";
import Sidebar from "@/Components/Sidebar";
import DashboardHeader from "@/Components/DashboardHeader";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  console.log("Current Pathname:", pathname);
  const noLayoutRoutes = ["/login"]; // Routes without sidebar and header

  const isNoLayoutRoute = noLayoutRoutes.includes(pathname);

  return (
    <div className="flex min-h-screen">
      {!isNoLayoutRoute && <Sidebar />}
      <div
        className={`flex-1 transition-all duration-300 ${
          isNoLayoutRoute ? "" : "ml-[15rem]"
        }`}
        style={{ width: `calc(100% - ${isNoLayoutRoute ? "0" : "15rem"})` }}
      >
        {!isNoLayoutRoute && <DashboardHeader />}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
