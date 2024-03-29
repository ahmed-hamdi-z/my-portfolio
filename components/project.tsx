"use client";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const workSlides = [
  {
    images: [
      { image: "/dis.webp",
       path: "https://github.com/ahmed-hamdi-z/Chat-App" },
    ],
  },
  {
    images: [
      {
        image: "/ec1.webp",
        path: "https://github.com/ahmed-hamdi-z/Zestdets-E-commerce",
      },
    ],
  },
  {
    images: [
      {
        image: "/ec2.webp",
        path: "https://github.com/ahmed-hamdi-z/Front-end-E-commerce-design",
      },
    ],
  },
  {
    images: [
      { image: "/pets.webp",
       path: "https://github.com/ahmed-hamdi-z/Pets" },
    ],
  },
];

const Project = () => {
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={3}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className=" mt-16 h-[280px] sm:h-[480px]"
    >
      {workSlides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className=" cursor-pointer">
            {slide.images.map((imagePath, imageIndex) => (
              <a
                href={imagePath.path}
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                key={imageIndex}
              >
                <div className="flex items-center justify-center relative overflow-hidden group">
                  <Image
                    className="h-[420px] w-full"
                    src={imagePath.image}
                    width={300}
                    height={200}
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#c588bb] to-[#817997] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>

                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                    <div className="flex items-center gap-x-2 text-[13px] trackin-[0.2em]">
                      <div className="delay-100">LIVE</div>
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        PROJECT
                      </div>
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Project;
