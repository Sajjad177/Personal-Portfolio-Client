"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

const ProjectCard = ({ project }: any) => {
  return (
    <Card className="rounded-xl overflow-hidden shadow-md dark:shadow-lg transition-transform hover:scale-105 hover:shadow-xl duration-300 dark:bg-gray-800 bg-white font-space">
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
          <Skeleton className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
            <span className="text-gray-500">No Image Available</span>
          </Skeleton>
        )}
      </div>

      {/* Project Content */}
      <CardContent className="p-5 flex flex-col">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
          {project.title || "Untitled Project"}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mt-2 line-clamp-3">
          {project.description || "No description available."}
        </p>
      </CardContent>

      {/* View Button */}
      <CardFooter className="p-5 pt-0">
        <Button
          asChild
          className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          <Link href={`/projects/${project._id}`}>View Project</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
