import React from "react";
import { GridWrapper } from "@/components/Wrapper/GridWrapper";
import { Card } from "@/components/ui/card";

import { HeroProps } from "@/interfaces";

export const Hero = (props: HeroProps) => {
  return (
    <GridWrapper grid={5} mobile={6} tablet={6} desktop={6}>
      <Card className="p-4 min-h-[7rem]" mobile={5} tablet={3} desktop={3}>
        {props.summary}
      </Card>
      <Card
        className="flex items-center text-center text-bold p-4 min-h-[7rem]"
        mobile={5}
        tablet={2}
        desktop={2}
      >
        <h1 className="text-2xl text-left font-semibold">{props.expertise}</h1>
      </Card>
      <GridWrapper grid={3} mobile={5}>
        {props.skills.map((skill) => {
          return (
            <Card className="p-6 min-h-[8rem]">
              <div className="flex flex-col items-center">{skill.icon}</div>
              <div className="mt-2 flex flex-col text-center">
                <h2>{skill.name}</h2>
              </div>
            </Card>
          );
        })}
      </GridWrapper>
    </GridWrapper>
  );
};

export default Hero;
