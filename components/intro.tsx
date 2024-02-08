"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import BackgroundCircles from "@/components/BackgroundCircles";

import { useActiveSectionContext } from "@/context/active-section-context";
import { useTypewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Intro() {
  const [text, helper] = useTypewriter({
    words: [
      " Hello I'm Zidan, I'm a full stack developer, I enjoy building  Websites & apps My focus is JavaScript.",
    ],
    loop: false,
    typeSpeed: 100,
    delaySpeed: 800,
  });

  useEffect(() => {
    AOS.init();
  }, []);
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-col w-full mt-[-30px] max-w-full justify-center items-center text-center transition-all"
    >
      <BackgroundCircles />
      <div
        className="flex items-center "
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div className="relative">
          <motion.div>
            <Image
              src="/photo.webp"
              alt="Ricardo portrait"
              width="130"
              height="100"
              quality="65"
              priority={true}
              className="h-52 w-52 rounded-full object-cover border-[0.35rem] border-white shadow-xl transition-all"
            />
          </motion.div>

          <motion.span className="absolute bottom-0 right-0 text-4xl">
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl  max-w-[48rem] font-medium !leading-[1.5] sm:text-4xl transition-all"
        data-aos="fade-left"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <span>{text}</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <Link
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </Link>
        <div className="flex gap-2 ">
          <Link
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://linkedin.com/in/ahmed-h-zidan"
            target="_blank"
          >
            <BsLinkedin />
          </Link>

          <Link
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/ahmed-hamdi-z"
            target="_blank"
          >
            <FaGithubSquare />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
