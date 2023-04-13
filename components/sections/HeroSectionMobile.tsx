import { twclsx } from "@/utils/twclsx";
import Image from "next/image";
import React from "react";
import mobileBG from "../../public/images/TryBg.webp";
import TMIcon from "../../public/images/TMIcon.webp";
import HeroSectionLabelItem from "../HeroSectionLabeltem";
import { LINKS } from "@/utils/config";

const heroPoints = [
  {
    label: "Enjoy the benefits of trading without the effort",
    bgColor: "#9E73FE",
  },
  {
    label: "Access to professional traders  who handle all the trading",
    bgColor: "#E24FCD",
  },
  {
    label: "No need to learn how to trade",
    bgColor: "#E24FCD",
  },
  {
    label: "Potential for steady returns on investment",
    bgColor: "#56C6FE",
  },
];

const HeroSectionMobile = () => {
  return (
    <div className="relative block lg:hidden w-screen min-h-screen bg-[#1D1B29] mx-auto mb-[10vh]">
      <Image src={mobileBG} fill alt="mobile background image" />
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] scale-[0.6] sm:scale-[0.9] sm:top-[55%]">
        <Image src={TMIcon} alt="mobile background image" />
      </div>
      <div className="absolute inset-x-0 top-0 grid place-items-center">
        <div className="max-w-[90vw] text-center mx-auto mt-[15vh]">
          <span className="text-white font-bold text-[40px] sm:text-[60px] block leading-none">
            Invest in the Future of Money
          </span>
          <div className="mt-6">
            <span className="font-light text-white sm:text-2xl text-opacity-60">
              Our cutting-edge technology and experienced traders work together
              to generate optimal returns for you. Be a part of the future of
              finance with trademutual
            </span>
          </div>
        </div>
        <button className="py-3 px-7 text-sm rounded-xl bg-gradient-to-r text-white from-[#29FAFE] via-[#DA2CFE] to-[#F7B53B] rounded-br-[50px] sm:text-xl max-w-fit mt-7">
          <a href={LINKS.JOIN_WAITLIST}>Join Whitelist</a>
        </button>
      </div>
      <div className="absolute inset-x-0 max-w-[450px] mx-auto bottom-0 grid grid-cols-2 gap-2 text-xs">
        {heroPoints.map((point, index) => (
          <div className="relative sm:scale-[1.1]" key={index}>
            <div
              className="absolute w-6 rounded-full top-1 left-3 aspect-square"
              style={{ backgroundColor: point.bgColor }}
            />
            <HeroSectionLabelItem label={point.label} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSectionMobile;
