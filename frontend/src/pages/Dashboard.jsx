import React, { useEffect, useState } from "react";
import { Users, UserCheck, UserX, BarChart3, TrendingUp } from "lucide-react";
import { Card, cn } from "../components/ui";
import { dashboardService } from "../api";

const StatCard = ({ title, value, icon: Icon, subtext }) => (
  <Card className="p-5">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <h3 className="text-2xl font-semibold mt-1 text-gray-900">{value}</h3>
        {subtext && <p className="text-xs text-gray-400 mt-1">{subtext}</p>}
      </div>
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white">
        <Icon className="w-5 h-5 text-gray-600" />
      </div>
    </div>
  </Card>
);

export default function Dashboard({ setActiveTab, navigateToEmployees }) {
  const [stats, setStats] = useState({
    total_employees: 0,
    present_today: 0,
    absent_today: 0,
  });
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0],
  );

  useEffect(() => {
    fetchStats(selectedDate);
  }, [selectedDate]);

  const fetchStats = (date) => {
    setLoading(true);
    dashboardService
      .getSummary(date)
      .then((res) => setStats(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 mt-1">
            {selectedDate === new Date().toISOString().split("T")[0]
              ? "Welcome back, Admin. Here's what's happening today."
              : `Viewing statistics for ${selectedDate}`}
          </p>
        </div>
        <div className="flex items-center">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-3 py-1.5 rounded-md border border-gray-300 bg-white text-sm focus:ring-2 focus:ring-primary-500 outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          title="Total Employees"
          value={stats.total_employees}
          icon={Users}
          subtext="Registered in system"
        />
        <StatCard
          title={
            selectedDate === new Date().toISOString().split("T")[0]
              ? "Present Today"
              : "Present on Date"
          }
          value={stats.present_today}
          icon={UserCheck}
          subtext="Marked as active"
        />
        <StatCard
          title={
            selectedDate === new Date().toISOString().split("T")[0]
              ? "Absent Today"
              : "Absent on Date"
          }
          value={stats.absent_today}
          icon={UserX}
          subtext="Not in office"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Recent Activity
            </h3>
            <BarChart3 className="w-5 h-5 text-gray-400" />
          </div>
          {loading ? (
            <div className="flex justify-center p-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-sm text-gray-500 italic">
                No recent activity for this date.
              </p>
            </div>
          )}
        </Card>

        <Card className="p-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => navigateToEmployees(true)}
              className="p-3 rounded-md border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-colors text-sm font-medium"
            >
              Add Employee
            </button>
            <button
              onClick={() => setActiveTab("attendance")}
              className="p-3 rounded-md border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-colors text-sm font-medium"
            >
              Mark Attendance
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}
