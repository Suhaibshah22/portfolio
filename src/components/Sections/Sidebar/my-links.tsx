import { Button } from "@/components/ui/button";
import {
  DownloadIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import React from "react";

function MyLinks() {
  return (
    <div className="grid grid-cols-3 mt-2 mb-2 gap-2">
      <Button variant={"outline"} className="col-span-3">
        <DownloadIcon
          className="mr-2"
          href="https://drive.google.com/file/d/1Ypz6bTDI-DPknJjn3mF1hK9Mn2B1osLo/view?usp=sharing"
        />{" "}
        Download Resume
      </Button>

      <Button variant={"outline"} className="col-span-3">
        <EnvelopeClosedIcon
          className="mr-2"
          href="https://drive.google.com/file/d/1Ypz6bTDI-DPknJjn3mF1hK9Mn2B1osLo/view?usp=sharing"
        />{" "}
        Email Me!
      </Button>

      <Button variant={"outline"} className="col-span-1">
        <GitHubLogoIcon />
      </Button>
      <Button variant={"outline"} className="col-span-1">
        <TwitterLogoIcon />
      </Button>
      <Button variant={"outline"} className="col-span-1">
        <LinkedInLogoIcon />
      </Button>
    </div>
  );
}

export default MyLinks;
