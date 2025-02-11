// "use client";
// import ProjectCard from "@/components/shared/ProjectCard";
// import { useGetAllProjectsQuery } from "@/redux/features/projects/projectsManagement";

// const Projects = () => {
//   const { data, error, isLoading } = useGetAllProjectsQuery(undefined);
//   const projectData = data?.data || [];

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error fetching projects</p>;

//   return (
//     <div>
//       {projectData.length > 0 ? (
//         projectData.map((project: any) => (
//           <ProjectCard key={project._id} project={project} />
//         ))
//       ) : (
//         <p>No projects available.</p>
//       )}
//     </div>
//   );
// };

// export default Projects;
