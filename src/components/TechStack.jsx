import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaJs } from 'react-icons/fa';
import { SiVercel, SiTailwindcss, SiFigma, SiExpress} from 'react-icons/si';
import { BiLogoPostgresql } from "react-icons/bi";


function TechStack() {
  const list = [
    { name: "JavaScript", component: <FaJs />, color: "text-yellow-500", hoverColor: "hover:text-yellow-300", hoverTextColor: "hover:text-yellow-500" },
    { name: "NodeJs", component: <FaNodeJs />, color: "text-green-500", hoverColor: "hover:text-green-300", hoverTextColor: "hover:text-green-500" },
    { name: "Python", component: <FaPython />, color: "text-blue-500", hoverColor: "hover:text-blue-300", hoverTextColor: "hover:text-blue-500" },
    { name: "React", component: <FaReact />, color: "text-blue-400", hoverColor: "hover:text-blue-200", hoverTextColor: "hover:text-blue-400" },
    { name: "Vercel", component: <SiVercel />, color: "text-gray-500", hoverColor: "hover:text-gray-300", hoverTextColor: "hover:text-gray-500" },
    { name: "Tailwind", component: <SiTailwindcss />, color: "text-blue-600", hoverColor: "hover:text-blue-400", hoverTextColor: "hover:text-blue-600" },
    { name: "Figma", component: <SiFigma />, color: "text-purple-500", hoverColor: "hover:text-purple-300", hoverTextColor: "hover:text-purple-500"},
    { name: "Express", component: <SiExpress />, color: "text-white", hoverColor: "hover:text-gray-100", hoverTextColor: "hover:text-gray-100"},
    { name: "Postgresql", component: <BiLogoPostgresql />, color: "text-blue-400", hoverColor: "hover:text-blue-200", hoverTextColor: "hover:text-blue-400"},

  ];

  return (
    <div className='justify-center'>
      <h2 className="text-3xl font-extrabold sm:text-4xl text-center text-white">Skills</h2>
      <div className='grid lg:grid-cols-3 grid-cols-3 gap-5 my-10 '>
        {list.map((item, id) => (
          <div className={`flex flex-col items-center justify-center gap-2 lg:text-xl text-md font-semibold ${item.center ? 'lg:col-span-3' : ''}`} key={id}>
            <div className={`flex rounded-lg p-4 transition-colors duration-300 ${item.color} ${item.hoverColor} shadow-lg font-sans items-center justify-center text-4xl ${item.hoverTextColor}`}>
              {item.component}
            </div>
            <h2 className={`text-white ${item.hoverTextColor}`}>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
