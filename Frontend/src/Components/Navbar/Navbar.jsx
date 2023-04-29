import React from "react";

const Navbar = () => {
  return (
    <div className="navBar flex justify-between items-center p-[3rem]">
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-blueColor">
          <strong>Samlpe</strong>Name
        </h1>
      </div>
      <div className="menu flex gap-8">
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Test</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Test</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Test</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Test</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Test</li>
      </div>
    </div>
  );
};

export default Navbar;
