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
        TradeMutual value proposition is unique and currently there is no crypto
        project with a similar business model. Platforms such as DAO ventures,
        raise money from retail investors and invest in early-stage crypto
        startups. Such platforms are not our competitors. Our business model is
        to pool funds from retail investors and use that fund to trade
        cryptocurrencies to generate profits. Given our focus on transparency,
        fund safety, trustworthiness, and long-term vision we are confident that
        we will win the interest of retail investors.
      </span>
    ),
  },
  {
    qs: "How will $TRAM holders benefit?",
    ans: (
      <ol className="list-decimal">
        <li>Receive 20% of trading profits in stablecoin</li>
        <li>Earn through $TRAM price appreciation</li>
        <li>DEX liquidity providers earn rewards in $TRAM tokens</li>
        <li>
          Can participate in community programs and earn rewards in stablecoin
        </li>
        <li>
          Those holding a minimum of 108K $TRAM get access to the{" "}
          <a
            href="https://docs.trademutual.org/tokenomics/investor-club"
            className="text-white underline"
          >
            investor club
          </a>
        </li>
        <li>Can participate in DAO governance voting</li>
      </ol>
    ),
  },
  {
    qs: "How will the people investing in the trade-pool benefit?",
    ans: (
      <ol className="list-decimal">
        <li>Receive 70% of trading profits in the stablecoin</li>
        <li>
          Benefit from crypto trading without spending any effort in trading
          themselves
        </li>
        <li>
          Those depositing a minimum of $5000 in trade-pool get access to the{" "}
          <a
            href="https://docs.trademutual.org/tokenomics/investor-club"
            className="text-white underline"
          >
            investor club
          </a>
        </li>
      </ol>
    ),
  },
  {
    qs: "What is the treasury?",
    ans: (
      <span>
        Treasury is a project wallet where 10% share of the profits is
        deposited. Treasury will pay for the operating expenses such as
        staffing, platform operation, etc. During the initial periods the
        treasury will be empty and such expenses will be paid from the funds
        raised in the IDO
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
      className="rounded-b-xl xl:w-[600px] 2xl:w-[650px] z-10"
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
