"use client";

import { useGetSingleProjectQuery } from "@/redux/features/projects/projectsManagement";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProjectDataDetails = ({ id }: { id: string }) => {
  //   const { id } = useParams();
  console.log(id);

  const { data } = useGetSingleProjectQuery(id);
  const projectData = data?.data || {};

  useEffect(() => {
    AOS.init();
  }, []);

  // Check if the image URL exists
  const imageUrl =
    projectData.image && projectData.image !== "" ? projectData.image : null;

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-12 font-space">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Project Image Section */}
          <Card className="rounded-xl overflow-hidden ">
            <div
              data-aos="fade-right"
              className="relative w-full h-64 md:h-80 lg:h-96"
            >
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={projectData.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg transition-transform duration-500 hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex justify-center items-center text-gray-600">
                  No Image Available
                </div>
              )}
            </div>
          </Card>

          {/* Project Details Section */}
          <Card className="shadow-md dark:shadow-lg">
            <CardContent className="p-6 space-y-6">
              <h1
                data-aos="fade-left"
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white"
              >
                {projectData.title}
              </h1>

              <p
                data-aos="fade-left"
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                {projectData.description}
              </p>

              {/* Tech Stack */}
              <div className="space-y-4">
                <div>
                  <h2
                    data-aos="fade-left"
                    className="text-xl font-semibold text-gray-800 dark:text-gray-200"
                  >
                    Backend Technologies:
                  </h2>
                  <div
                    data-aos="fade-left"
                    className="flex flex-wrap gap-3 mt-2"
                  >
                    {projectData.backendTech?.map(
                      (tech: string, index: number) => (
                        <Badge
                          key={index}
                          className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-4 py-1 text-sm"
                        >
                          {tech}
                        </Badge>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <h2
                    data-aos="fade-left"
                    className="text-xl font-semibold text-gray-800 dark:text-gray-200"
                  >
                    Frontend Technologies:
                  </h2>
                  <div
                    data-aos="fade-left"
                    className="flex flex-wrap gap-3 mt-2"
                  >
                    {projectData.frontendTech?.map(
                      (tech: string, index: number) => (
                        <Badge
                          key={index}
                          className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-4 py-1 text-sm"
                        >
                          {tech}
                        </Badge>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Project Links */}
              <div data-aos="fade-left" className="flex flex-wrap gap-4">
                {projectData.liveLink && (
                  <Link
                    href={projectData.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Live Project
                    </Button>
                  </Link>
                )}
                {projectData.gitClientLink && (
                  <Link
                    href={projectData.gitClientLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="secondary">Client GitHub</Button>
                  </Link>
                )}
                {projectData.gitServerLink && (
                  <Link
                    href={projectData.gitServerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="secondary">Server GitHub</Button>
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ProjectDataDetails;
