import React from "react";

type Navlink = {
  name: string;
  href: string;
};

const navlinks: Navlink[] = [
  { name: "Mint", href: "#mint" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Gallery", href: "#Gallery" },
  { name: "Team", href: "#team" },
  { name: "About", href: "#about" },
];

const Navbar = () => {
  return (
    <header className="p-4 lg:px-8 lg:py-4 fixed z-50 w-full border-b-2 border-purple-200  bg-purple-50">
      <nav className="flex w-full  top-0 items-center max-w-screen-xl mx-auto container  justify-between">
        <h1 className="text-4xl font-bold  text-gray-800 font-display py-1 px-3 bg-clip-text bg-gradient-to-r text-transparent from-orange-400 to-pink-400 ">KLASS 5k</h1>
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
