"use client";
import Project from "@/components/project";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

const Projects = () => {
  return (
    <div
      id="projects"
      className="h-full w-full  flex flex-col justify-center items-center"
    >
      <motion.div
        initial="hidden"
        animate="show"
        exit="exit"
        className="w-full  xl:max-w-[65%]"
      >
        <SectionHeading>projects</SectionHeading>
        <Project />
      </motion.div>
    </div>
  );
};

export default Projects;
