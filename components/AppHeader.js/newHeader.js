"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function NewHeader() {
  const menus = [
    { title: "About me", path: "/about" },
    { title: "Products", path: "/products" },
    { title: "Recognition", path: "/recognition" },
    { title: "Whitepapers", path: "/whitepapers" },
    { title: "Research", path: "/research" },
    { title: "Hobbies", path: "/hobbies" },
  ];

  return (
    <body>
      <nav className="fixed h-24 shadow-xl bg-white w-full border-b-1 border-gray-300">
        <div className="flex justify-between items-center h-full w-full px-4 py-4">
          <Link href="/">
            <h1 className="text-2xl font-bold">P.</h1>
          </Link>

          <div className="">
            <ul className="flex justify-center items-center ">
              {menus.map((item, id) => (
                <li key={id} className="ml-10 text-#222 hover:text-2a2a2f">
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
              <Button className="ml-10 px-8 menu-item download-button">
                Download CV
              </Button>
            </ul>
          </div>
        </div>
      </nav>
    </body>
  );
}
