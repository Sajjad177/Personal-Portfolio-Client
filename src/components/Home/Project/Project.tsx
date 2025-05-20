"use client";

import Link from "next/link";
import ProjectCard from "@/components/shared/ProjectCard";
import { useGetAllProjectsQuery } from "@/redux/features/projects/projectsManagement";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CustomButton from "@/components/shared/button/Button";
import Loading from "@/components/shared/Loading";

const Project = () => {
  const { data, isLoading } = useGetAllProjectsQuery(undefined);
  const projectData = data?.data || [];

  useEffect(() => {
    AOS.init();
  }, []);

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen p-5">
        <Loading />
      </div>
    );

  return (
    <div>
      <h2
        data-aos="fade-up"
        className="text-3xl font-bold text-center mb-12 dark:text-white text-gray-800 font-space"
      >
        Projects
      </h2>
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
      >
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
      <div data-aos="fade-up" className="flex justify-center mt-10">
        <Link href="/projects">
          <CustomButton>View All</CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default Project;
