import React, { useState } from "react";
import {
  ShoppingCart,
  DollarSign,
  UserPlus,
  LayoutDashboard,
  Folder,
  Users,
  BarChart,
  MessageSquare,
  Settings,
  HelpCircle,
} from "lucide-react";
import OverviewCard from "../Components/OverviewCard";
import Dashboard from "../Page/Dashboard";
import { Input } from "postcss";

const DashboardLayout = () => {
  const [data] = useState([
    {
      customerName: "Elizabeth Lee",
      company: "Avatar Systems",
      orderValue: "$359",
      orderDate: "10/07/2023",
      status: "New",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      customerName: "Carlos Garcia",
      company: "SmoozeShift",
      orderValue: "$747",
      orderDate: "24/07/2023",
      status: "New",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      customerName: "Elizabeth Bailey",
      company: "Prime Time Telecom",
      orderValue: "$564",
      orderDate: "08/08/2023",
      status: "In-progress",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      customerName: "Ryan Brown",
      company: "OmniTech Corporation",
      orderValue: "$541",
      orderDate: "31/08/2023",
      status: "In-progress",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      customerName: "Ryan Young",
      company: "DataStream Inc.",
      orderValue: "$769",
      orderDate: "01/05/2023",
      status: "Completed",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      customerName: "Hailey Adams",
      company: "FlowRush",
      orderValue: "$922",
      orderDate: "10/06/2023",
      status: "Completed",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
  ]);

  const [activePage, setActivePage] = useState("Dashboard");
  const renderPage = () => {
    switch (activePage) {
      case "Dashboard":
        return (
          <>
            <Dashboard data={data} />
          </>
        );
      case "Projects":
        return (
          <div className="p-4 h-full col-span-3">
            <h1>Projects</h1>
          </div>
        );
      case "Teams":
        return (
          <div className="p-4 h-full col-span-3">
            <h1>Teams</h1>
          </div>
        );
      case "Analytics":
        return (
          <div className="p-4 h-full col-span-3">
            <h1>Analytics</h1>
          </div>
        );
      case "Messages":
        return (
          <div className="p-4 h-full col-span-3">
            <h1>Messages</h1>
          </div>
        );
      case "Integrations":
        return (
          <div className="p-4 h-full col-span-3">
            <h1>Integrations</h1>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-4 h-screen">
      {/* Navbar */}
      <div className="p-4 border-r border-gray-300">
        <div className="mb-8">
          <h1 className="text-xl font-bold text-black">Logo</h1>
        </div>
        <ul className="space-y-2">
          <li
            className={`flex items-center gap-2 p-2 rounded-md cursor-pointer ${
              activePage === "Dashboard"
                ? "bg-pink-500 text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
            onClick={() => setActivePage("Dashboard")}
          >
            <LayoutDashboard className="w-5 h-5" />
            <span>Dashboard</span>
          </li>
          <li
            className={`flex items-center gap-2 p-2 rounded-md cursor-pointer ${
              activePage === "Projects"
                ? "bg-pink-500 text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
            onClick={() => setActivePage("Projects")}
          >
            <Folder className="w-5 h-5" />
            <span>Projects</span>
          </li>
          <li
            className={`flex items-center gap-2 p-2 rounded-md cursor-pointer ${
              activePage === "Teams"
                ? "bg-pink-500 text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
            onClick={() => setActivePage("Teams")}
          >
            <Users className="w-5 h-5" />
            <span>Teams</span>
          </li>
          <li
            className={`flex items-center gap-2 p-2 rounded-md cursor-pointer ${
              activePage === "Analytics"
                ? "bg-pink-500 text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
            onClick={() => setActivePage("Analytics")}
          >
            <BarChart className="w-5 h-5" />
            <span>Analytics</span>
          </li>
          <li
            className={`flex items-center gap-2 p-2 rounded-md cursor-pointer ${
              activePage === "Messages"
                ? "bg-pink-500 text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
            onClick={() => setActivePage("Messages")}
          >
            <MessageSquare className="w-5 h-5" />
            <span>Messages</span>
          </li>
          <li
            className={`flex items-center gap-2 p-2 rounded-md cursor-pointer ${
              activePage === "Integrations"
                ? "bg-pink-500 text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
            onClick={() => setActivePage("Integrations")}
          >
            <Settings className="w-5 h-5" />
            <span>Integrations</span>
          </li>
        </ul>
      </div>

      {/* Phần còn lại của nội dung (Header, Overview, Content) */}
      <div className="col-span-3 space-y-4">
        <div className="bg-white shadow-md p-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-bold text-pink-500 mr-4">
              Dashboard
            </span>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <HelpCircle className="h-5 w-5 text-gray-500" />

            <div className="h-8 w-8 rounded-full bg-purple-500"></div>
          </div>
        </div>
        {/* Overview */}
        <div className="p-3 col-span-3">
          <h1 className="text-2xl font-bold mb-4">Overview</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <OverviewCard
              title="Turnover"
              value="$92,405"
              change="5.39%"
              icon={ShoppingCart}
              bgColor="bg-pink-50"
              iconColor="text-pink-500"
            />
            <OverviewCard
              title="Profit"
              value="$32,218"
              change="5.39%"
              icon={DollarSign}
              bgColor="bg-blue-50"
              iconColor="text-blue-500"
            />
            <OverviewCard
              title="New customer"
              value="298"
              change="6.84%"
              icon={UserPlus}
              bgColor="bg-blue-50"
              iconColor="text-blue-500"
            />
          </div>
        </div>
        {/* Dòng kẻ ngang */}
        <div className="border-b border-gray-300 col-span-3"></div>
        {/* Content */}
        {renderPage()}
      </div>
    </div>
  );
};

export default DashboardLayout;
