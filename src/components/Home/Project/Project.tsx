"use client";
import ProjectCard from "@/components/shared/ProjectCard";
import { useGetAllProjectsQuery } from "@/redux/features/projects/projectsManagement";

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
          projectData.slice(0, 3).map((project: any) => (
            <ProjectCard key={project._id} project={project} />
          ))
        ) : (
          <p>No projects available.</p>
        )}
      </div>
    </div>
  );
};

export default Project;
