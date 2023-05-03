import { twclsx } from "@/utils/twclsx";
import Image from "next/image";
import React from "react";
import mobileBG from "../../public/images/TryBg.webp";
import TMIcon from "../../public/images/TMIcon.webp";
import HeroSectionLabelItem from "../HeroSectionLabeltem";
import { LINKS } from "@/utils/config";
import Link from "next/link";

const heroPoints = [
  {
    label: "Profit from Crypto Trading in any market condition",
    bgColor: "#9E73FE",
  },
  {
    label: "Earn profits without trading yourself",
    bgColor: "#E24FCD",
  },
  {
    label: "Strong tokenomics for sustainable growth",
    bgColor: "#E24FCD",
  },
  {
    label: "Exclusive benefits for Investors Club members",
    bgColor: "#56C6FE",
  },
];

const HeroSectionMobile = () => {
  return (
    <section className="relative block lg:hidden w-screen min-h-screen bg-[#1D1B29] mx-auto mb-[10vh]">
      <Image src={mobileBG} className="select-none" draggable={false} priority fill alt="mobile background image" />
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] scale-[0.6] sm:scale-[0.9] sm:top-[55%]">
        <Image src={TMIcon} className="select-none" draggable={false} priority alt="mobile background image" />
      </div>
      <div className="absolute inset-x-0 top-0 grid place-items-center">
        <div className="max-w-[90vw] text-center mx-auto mt-[15vh]">
          <span className="text-white font-bold text-[25px] sm:text-[60px] block leading-none">
            Discover the Benefits of Crypto Trading with TradeMutual
          </span>
          <div className="mt-6 text-sm">
            <span className="font-light text-white sm:text-2xl text-opacity-60">
              TradeMutual simplifies crypto trading -
              <br />
              deposit stablecoins on our platform and let our experts trade
              bluechip crypto on your behalf and generate profits.
            </span>
          </div>
        </div>
        <button className="py-3 px-7 text-sm rounded-xl bg-gradient-to-r text-white from-[#29FAFE] via-[#DA2CFE] to-[#F7B53B] rounded-br-[50px] sm:text-xl max-w-fit mt-7">
          <Link rel="canonical" href="/airdrop" aria-label="Apply for airdrop">
            Join Airdrop
          </Link>
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
    </section>
  );
};

export default HeroSectionMobile;
