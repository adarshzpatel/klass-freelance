import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import SocialLink from "./SocialLink";
import DiscordIcon from "../Icons/Discord";
import OpenSeaIcon from "../Icons/OpenSea";
import TwitterIcon from "../Icons/Twitter";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  return (
    <>
      <header
        className="p-4 backdrop-brightness-75  backdrop-blur-xl lg:px-8 lg:py-4 w-screen z-50 w-full border-b  border-gray-800 fixed bg-slate-
type Props = {
  children: React.ReactNode;
};900 bg-opacity-50"
      >
        <nav className="flex  relative w-full  top-0 items-center max-w-screen-xl mx-auto container  justify-between">
          <div className="gap-5 hidden text-slate-300 lg:flex">
            <NavItem text="Roadmap" link="#roadmap" />\
            <NavItem text="Team" link="#team" />\
            <NavItem text="FAQ" link="#faq" />\
            <NavItem text="About" link="#about" />
          </div>
          <Logo />
          <div className="hidden md:flex gap-4 text-slate-300">
            <SocialLink Icon={DiscordIcon} link={""} text="Discord" />
            /
            <SocialLink Icon={OpenSeaIcon} link={"#"} text="OpenSea" />
            /
            <SocialLink Icon={TwitterIcon} link={"#"} text="Twitter" />
          </div>
          <MenuIcon className="h-8 w-8 cursor-pointer md:hidden" onClick={()=>setIsMobileNavOpen(true)}/>
        </nav>
      </header>
      {isMobileNavOpen && (
        <nav className=" z-50   bg-slate-900 top-0 bottom-0 left-0 right-0 bg-opacity-25 backdrop-blur-2xl fixed h-screen w-screen">
          <XIcon className="h-8 w-8 cursor-ppointer fixed top-8 right-8" onClick={()=>setIsMobileNavOpen(false)}/>
          <div  className="flex items-center justify-center flex-col gap-8 text-2xl h-full">
            <div onClick={()=>setIsMobileNavOpen(false)}>

            <NavItem text="Roadmap" link="#roadmap" />
            </div>
            <div onClick={()=>setIsMobileNavOpen(false)}>
              
            <NavItem text="Team" link="#team" />
            </div>
            <div onClick={()=>setIsMobileNavOpen(false)}>
            <NavItem text="FAQ" link="#faq" />
            </div>
            <div onClick={()=>setIsMobileNavOpen(false)}>
            <NavItem text="About" link="#about" />
            </div>
            <div onClick={()=>setIsMobileNavOpen(false)}>
            <SocialLink Icon={DiscordIcon} link={""} text="Discord" />
            </div>
            <div onClick={()=>setIsMobileNavOpen(false)}>

            <SocialLink Icon={OpenSeaIcon} link={"#"} text="OpenSea" />
            </div>
            <div onClick={()=>setIsMobileNavOpen(false)}>

            <SocialLink Icon={TwitterIcon} link={"#"} text="Twitter" />
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
