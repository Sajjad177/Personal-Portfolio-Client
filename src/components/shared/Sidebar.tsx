"use client";
import { JSX, useState } from "react";
import Link from "next/link";
import { FiHome, FiUsers, FiChevronRight } from "react-icons/fi";
import { GoProjectTemplate } from "react-icons/go";
import { FaBloggerB } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

// Define props for NavItem
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
        className={`bg-white shadow-md h-screen fixed top-0 left-0 transition-all duration-300 ${
          isOpen ? "w-64" : "w-20"
        } overflow-hidden`}
      >
        {/* Toggle Button */}
        <button
          className="p-2 absolute right-[-1px] top-4 bg-gray-200 rounded-full shadow-md transition-transform"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiChevronRight
            className={`text-gray-600 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <div className="p-4">
          <ul className="space-y-2">
            <NavItem href="/" icon={<FiHome />} label="Home" isOpen={isOpen} />

            <NavItem
              href="/sessions"
              icon={<MdMessage />}
              label="Messages"
              isOpen={isOpen}
            />
            <NavItem
              href="/users"
              icon={<FiUsers />}
              label="Users"
              isOpen={isOpen}
            />
            <NavItem
              href="/organisations"
              icon={<GoProjectTemplate />}
              label="Projects"
              isOpen={isOpen}
            />
            <NavItem
              href="/auth"
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
      className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-all"
    >
      <span className="text-lg">{icon}</span>
      {isOpen && <span className="text-sm font-medium">{label}</span>}
    </Link>
  </li>
);

export default Sidebar;
