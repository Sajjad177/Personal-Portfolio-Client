"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import {
  useGetSingleBlogQuery,
  useUpdateBlogMutation,
} from "@/redux/features/blogs/blogManagement";
import { toast } from "sonner";

const UpdateBlog = () => {
  const { blogId } = useParams();
  const router = useRouter();
  const { data } = useGetSingleBlogQuery(blogId);
  const blogData = data?.data || {};
  const [updateBlog] = useUpdateBlogMutation();
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  type BlogFormValues = {
    title: string;
    content: string;
    category: string;
    image: File | null;
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BlogFormValues>();

  useEffect(() => {
    if (blogData) {
      setValue("title", blogData.title || "");
      setValue("content", blogData.content || "");
      setValue("category", blogData.category || "");
      setPreviewImage(blogData.image || null);
    }
  }, [blogData, setValue]);

  // Handle image preview and file selection
  const handleImagePreview = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      // Preview the selected image
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  // Submit Form
  const onSubmit: SubmitHandler<BlogFormValues> = async (data) => {
    try {
      const formData = new FormData();
      formData.append(
        "data",
        JSON.stringify({
          title: data.title,
          content: data.content,
          category: data.category,
          image: selectedFile ? "" : blogData.image,
        })
      );
      // Append new image if selected
      if (selectedFile) {
        formData.append("image", selectedFile);
      }

      const res = await updateBlog({ id: blogId, data: formData }).unwrap();
      if (res?.success) {
        toast.success(res.message || "Blog updated successfully");
        router.push("/dashboard/blogs");
      } else {
        toast.error(res.message || "Failed to update blog");
      }
    } catch (error) {
      console.error("Update Error:", error);
      toast.error("Failed to update blog");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg font-space mt-20 border">
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
        Update Blog
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Title Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-white">
            Title
          </label>
          <input
            type="text"
            {...register("title", { required: "Title is required" })}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md"
          />
          {errors.title && (
            <span className="text-red-500 text-sm">{errors.title.message}</span>
          )}
        </div>

        {/* Content Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-white">
            Content
          </label>
          <textarea
            rows={6}
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
            Category
          </label>
          <select
            {...register("category", { required: "Category is required" })}
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

        {/* Image Upload Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-white">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            className="w-full p-3 "
            onChange={handleImagePreview}
          />
        </div>

        {/* Image Preview */}
        {previewImage && (
          <div className="mt-4">
            <Image
              src={previewImage}
              alt="Preview"
              width={320}
              height={320}
              className="w-32 h-32 object-cover rounded-md mx-auto"
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default UpdateBlog;
