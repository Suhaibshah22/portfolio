import * as React from "react";
import { StaticImageData } from "next/image";
import { HTMLProps } from "react";

export type ExperienceProps = {
  companyName: string;
  location: string;
  time: string;
  position: string;
  description: string[];
};

type skill = {
  name: string;
  description?: string;
  icon?: React.ReactNode;
};

export type HeroProps = {
  summary: string;
  expertise: string;
  skills: skill[];
};

export type ProjectProps = {
  title: string;
  time: string;
  skills: skill[];
  description: string;
  link: string;
  images: StaticImageData[];
};

export type GridWrapperProps = {
  grid?: number;
  mobile?: number;
  tablet?: number;
  desktop?: number;
} & HTMLProps<HTMLDivElement>;
