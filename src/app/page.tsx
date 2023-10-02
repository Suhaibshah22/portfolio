import Nav from "@/components/Nav";
import { Experience } from "@/components/Sections/Experience/Experience";
import { GridWrapper } from "@/components/Wrapper/GridWrapper";
import Hero from "@/components/Sections/Hero/Hero";
import Project from "@/components/Sections/Projects/Project";
import Sidebar from "@/components/Sections/Sidebar/Sidebar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { workExperienceData } from "@/data/WorkExperienceData";
import { heroData } from "@/data/heroData";
import { projectData } from "@/data/projectData";

export default function Home() {
  return (
    <main className="p-5">
      <GridWrapper grid={5} className="max-w-screen-lg mx-auto">
        <Nav className="col-span-5" />
        <GridWrapper grid={1} mobile={5} tablet={5} desktop={5}>
          <div className="mt-12 flex flex-col items-left">
            <h1 className="text-4xl font-bold">Hi, it's me Suhaib Shah!</h1>
            <p className="text-1xl text-muted-foreground">
              Find out about what I have been up to, feel free to drop me an
              email.
            </p>
          </div>
          <GridWrapper grid={6} className="mt-12">
            <GridWrapper
              grid={1}
              mobile={6}
              tablet={2}
              desktop={2}
              className="self-start relative"
            >
              <Sidebar />
            </GridWrapper>
            <GridWrapper grid={1} mobile={6} tablet={4} desktop={4}>
              <Hero
                summary={heroData.summary}
                expertise={heroData.expertise}
                skills={heroData.skills}
              />
              {workExperienceData.map((experience) => {
                return (
                  <Experience
                    companyName={experience.companyName}
                    position={experience.position}
                    time={experience.time}
                    location={experience.location}
                    description={experience.description}
                  />
                );
              })}
            </GridWrapper>
            <GridWrapper grid={1} mobile={6}>
              {projectData.map((project) => {
                return (
                  <Project
                    title={project.title}
                    time={project.time}
                    skills={project.skills}
                    description={project.description}
                    link={project.link}
                    images={project.images}
                  />
                );
              })}
            </GridWrapper>
          </GridWrapper>
        </GridWrapper>
      </GridWrapper>
    </main>
  );
}
