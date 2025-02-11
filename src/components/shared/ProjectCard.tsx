"use client";

import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }: any) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-lg duration-300">
      {/* Project Image */}
      <div className="relative w-full h-60 md:h-72 lg:h-80">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl"
          />
        ) : (
          <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
            <span className="text-gray-500">No Image Available</span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-5 flex flex-col">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
          {project.title || "Untitled Project"}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mt-2 line-clamp-3">
          {project.description || "No description available."}
        </p>

        {/* View Button */}
        <div className="mt-4">
          <Link
            href={`/projects/${project._id}`}
            className="inline-block text-sm md:text-base font-medium text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
          >
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
