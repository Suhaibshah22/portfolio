import Nav from "@/components/Nav";
import { Experience } from "@/components/Sections/Experience/Experience";
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
    <main className="p-12">
      <div className="place-content-center max-w-7xl">
        <Nav />
        <div className="m-2 flex flex-col items-left text-left">
          <h1 className="text-4xl font-bold">Hi, it's me Suhaib Shah!</h1>
          <p className="text-1xl text-muted-foreground">
            Find out about what I have been up to, feel free to drop me an
            email.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-4 gap-5 ">
          <section className="col-span-1">
            <Sidebar />
          </section>
          <div className="col-span-3">
            <div className="col-span-3 ">
              <Hero
                summary={heroData.summary}
                expertise={heroData.expertise}
                skills={heroData.skills}
              />
            </div>
            <div className="col-span-3">
              <div className="lg:col-span-2 md:cols-span-2">
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
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
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
        </div>
      </div>
    </main>
  );
}
