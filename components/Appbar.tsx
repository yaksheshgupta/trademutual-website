import React, { useState } from "react";
import Image from "next/image";
import logo from "../public/images/TMLogo.svg";
import Drawer from "./Drawer";
import { LINKS } from "@/utils/config";
import Link from "next/link";

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
    <nav className="fixed z-[999] top-0 flex w-full lg:w-[calc(100vw-100px)] py-4  rounded-full bg-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-10 max-w-[1440px]  left-[50%] -translate-x-[50%] pl-6  sm:pl-[90px] 2xl:pl-[116px] items-center">
      <Link rel="canonical" href="/">
        <Image draggable={false} className="select-none" unoptimized src={logo} alt="TM Logo" height={33} width={180} />
      </Link>
      <div className="hidden ml-auto text-[17px] font-normal text-white text-opacity-50 lg:flex space-x-7">
        <Link href="/#how-it-works" scroll={false}>
          How it works
        </Link>
        <Link href="/#tokeonomics" scroll={false}>
          Tokenomics
        </Link>
        <Link href="/" scroll={false}>
          About
        </Link>
        <Link rel="canonical" href={LINKS.LITE_PAPER} target="_blank">
          Litepaper
        </Link>
        {/* <a href="/airdrop">Airdrop</a> */}
      </div>
      <Link rel="canonical" href="/airdrop" aria-label="Apply for airdrop">
        <button className="hidden lg:block py-2 px-8 mr-4 text-base  rounded-xl bg-gradient-to-r text-white from-[#29FAFE] via-[#DA2CFE] to-[#F7B53B] rounded-br-[50px] max-w-fit ml-7">
          Join Airdrop
          {/* <a href={LINKS.JOIN_WAITLIST}>Join Airdrop</a> */}
        </button>
      </Link>
      <div className="ml-auto mr-6 lg:hidden">
        <div onClick={() => setAppBarOpen(true)}>
          <HamburgerIcon />
        </div>
      </div>
      <Drawer
        isFullScreen
        containerId="body-container"
        onClose={() => setAppBarOpen(false)}
        opened={isAppBarOpen}
        customStyle="pt-[10vh] flex flex-col"
      >
        <div className="flex px-6">
          <Image draggable={false} className="select-none" unoptimized src={logo} alt="TM Logo" height={33} width={180} />
          <div className="ml-auto">
            <div onClick={() => setAppBarOpen(false)}>
              <CrossIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-col text-xl text-white space-y-7 mt-[8vh] p-6">
          <Link
            href="/#how-it-works"
            scroll={false}
            onClick={() => setAppBarOpen(false)}
          >
            How it works
          </Link>
          <Link
            href="/#tokeonomics"
            scroll={false}
            onClick={() => setAppBarOpen(false)}
          >
            Tokenomics
          </Link>

          <Link href="/" scroll={false} onClick={() => setAppBarOpen(false)}>
            About
          </Link>
          <Link
            rel="canonical"
            href={LINKS.LITE_PAPER}
            target="_blank"
            onClick={() => setAppBarOpen(false)}
          >
            Litepaper
          </Link>
          {/* <a href={LINKS.LITE_PAPER} onClick={() => setAppBarOpen(false)}>
            Airdrop
          </a>*/}
          <Link rel="canonical" href="/airdrop" aria-label="Apply for airdrop">
            <button className="py-2 px-8 mr-4 text-base  rounded-xl bg-gradient-to-r text-white from-[#29FAFE] via-[#DA2CFE] to-[#F7B53B] rounded-br-[50px] max-w-fit lg:ml-7">
              Join Airdrop
              {/* <a href={LINKS.JOIN_WAITLIST}>Join Airdrop</a> */}
            </button>
          </Link>
        </div>
        <div className="w-full flex-1   bg-gradient-to-r from-[#29FAFE] via-[#DA2CFE] to-[#F7B53B]">
          <div className="w-full h-full bg-gradient-to-b from-[#1d1b29] to-transparent"></div>
        </div>
      </Drawer>
    </nav>
  );
};
export default Appbar;
