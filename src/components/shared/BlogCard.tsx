import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }: any) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-md mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-3xl mt-10 font-space">
      {/* Blog Image */}
      <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80">
        <Image
          src={blog.image}
          alt={blog.title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      {/* Blog Content */}
      <div className="p-5">
        <span className="text-sm text-gray-500 uppercase">{blog.category}</span>
        <h2 className="text-xl font-semibold mt-2 text-gray-900">
          {blog.title}
        </h2>
        <p className="text-gray-600 mt-2">{blog.content}</p>

        {/* Read More Button */}
        <Link href={`/blogs/${blog._id}`}>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
