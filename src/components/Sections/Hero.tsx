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
        {props.skills.map((skill, index) => {
          return (
            <Card
              desktop={1}
              tablet={1}
              mobile={3}
              className="p-4 min-h-[6rem] flex lg:flex-col items-center gap-3"
              key={index}
            >
              <div className="">{skill.icon}</div>
              <div className="break-words">
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
