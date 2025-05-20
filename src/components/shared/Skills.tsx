"use client";

import SkillCard from "./SkillCard";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiMongoose,
  SiRedux,
  SiPrisma,
  SiPostgresql,
} from "react-icons/si";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const frontendSkills = [
  { name: "HTML5", Icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", Icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", Icon: FaJs, color: "text-yellow-500" },
  { name: "TypeScript", Icon: SiTypescript, color: "text-blue-600" },
  { name: "React.js", Icon: FaReact, color: "text-cyan-500" },
  { name: "Next.js", Icon: SiNextdotjs, color: "text-black dark:text-white" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-teal-500" },
];

const backendSkills = [
  { name: "Node.js", Icon: FaNodeJs, color: "text-green-600" },
  { name: "Express.js", Icon: SiExpress, color: "text-gray-500" },
  { name: "MongoDB", Icon: SiMongodb, color: "text-green-500" },
  { name: "Mongoose", Icon: SiMongoose, color: "text-gray-500" },
  { name: "Redux Toolkit", Icon: SiRedux, color: "text-purple-500" },
  { name: "Prisma ORM", Icon: SiPrisma, color: "text-indigo-600" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "text-blue-800" },
  { name: "SQL", Icon: FaDatabase, color: "text-slate-600" },
];

const Skills = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const frontendHeaderRef = useRef<HTMLHeadingElement | null>(null);
  const backendHeaderRef = useRef<HTMLHeadingElement | null>(null);
  const frontendRef = useRef<HTMLDivElement | null>(null);
  const backendRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const header = headerRef.current;
    const frontendHeader = frontendHeaderRef.current;
    const backendHeader = backendHeaderRef.current;
    const container = containerRef.current;
    const frontend = frontendRef.current;
    const backend = backendRef.current;

    if (
      !header ||
      !frontendHeader ||
      !backendHeader ||
      !container ||
      !frontend ||
      !backend
    ) {
      return;
    }

    // Animate header
    gsap.from(header, {
      opacity: 0,
      y: 70,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: header,
        start: "top 70%",
        scrub: 2,
        toggleActions: "play none none reverse",
      },
    });

    // Animate section headers
    gsap.from([frontendHeader, backendHeader], {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: container,
        start: "top 40%",
        scrub: 2,
        toggleActions: "play none none reverse",
      },
    });

    // Animate frontend skill cards
    gsap.from([...frontend.children], {
      opacity: 0,
      y: 50,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: frontend,
        start: "top 40%",
        scrub: 3,
        toggleActions: "play none none reverse",
      },
    });

    // Animate backend skill cards
    gsap.from([...backend.children], {
      opacity: 0,
      y: 50,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: backend,
        start: "top 60%",
        scrub: 3,
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  
  

  return (
    <div>
      <section ref={containerRef} className="py-16 font-space">
        <div className="container mx-auto px-4">
          <h2
            ref={headerRef}
            className="text-3xl font-bold text-center mb-12 dark:text-white text-gray-800"
          >
            My Skills
          </h2>

          <h3
            ref={frontendHeaderRef}
            className="text-2xl font-semibold dark:text-white text-gray-700 pt-10 mb-4"
          >
            Frontend Skills:
          </h3>
          <div
            ref={frontendRef}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12"
          >
            {frontendSkills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>

          <h3
            ref={backendHeaderRef}
            className="text-2xl font-semibold dark:text-white text-gray-700 mb-4"
          >
            Backend Skills:
          </h3>
          <div
            ref={backendRef}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
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
