import Image from "next/image";
import React from "react";
import { ModeToggle } from "./ui/mode-toggle";

function Nav({ className }: React.HTMLProps<HTMLDivElement>) {
  return (
    <header className={className}>
      <nav>
        <ul className="flex items-center justify-between">
          <li>
            <a
              className="pointer-events-none flex place-items-center gap-2"
              href="http://localhost:3000"
              target="_blank"
              rel="noopener noreferrer"
            >
              Home
            </a>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
