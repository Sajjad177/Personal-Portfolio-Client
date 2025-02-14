"use client";
import { JSX, useState } from "react";
import Link from "next/link";
import { FiHome, FiChevronRight } from "react-icons/fi";
import { GoProjectTemplate } from "react-icons/go";
import { FaBloggerB } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

interface NavItemProps {
  href: string;
  icon: JSX.Element;
  label: string;
  isOpen: boolean;
}

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`bg-white dark:bg-gray-800 dark:text-white shadow-md min-h-screen fixed top-0 left-0 transition-all duration-300 ease-in-out ${
          isOpen ? "w-48" : "w-20"
        } overflow-hidden border-r dark:border-gray-700 border-gray-300 z-10`}
      >
        {/* Toggle Button */}
        <button
          className="p-2 absolute right-[-1px] top-4 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition-transform"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiChevronRight
            className={`text-gray-600 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <div className="p-4 pt-10">
          <ul className="space-y-4">
            <NavItem href="/" icon={<FiHome />} label="Home" isOpen={isOpen} />

            <NavItem
              href="/dashboard/message"
              icon={<MdMessage />}
              label="Messages"
              isOpen={isOpen}
            />
            <NavItem
              href="/dashboard/projects"
              icon={<GoProjectTemplate />}
              label="Projects"
              isOpen={isOpen}
            />
            <NavItem
              href="/dashboard/blogs"
              icon={<FaBloggerB />}
              label="Blogs"
              isOpen={isOpen}
            />
          </ul>
        </div>
      </aside>
    </div>
  );
};

// Reusable Sidebar Item
const NavItem: React.FC<NavItemProps> = ({ href, icon, label, isOpen }) => (
  <li>
    <Link
      href={href}
      className="flex items-center gap-4 p-3 rounded-lg dark:hover:bg-gray-700 text-gray-700 dark:text-white hover:bg-gray-100 transition-all duration-200 ease-in-out"
    >
      <span className="text-xl">{icon}</span>
      {isOpen && <span className="text-base font-semibold">{label}</span>}
    </Link>
  </li>
);

export default Sidebar;
