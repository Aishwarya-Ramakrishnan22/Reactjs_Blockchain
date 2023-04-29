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
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Home</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Buy</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Sell</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
          Sign in
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
          Register
        </li>
      </div>
    </div>
  );
};

export default Navbar;
