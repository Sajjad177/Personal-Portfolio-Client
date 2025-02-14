"use client";

import SkillCard from "./SkillCard";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiMongoose,
  SiRedux
} from "react-icons/si";

const frontendSkills = [
  { name: "HTML5", Icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", Icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", Icon: FaJs, color: "text-yellow-500" },
  { name: "TypeScript", Icon: SiTypescript, color: "text-blue-600" },
  { name: "React.js", Icon: FaReact, color: "text-cyan-500" },
  { name: "Next.js", Icon: SiNextdotjs, color: "text-black" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-teal-500" },
];

const backendSkills = [
  { name: "Node.js", Icon: FaNodeJs, color: "text-green-600" },
  { name: "Express.js", Icon: SiExpress, color: "text-gray-500" },
  { name: "MongoDB", Icon: SiMongodb, color: "text-green-500" },
  { name: "Mongoose", Icon: SiMongoose, color: "text-gray-500" },
  { name: "Redux", Icon: SiRedux, color: "text-pink-600" },
];

const Skills = () => {
  return (
    <div>
      <section className="py-16 font-space ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white text-gray-800">
            My Skills
          </h2>

          {/* Frontend Skills */}
          <h3 className="text-2xl font-semibold dark:text-white text-gray-700 mb-4">
            Frontend Skills:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {frontendSkills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>

          {/* Backend Skills */}
          <h3 className="text-2xl font-semibold dark:text-white text-gray-700 mb-4">
            Backend Skills:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {backendSkills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
