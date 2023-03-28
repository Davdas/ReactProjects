import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";

import navItems from "./nav-items.json";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [dropDown, setDropDown] = useState<boolean>(false);

  return (
    <nav>
      <div className="md:flex md:justify-around items-center">
        <div
          onClick={() => setOpen(!open)}
          className="flex justify-around items-center"
        >
          <img src="/img/logoAnspi.png" alt="logo" />
          <div className="text-xl md:hidden cursor-pointer">
            {open ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
        </div>
        <ul className="md:flex hidden uppercase text-sm self-stretch">
          {navItems.map((item) => {
            if (item.nome === "Associazione") {
              return (
                <li
                  key={item.nome}
                  onMouseEnter={() => setDropDown(true)}
                  onMouseLeave={() => setDropDown(false)}
                  className="md:mr-6 cursor-pointer font-semibold text-blue-600 hover:text-blue-800 flex items-center justify-center"
                >
                  {item.nome}
                </li>
              );
            }
            return (
              <li
                key={item.nome}
                className="py-10 px-5 cursor-pointer font-semibold text-blue-600 hover:text-blue-800"
              >
                <Link to={item.href}>{item.nome}</Link>
              </li>
            );
          })}
          {dropDown && <DropDownMenu setDropDown={setDropDown} />}
        </ul>
      </div>
      {/* navbar mobile */}
      <ul
        className={`md:hidden absolute w-full duration-500 flex flex-col py-10 mt-2 bg-gray-100 items-center z-10 uppercase text-sm ${
          open ? "left-0" : "left-[100%]"
        }`}
      >
        {navItems.map((item) => {
          return (
            <li
              key={item.nome}
              className="py-10 cursor-pointer font-semibold text-blue-600 hover:text-blue-800"
            >
              {item.nome}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
