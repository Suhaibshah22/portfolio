import { ProjectProps } from "@/interfaces";
import face1 from "./images/face-1.png";
import w1 from "./images/w1.jpg";

export const projectData: ProjectProps[] = [
  {
    title: "FaceAuth",
    description:
      "An interesting project I worked on where I developed a backend service for storing and querying face data for the purpose of authenticating users.",
    time: "2023",
    skills: [
      { name: "Golang" },
      { name: "vector databases" },
      { name: "Qdrant" },
    ],
    link: "https://www.mazedesignlab.com",
    images: [face1, w1],
  },

  {
    title: "IoT Solution",
    description:
      "An interesting project I worked on where I developed a backend service for storing and querying face data for the purpose of authenticating users.",
    time: "2022-Present",
    skills: [
      { name: "Golang" },
      { name: "vector databases" },
      { name: "Qdrant" },
    ],
    link: "https://www.mazedesignlab.com",
    images: [w1, face1],
  },
];
