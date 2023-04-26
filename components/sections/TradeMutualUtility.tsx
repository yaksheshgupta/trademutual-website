import { LINKS } from "@/utils/config";
import Image from "next/image";
import utilityLogo from "../../public/images/utilityLogo.svg";
import GradientBox from "../GradientBox";
import TradeMutualUtilityItem from "../TradeMutualUtilityItem";
import Link from "next/link";
const TradeMutualUtilitySection = () => {
  return (
    <section
      id="tokeonomics"
      className="bg-[#1D1B29] w-screen xl:mb-[10vh] scroll-mt-16"
    >
      <GradientBox />
      <div className="w-full max-w-[1440px] mx-auto lg:grid lg:place-items-center px-6 lg:px-0 mt-2">
        <h1 className="text-[30px] lg:text-[60px] font-semibold  text-white">
          Trade Mutual Token Utility
        </h1>
        <div className="max-w-[618px] lg:text-center">
          <span className="text-sm font-light text-white lg:text-lg text-opacity-60">
            $TRAM is the ERC20 utility token of Trade Mutual with a total supply
            of 108 million tokens. The following token utilities are designed to promote sustainable price appreciation
          </span>
        </div>
        <div className="mt-6 lg:mt-16">
          <Link
            href={LINKS.TOKEN_LEARN_MORE}
            target="_blank"
            className="py-3 px-7 lg:px-10 lg:py-4 bg-white rounded-full bg-opacity-10 backdrop-filter backdrop-blur-2xl lg:text-[22px] text-white "
          >
            Learn more
          </Link>
        </div>
        <div className="relative hidden lg:block lg:scale-[0.7] 2xl:scale-100">
          <Image
            src={utilityLogo}
            width={721}
            height={709}
            alt="utility_logo"
          />
          <div className="absolute top-10 -left-1/4">
            <TradeMutualUtilityItem
              className="rounded-tr-[35px] "
              heading="Profit Sharing"
              label="$TRAM holders will receive 20% of the profits generated (paid in stablecoin)"
            />
          </div>
          <div className="absolute top-10 -right-1/4">
            <TradeMutualUtilityItem
              className="rounded-br-[35px]"
              heading="Investor Club Access"
              label="Investors holding 108K+ $TRAM tokens get access to the investor club"
            />
          </div>

          <div className="absolute bottom-1/3 -right-1/3">
            <TradeMutualUtilityItem
              className="rounded-tr-[35px]"
              heading="Community Rewards"
              label="$TRAM holders participate in community events and earn rewards"
            />
          </div>

          <div className="absolute bottom-0 right-0 -translate-x-[50%]">
            <TradeMutualUtilityItem
              className="rounded-tr-[35px] rounded-br-[35px]"
              heading="Liquidity Provider Rewards"
              label="DEX liquidity providers receive rewards in $TRAM tokens"
            />
          </div>

          <div className="absolute bottom-1/3 -left-1/3">
            <TradeMutualUtilityItem
              className="rounded-br-[35px]"
              heading="Governance"
              label="$TRAM holders vote on DAO proposals for decentralized governance"
            />
          </div>
        </div>

        <div className="flex flex-col w-full mt-8 space-y-4 lg:hidden">
          <TradeMutualUtilityItem
            className="rounded-tr-[35px]"
            heading="Profit Sharing"
            label="$TRAM holders will receive 20% of the profits generated (paid in stablecoin)"
          />
          <TradeMutualUtilityItem
            className="rounded-tr-[35px]"
            heading="Investor Club Access:"
            label="Investors holding 108K+ $TRAM tokens get access to the investor club"
          />
          <TradeMutualUtilityItem
            className="rounded-tr-[35px]"
            heading="Community Rewards:"
            label="$TRAM holders participate in community events and earn rewards"
          />
          <TradeMutualUtilityItem
            className="rounded-tr-[35px]"
            heading="Liquidity Provider Rewards:"
            label="DEX liquidity providers receive rewards in $TRAM tokens"
          />
          <TradeMutualUtilityItem
            className="rounded-tr-[35px]"
            heading="Governance"
            label="$TRAM holders vote on DAO proposals for decentralized governance"
          />
        </div>
      </div>
    </section>
  );
};

export default TradeMutualUtilitySection;
