import React from "react";
import { Menu } from "lucide-react";

export const Navbar = ({ onMenuClick }) => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-8">
      <div className="flex items-center">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md"
        >
          <Menu className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-semibold text-gray-800 ml-2">
          HR Management System
        </h2>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm font-medium text-gray-500 hidden sm:block">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </span>
      </div>
    </header>
  );
};
