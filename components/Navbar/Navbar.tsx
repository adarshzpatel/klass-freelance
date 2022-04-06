import Link from "next/link";
import React from "react";
import {
  ArrowRightIcon,
} from "@heroicons/react/outline";
import Logo from "./Logo";
import NavItem from "./NavItem";
import SocialLink from "./SocialLink";
import DiscordIcon from "../Icons/Discord";
import OpenSeaIcon from "../Icons/OpenSea";
import TwitterIcon from "../Icons/Twitter";
type Navlink = {
  name: string;
  href: string;
};

export const navlinks: Navlink[] = [
  { name: "Roadmap", href: "#roadmap" },
  { name: "Gallery", href: "#gallery" },
  { name: "Team", href: "#team" },
  { name: "About", href: "#about" },
];




const Navbar = () => {
  return (
    <header className="p-4 backdrop-brightness-75  backdrop-blur-xl lg:px-8 lg:py-4  z-50 w-full border-b  border-slate-800 fixed bg-slate-900 bg-opacity-50">
      <nav className="flex relative w-full  top-0 items-center max-w-screen-xl mx-auto container  justify-between">
        <div className="gap-5 hidden text-slate-300 lg:flex">
          <NavItem text="Roadmap" link="#roadmap" />/
          <NavItem text="Gallery" link="#gallery" />/
          <NavItem text="Team" link="#team" />/
        </div>
        <Logo />
        <div className="flex gap-4 text-slate-300">
         <SocialLink Icon={DiscordIcon} link={"#"} text="Discord"/>
         /
         <SocialLink Icon={OpenSeaIcon} link={"#"} text="OpenSea"/>
         /
         <SocialLink Icon={TwitterIcon} link={'#'} text="Twitter"/>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
