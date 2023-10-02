import React from "react";
import { GridWrapper } from "@/components/Wrapper/GridWrapper";
import { ProfilePhoto } from "./profile-photo";
import MyLinks from "./my-links";

function Sidebar({ className }: React.HTMLProps<HTMLDivElement>) {
  return (
    <div className={className}>
      <div className="relative aspect-square">
        <ProfilePhoto />
      </div>
      <div>
        <MyLinks />
      </div>
    </div>
  );
}

export default Sidebar;
