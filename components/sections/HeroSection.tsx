import { LINKS } from "@/utils/config";
import Image from "next/image";
import Link from "next/link";
import bgImage from "../../public/images/HeroBackground.webp";
import HeroSectionLabelItem from "../HeroSectionLabeltem";
const HeroSection = () => {
  return (
    <section className="w-screen  bg-[#1d1b29] mb-[10vh] hidden lg:block">
      <div className="w-full max-w-[1440px] mx-auto ">
        <div className="relative w-full aspect-[45/32]">
          <Image
            src={bgImage}
            fill
            alt="hi"
            priority
            className="pointer-events-none select-none"
            draggable={false}
          />
          <div className="absolute inset-0"></div>
          <div className="absolute left-[76.5%] top-[11%] max-w-[280px] 2xl:left-[79%] 2xl:top-[12.5%] xl:left-[78%] xl:top-[12.5%] ">
            <HeroSectionLabelItem label="Profit from Crypto Trading in any market condition" />
          </div>
          <div className="absolute 2xl:left-[74.5%] 2xl:top-[28.5%] xl:left-[73.5%] xl:top-[28%] max-w-[280px] left-[72%] top-[27%]">
            <HeroSectionLabelItem label="Earn profits without trading yourself" />
          </div>
          <div className="absolute 2xl:left-[71%] 2xl:top-[58.5%] xl:left-[69.5%] xl:top-[58.5%] left-[68%] top-[57%] max-w-[280px]">
            <HeroSectionLabelItem label="Strong tokenomics for sustainable growth" />
          </div>
          <div className="absolute left-[76%] top-[81%] xl:left-[77.5%] xl:top-[82%] 2xl:left-[78.5%] 2xl:top-[81%] max-w-[280px]">
            <HeroSectionLabelItem label="Exclusive benefits for Investors Club members" />
          </div>

          <div className="absolute top-0 max-w-[50%]  left-0 bottom-0 pl-10 xl:pl-[100px] 2xl:pl-[116px] flex items-center scale-[0.7] xl:scale-90 2xl:scale-100">
            <div className="flex flex-col justify-center ">
              <div className="text-[60px] text-white font-bold">
                Discover the Benefits of
              </div>
              <div className="text-[60px] text-white font-bold">
                Crypto Trading
              </div>
              <div className="text-[60px] text-white font-bold">
               with TradeMutual
              </div>
              <div className="max-w-[525px] mt-8">
                <span className="text-[22px] text-opacity-60 text-white leading-[42px] font-light">
                  TradeMutual simplifies crypto trading -
                  <br />
                  deposit stablecoins on our platform and let our experts trade
                  bluechip crypto on your behalf and generate profits.
                </span>
              </div>
              <Link href="/airdrop" className="max-w-fit">
                <button className="py-4 px-14 text-[22px] rounded-xl bg-gradient-to-r text-white from-[#29FAFE] via-[#DA2CFE] to-[#F7B53B] rounded-br-[50px] l max-w-fit mt-[64px]">
                  Join Airdrop
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
