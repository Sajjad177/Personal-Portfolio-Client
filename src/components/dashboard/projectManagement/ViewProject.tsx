"use client";

import { useGetAllProjectsQuery } from "@/redux/features/projects/projectsManagement";
import Image from "next/image";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const ViewProject = () => {
  const { data } = useGetAllProjectsQuery(undefined);
  const projectData = data?.data || [];
  console.log(projectData);

  const handleDelete = async (id: string) => {
    console.log(id);
  };

  return (
    <div className="container mx-auto px-4 py-6 mt-20">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg border border-gray-200">
          <thead className="bg-gray-100">
            <tr className="text-gray-700">
              <th className="px-4 py-3 text-left text-lg font-semibold">
                Image
              </th>
              <th className="px-4 py-3 text-left text-lg font-semibold">
                Title
              </th>
              <th className="px-4 py-3 text-left text-lg font-semibold">
                Description
              </th>
              <th className="px-4 py-3 text-left text-lg font-semibold">
                Live Link
              </th>
              <th className="px-4 py-3 text-left text-lg font-semibold">
                Git Client
              </th>
              <th className="px-4 py-3 text-left text-lg font-semibold">
                Git Server
              </th>
              <th className="px-4 py-3 text-left text-lg font-semibold">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {projectData.map((project: any) => (
              <tr key={project._id} className="border-b">
                {/* ✅ Image */}
                <td className="px-4 py-3">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={60}
                      height={60}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  ) : (
                    <span className="text-gray-400">No Image</span>
                  )}
                </td>

                {/* ✅ Title */}
                <td className="px-4 py-3 text-sm font-semibold">
                  {project.title}
                </td>

                {/* ✅ Description */}
                <td className="px-4 py-3 text-sm text-gray-700 max-w-xs truncate">
                  {project.description || "No description available"}
                </td>

                {/* ✅ Live Link (Check if exists) */}
                <td className="px-4 py-3 text-sm text-blue-600">
                  {project.liveLink ? (
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      className="hover:underline"
                    >
                      Live Demo
                    </Link>
                  ) : (
                    <span className="text-gray-400">Not Available</span>
                  )}
                </td>

                {/* ✅ Git Client Link */}
                <td className="px-4 py-3 text-sm text-green-600">
                  {project.gitClientLink ? (
                    <Link
                      href={project.gitClientLink}
                      target="_blank"
                      className="hover:underline"
                    >
                      Client Code
                    </Link>
                  ) : (
                    <span className="text-gray-400">Not Available</span>
                  )}
                </td>

                {/* ✅ Git Server Link */}
                <td className="px-4 py-3 text-sm text-red-600">
                  {project.gitServerLink ? (
                    <Link
                      href={project.gitServerLink}
                      target="_blank"
                      className="hover:underline"
                    >
                      Server Code
                    </Link>
                  ) : (
                    <span className="text-gray-400">Not Available</span>
                  )}
                </td>

                {/* ✅ Actions */}
                <td className="px-4 py-3 flex gap-3">
                  <Link href={`/dashboard/projects/${project._id}`}>
                    <button className="text-indigo-600 hover:text-indigo-800 text-2xl">
                      <CiEdit />
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(project._id)}
                    className="text-red-600 hover:text-red-800 text-2xl"
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

export default ViewProject;
