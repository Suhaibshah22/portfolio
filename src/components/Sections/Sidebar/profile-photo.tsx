import * as React from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import Image from "next/image";
import profilePhoto from "../../../../public/profile.jpeg";

export function ProfilePhoto() {
  return (
    <Card className="">
      <Image
        className="rounded-lg"
        src={profilePhoto}
        alt="Photo"
        layout="responsive"
        objectFit="cover"
      ></Image>
    </Card>
  );
}
