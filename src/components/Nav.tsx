"use client";
import React from "react";
import { ModeToggle } from "./ui/togle-mode";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { AlignRight } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Nav() {
  return (
    <div>
      <header>
        <nav className="flex items-center justify-between mx-auto max-w-[1440px] relative z-30 py-5 ">
          <h1 className="font-bold text-xl">
            QUE HAY <span className="text-orange-500">PA HOY</span>
          </h1>

          <ul className="lg:flex hidden h-full gap-12 text-sm">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                <li className="hover:font-bold transition-all">{link.label}</li>
              </Link>
            ))}
          </ul>

          <ul className="flex items-center justify-between gap-3">
            {/* <ModeToggle /> */}
            <li>
              <ModeToggle />
            </li>
            {/* <DropdownMenu /> */}
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="">
                  <AlignRight className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {NAV_LINKS.map((link) => (
                    <DropdownMenuItem>
                      <Link key={link.href} href={link.href}>
                       
                          {link.label}
                      
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
