"use client";

import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { useGetAllBlogsQuery } from "@/redux/features/blogs/blogManagement";
import { useGetAllMessagesQuery } from "@/redux/features/message/messageManagement";
import { useGetAllProjectsQuery } from "@/redux/features/projects/projectsManagement";
import { useAppSelector } from "@/redux/hook";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const ViewInDashboard = () => {
  const { data } = useGetAllBlogsQuery(undefined);
  const blogData = data?.data || [];
  const { data: project } = useGetAllProjectsQuery(undefined);
  const projectData = project?.data || [];
  const { data: message } = useGetAllMessagesQuery(undefined);
  const userData = message?.data || [];


  useEffect(() => {
    AOS.init();
  }, []);

  const progressData = [
    {
      name: "Blogs",
      progress: (blogData.length / 100) * 100,
      total: blogData.length,
      color: "text-blue-600",
    },
    {
      name: "Projects",
      progress: (projectData.length / 100) * 100,
      total: projectData.length,
      color: "text-green-600",
    },
    {
      name: "Messages",
      progress: (userData.length / 100) * 100,
      total: userData.length,
      color: "text-purple-600",
    },
  ];

  return (
    <div className="container mx-auto p-6 space-y-8 font-space">
      {/* Progress Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Progress
        </h2>
        <div
          data-aos="fade-down"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4"
        >
          {progressData.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-md bg-gray-100 dark:bg-gray-800 transition-transform hover:scale-105"
            >
              <div className="flex flex-col items-center">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <circle
                      className="text-gray-300 dark:text-gray-600"
                      strokeWidth="4"
                      stroke="currentColor"
                      fill="transparent"
                      r="16"
                      cx="18"
                      cy="18"
                    />
                    <circle
                      className={`${item.color} stroke-current`}
                      strokeWidth="4"
                      fill="transparent"
                      r="16"
                      cx="18"
                      cy="18"
                      strokeDasharray="100"
                      strokeDashoffset={100 - item.progress}
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute text-xl font-semibold">
                    {item.progress.toFixed(0)}%
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                  {item.name}
                </h3>
                <p className="text-gray-500">{item.total}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewInDashboard;
