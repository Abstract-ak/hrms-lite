import React from "react";
import { Users, Calendar, LayoutDashboard, Menu, X } from "lucide-react";
import { cn } from "../ui";

const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={cn(
      "flex items-center w-full px-4 py-3 text-sm font-medium transition-colors rounded-lg group",
      active
        ? "bg-primary-50 text-primary-700"
        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900",
    )}
  >
    <Icon
      className={cn(
        "w-5 h-5 mr-3",
        active ? "text-primary-700" : "text-gray-500 group-hover:text-gray-700",
      )}
    />
    {label}
  </button>
);

export const Sidebar = ({ activeTab, setActiveTab, variant = "desktop" }) => {
  const items = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "employees", label: "Employees", icon: Users },
    { id: "attendance", label: "Attendance", icon: Calendar },
  ];

  const containerClassName =
    variant === "mobile"
      ? "w-64 bg-white border-r border-gray-200 h-full"
      : "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 lg:static lg:block hidden";

  return (
    <aside className={containerClassName}>
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center h-16 border-b border-gray-200">
          <span className="text-xl font-bold text-primary-700">HRMS Lite</span>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          {items.map((item) => (
            <SidebarItem
              key={item.id}
              {...item}
              active={activeTab === item.id}
              onClick={() => setActiveTab(item.id)}
            />
          ))}
        </nav>
      </div>
    </aside>
  );
};
