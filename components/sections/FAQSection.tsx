import { LINKS } from "@/utils/config";
import Image from "next/image";
import React from "react";
import bgImage from "../../public/images/FAQBg.svg";
import footerImage from "../../public/images/Footer.png";
import howItWorksSVG from "../../public/images/howItWorksBG.svg";
import FAQAccordion from "../FAQAccordion";
import Footer from "../Footer";
import GradientBox from "../GradientBox";
const FAQSection = () => {
  return (
    <div
      id="faq"
      className="w-screen max-w-[1440px] mx-auto pt-6 lg:pt-[80px] bg-[#1D1B29] flex flex-col lg:flex-row overflow-hidden"
    >
      <GradientBox />
      <div className="relative flex flex-col lg:items-end lg:-translate-x-[35%]">
        <div className="font-semibold lg:font-bold text-[30px] lg:text-[36px] text-white ml-6 lg:ml-0">
          <span className="block ">Frequently</span>
          <span>Asked Questions</span>
          <div className="mt-2 mb-6 lg:mt-6">
            <a
              href={LINKS.LEARN_MORE}
              target="_blank"
              className="py-3 px-7 text-base font-normal lg:px-10 lg:py-4 bg-white rounded-full bg-opacity-10 backdrop-filter backdrop-blur-2xl lg:text-[22px] text-white "
            >
              Learn more
            </a>
          </div>
        </div>
        <Image
          src={bgImage}
          unoptimized
          width={748}
          height={766}
          alt="hi"
          className="translate-y-[10%] hidden lg:block"
        />
      </div>
      <div className="absolute right-0 flex-row-reverse hidden overflow-hidden xl:flex">
        <Image
          unoptimized
          src={howItWorksSVG}
          height={810}
          alt=""
          className="translate-x-1/4"
        />
      </div>
      <div className="z-10 px-6 lg:px-0 lg:-translate-x-1/4">
        <FAQAccordion />
      </div>
    </div>
  );
};

export default FAQSection;
