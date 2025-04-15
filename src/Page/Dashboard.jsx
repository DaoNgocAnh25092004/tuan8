import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Edit, X, Save } from "lucide-react";
import { cn } from "../lib/cn"; // Đường dẫn đến file cn.js

// Định nghĩa các components đơn giản để thay thế các import từ "@/components/ui"
const Button = ({ variant, size, className, onClick, children }) => {
  const baseClasses =
    "rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-opacity-50";
  const variantClasses = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    ghost: "text-gray-700 hover:bg-gray-100",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200",
    destructive: "bg-red-500 text-white hover:bg-red-600",
  };
  const sizeClasses = {
    default: "px-4 py-2",
    icon: "p-2",
    sm: "px-3 py-1.5 text-sm",
  };

  const classes = cn(
    baseClasses,
    variantClasses[variant || "default"],
    sizeClasses[size || "default"],
    className
  );

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

const Input = ({ id, name, value, onChange, className, ...props }) => {
  const classes = cn(
    "border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
    className
  );
  return (
    <input
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className={classes}
      {...props}
    />
  );
};

const Label = ({ htmlFor, className, children }) => {
  const classes = cn("text-sm font-medium text-gray-700", className);
  return (
    <label htmlFor={htmlFor} className={classes}>
      {children}
    </label>
  );
};

const Dialog = ({ open, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl">{children}</div>
    </div>
  );
};

const DialogContent = ({ className, children, ...props }) => {
  const classes = cn("p-6", className);
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

const DialogHeader = ({ className, children }) => {
  const classes = cn(className);
  return <div className={classes}>{children}</div>;
};

const DialogTitle = ({ className, children }) => {
  const classes = cn("text-lg font-semibold text-gray-900", className);
  return <h2 className={classes}>{children}</h2>;
};

const DialogDescription = ({ className, children }) => {
  const classes = cn("text-gray-500", className);
  return <p className={classes}>{children}</p>;
};

const DialogFooter = ({ className, children }) => {
  const classes = cn("flex justify-end space-x-2", className);
  return <div className={classes}>{children}</div>;
};

const DialogTrigger = ({ className, children, onClick }) => {
  const classes = cn(className);
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

// ===============================

const Dashboard = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);
  const [editingData, setEditingData] = useState(null);
  const [open, setOpen] = useState(false);

  const records =
    data && Array.isArray(data)
      ? data.slice(
          (currentPage - 1) * recordsPerPage,
          currentPage * recordsPerPage
        )
      : [];
  const nPages =
    data && Array.isArray(data) ? Math.ceil(data.length / recordsPerPage) : 0;
  const numbers = nPages > 0 ? [...Array(nPages + 1).keys()].slice(1) : [];

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEdit = (item) => {
    setEditingData(item);
    setOpen(true);
  };

  const handleSave = () => {
    console.log("Saving data:", editingData);
    setEditingData(null);
    setOpen(false);
  };

  const handleInputChange = (e) => {
    if (!editingData) return;
    const { name, value } = e.target;
    setEditingData({ ...editingData, [name]: value });
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                CUSTOMER NAME
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                COMPANY
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                ORDER VALUE
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                ORDER DATE
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                STATUS
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {records.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap flex items-center gap-4">
                  <img
                    className="h-8 w-8 rounded-full"
                    src={item.avatar}
                    alt={`Avatar of ${item.customerName}`}
                  />
                  <span className="text-sm font-medium text-gray-900">
                    {item.customerName}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.company}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.orderValue}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.orderDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.status}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEdit(item)}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    <Edit className="h-5 w-5" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Phân trang */}
      <div className="flex items-center justify-center mt-4 space-x-2">
        <button
          onClick={prevPage}
          className={`px-3 py-1 rounded-md ${
            currentPage === 1
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        {numbers.map((pageNumber, index) => (
          <button
            key={index}
            onClick={() => changePage(pageNumber)}
            className={`px-3 py-1 rounded-md ${
              currentPage === pageNumber
                ? "bg-indigo-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {pageNumber}
          </button>
        ))}
        <button
          onClick={nextPage}
          className={`px-3 py-1 rounded-md ${
            currentPage === nPages
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          disabled={currentPage === nPages}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Data</DialogTitle>
            <DialogDescription>
              Make changes to the data below. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          {editingData && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="customerName" className="text-right">
                  Customer Name
                </Label>
                <Input
                  id="customerName"
                  name="customerName"
                  value={editingData.customerName || ""}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="company" className="text-right">
                  Company
                </Label>
                <Input
                  id="company"
                  name="company"
                  value={editingData.company || ""}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="orderValue" className="text-right">
                  Order Value
                </Label>
                <Input
                  id="orderValue"
                  name="orderValue"
                  value={editingData.orderValue || ""}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="orderDate" className="text-right">
                  Order Date
                </Label>
                <Input
                  id="orderDate"
                  name="orderDate"
                  value={editingData.orderDate || ""}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="status" className="text-right">
                  Status
                </Label>
                <Input
                  id="status"
                  name="status"
                  value={editingData.status || ""}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setOpen(false);
                setEditingData(null);
              }}
              className="mr-2"
            >
              <X className="mr-2 h-4 w-4" /> Hủy
            </Button>
            <Button type="submit" onClick={handleSave}>
              <Save className="mr-2 h-4 w-4" /> Lưu
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Dashboard;
