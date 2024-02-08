"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import SectionHeading from "./section-heading";
import Bulb from "../Bulb";
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div
      id="about"
      className="h-full flex flex-col w-full py-8 text-center xl:text-left"
    >
      <SectionHeading>About me</SectionHeading>

      <div className="container max-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex w-full flex-col justify-center p-10">
          <div className="flex">
            <motion.p
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className=" max-w-[500px] font-semibold text-2xl/9 xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
            >
              A Web developer with +2 years of experience, building applications
              with clean architecture regards to websites' life cycle, improving
              testability, usability, and performance regards to websites.
            </motion.p>
            <div className="xl:-my-6 md:-my-10 xl:ml-[320px] md:ml-[220px] ">
              <Bulb />
            </div>
          </div>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" md:max-w-md xl:max-w-[500px] xl:mx-0 mb-8 max-w-[500px]"
          >
            <div className="flex flex-1 xl:gap-x-6 ] ">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-exl xl:text-4xl font-extrabold mb-2">
                  <CountUp start={0} end={2} duration={1} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  years of experience
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-exl xl:text-4xl font-extrabold mb-2">
                  <CountUp start={0} end={100} duration={5} />+
                </div>

                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  satisfied
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-exl xl:text-4xl font-extrabold mb-2">
                  <CountUp start={0} end={3} duration={1} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
