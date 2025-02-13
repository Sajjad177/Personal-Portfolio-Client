import Link from "next/link";
import { FaUser, FaCog, FaHome, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`h-screen bg-gradient-to-b from-blue-500 to-indigo-600 text-white p-4 transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      <button
        className="mb-4 p-2 bg-white text-blue-600 rounded-md flex items-center space-x-2 hover:bg-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaArrowLeft
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      <ul className="space-y-4">
        <li>
          <Link
            href="/dashboard"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition"
          >
            <FaHome className="h-5 w-5" />
            {isOpen && <span>Dashboard</span>}
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/user-info"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition"
          >
            <FaUser className="h-5 w-5" />
            {isOpen && <span>User Info</span>}
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/settings"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition"
          >
            <FaCog className="h-5 w-5" />
            {isOpen && <span>Settings</span>}
          </Link>
        </li>
      </ul>
      <div className="mt-auto">
        <Link
          href="/"
          className="flex items-center space-x-3 p-3 rounded-lg bg-red-500 hover:bg-red-600 transition"
        >
          <FaArrowLeft className="h-5 w-5" />
          {isOpen && <span>Back to Home</span>}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
