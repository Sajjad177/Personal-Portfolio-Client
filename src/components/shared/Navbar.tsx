"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { logOut, selectCurrentUser } from "@/redux/features/auth/authSlice";
import "../style/toggle.css";

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
    <nav className="bg-white/95 sticky top-0 w-full z-50 shadow-sm backdrop-blur-sm border-b border-gray-100 font-space">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              Sajjad<span className="text-gray-800">.dev</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8 text-gray-600 font-medium text-[15px]">
              <li>
                <Link href="/" className="hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-blue-600">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-blue-600">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <label className="switch">
              <span className="sun">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g fill="#ffd43b">
                    <circle r="5" cy="12" cx="12"></circle>
                    <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
                  </g>
                </svg>
              </span>
              <span className="moon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
                </svg>
              </span>
              <input type="checkbox" className="input" />
              <span className="slider"></span>
            </label>
          </div>

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
                  className="px-4 py-2 border border-gray-300 text-gray-600 hover:bg-gray-50 rounded-lg transition-all duration-300 font-medium hover:border-red-600 hover:text-red-600"
                >
                  Logout
                </button>
              ) : (
                <Link
                  href="/login"
                  className="px-4 py-2 border border-gray-300 text-gray-600 hover:bg-gray-50 rounded-lg transition-all duration-300 font-medium hover:border-blue-600 hover:text-blue-600"
                >
                  Login
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isOpen ? (
                  <svg
                    className="h-6 w-6 text-gray-600"
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
                    className="h-6 w-6 text-gray-600"
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
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-b border-gray-100">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <ul className="flex flex-col space-y-2 text-gray-600">
              <li>
                <Link
                  href="/"
                  className="block px-4 py-3 hover:bg-blue-50 rounded-lg"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="block px-4 py-3 hover:bg-blue-50 rounded-lg"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="block px-4 py-3 hover:bg-blue-50 rounded-lg"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block px-4 py-3 hover:bg-blue-50 rounded-lg"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="pt-4 border-t border-gray-100">
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
                  className="block w-full text-center px-4 py-3 mt-2 border border-gray-300 text-gray-600 hover:border-red-600 hover:text-red-600 rounded-lg"
                >
                  Logout
                </button>
              ) : (
                <Link
                  href="/login"
                  className="block w-full text-center px-4 py-3 mt-2 border border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600 rounded-lg"
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
