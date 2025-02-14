"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { logOut, selectCurrentUser } from "@/redux/features/auth/authSlice";
import { ThemeToggler } from "./ThemeTogloer";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isAdmin = currentUser?.role === "admin";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <nav className="bg-white/95 dark:bg-gray-800 sticky top-0 w-full z-50 shadow-sm backdrop-blur-sm border-b border-gray-100 dark:border-gray-700 font-space">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              Sajjad<span className="text-gray-800 dark:text-white">.dev</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8 text-gray-600 dark:text-gray-300 font-medium text-[15px]">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <ThemeToggler />

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3">
              {isAdmin && (
                <Link
                  href="/dashboard"
                  className="px-4 py-2 text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300 font-medium"
                >
                  Dashboard
                </Link>
              )}
              {currentUser ? (
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 font-medium hover:border-red-600 hover:text-red-600"
                >
                  Logout
                </button>
              ) : (
                <Link
                  href="/login"
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 font-medium hover:border-blue-600 hover:text-blue-600"
                >
                  Login
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                {isOpen ? (
                  <svg
                    className="h-6 w-6 text-gray-600 dark:text-gray-200"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6 text-gray-600 dark:text-gray-200"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-800 backdrop-blur-sm border-b border-gray-100 dark:border-gray-700">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <ul className="flex flex-col space-y-2 text-gray-600 dark:text-gray-300">
              <li>
                <Link
                  href="/"
                  className="block px-4 py-3 hover:bg-blue-50 dark:hover:bg-blue-600 rounded-lg"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="block px-4 py-3 hover:bg-blue-50 dark:hover:bg-blue-600 rounded-lg"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="block px-4 py-3 hover:bg-blue-50 dark:hover:bg-blue-600 rounded-lg"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block px-4 py-3 hover:bg-blue-50 dark:hover:bg-blue-600 rounded-lg"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
              {isAdmin && (
                <Link
                  href="/dashboard"
                  className="block w-full text-center px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-md"
                >
                  Dashboard
                </Link>
              )}
              {currentUser ? (
                <button
                  onClick={handleLogout}
                  className="block w-full text-center px-4 py-3 mt-2 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-200 hover:border-red-600 hover:text-red-600 rounded-lg"
                >
                  Logout
                </button>
              ) : (
                <Link
                  href="/login"
                  className="block w-full text-center px-4 py-3 mt-2 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-200 hover:border-blue-600 hover:text-blue-600 rounded-lg"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
