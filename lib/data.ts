import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaHtml5, FaCss3, FaNodeJs, FaGit } from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiBootstrap,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiMysql,
  SiRedux,
  SiMongodb,
  SiPrisma,
} from "react-icons/si";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "React.Js",
    location: "+3 Years",
    description:
      "I am experienced in using React and have implemented many projects using it, including huge projects.",
    icon: React.createElement(FaReact),
  
  },
  {
    title: "JavaScript",
    location: "+4 years",
    description:
      "I have deep knowledge of all its aspects and always strive to learn more about it and its related libraries and frameworks.",
    icon: React.createElement(FaNodeJs),

  },
  {
    title: "Full-Stack Developer",
    location: "+2 Years",
    description:
      "I'm now a full-stack developer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to any opportunity.",
    icon: React.createElement(FaNodeJs),

  },
] as const;



export const skillsData = [
  { icons: React.createElement(FaHtml5) },
  { icons: React.createElement(FaCss3) },
  { icons: React.createElement(FaReact) },
  { icons: React.createElement(SiNextdotjs) },
  { icons: React.createElement(SiFramer) },
  { icons: React.createElement(FaNodeJs) },
  { icons: React.createElement(SiBootstrap) },
  { icons: React.createElement(SiTypescript) },
  { icons: React.createElement(FaGit) },
  { icons: React.createElement(SiTailwindcss) },
  { icons: React.createElement(SiPrisma) },
  { icons: React.createElement(SiMongodb) },
  { icons: React.createElement(SiRedux) },
  { icons: React.createElement(SiMysql) },
  { icons: React.createElement(SiPython) },
] as const;
