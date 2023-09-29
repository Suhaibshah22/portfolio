"use client";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectProps } from "@/interfaces";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Project = (props: ProjectProps) => {
  return (
    <div className="grid grid-cols-10 gap-4">
      <Card className="col-span-4 p-4">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <p className=" font-bold text-4xl">{props.title}</p>
          </div>
          <div className="text-right">
            <a href={props.link}>
              <MoveUpRight className="2xl" />
            </a>
          </div>
          <p className="font-light text-2xl">{props.time}</p>
        </div>
      </Card>
      <Card className="col-span-4 p-4 font-semibold">{props.description}</Card>
      <Card className="col-span-2">
        <CardContent className="mt-4">
          {props.skills.map((skill) => {
            return <li>{skill.name}</li>;
          })}
        </CardContent>
      </Card>
      <div className="col-span-10 mb-10 ">
        <Swiper spaceBetween={10} slidesPerView={1.1}>
          {props.images.map((image) => {
            return (
              <div>
                <SwiperSlide className="aspect-video">
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
    </div>
  );
};

export default Project;
