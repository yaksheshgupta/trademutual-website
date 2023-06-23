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
import Icon5 from "../public/images/Icon5.svg";
import { LINKS,SOCIAL_LINKS } from "@/utils/config";
import Link from "next/link";
const socials = [
  {
    icon: Icon1,
    type: "medium",
    link: SOCIAL_LINKS.MEDIUM,
  },
  {
    icon: Icon2,
    type: "telegram",
    link: SOCIAL_LINKS.TELEGRAM,
  },
  {
    icon: Icon3,
    type: "twitter",
    link: SOCIAL_LINKS.TWITTER,
  },
  {
    icon: Icon4,
    type: "discord",
    link: SOCIAL_LINKS.DISCORD,
  },
  {
    icon: Icon5,
    type: "Github",
    link: SOCIAL_LINKS.GITHUB,
  },
];
const Footer = () => {
  return (
    <div className="relative bg-[#1D1B29] overflow-hidden grid place-items-center w-screen max-w-[1440px] mx-auto ">
      <div className="absolute translate-y-[80%]">
        <Image src={footerOverLap} className="select-none" draggable={false} unoptimized alt="Footer BG" />
      </div>
      <div className="relative grid place-items-center">
        <Image
          src={footerImg}
          unoptimized
          alt="Footer Background"
          height={635}
          width={1440}
          draggable={false}
          className="hidden backdrop-filter backdrop-blur-2xl lg:block select-none"
        />
        <Image
          src={phnFooterImg}
          unoptimized
          alt="Footer Background"
          // height={635}
          width={1440}
          className="block backdrop-filter lg:hidden backdrop-blur-2xl select-none"
        />

        <div className="absolute flex flex-col items-center ">
          <Image
            src={logo}
            unoptimized
            alt="TM Logo"
            height={33}
            width={180}
            className="sm:scale-[1.5] 2xl:scale-[2] mt-16 select-none"
          />
          <div className="max-w-[600px] 2xl:max-w-[709px] text-xs sm:text-lg text-center text-white text-opacity-50 mt-12 mx-10">
            {/* <span>
              TradeMutual is a retail-oriented crypto investment fund that
              focuses on crypto trading to generate superior returns for its
              investors
            </span> */}
          </div>
          <div className="flex mt-6 space-x-4">
            {socials.map((social, index) => {
              return (
                <Link rel="canonical" href={social.link} target="_blank" key={index}>
                  <Image className="select-none" draggable={false} key={index} src={social.icon} alt={social.type} />
                </Link>
              );
            })}
          </div>
          <div className="flex mt-12 space-x-5 text-xs font-normal text-white sm:text-sm sm:space-x-7">
            <Link href="/#tokeonomics" scroll={false}>
              Tokenomics
            </Link>
            <Link href="/#how-it-works" scroll={false}>
              How it works
            </Link>
            <Link href={LINKS.LITE_PAPER} target="_blank">
              Litepaper
            </Link>
            <Link href={LINKS.ROADMAP} target="_blank">
              Roadmap
            </Link>
            <Link href="/about" scroll={false}>
              About
            </Link>
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
