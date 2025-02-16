import ProjectDataDetails from "@/components/Projects/ProjectDataDetails";
import { Metadata } from "next";


export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const projectTitle = `Project-${params.id}`;

  return {
    title: `Sajjad's Portfolio | ${projectTitle}`,
    description: `Details of ${projectTitle}`,
  };
}

const ProjectDetails = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <ProjectDataDetails id={params.id} />
    </div>
  );
};

export default ProjectDetails;
