import { HeroProps } from "@/interfaces";
import { AppWindowIcon, CpuIcon, DatabaseIcon } from "lucide-react";

export const heroData: HeroProps = {
  summary:
    "I am a Computer & Software Engineer based in Kuala Lumpur, Malaysia. I like to solve challenging technical problems. Get in touch if you would like to work with me!",
  expertise: "Software & Embedded Systems Engineer",
  skills: [
    {
      name: "Back End Engineering",
      description: "I write production backend services.",
      icon: <DatabaseIcon />,
    },
    {
      name: "Front End Engineering",
      description: "I got an eye for design, just look at this!",
      icon: <AppWindowIcon />,
    },
    {
      name: "Embedded Engineering",
      description: "I develop IoT devices of my own.",
      icon: <CpuIcon />,
    },
  ],
};
