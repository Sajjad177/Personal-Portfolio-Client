"use client";

import * as React from "react";
import { Moon, Sun, Laptop2 } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggler() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative border-none shadow-md dark:shadow-slate-800 bg-white dark:bg-[#0F172A] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] transition-transform duration-300 rotate-0 scale-100 dark:-rotate-90 dark:scale-0 text-yellow-500" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] transition-transform duration-300 rotate-90 scale-0 dark:rotate-0 dark:scale-100 text-blue-400" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-36 rounded-xl bg-[#F9FAFB] dark:bg-[#0A101E] border-none shadow-lg p-2"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-all cursor-pointer  ${
            theme === "light" ? "bg-gray-200 dark:bg-gray-800" : ""
          }`}
        >
          <Sun className="h-4 w-4 text-yellow-500 cursor-pointer" /> Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-all cursor-pointer ${
            theme === "dark" ? "bg-gray-200 dark:bg-gray-800" : ""
          }`}
        >
          <Moon className="h-4 w-4 text-blue-400" /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-all cursor-pointer ${
            theme === "system" ? "bg-gray-200 dark:bg-gray-800" : ""
          }`}
        >
          <Laptop2 className="h-4 w-4 text-gray-500" /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
