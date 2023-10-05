import React from "react";
import { Button } from "@/components/ui/button";
import {
  DownloadIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Card } from "@/components/ui/card";
import { SidebarProps } from "@/interfaces";

function Sidebar(props: React.HTMLProps<HTMLDivElement> & SidebarProps) {
  return (
    <div className={props.className}>
      <div className="relative aspect-square">
        <Card className="">
          <Image
            className="rounded-lg"
            src={props.profilePhoto}
            alt="Photo"
            fill
            objectFit="cover"
          ></Image>
        </Card>
      </div>
      <div className="grid grid-cols-3 mt-2 mb-2 gap-2">
        <Link
          className="col-span-3"
          href="https://drive.google.com/file/d/1Ypz6bTDI-DPknJjn3mF1hK9Mn2B1osLo/view?usp=sharing"
        >
          <Button variant={"outline"} className=" w-full">
            <DownloadIcon className="mr-2" /> Download Resume
          </Button>
        </Link>

        <Link href={`mailto:${props.email}`} className="col-span-3 block">
          <Button variant={"outline"} className="w-full">
            <EnvelopeClosedIcon className="mr-2" /> Email Me!
          </Button>
        </Link>
        <Link href={props.githubUrl} className="block">
          <Button variant={"outline"} className="w-full">
            <GitHubLogoIcon />
          </Button>
        </Link>
        <Link href={props.twitterUrl} className="block">
          <Button variant={"outline"} className=" w-full">
            <TwitterLogoIcon />
          </Button>
        </Link>
        <Link href={props.linkedInUrl} className="block">
          <Button variant={"outline"} className=" w-full">
            <LinkedInLogoIcon />
          </Button>
        </Link>
        <Card className="col-span-3">
          <p className="font-semibold pt-3 pl-3 pr-3">
            {props.education.program}
          </p>
          <h2 className="font-light text-l pl-3 pb-3">
            {props.education.university}
            {" ("}
            {props.education.graduation}
            {")"}
          </h2>
        </Card>
      </div>
    </div>
  );
}

export default Sidebar;
