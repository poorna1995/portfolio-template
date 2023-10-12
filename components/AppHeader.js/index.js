import React from "react";
import { Button } from "../ui/button";

export default function AppHeader() {
  return (
    <body className="antialiased bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <header>
        <nav className=" flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white">
          <div className="display-flex border-bottom-1px-solid-#e5e5e5">
            <div className="border-bottom-1px-solid-#e5e5e5">
              <h1 className="text-2xl">AppHeader</h1>
            </div>
            <nav className="navbar">
              <ul className="menu">
                <li className="menu-item">
                  <a href="#">Home</a>
                </li>
                <li className="menu-item">
                  <a href="#">About</a>
                </li>
                <li className="menu-item">
                  <a href="#">Services</a>
                </li>
                <li className="menu-item">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
            <Button className="menu-item download-button">Download CV</Button>
          </div>
        </nav>
      </header>
    </body>
  );
}
