import { ProjectProps } from "@/interfaces";
import faceWeb from "./images/face-1.png";
import faceMobile from "./images/face-2.png";
import iotWeb from "./images/iot-1.jpeg";
import iotBoard from "./images/iot-2.jpg";
import teakitaWeb from "./images/teakita-1.png";
import teakitaMobile from "./images/teakita-2.png";

export const projectData: ProjectProps[] = [
  {
    title: "Teakita.com",
    description:
      "An E-Commerce platform for buying and selling furniture items, with an integrated admin panel.",
    time: "2022",
    skills: [{ name: "Express Js" }, { name: "React" }, { name: "Postgres" }],
    link: "https://teakita.com",
    images: [teakitaWeb, teakitaMobile],
  },
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
    images: [iotWeb, iotBoard],
  },
];
