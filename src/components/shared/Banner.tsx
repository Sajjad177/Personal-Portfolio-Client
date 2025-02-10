"use client";
import Image from "next/image";
import { Download } from "lucide-react";
import "../style/button.css";
import profile from "../../../public/Images/profile.jpg";

const Banner = () => {
  return (
    <div>
      <div className="relative font-space">
        <div className="mx-auto max-w-7xl lg:px-8 mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left Column */}
            <div className="flex flex-col justify-center">
              <p className="text-lg mb-4">Full Stack Web Developer</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-2">
                {"I'm"}
              </h1>
              <h2 className="text-5xl sm:text-6xl lg:text-6xl font-bold leading-tight text-transparent [-webkit-text-stroke:1px_black] mb-4">
                Sajjad Hossain
              </h2>
              <p className="text-lg mb-8">
                Creating appealing and responsive website, optimizing
                performance and ensuring the website the client need and
                industry standards. I quickly identify and solve problems to
                ensure seamless and efficient website performance.
              </p>

              <div className="w-44">
                <a
                  href="https://drive.google.com/file/d/1T1RnKpbQ-9OAiDDkQ4irj3Hq_SsbDOd-/view"
                  download="My_Resume.pdf"
                  className="btn flex items-center gap-5 cursor-pointer"
                >
                  <button className="flex items-center gap-5">
                    Resume
                    <Download className="text-[#14f5a3] text-xl animate-bounce" />
                  </button>
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative">
              <Image
                src={profile}
                alt="profile"
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
