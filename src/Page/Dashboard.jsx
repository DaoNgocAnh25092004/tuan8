import { ChevronLeft, ChevronRight, Edit } from "lucide-react";
import { useState } from "react";

const Dashboard = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const nPages = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(nPages + 1).keys()].slice(1);

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
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    <Edit className="h-5 w-5" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
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
    </>
  );
};

export default Dashboard;
