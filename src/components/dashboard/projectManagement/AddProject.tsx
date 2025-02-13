"use client";
import { useCreateProjectMutation } from "@/redux/features/projects/projectsManagement";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export type BlogValues = {
  title: string;
  description: string;
  liveLink: string;
  gitClientLink: string;
  gitServerLink: string;
  backendTech: string[];
  frontendTech: string[];
  image: File | null;
};

const AddProject = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [backendTech, setBackendTech] = useState<string[]>([]);
  const [frontendTech, setFrontendTech] = useState<string[]>([]);

  const [addProject] = useCreateProjectMutation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BlogValues>();

  // Handle adding backend tech
  const handleBackendTechChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setBackendTech(value.split(",").map((tech) => tech.trim()));
    setValue(
      "backendTech",
      value.split(",").map((tech) => tech.trim())
    );
  };

  // Handle adding frontend tech
  const handleFrontendTechChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setFrontendTech(value.split(",").map((tech) => tech.trim()));
    setValue(
      "frontendTech",
      value.split(",").map((tech) => tech.trim())
    );
  };

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
      formData.append("data", JSON.stringify(data));
      if (selectedFile) {
        formData.append("image", selectedFile);
      }

      const res = await addProject(formData).unwrap();
      if (res?.success) {
        toast.success(res.message || "Project created successfully");
        setIsOpen(false);
      } else {
        toast.error(res.message || "Failed to create project");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
      >
        Add Project
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute text-3xl top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>

            <h1 className="text-2xl font-bold text-center mb-6">Add Project</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <input
                type="text"
                {...register("title", { required: "Title is required" })}
                placeholder="Title"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
              />
              {errors.title && (
                <span className="text-red-500 text-sm">
                  {errors.title.message}
                </span>
              )}

              <textarea
                {...register("description", {
                  required: "Description is required",
                })}
                placeholder="Description"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
              />
              {errors.description && (
                <span className="text-red-500 text-sm">
                  {errors.description.message}
                </span>
              )}

              <input
                type="text"
                value={backendTech.join(", ")}
                onChange={handleBackendTechChange}
                placeholder="Backend Technologies (comma-separated)"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
              />
              {errors.backendTech && (
                <span className="text-red-500 text-sm">
                  {errors.backendTech.message}
                </span>
              )}

              <input
                type="text"
                value={frontendTech.join(", ")}
                onChange={handleFrontendTechChange}
                placeholder="Frontend Technologies (comma-separated)"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
              />
              {errors.frontendTech && (
                <span className="text-red-500 text-sm">
                  {errors.frontendTech.message}
                </span>
              )}

              <input
                type="text"
                {...register("liveLink", { required: "Live Link is required" })}
                placeholder="Live Link"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
              />
              {errors.liveLink && (
                <span className="text-red-500 text-sm">
                  {errors.liveLink.message}
                </span>
              )}

              <input
                type="text"
                {...register("gitClientLink", {
                  required: "Git Client Link is required",
                })}
                placeholder="Git Client Link"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                {...register("gitServerLink", {
                  required: "Git Server Link is required",
                })}
                placeholder="Git Server Link"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="file"
                accept="image/*"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                {...register("image")}
                onChange={handleImagePreview}
              />

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

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700"
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

export default AddProject;
