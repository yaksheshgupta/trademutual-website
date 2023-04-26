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
    ans: (
      <span>
        TradeMutual value proposition is unique as it makes crypto
        trading as easy as making a stablecoin deposit.
        . With TradeMutual, the average retail investor can earn profits from crypto trading without having to learn complicated trading strategies.
      </span>
    ),
  },
  {
    qs: "How do $TRAM holders benefit?",
    ans: (
      <ol className="list-decimal">
        <li>Receive 20% of profits in stablecoin</li>
        <li>Earn from $TRAM price appreciation</li>
        <li>DEX liquidity providers earn rewards in $TRAM tokens</li>
        <li>
          Participate in community programs and earn rewards
        </li>
        <li>
          Holders with 108K+ $TRAM Token get access to the{" "}
          <a
            href="https://docs.trademutual.org/tokenomics/investor-club"
            className="text-white underline"
            target="_blank"
          >
            Investor Club
          </a>
        </li>
        <li>Participate in decentralized governance</li>
      </ol>
    ),
  },
  {
    qs: "How do platform investors benefit?",
    ans: (
      <ol className="list-decimal">
        <li>Receive 70% of trading profits in the stablecoin</li>
        <li>
          Investors depositing $8000+ get access to the{" "}
          <a
            href="https://docs.trademutual.org/tokenomics/investor-club"
            className="text-white underline"
            target="_blank"
          >
            Investor Club
          </a>
        </li>
        <li>
          Investors earn profits without having to trade themselves.
        </li>
      </ol>
    ),
  },
  {
    qs: "What type of cryptocurrencies TradeMutual will trade in?",
    ans: (
      <span>
        At TradeMutual, we focus on trading bluechip cryptocurrencies with strong tokenomics that meet our threshold for market cap and daily trading volume. This threshold is adjusted based on market conditions. Generally, we trade cryptocurrencies that are in the top-50 list by market cap, except for any meme tokens.





      </span>
    ),
  },
];

const AccordionItem = ({ headerContent, ...rest }: IProps) => (
  <Item
    {...rest}
    header={({ state }) => (
      <div className="flex items-center justify-start w-full p-4 space-x-4">
        <div className="relative w-6 aspect-square">
          {state.isEnter ? (
            <Image unoptimized src={minusIcon} alt="accordion icon" />
          ) : (
            <Image unoptimized src={plusIcon} alt="accordion icon" />
          )}
        </div>
        <div className="justify-start flex-1">
          <h2 className="text-sm font-bold text-white sm:text-base">
            {headerContent}
          </h2>
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
      className="rounded-b-xl xl:w-[600px] 2xl:w-[650px] z-10"
    >
      {/** Accordion Filter Item Starts */}
      {FAQs.map((faq, index) => (
        <div
          key={index}
          className="p-px mb-8 bg-gradient-to-r from-white via-white to-transparent rounded-tl-lg rounded-bl-[35px]"
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
