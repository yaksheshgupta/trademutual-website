import Image from "next/image";
import React from "react";
import mobileBG from "../../public/images/MobileBg.png";
import HeroSectionLabelItem from "../HeroSectionLabeltem";
const HeroSectionMobile = () => {
  return (
    <div className="relative block sm:hidden w-screen min-h-screen bg-[#1D1B29] mb-[10vh]">
      <Image src={mobileBG} fill alt="mobile background image" />
      <div className="absolute inset-x-0 top-0 grid place-items-center">
        <div className="max-w-[90vw] text-center mx-auto mt-[15vh]">
          <span className="text-white font-bold text-[40px] block leading-none">
            Invest in the Future of Money
          </span>
          <div className="mt-6">
            <span className="font-light text-white text-opacity-60">
              Our cutting-edge technology and experienced traders work together
              to generate optimal returns for you. Be a part of the future of
              finance with trademutual
            </span>
          </div>
        </div>
        <button className="py-3 px-7 text-sm rounded-xl bg-gradient-to-r text-white from-[#29FAFE] via-[#DA2CFE] to-[#F7B53B] rounded-br-[50px] max-w-fit mt-7">
          Join Whitelist
        </button>
      </div>
      <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 text-xs">
        <div>
          <HeroSectionLabelItem label="Enjoy the benefits of trading without the effort" />
        </div>
        <div>
          <HeroSectionLabelItem label="Access to professional traders  who handle all the trading" />
        </div>
        <div>
          <HeroSectionLabelItem label="No need to learn how to trade" />
        </div>
        <div>
          <HeroSectionLabelItem label="Potential for steady returns on investment" />
        </div>
      </div>
    </div>
  );
};

export default HeroSectionMobile;
