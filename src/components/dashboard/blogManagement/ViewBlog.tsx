"use client";
import { useGetAllBlogsQuery } from "@/redux/features/blogs/blogManagement";
import Image from "next/image";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const ViewBlog = () => {
  const { data } = useGetAllBlogsQuery(undefined);
  const blogData = data?.data || [];

  const handleDelete = (id) => {
    console.log("Delete blog with ID:", id);
    // You can implement the delete functionality here
  };

  return (
    <div className="container mx-auto px-4 py-6 font-space mt-20">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-lg text-gray-700 font-semibold">
                Image
              </th>
              <th className="px-4 py-2 text-left text-lg font-semiboldtext-gray-700">
                Title
              </th>
              <th className="px-4 py-2 text-left text-lg font-semiboldtext-gray-700">
                Category
              </th>
              <th className="px-4 py-2 text-left text-lg font-semiboldtext-gray-700">
                Date
              </th>
              <th className="px-4 py-2 text-left text-lg font-semiboldtext-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {blogData.map((blog: any) => (
              <tr key={blog._id} className="border-b">
                <td className="px-4 py-2">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={50}
                    height={50}
                    className="w-12 h-12 object-cover rounded-full"
                  />
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {blog.title}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {blog.category}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {new Date(blog.createdAt).toLocaleString()}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700 flex gap-3">
                  <Link href={`/dashboard/blogs/${blog._id}`}>
                    <button className="text-indigo-600 hover:text-indigo-800 text-3xl">
                      <CiEdit />
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="text-red-600 hover:text-red-800 text-3xl"
                  >
                    <MdDeleteOutline />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewBlog;
