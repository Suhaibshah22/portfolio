import React from "react";
import { ExperienceProps } from "@/interfaces";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const Experience = (props: ExperienceProps) => {
  return (
    <Card className="pr-5 pl-5 pt-5" mobile={6}>
      <div className="flex flex-col lg:flex-row justify-between gap-2">
        <div className="col-span-3">
          <h1 className="text-2xl font-semibold">{props.companyName}</h1>
          <h2>{props.position}</h2>
        </div>
        <div className="lg:text-right">
          <h2 className="text-1xl font-semibold">{props.time}</h2>
          <h1 className="text-1xl font-light">{props.location}</h1>
        </div>
      </div>
      <Separator orientation="horizontal" className="my-4" />
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
