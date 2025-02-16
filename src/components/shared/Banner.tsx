"use client";
import Image from "next/image";
import { Download } from "lucide-react";
import profile from "../../../public/Images/profile.jpg";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomButton from "./button/Button";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const textRefOne = useRef<HTMLParagraphElement | null>(null);
  const textRefTwo = useRef<HTMLHeadingElement | null>(null);
  const nameRef = useRef<HTMLHeadingElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useGSAP(() => {
    const timeline = gsap.timeline({ delay: 0.5 });

    // Animate job title
    timeline.from(textRefOne.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });

    // Animate "I'm"
    timeline.from(
      textRefTwo.current,
      {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power4.out",
      },
      "-=0.3"
    );

    // Typing effect for name
    const fullName = "Sajjad Hossain";
    let currentText = "";
    const nameElement = nameRef.current;

    if (nameElement) {
      gsap.to(
        { progress: 0 },
        {
          progress: 1,
          duration: fullName.length * 0.2,
          delay: 1.5,
          onUpdate: function () {
            const progress = this.progress() as number;
            const index = Math.floor(progress * fullName.length);
            currentText = fullName.substring(0, index);
            if (nameElement) {
              nameElement.textContent = currentText;
            }
          },
          ease: "none",
        }
      );
    }

    // Animate paragraph
    gsap.from(paraRef.current, {
      opacity: 0,
      y: 50,
      delay: 2,
      duration: 1,
      ease: "power3.out",
      filter: "blur(5px)",
    });

    // Animate image
    gsap.from(imageRef.current, {
      scale: 0.8,
      opacity: 0,
      rotate: 10,
      duration: 2,
      ease: "elastic.out(1, 0.5)",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <div>
      <div className="relative font-space">
        <div className="lg:px-8 mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left Column */}
            <div className="flex flex-col justify-center">
              <p ref={textRefOne} className="text-lg mb-4">
                Full Stack Web Developer
              </p>
              <h1
                ref={textRefTwo}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-2"
              >
                {"I'm"}
              </h1>
              <h2
                ref={nameRef}
                className="text-5xl sm:text-6xl dark:text-white lg:text-6xl font-bold leading-tight text-transparent [-webkit-text-stroke:1px_black] mb-4"
              >
                {/* GSAP will update this dynamically */}
              </h2>
              <p ref={paraRef} className="text-lg mb-8">
                Creating appealing and responsive websites, optimizing
                performance, and ensuring the website meets client needs and
                industry standards. I quickly identify and solve problems to
                ensure seamless and efficient website performance.
              </p>

              <div className="w-44">
                <a
                  href="https://drive.google.com/file/d/1jfRs2Cx7483JQzvOFr1ENTWlpErY6wKG/view?usp=sharing"
                  download="My_Resume.pdf"
                  className="btn flex items-center gap-5 cursor-pointer"
                >
                  <div className="flex items-center gap-5">
                    <CustomButton>
                      Resume{" "}
                      <Download className="text-[#14f5a3] text-xl animate-bounce" />
                    </CustomButton>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative">
              <Image
                ref={imageRef}
                src={profile}
                alt="profile"
                width={500}
                height={200}
                className="object-cover object-center rounded-b-full rounded-r-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
