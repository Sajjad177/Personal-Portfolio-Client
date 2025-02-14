"use client";
import {
  useDeleteBlogMutation,
  useGetAllBlogsQuery,
} from "@/redux/features/blogs/blogManagement";
import Image from "next/image";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "sonner";

const ViewBlog = () => {
  const { data } = useGetAllBlogsQuery(undefined);
  const blogData = data?.data || [];
  const [deleteBlog] = useDeleteBlogMutation();

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteBlog(id).unwrap();
      if (res?.success) {
        toast.success(res.message || "Blog deleted successfully");
      } else {
        toast.error(res.message || "Failed to delete blog");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 font-space mt-20">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white dark:bg-gray-800 shadow-md rounded-lg">
          <thead className="bg-gray-100 dark:bg-gray-700">
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
                <td className="px-4 py-2 text-sm text-gray-700 dark:text-white">
                  {blog.title}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700 dark:text-white">
                  {blog.category}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700 dark:text-white">
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
