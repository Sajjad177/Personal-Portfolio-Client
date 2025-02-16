"use client";

import BlogCard from "@/components/shared/BlogCard";
import { Button } from "@/components/ui/button";
import { useGetAllBlogsQuery } from "@/redux/features/blogs/blogManagement";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CustomeButton from "@/components/shared/button/Button";
const Blog = () => {
  const { data } = useGetAllBlogsQuery(undefined);
  const blogData = data?.data || [];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <h2
        data-aos="fade-up delay-300 duration-300"
        className="text-3xl my-14 font-bold text-center mb-12 dark:text-white text-gray-800 font-space"
      >
        Blogs
      </h2>
      <div
        data-aos="fade-up delay-200 duration-300"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
      >
        {blogData.length > 0 ? (
          blogData
            .slice(0, 3)
            ?.map((blog: any) => <BlogCard key={blog._id} blog={blog} />)
        ) : (
          <p>No projects available.</p>
        )}
      </div>
      <div data-aos="fade-up delay-300" className="flex justify-center mt-10">
        <Link href="/blogs">
          <CustomeButton>View All </CustomeButton>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
