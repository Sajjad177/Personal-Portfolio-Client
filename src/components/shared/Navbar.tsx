"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
              <li className="relative group">
                <Link
                  href="/"
                  className="px-4 py-2 hover:text-blue-600 transition-colors duration-300"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li className="relative group">
                <Link
                  href="/projects"
                  className="px-4 py-2 hover:text-blue-600 transition-colors duration-300"
                >
                  Projects
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li className="relative group">
                <Link
                  href="/support"
                  className="px-4 py-2 hover:text-blue-600 transition-colors duration-300"
                >
                  Blogs
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Toggle Switch */}
            <div className="hidden sm:block">
              <label className="inline-flex items-center relative cursor-pointer">
                <input className="peer hidden" id="toggle" type="checkbox" />
                <div className="relative w-[110px] h-[50px] bg-gray-100 peer-checked:bg-zinc-500 rounded-full after:absolute after:content-[''] after:w-[40px] after:h-[40px] after:bg-gradient-to-r from-orange-400 to-yellow-300 peer-checked:after:from-zinc-800 peer-checked:after:to-zinc-900 after:rounded-full after:top-[5px] after:left-[5px] active:after:w-[50px] peer-checked:after:left-[65px] after:shadow-sm transition-all duration-300"></div>
                <svg
                  className="fill-white peer-checked:opacity-60 absolute w-6 h-6 left-[16px] pointer-events-none"
                  viewBox="0 0 24 24"
                >
                  <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z" />
                </svg>
                <svg
                  className="fill-gray-800 peer-checked:fill-white absolute w-6 h-6 right-[16px] pointer-events-none"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1,.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z" />
                </svg>
              </label>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/dashboard"
                className="px-4 py-2 text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300 font-medium flex items-center gap-2"
              >
                <span>Dashboard</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                href="/login"
                className="px-4 py-2 border border-gray-300 text-gray-600 hover:bg-gray-50 rounded-lg transition-all duration-300 font-medium hover:border-blue-600 hover:text-blue-600"
              >
                Login
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg
                  className={`${
                    isOpen ? "hidden" : "block"
                  } h-6 w-6 text-gray-600`}
                  fill="none"
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
                <svg
                  className={`${
                    isOpen ? "block" : "hidden"
                  } h-6 w-6 text-gray-600`}
                  fill="none"
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
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-white/95 backdrop-blur-sm border-b border-gray-100`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          <ul className="flex flex-col space-y-2 text-gray-600">
            <li>
              <Link
                href="/"
                className="block px-4 py-3 hover:bg-blue-50 rounded-lg transition-colors font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/project"
                className="block px-4 py-3 hover:bg-blue-50 rounded-lg transition-colors font-medium"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                className="block px-4 py-3 hover:bg-blue-50 rounded-lg transition-colors font-medium"
              >
                Blogs
              </Link>
            </li>
          </ul>
          <div className="pt-4 border-t border-gray-100">
            <Link
              href="/dashboard"
              className="block w-full text-center px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-md transition-all font-medium"
            >
              Dashboard
            </Link>
            <Link
              href="/login"
              className="block w-full text-center px-4 py-3 mt-2 border border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600 rounded-lg transition-all font-medium"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
