import React, { useState } from "react";
import Image from "next/image";
import logo from "../public/images/TMLogo.svg";
import Drawer from "./Drawer";
const HamburgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="white"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);
const CrossIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={3}
    stroke="white"
    className="w-6 h-6 rotate-45"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>
);

const Appbar = () => {
  const [isAppBarOpen, setAppBarOpen] = useState(false);
  return (
    <div className="absolute z-10 top-0 flex w-screen py-6 max-w-[1440px] left-[50%] -translate-x-[50%] pl-6  sm:pl-[90px] 2xl:pl-[116px] items-center">
      <Image src={logo} alt="TM Logo" height={33} width={180} />
      <div className="hidden ml-auto text-sm font-normal text-white text-opacity-50 sm:flex space-x-7">
        <span>Tokenomics</span>
        <span>How it works</span>
        <span>Lite Paper</span>
        <span>Roadmap</span>
      </div>
      <button className="hidden sm:block py-2 px-8 mr-4 text-base  rounded-xl bg-gradient-to-r text-white from-[#29FAFE] via-[#DA2CFE] to-[#F7B53B] rounded-br-[50px] max-w-fit ml-7">
        Join Whitelist
      </button>
      <div className="ml-auto mr-6 sm:hidden">
        <div onClick={() => setAppBarOpen(true)}>
          <HamburgerIcon />
        </div>
      </div>
      <Drawer
        isFullScreen
        containerId="body-container"
        onClose={() => setAppBarOpen(false)}
        opened={isAppBarOpen}
        customStyle="pt-[10vh] px-6"
      >
        <div className="flex">
          <Image src={logo} alt="TM Logo" height={33} width={180} />
          <div className="ml-auto">
            <div onClick={() => setAppBarOpen(false)}>
              <CrossIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-col text-xl text-white space-y-7 mt-[10vh]">
          <a>Tokeonomics</a>
          <a>How it work</a>
          <a>FAQ</a>
          <a>Litepaper</a>

          <div className="sm:hidden mb-[60px] w-full h-[40vh] absolute bottom-0 left-0 bg-gradient-to-r from-[#29FAFE] via-[#DA2CFE] to-[#F7B53B]">
            <div className="w-full h-full bg-gradient-to-b from-[#1d1b29] to-transparent"></div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Appbar;
