"use client";
import { Card, CardContent } from "@/components/ui/card";
import { GridWrapper } from "@/components/Wrapper/GridWrapper";
import { ProjectProps } from "@/interfaces";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const Project = (props: ProjectProps) => {
  const { theme } = useTheme();

  const buttonClass = {
    dark: "border-gray-600 hover:border-gray-400 hover:bg-gray-600",
    light: "border-gray-700 hover:border-gray-500 hover:bg-gray-200",
  };

  return (
    <section className="flex flex-col gap-4">
      <GridWrapper grid={6}>
        <Card className="p-4" mobile={6} tablet={3} desktop={3}>
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-4xl">{props.title}</h2>
            <div
              className={cn(
                "p-2 rounded-full transition-all duration-200 hover:shadow-md",
                buttonClass[(theme as unknown as "dark" | "light") || "dark"]
              )}
            >
              <Link href={props.link}>
                <MoveUpRight className="2xl" />
              </Link>
            </div>
          </div>
          <p className="font-light text-2xl">{props.time}</p>
        </Card>
        <Card className="p-4" mobile={4} tablet={2} desktop={2}>
          {props.description}
        </Card>
        <Card className="p-4" mobile={2} tablet={1} desktop={1}>
          {props.skills.map((skill) => {
            return <li>{skill.name}</li>;
          })}
        </Card>
      </GridWrapper>
      <div className="col-span-10 mb-10 ">
        <Swiper spaceBetween={10} slidesPerView={1.1}>
          {props.images.map((image, index) => {
            return (
              <div key={index}>
                <SwiperSlide
                  className="aspect-video hover:cursor-grab active:cursor-grabbing"
                  key={index}
                >
                  <Image
                    className="rounded-lg"
                    src={image}
                    alt="Photo"
                    layout="responsive"
                    objectFit="contain"
                  ></Image>
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Project;
