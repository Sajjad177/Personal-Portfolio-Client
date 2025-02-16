"use client";
import { useAddBlogMutation } from "@/redux/features/blogs/blogManagement";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export type BlogValues = {
  title: string;
  content: string;
  category: string;
  image: File | null;
};

const AddBlog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [addBlog] = useAddBlogMutation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BlogValues>();

  // Handle image preview and file selection
  const handleImagePreview = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setValue("image", file);
    }
  };

  const onSubmit = async (data: BlogValues) => {
    try {
      const formData = new FormData();
      formData.append(
        "data",
        JSON.stringify({
          title: data.title,
          content: data.content,
          category: data.category,
          image: selectedFile,
        })
      );

      if (selectedFile) {
        formData.append("image", selectedFile);
      }

      const res = await addBlog(formData).unwrap();
      if (res?.success) {
        toast.success(res.message || "Blog created successfully");
        setIsOpen(false);
      } else {
        toast.error(res.message || "Failed to create blog");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
      >
        Add Blog
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
          <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute text-3xl top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>

            <h1 className="text-2xl font-bold text-center mb-6">Add Blog</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Title Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                  Title:
                </label>
                <input
                  type="text"
                  {...register("title", { required: "Title is required" })}
                  className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600"
                />
                {errors.title && (
                  <span className="text-red-500 text-sm">
                    {errors.title.message}
                  </span>
                )}
              </div>

              {/* Content Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                  Content:
                </label>
                <textarea
                  rows={4}
                  {...register("content", { required: "Content is required" })}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md"
                />
                {errors.content && (
                  <span className="text-red-500 text-sm">
                    {errors.content.message}
                  </span>
                )}
              </div>

              {/* Category Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                  Category:
                </label>
                <select
                  {...register("category", {
                    required: "Category is required",
                  })}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md"
                >
                  <option value="">Select a category</option>
                  <option value="tech">Tech</option>
                  <option value="programming">Programming</option>
                  <option value="fashion">Fashion</option>
                  <option value="lifestyle">Lifestyle</option>
                </select>
                {errors.category && (
                  <span className="text-red-500 text-sm">
                    {errors.category.message}
                  </span>
                )}
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                  Upload Image:
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full p-3 "
                  {...register("image")}
                  onChange={handleImagePreview}
                />
              </div>

              {/* Image Preview */}
              {selectedFile && (
                <div className="mt-4 flex justify-center">
                  <Image
                    src={URL.createObjectURL(selectedFile)}
                    alt="Preview"
                    width={320}
                    height={320}
                    className="w-32 h-32 object-cover rounded-md"
                  />
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddBlog;
