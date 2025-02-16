"use client";

import BlogCard from "@/components/shared/BlogCard";
import { useGetAllBlogsQuery } from "@/redux/features/blogs/blogManagement";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const BlogsData = () => {
  const { data } = useGetAllBlogsQuery(undefined);
  const blogData = data?.data || [];

  useEffect(() => {
    AOS.init();
  });

  return (
    <div
      data-aos="fade-right"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
    >
      {blogData.length > 0 ? (
        blogData.map((blog: any) => <BlogCard key={blog._id} blog={blog} />)
      ) : (
        <p>No projects available.</p>
      )}
    </div>
  );
};

export default BlogsData;
