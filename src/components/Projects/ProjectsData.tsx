"use client";

import Loading from "@/components/shared/Loading";
import ProjectCard from "@/components/shared/ProjectCard";
import { useGetAllProjectsQuery } from "@/redux/features/projects/projectsManagement";

const ProjectsData = () => {
  const { data, isLoading } = useGetAllProjectsQuery(undefined);
  const projectData = data?.data || [];

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen p-5">
        <Loading />
      </div>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {projectData.length > 0 ? (
        projectData.map((project : any) => (
          <ProjectCard key={project._id} project={project} />
        ))
      ) : (
        <p>No projects available.</p>
      )}
    </div>
  );
};

export default ProjectsData;
