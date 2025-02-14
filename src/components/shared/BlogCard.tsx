import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BlogProps {
  blog: {
    _id: string;
    title: string;
    content: string;
    image: string;
    category: string;
  };
}

const BlogCard: React.FC<BlogProps> = ({ blog }) => {
  return (
    <Card className="max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto rounded-xl shadow-lg overflow-hidden bg-white dark:bg-gray-900 transition-transform duration-300 hover:scale-105">
      {/* Blog Image */}
      <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80">
        <Image
          src={blog.image}
          alt={blog.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Blog Content */}
      <CardContent className="p-5">
        {/* Category Badge */}
        <Badge className="text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full">
          {blog.category}
        </Badge>

        {/* Blog Title */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-2 text-gray-900 dark:text-white">
          {blog.title}
        </h2>

        {/* Blog Content */}
        <p className="text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">
          {blog.content}
        </p>

        {/* Read More Button */}
        <Link href={`/blogs/${blog._id}`} passHref>
          <Button variant="default" className="mt-4 w-full bg-blue-600 hover:bg-blue-700">
            Read More
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
