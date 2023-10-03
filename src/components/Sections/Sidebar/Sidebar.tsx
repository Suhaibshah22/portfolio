import React from "react";
import { Button } from "@/components/ui/button";
import {
  DownloadIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { ProfilePhoto } from "./profile-photo";
import Link from "next/link";

function Sidebar({ className }: React.HTMLProps<HTMLDivElement>) {
  return (
    <div className={className}>
      <div className="relative aspect-square">
        <ProfilePhoto />
      </div>
      <div className="grid grid-cols-3 mt-2 mb-2 gap-2">
        <Button variant={"outline"} className="col-span-3">
          <DownloadIcon
            className="mr-2"
            href="https://drive.google.com/file/d/1Ypz6bTDI-DPknJjn3mF1hK9Mn2B1osLo/view?usp=sharing"
          />{" "}
          Download Resume
        </Button>
        <Link href="https://goolg.com" className="col-span-3 block">
          <Button variant={"outline"} className="w-full">
            <EnvelopeClosedIcon
              className="mr-2"
              href="https://drive.google.com/file/d/1Ypz6bTDI-DPknJjn3mF1hK9Mn2B1osLo/view?usp=sharing"
            />{" "}
            Email Me!
          </Button>
        </Link>
        <Link href={"https://github.com/Suhaibshah22"} className="block">
          <Button variant={"outline"} className="w-full">
            <GitHubLogoIcon />
          </Button>
        </Link>
        <Link href="https://goolg.com" className="block">
          <Button variant={"outline"} className=" w-full">
            <TwitterLogoIcon />
          </Button>
        </Link>
        <Link href="https://goolg.com" className="block">
          <Button variant={"outline"} className=" w-full">
            <LinkedInLogoIcon />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
