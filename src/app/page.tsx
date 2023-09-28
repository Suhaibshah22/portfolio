import Nav from "@/components/Nav";
import { Experience } from "@/components/Sections/Experience/Experience";
import Sidebar from "@/components/Sections/Sidebar/Sidebar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { workExperienceData } from "@/data/WorkExperienceData";

export default function Home() {
  return (
    <main className="p-12">
      <Nav />
      <div className="m-2 flex flex-col items-left text-left">
        <h1 className="text-4xl font-bold">Hi, it's me Suhaib Shah!</h1>
        <p className="text-1xl text-muted-foreground">
          Find out about what I have been up to, feel free to drop me an email.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-4 gap-5">
        <section className="col-span-1">
          <Sidebar />
        </section>
        {/* Hero Start */}

        {/* Hero End */}

        {/* Work Experience Start */}
        <div className="col-span-3">
          <Card>
            <CardHeader>
              <h1 className="text-3xl text-bold text-left">Work Experience</h1>
            </CardHeader>
          </Card>
          <div className="col-span-3">
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
        {/* Work Experience Start */}
      </div>
    </main>
  );
}
