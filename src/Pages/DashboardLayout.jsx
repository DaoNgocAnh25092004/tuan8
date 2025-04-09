import React from "react";

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
        <div className="p-4 col-span-3 h-50">
          <h2 className="text-lg font-semibold">Overview</h2>
          {/* Thêm nội dung tổng quan ở đây */}
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
