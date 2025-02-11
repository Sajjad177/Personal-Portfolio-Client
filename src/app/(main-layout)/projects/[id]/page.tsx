"use client";

import { useGetSingleProjectQuery } from "@/redux/features/projects/projectsManagement";
import Image from "next/image";
import { useParams } from "next/navigation";

const ProjectDetails = () => {
  const { id } = useParams();
  const { data } = useGetSingleProjectQuery(id);
  const projectData = data?.data || {};

  // Check if the image URL exists and is not empty
  const imageUrl =
    projectData.image && projectData.image !== "" ? projectData.image : null;

  return (
    <div className="max-w-7xl mx-auto p-6 font-space">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left section: Image */}
        <div className="flex justify-center items-center shadow-lg rounded-xl overflow-hidden">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={projectData.title}
              className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-105"
              width={600} // Specify width to avoid layout shift
              height={400} // Specify height to avoid layout shift
            />
          ) : (
            <div className="w-full h-96 bg-gray-300 rounded-lg flex justify-center items-center text-gray-600">
              No Image Available
            </div>
          )}
        </div>

        {/* Right section: Project details */}
        <div className="space-y-8">
          {/* Title */}
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            {projectData.title}
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-700 leading-relaxed">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Backend Technologies:
              </h2>
              <div className="flex flex-wrap gap-4 mt-2">
                {projectData.backendTech?.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mt-6">
                Frontend Technologies:
              </h2>
              <div className="flex flex-wrap gap-4 mt-2">
                {projectData.frontendTech?.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-800 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-green-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-6 mt-8">
            <a
              href={projectData.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md transition-transform duration-300 hover:bg-blue-700 hover:scale-105"
            >
              View Live Project
            </a>
            <a
              href={projectData.gitClientLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gray-800 text-white font-semibold text-lg rounded-lg shadow-md transition-transform duration-300 hover:bg-gray-900 hover:scale-105"
            >
              Client GitHub
            </a>
            <a
              href={projectData.gitServerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gray-800 text-white font-semibold text-lg rounded-lg shadow-md transition-transform duration-300 hover:bg-gray-900 hover:scale-105"
            >
              Server GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
