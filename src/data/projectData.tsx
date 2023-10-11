import { ProjectProps } from "@/interfaces";
import faceWeb from "./images/face-auth-1.png";
import faceMobile from "./images/face-mobile.png";
import w1 from "./images/w1.jpg";
import iotWeb from "./images/iot-web.jpeg";

export const projectData: ProjectProps[] = [
  {
    title: "FaceAuth",
    description:
      "An auth service I developed, that allows any website to authenticate users using facial recognition.",
    time: "2023",
    skills: [{ name: "Golang" }, { name: "Vector DB" }, { name: "Qdrant" }],
    link: "https://www.mazedesignlab.com",
    images: [faceWeb, faceMobile],
  },
  {
    title: "IoT Solution",
    description:
      "An End-2-End IoT solution with a custom data aquistion & controller I developed along with the cloud services and front end.",
    time: "2022-Present",
    skills: [{ name: "Embedded Design" }, { name: "RTOS" }, { name: "NestJs" }],
    link: "https://api.syedsuhaibshah.com",
    images: [iotWeb, faceWeb],
  },
  {
    title: "SG Parking API",
    description:
      "An API for Singapore where you can request for the nearest parking lot near you with available parking spots.",
    time: "2023",
    skills: [{ name: "Java" }, { name: "PostGIS" }, { name: "Spring Boot" }],
    link: "https://sgparkingapi.syedsuhaibshah.com",
    images: [w1, faceWeb],
  },
];
