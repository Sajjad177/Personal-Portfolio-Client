"use client";

import { useGetSingleBlogQuery } from "@/redux/features/blogs/blogManagement";
import { useParams } from "next/navigation";
import Image from "next/image";

const BlogDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetSingleBlogQuery(id);
  const blogData = data?.data || {};

  if (isLoading) {
    return (
      <div className="text-center text-lg text-gray-600 mt-10">Loading...</div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 mt-10">
        Error fetching blog details
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-5 sm:p-10 font-space">
      {/* Blog Image */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={blogData.image}
          alt={blogData.title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      {/* Blog Content */}
      <div className="mt-6">
        <span className="text-sm text-gray-500 uppercase">
          {blogData.category}
        </span>
        <h1 className="text-3xl font-bold text-gray-900 mt-2">
          {blogData.title}
        </h1>
        <p className="text-gray-700 mt-4 leading-relaxed">{blogData.content}</p>
      </div>

      {/* Back Button */}
      <div className="mt-6">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          onClick={() => window.history.back()}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default BlogDetails;
