"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
];

export function AppNavigation({
  links,
}: {
  links: {
    title: string;
    href: string;
    subMenu?: { title: string; href: string }[];
  }[];
}) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {links.map((item, index) => {
          if (Array.isArray(item.subMenu) && item.subMenu.length > 0) {
            return (
              // <MenubarMenu key={item.title}>
              // 	<MenubarTrigger>{item.title}</MenubarTrigger>
              // 	<MenubarContent>
              // 		{item.subMenu.map((component) => (
              // 			<MenubarItem key={item.title}>
              // 				{component.title}
              // 			</MenubarItem>
              // 		))}
              // 	</MenubarContent>
              // </MenubarMenu>

              <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent className="box-border">
                  <ul className="grid w-[320px]  p-4  md:grid-cols-1 lg:w-[320px]">
                    {item.subMenu.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.title}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }
          return (
            <NavigationMenuItem key={item.title}>
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#ECF0FF] hover:text-[#3F69FE] focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {/* <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
						{children}
					</p> */}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
