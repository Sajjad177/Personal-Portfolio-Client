"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import {
  useGetSingleProjectQuery,
  useUpdateProjectMutation,
} from "@/redux/features/projects/projectsManagement";
import { toast } from "sonner";

export type ProjectValues = {
  title: string;
  description: string;
  liveLink: string;
  gitClientLink: string;
  gitServerLink: string;
  backendTech: string;
  frontendTech: string;
  image: File | null;
};

const UpdateProject = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { projectId } = useParams();

  const { data } = useGetSingleProjectQuery(projectId);
  const projectData = data?.data || {};

  const [updateProject] = useUpdateProjectMutation();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ProjectValues>();

  // Populate form with existing project data
  useEffect(() => {
    if (projectData) {
      setValue("title", projectData.title || "");
      setValue("description", projectData.description || "");
      setValue("liveLink", projectData.liveLink || "");
      setValue("gitClientLink", projectData.gitClientLink || "");
      setValue("gitServerLink", projectData.gitServerLink || "");
      setValue("backendTech", projectData.backendTech?.join(", ") || "");
      setValue("frontendTech", projectData.frontendTech?.join(", ") || "");
    }
  }, [projectData, setValue]);

  // Handle image preview
  const handleImagePreview = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setValue("image", file);
    }
  };

  // Submit Handler
  const onSubmit = async (data: ProjectValues) => {
    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      if (selectedFile) {
        formData.append("image", selectedFile);
      }

      const res = await updateProject({
        id: projectId,
        data: formData,
      }).unwrap();
      if (res?.success) {
        toast.success(res.message || "Project updated successfully");
        router.push("/dashboard/projects");
      } else {
        toast.error(res.message || "Failed to update project");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md mt-3 border">
      <h1 className="text-2xl font-bold text-center mb-6">Update Project</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            {...register("title", { required: "Title is required" })}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
          />
          {errors.title && (
            <span className="text-red-500 text-sm">{errors.title.message}</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            rows={4}
            {...register("description", {
              required: "Description is required",
            })}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
          />
          {errors.description && (
            <span className="text-red-500 text-sm">
              {errors.description.message}
            </span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Backend Technologies (comma-separated)
          </label>
          <input
            type="text"
            {...register("backendTech", {
              required: "Backend technologies are required",
            })}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
          />
          {errors.backendTech && (
            <span className="text-red-500 text-sm">
              {errors.backendTech.message}
            </span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Frontend Technologies (comma-separated)
          </label>
          <input
            type="text"
            {...register("frontendTech", {
              required: "Frontend technologies are required",
            })}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
          />
          {errors.frontendTech && (
            <span className="text-red-500 text-sm">
              {errors.frontendTech.message}
            </span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Live Link
          </label>
          <input
            type="text"
            {...register("liveLink", { required: "Live link is required" })}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
          />
          {errors.liveLink && (
            <span className="text-red-500 text-sm">
              {errors.liveLink.message}
            </span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Git Client Link
          </label>
          <input
            type="text"
            {...register("gitClientLink", {
              required: "Git client link is required",
            })}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Git Server Link
          </label>
          <input
            type="text"
            {...register("gitServerLink", {
              required: "Git server link is required",
            })}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
            {...register("image")}
            onChange={handleImagePreview}
          />
        </div>

        {selectedFile ? (
          <div className="mt-4 flex justify-center">
            <Image
              src={URL.createObjectURL(selectedFile)}
              alt="Preview"
              width={120}
              height={120}
              className="w-32 h-32 object-cover rounded-md"
            />
          </div>
        ) : projectData.image ? (
          <div className="mt-4 flex justify-center">
            <Image
              src={projectData.image}
              alt="Existing Preview"
              width={120}
              height={120}
              className="w-32 h-32 object-cover rounded-md"
            />
          </div>
        ) : null}

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700"
        >
          Update Project
        </button>
      </form>
    </div>
  );
};

export default UpdateProject;
