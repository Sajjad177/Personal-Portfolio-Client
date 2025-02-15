"use client";

import Link from "next/link";
import ProjectCard from "@/components/shared/ProjectCard";
import { useGetAllProjectsQuery } from "@/redux/features/projects/projectsManagement";
import { Button } from "@/components/ui/button";

const Project = () => {
  const { data, isLoading } = useGetAllProjectsQuery(undefined);
  const projectData = data?.data || [];

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-12 dark:text-white text-gray-800 font-space">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {projectData.length > 0 ? (
          projectData
            .slice(0, 3)
            .map((project: any) => (
              <ProjectCard key={project._id} project={project} />
            ))
        ) : (
          <p>No projects available.</p>
        )}
      </div>
      <div className="flex justify-center mt-10">
        <Link href="/projects">
          <Button className="px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded-lg hover:bg-blue-700 transition duration-300 font-space">
            view All
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Project;
