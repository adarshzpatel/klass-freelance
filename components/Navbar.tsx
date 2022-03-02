import React from "react";

type Navlink = {
  name: string;
  href: string;
};

export const navlinks: Navlink[] = [
  { name: "Mint", href: "#mint" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Gallery", href: "#gallery" },
  { name: "Team", href: "#team" },
  { name: "About", href: "#about" },
];

export const Logo = () => (
  <h1 className="text-4xl font-bold  text-gray-800 font-display py-1 px-3 bg-clip-text bg-gradient-to-r text-transparent from-orange-400 to-pink-400 ">KLASS 5k</h1>
)

const Navbar = () => {
  return (
    <header className="p-4 backdrop-blur-xl lg:px-8 lg:py-4 fixed z-50 w-full border-b border-purple  border-purple-100 bg-purple-50 bg-opacity-75">
      <nav className="flex w-full  top-0 items-center max-w-screen-xl mx-auto container  justify-between">
        <Logo />
        <div className="gap-5 hidden lg:flex">
          {navlinks.map((item) => (
            <a className="text-lg px-4 group text-slate-600 font-display" href={item.href} key={item.href}>
              {item.name}
              <div className="h-1 bg-gradient-to-r w-0 group-hover:w-full origin-bottom duration-300 ease-out from-orange-400 to-pink-400"></div>
            </a>
          ))}
        </div>
        <div className="relative">

        <button>Connect Wallet</button>
        </div>
      </nav>
          </header>
  );
};

export default Navbar;
