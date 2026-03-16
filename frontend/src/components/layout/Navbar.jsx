import React from "react";
import { Menu } from "lucide-react";

export const Navbar = ({ onMenuClick }) => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-8">
      <div className="flex items-center min-w-0">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md"
        >
          <Menu className="w-6 h-6" />
        </button>
        <h2 className="ml-2 hidden sm:block text-base sm:text-lg font-medium tracking-tight text-gray-900 truncate">
          HR Management System
        </h2>
      </div>
      <div className="ml-auto flex items-center space-x-4 flex-shrink-0">
        <span className="text-sm font-medium text-gray-500 whitespace-nowrap">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "numeric",
            day: "numeric",
            year: "numeric",
          })}
        </span>
        <span aria-hidden="true">|</span>
        <div className="flex items-center text-sm text-gray-600">
          <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold mr-3">
            A
          </div>
          <span className="hidden sm:inline">Admin User</span>
        </div>
      </div>
    </header>
  );
};
