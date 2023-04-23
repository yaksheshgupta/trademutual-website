import Image from "next/image";
import React from "react";
import footerImg from "../public/images/Footer.png";
import phnFooterImg from "../public/images/PhoneFooter.png";
import footerOverLap from "../public/images/FooterOverlapBG.svg";
import logo from "../public/images/TMLogo.svg";
import Icon1 from "../public/images/Icon1.svg";
import Icon2 from "../public/images/Icon2.svg";
import Icon3 from "../public/images/Icon3.svg";
import Icon4 from "../public/images/Icon4.svg";
import { LINKS } from "@/utils/config";
import Link from "next/link";
const socials = [
  {
    icon: Icon1,
    type: "medium",
    link: "https://medium.com/@trademutualorg",
  },
  {
    icon: Icon2,
    type: "telegram",
    link: "https://t.me/TradeMutual_Community",
  },
  {
    icon: Icon3,
    type: "twitter",
    link: "https://twitter.com/TradeMutual",
  },
  {
    icon: Icon4,
    type: "discord",
    link: "https://discord.com/invite/vEusPkXx",
  },
];
const Footer = () => {
  return (
    <div className="relative bg-[#1D1B29] overflow-hidden grid place-items-center w-screen max-w-[1440px] mx-auto ">
      <div className="absolute translate-y-[80%]">
        <Image src={footerOverLap} unoptimized alt="Footer BG" />
      </div>
      <div className="relative grid place-items-center">
        <Image
          src={footerImg}
          unoptimized
          alt="Footer Background"
          height={635}
          width={1440}
          className="hidden backdrop-filter backdrop-blur-2xl lg:block"
        />
        <Image
          src={phnFooterImg}
          unoptimized
          alt="Footer Background"
          // height={635}
          width={1440}
          className="block backdrop-filter lg:hidden backdrop-blur-2xl"
        />

        <div className="absolute flex flex-col items-center ">
          <Image
            src={logo}
            unoptimized
            alt="TM Logo"
            height={33}
            width={180}
            className="sm:scale-[1.5] 2xl:scale-[2] mt-16"
          />
          <div className="max-w-[600px] 2xl:max-w-[709px] text-xs sm:text-lg text-center text-white text-opacity-50 mt-12 mx-10">
            <span>
              TradeMutual is a retail-oriented crypto investment fund that
              focuses on crypto trading to generate superior returns for its
              investors
            </span>
          </div>
          <div className="flex mt-6 space-x-4">
            {socials.map((social, index) => {
          return <Link href={social.link} target="_blank" key={index}><Image key={index} src={social.icon} alt={social.type} /></Link>;
        })}
          </div>
          <div className="flex mt-12 space-x-5 text-xs font-normal text-white sm:text-sm sm:space-x-7">
            <a href={LINKS.TOKEONOMICS} target="_blank">Tokenomics</a>
            <a href="#how-it-works">How it works</a>
            <a href={LINKS.LITE_PAPER} target="_blank">Litepaper</a>
            <a href={LINKS.ROADMAP} target="_blank">Roadmap</a>
          </div>
          <span className="mt-8 text-xs text-white text-opacity-50 sm:text-sm">
            © TradeMutual 2023 All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
