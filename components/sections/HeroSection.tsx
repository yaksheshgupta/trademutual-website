import { LINKS } from "@/utils/config";
import Image from "next/image";

import bgImage from "../../public/images/HeroBackground.webp";
import HeroSectionLabelItem from "../HeroSectionLabeltem";
const HeroSection = () => {
  return (
    <section className="w-screen  bg-[#1d1b29] mb-[10vh] hidden lg:block">
      <div className="w-full max-w-[1440px] mx-auto ">
        <div className="relative w-full aspect-[45/32]">
          <Image src={bgImage} fill alt="hi" priority />
          <div className="absolute left-[76.5%] top-[11%] max-w-[280px] 2xl:left-[79%] 2xl:top-[12.5%] xl:left-[78%] xl:top-[12.5%] ">
            <HeroSectionLabelItem label="Enjoy the benefits of trading without the effort" />
          </div>
          <div className="absolute 2xl:left-[74.5%] 2xl:top-[28.5%] xl:left-[73.5%] xl:top-[28%] max-w-[280px] left-[72%] top-[27%]">
            <HeroSectionLabelItem label="Access to professional traders who handle all the trading" />
          </div>
          <div className="absolute 2xl:left-[71%] 2xl:top-[58.5%] xl:left-[69.5%] xl:top-[58.5%] left-[68%] top-[57%] max-w-[280px]">
            <HeroSectionLabelItem label="No need to learn how to trade" />
          </div>
          <div className="absolute left-[76%] top-[81%] xl:left-[77.5%] xl:top-[82%] 2xl:left-[78.5%] 2xl:top-[81%] max-w-[280px]">
            <HeroSectionLabelItem label="Potential for steady returns on investment" />
          </div>

          <div className="absolute top-0 left-0 bottom-0 pl-10 xl:pl-[100px] 2xl:pl-[116px] flex items-center scale-[0.7] xl:scale-90 2xl:scale-100">
            <div className="flex flex-col justify-center ">
              <div className="text-[80px] text-white font-bold">Invest</div>
              <div className="text-[80px] text-white font-bold">
                in the Future
              </div>
              <div className="text-[80px] text-white font-bold">of Money</div>
              <div className="max-w-[525px] mt-8">
                <span className="text-[22px] text-opacity-60 text-white leading-[42px] font-light">
                  Our cutting-edge technology and experienced traders work
                  together to generate optimal returns for you. Be a part of the
                  future of finance with trademutual
                </span>
              </div>
              <button className="py-4 px-14 text-[22px] rounded-xl bg-gradient-to-r text-white from-[#29FAFE] via-[#DA2CFE] to-[#F7B53B] rounded-br-[50px] l max-w-fit mt-[84px]">
                <a href={LINKS.JOIN_WAITLIST}>Join Whitelist</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
