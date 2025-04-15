import React from "react";
import { ShoppingCart, DollarSign, UserPlus } from "lucide-react";
import OverviewCard from "../Components/OverviewCard";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-4 h-screen">
      {/* Navbar */}
      <div className="p-4 border-r border-gray-300">
        <h1 className="text-xl font-bold">Navbar</h1>
        {/* Thêm các mục menu ở đây */}
      </div>

      {/* Phần còn lại của nội dung (Header, Overview, Content) */}
      <div className="col-span-3 space-y-4">
        {/* Header */}
        <div className="p-4 border-b h-15 border-gray-300">
          <h1 className="text-2xl font-bold">Header</h1>
        </div>

        {/* Overview */}
        <div className="p-7 col-span-3">
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
        <div className="p-4 h-full col-span-3">
          <h2 className="text-lg font-semibold">Content</h2>
          {/* Thêm nội dung chính ở đây */}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
