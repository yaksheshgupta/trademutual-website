import { twclsx } from "@/utils/twclsx";
import plusIcon from "../public/images/plus-square.svg";
import minusIcon from "../public/images/minus-square.svg";
import {
  Accordion,
  AccordionItemProps,
  AccordionItem as Item,
} from "@szhsin/react-accordion";
import Image from "next/image";

interface IProps extends AccordionItemProps {
  headerContent: string;
}

const FAQs = [
  {
    qs: "What is unique about Trade Mutual?",
    ans: "TradeMutual value proposition is unique and currently there is no crypto project with a similar business model. Platforms such as DAO ventures, raise money from retail investors and invest in early-stage crypto startups. Such platforms are not our competitors. Our business model is to pool funds from retail investors and use that fund to trade cryptocurrencies to generate profits. Given our focus on transparency, fund safety, trustworthiness, and long-term vision we are confident that we will win the interest of retail investors.",
  },
  {
    qs: "What is unique about Trade Mutual?",
    ans: "TradeMutual value proposition is unique and currently there is no crypto project with a similar business model. Platforms such as DAO ventures, raise money from retail investors and invest in early-stage crypto startups. Such platforms are not our competitors. Our business model is to pool funds from retail investors and use that fund to trade cryptocurrencies to generate profits. Given our focus on transparency, fund safety, trustworthiness, and long-term vision we are confident that we will win the interest of retail investors.",
  },
  {
    qs: "What is unique about Trade Mutual?",
    ans: "TradeMutual value proposition is unique and currently there is no crypto project with a similar business model. Platforms such as DAO ventures, raise money from retail investors and invest in early-stage crypto startups. Such platforms are not our competitors. Our business model is to pool funds from retail investors and use that fund to trade cryptocurrencies to generate profits. Given our focus on transparency, fund safety, trustworthiness, and long-term vision we are confident that we will win the interest of retail investors.",
  },
  {
    qs: "What is unique about Trade Mutual?",
    ans: "TradeMutual value proposition is unique and currently there is no crypto project with a similar business model. Platforms such as DAO ventures, raise money from retail investors and invest in early-stage crypto startups. Such platforms are not our competitors. Our business model is to pool funds from retail investors and use that fund to trade cryptocurrencies to generate profits. Given our focus on transparency, fund safety, trustworthiness, and long-term vision we are confident that we will win the interest of retail investors.",
  },
];

const AccordionItem = ({ headerContent, ...rest }: IProps) => (
  <Item
    {...rest}
    header={({ state }) => (
      <div className="flex items-center justify-start w-full p-4 space-x-4">
        <div className="relative w-6 aspect-square">
          {state.isEnter ? (
            <Image src={minusIcon} alt="accordion icon" />
          ) : (
            <Image src={plusIcon} alt="accordion icon" />
          )}
        </div>
        <div className="justify-start flex-1">
          <h5 className="text-sm font-bold text-white sm:text-base">
            {headerContent}
          </h5>
        </div>
      </div>
    )}
    className=""
    contentProps={{ className: "transition-[height]" }}
    buttonProps={{ className: () => "w-full px-2 text-left " }}
  />
);

const FAQAccordion = () => {
  return (
    <Accordion
      allowMultiple
      transition
      className="rounded-b-xl sm:w-[400px] xl:w-[600px] 2xl:w-[450px] z-10"
    >
      {/** Accordion Filter Item Starts */}
      {FAQs.map((faq, index) => (
        <div
          key={index}
          className="p-px my-8 bg-gradient-to-r from-white via-white to-transparent rounded-tl-lg rounded-bl-[35px]"
        >
          <div className="bg-[#1d1b29] p-2 sm:p-6 rounded-tl-lg rounded-bl-[35px]">
            <AccordionItem
              translate="yes"
              headerContent={faq.qs}
              className="my-4"
            >
              {/** Checkbox Filter Section Starts */}
              <div className="py-4 ml-16 text-xs font-light leading-relaxed text-white sm:text-sm text-opacity-60">
                {faq.ans}
              </div>

              <div className="w-full h-2"></div>
            </AccordionItem>
          </div>
        </div>
      ))}
    </Accordion>
  );
};

export default FAQAccordion;
