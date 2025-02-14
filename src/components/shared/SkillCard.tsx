"use client";

import { IconType } from "react-icons";

interface SkillCardProps {
  name: string;
  Icon: IconType;
  color: string;
}

const SkillCard = ({ name, Icon, color }: SkillCardProps) => {

  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg border p-6 transition-all duration-300 ease-in-out transform hover:scale-105 flex flex-col items-center`}
    >
      <Icon className={`text-4xl mb-4 ${color} `} />
      <h3 className="text-lg font-semibold dark:text-white text-gray-800">{name}</h3>
    </div>
  );
};

export default SkillCard;
