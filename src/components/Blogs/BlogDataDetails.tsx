"use client";

import { useGetSingleBlogQuery } from "@/redux/features/blogs/blogManagement";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const BlogDataDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetSingleBlogQuery(id);
  const blogData = data?.data || {};

  useEffect(() => {
    AOS.init();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen p-5">
        <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[60%]">
          <Skeleton className="h-96 w-full rounded-lg" />
          <Skeleton className="h-6 w-1/3 mt-6" />
          <Skeleton className="h-8 w-3/4 mt-2" />
          <Skeleton className="h-4 w-full mt-4" />
          <Skeleton className="h-4 w-5/6 mt-2" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 mt-10 text-lg">
        Error fetching blog details
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-5 font-space">
      <Card className="w-full sm:w-[90%] md:w-[80%] lg:w-[60%] p-6 sm:p-10 rounded-xl shadow-lg bg-white dark:bg-gray-900 transition-transform duration-300 hover:scale-105">
        {/* Blog Image */}
        <div
          data-aos="fade-up"
          className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src={blogData.image}
            alt={blogData.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Blog Content */}
        <CardContent className="mt-6 space-y-4">
          {/* Category Badge */}
          <Badge
            data-aos="fade-bottomtop"
            className="text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full"
          >
            {blogData.category}
          </Badge>

          {/* Blog Title */}
          <h1
            data-aos="fade-left"
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
          >
            {blogData.title}
          </h1>

          {/* Blog Content */}
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {blogData.content}
          </p>
        </CardContent>

        {/* Back Button */}
        <div className="mt-6 flex justify-center">
          <Button
            variant="default"
            className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
            onClick={() => window.history.back()}
          >
            ⬅ Back
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default BlogDataDetails;
