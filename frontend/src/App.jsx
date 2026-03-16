import React, { useState } from "react";
import { Sidebar } from "./components/layout/Sidebar";
import { Navbar } from "./components/layout/Navbar";
import Dashboard from "./pages/Dashboard";
import EmployeeList from "./pages/EmployeeList";
import Attendance from "./pages/Attendance";

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [showFormOnLoad, setShowFormOnLoad] = useState(false);

  const navigateToEmployees = (openForm = false) => {
    setActiveTab("employees");
    setShowFormOnLoad(openForm);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <Dashboard
            setActiveTab={setActiveTab}
            navigateToEmployees={navigateToEmployees}
          />
        );
      case "employees":
        return (
          <EmployeeList
            initialShowForm={showFormOnLoad}
            onFormClose={() => setShowFormOnLoad(false)}
          />
        );
      case "attendance":
        return <Attendance />;
      default:
        return (
          <Dashboard
            setActiveTab={setActiveTab}
            navigateToEmployees={navigateToEmployees}
          />
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar for Desktop */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          <div className="relative w-64 flex flex-col bg-white">
            <Sidebar
              variant="mobile"
              activeTab={activeTab}
              setActiveTab={(tab) => {
                setActiveTab(tab);
                setMobileMenuOpen(false);
              }}
            />
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar onMenuClick={() => setMobileMenuOpen(true)} />

        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          <div className="max-w-7xl mx-auto">{renderContent()}</div>
        </main>
      </div>
    </div>
  );
}

export default App;
