import React from "react";
import { ExperienceProps } from "@/interfaces";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const Experience = (props: ExperienceProps) => {
  return (
    <Card className="mt-2 pr-5 pl-5 pt-5">
      <div className="">
        <div className="grid grid-cols-4">
          <div className="col-span-3">
            <h1 className="text-2xl font-semibold">{props.companyName}</h1>
            <h2>{props.position}</h2>
          </div>
          <div className="text-right">
            <h2 className="text-1xl font-semibold">{props.time}</h2>
            <h1 className="text-1xl font-light">{props.location}</h1>
          </div>
        </div>
      </div>
      <Separator orientation="horizontal" className="m-4" />
      <div>
        <CardContent className="mt-4">
          {props.description.map((point) => {
            return <li key={point}>{point}</li>;
          })}
        </CardContent>
      </div>
    </Card>
  );
};
