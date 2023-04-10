import Image from "next/image";
import React from "react";
import bgImage from "../../public/images/FAQBg.svg";
import footerImage from "../../public/images/Footer.png";
import howItWorksSVG from "../../public/images/howItWorksBG.svg";
import FAQAccordion from "../FAQAccordion";
import Footer from "../Footer";
const FAQSection = () => {
  return (
    <div className="w-screen max-w-[1440px] mx-auto pt-6 sm:pt-[80px] bg-[#1D1B29] flex flex-col sm:flex-row overflow-hidden">
      <div className="relative flex flex-col sm:items-end sm:-translate-x-[40%] md:-translate-x-[35%] xl:-translate-x-[40%]">
        <div className="font-semibold sm:font-bold text-[30px] sm:text-[36px] text-white ml-6 sm:ml-0">
          <span className="block ">Frequently</span>
          <span>Asked Questions</span>
        </div>
        <Image
          src={bgImage}
          width={748}
          height={766}
          alt="hi"
          className="translate-y-[10%] hidden sm:block"
        />
      </div>
      <div className="absolute right-0 flex-row-reverse hidden overflow-hidden sm:flex">
        <Image
          src={howItWorksSVG}
          height={810}
          alt=""
          className="translate-x-1/4"
        />
      </div>
      <div className="z-10 px-6 sm:px-0">
        <FAQAccordion />
      </div>
    </div>
  );
};

export default FAQSection;
