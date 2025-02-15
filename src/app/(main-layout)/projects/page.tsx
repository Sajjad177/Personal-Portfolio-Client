"use client";
import Loading from "@/components/shared/Loading";
import ProjectCard from "@/components/shared/ProjectCard";
import { useGetAllProjectsQuery } from "@/redux/features/projects/projectsManagement";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Projects = () => {
  const { data, isLoading } = useGetAllProjectsQuery({
    caches: "no-cache",
  });
  const projectData = data?.data || [];

  useEffect(() => {
    AOS.init();
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen p-5">
        <Loading />
      </div>
    );

  return (
    <div data-aos="fade-right" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {projectData.length > 0 ? (
        projectData.map((project: any) => (
          <ProjectCard key={project._id} project={project} />
        ))
      ) : (
        <p>No projects available.</p>
      )}
    </div>
  );
};

export default Projects;
