import React, { useEffect } from "react";
import Image from "next/image";
import avatar from "../data/avatar.jpg";

import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiNotification3Line } from "react-icons/ri";

import { Cart, Chat, Notification, UserProfile } from ".";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../context/context";
import Navbutton from "./utils/Navbutton";

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isclicked,
    setIsClicked,
    handleClick,
    setScreenSize,
    screenSize,
  } = useStateContext();
  ////////////////////////////////////////////////////////////////
  //console.log(screenSize);
  ////////////////////////////////////////////////////////////
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  ////////////////////////////////////
  useEffect(() => {
    screenSize <= 900 ? setActiveMenu(false) : setActiveMenu(true);
  }, [screenSize]);
  ////////////////////////////////////////////////////
  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <Navbutton
        title="منو"
        color="blue"
        icon={<AiOutlineMenu />}
        customFunc={() => setActiveMenu((prevActivemenu) => !prevActivemenu)}
      ></Navbutton>
      <div className="flex">
        <Navbutton
          title="منو"
          color="blue"
          icon={<FiShoppingCart />}
          customFunc={() => handleClick("cart")}
        ></Navbutton>
        <Navbutton
          title="منو"
          color="blue"
          dotcolor="#03C9D7"
          icon={<BsChatLeft />}
          customFunc={() => handleClick("chat")}
        ></Navbutton>
        <Navbutton
          title="منو"
          color="blue"
          dotcolor="#03C9D7"
          icon={<RiNotification3Line />}
          customFunc={() => handleClick("notification")}
        ></Navbutton>
        <TooltipComponent content="پروفایل">
          <div
            className="flex items-center cursor-pointer gap-2 p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userprofile")}
          >
            <Image
              src={avatar}
              alt="Picture of the author"
              width={50}
              height={50}
              className="rounded-full"
            ></Image>
            <p>
              <span className="text-gray-400 text-14">سلام، </span>
              {"  "}
              <span className="text-gray-400 text-14 font-bold ml-1">بابک</span>
            </p>
            <MdKeyboardArrowDown></MdKeyboardArrowDown>
          </div>
        </TooltipComponent>
        {isclicked.cart && <Cart />}
        {isclicked.chat && <Chat />}
        {isclicked.notification && <Notification />}
        {isclicked.userprofile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
