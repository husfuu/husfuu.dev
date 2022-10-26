import { useState } from "react";

import MenuButton from "@/components/buttons/MenuButton";
import ThemeButton from "@/components/buttons/ThemeButton";
import Drawer from "@/components/layouts/Drawer";
import NavItem from "@/components/links/NavItem";

import { navlinks } from "~root/site.config";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        {navlinks.map(({ href, label }) => (
          <NavItem key={`nav${href}${label}`} href={href} label={label} />
        ))}
      </Drawer>
      <header className="w-screen bg-white py-4 dark:bg-gray-900">
        <nav className="container-custom">
          <div className="flex w-full flex-row items-center justify-between text-sm">
            <MenuButton
              className="flex md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            />
            <div className="text-lg font-semibold">husfuu.dev</div>
            <ul className="hidden items-center justify-between space-x-2 text-xs md:flex md:space-x-2 md:text-sm xl:space-x-3 xl:text-base">
              {navlinks.map(({ href, label }) => (
                <li key={`li${href}${label}`}>
                  <NavItem href={href} label={label} />
                </li>
              ))}
            </ul>
            <ThemeButton />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
