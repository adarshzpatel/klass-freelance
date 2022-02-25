import React from "react";

type Navlink = {
  name: string;
  href: string;
};

const navlinks: Navlink[] = [
  { name: "Mint", href: "#mint" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Gallery", href: "#Gallery" },
  { name: "FAQs", href: "#faqs" },
  { name: "About", href: "#about" },
];

const Navbar = () => {
  return (
    <header className="p-4 lg:px-8 lg:py-4 fixed z-50 w-full max-w-screen-xl mx-auto container backdrop-blur-xl ">
      <nav className="flex w-full  top-0  justify-between">
        <h1 className="text-3xl font-bold  text-gray-800 font-display ">KLASS 5k</h1>
        <div className="gap-5 hidden">
          {navlinks.map((item) => (
            <a href={item.href} key={item.href}>
              {item.name}
            </a>
          ))}
        </div>
        <div className="relative">
          
        <button className="relative px-4 font-medium  hover:shadow-xl active:shadow-lg bg-yellow-400  rounded-xl hover:bg-yello-300 active:bg-yellow-500 py-2 transition duration-300 ease-out">Connect Wallet</button>
        </div>
      </nav>
          </header>
  );
};

export default Navbar;
