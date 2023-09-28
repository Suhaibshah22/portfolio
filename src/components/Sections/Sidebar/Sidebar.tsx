import React from "react";
import { ProfilePhoto } from "./profile-photo";
import MyLinks from "./my-links";

function Sidebar() {
  return (
    <main className="grid grid-rows-2">
      <div>
        <ProfilePhoto></ProfilePhoto>
      </div>
      <div>
        <MyLinks></MyLinks>
      </div>
    </main>
  );
}

export default Sidebar;
