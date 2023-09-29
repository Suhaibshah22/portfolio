import React from "react";
import { Card } from "@/components/ui/card";

import { HeroProps } from "@/interfaces";

export const Hero = (props: HeroProps) => {
  return (
    <div className="mb-4 grid grid-cols-5 gap-4">
      <div className="col-span-3">
        <Card className="p-4 min-h-[7rem] ">{props.summary}</Card>
      </div>
      <div className="col-span-2 items-center text-center text-bold">
        <Card className="p-4 min-h-[7rem] ">
          <h1 className="text-2xl text-left font-semibold">
            {props.expertise}
          </h1>
        </Card>
      </div>
      <div className="col-start-1 col-span-5">
        <div className="grid grid-cols-3 gap-4">
          {props.skills.map((skill) => {
            return (
              <div className="">
                <Card className="p-6 min-h-[8rem]">
                  <div className="flex flex-col items-center">{skill.icon}</div>
                  <div className="mt-2 flex flex-col text-center">
                    <h2>{skill.name}</h2>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
