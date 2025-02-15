"use client";

import BlogCard from "@/components/shared/BlogCard";
import { Button } from "@/components/ui/button";
import { useGetAllBlogsQuery } from "@/redux/features/blogs/blogManagement";
import Link from "next/link";

const Blog = () => {
  const { data } = useGetAllBlogsQuery(undefined);
  const blogData = data?.data || [];


  return (
    <div>
      <h2 className="text-3xl my-14 font-bold text-center mb-12 dark:text-white text-gray-800 font-space">
        Blogs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {blogData.length > 0 ? (
          blogData.map((blog: any) => <BlogCard key={blog._id} blog={blog} />)
        ) : (
          <p>No projects available.</p>
        )}
      </div>
      <div className="flex justify-center mt-10">
        <Link href="/blogs">
          <Button className="px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded-lg hover:bg-blue-700 transition duration-300 font-space">
            view All
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
