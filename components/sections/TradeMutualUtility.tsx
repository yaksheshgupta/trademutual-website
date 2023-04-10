import Image from "next/image";
import utilityLogo from "../../public/images/utilityLogo.svg";
import GradientBox from "../GradientBox";
import TradeMutualUtilityItem from "../TradeMutualUtilityItem";
const TradeMutualUtilitySection = () => {
  return (
    <section className="bg-[#1D1B29] w-screen sm:scale-75 2xl:scale-100 mb-[10vh]">
      <GradientBox />
      <div className="w-full max-w-[1440px] mx-auto sm:grid sm:place-items-center px-6 sm:px-0 mt-2">
        <h1 className="text-[30px] sm:text-[60px] font-semibold  text-white">
          Trade Mutual Token Utility
        </h1>
        <div className="max-w-[618px] sm:text-center">
          <span className="text-sm font-light text-white sm:text-lg text-opacity-60">
            $TRAM is the ERC20 utility token of Trade Mutual with a total supply
            of 12 million tokens. It will have following utilities.
          </span>
        </div>
        <button className="py-3 px-7 sm:px-10 sm:py-4 bg-white rounded-full bg-opacity-10 backdrop-filter backdrop-blur-2xl sm:text-[22px] text-white mt-6 sm:mt-16">
          Learn more
        </button>
        <div className="relative hidden sm:block">
          <Image
            src={utilityLogo}
            width={721}
            height={709}
            alt="utility_logo"
          />
          <div className="absolute top-10 -left-1/4">
            <TradeMutualUtilityItem
              className="rounded-tr-[35px]"
              heading="Profit Sharing"
              label="$TRAM holders will receive 20% of the profits generated from crypto trading. It is paid in stablecoin"
            />
          </div>
          <div className="absolute top-10 -right-1/4">
            <TradeMutualUtilityItem
              className="rounded-br-[35px]"
              heading="Investor Club Access:"
              label="Investors holding a minimum of 108K $TRAM tokens (0.1% of max supply) will get access to the investor club"
            />
          </div>

          <div className="absolute bottom-1/3 -right-1/3">
            <TradeMutualUtilityItem
              className="rounded-tr-[35px]"
              heading="Community Rewards:"
              label="$TRAM Holders can participate in community events and earn rewards in stablecoin"
            />
          </div>

          <div className="absolute bottom-0 right-0 -translate-x-[50%]">
            <TradeMutualUtilityItem
              className="rounded-tr-[35px] rounded-br-[35px]"
              heading="Liquidity Provider Rewards:"
              label="DEX liquidity providers will receive rewards in $TRAM tokens"
            />
          </div>

          <div className="absolute bottom-1/3 -left-1/3">
            <TradeMutualUtilityItem
              className="rounded-br-[35px]"
              heading="Governance"
              label="$TRAM holders can vote for decentralized governance"
            />
          </div>
        </div>

        <div className="flex flex-col mt-8 space-y-4 sm:hidden">
          <TradeMutualUtilityItem
            className="rounded-tr-[35px]"
            heading="Profit Sharing"
            label="$TRAM holders will receive 20% of the profits generated from crypto trading. It is paid in stablecoin"
          />
          <TradeMutualUtilityItem
            className="rounded-tr-[35px]"
            heading="Investor Club Access:"
            label="Investors holding a minimum of 108K $TRAM tokens (0.1% of max supply) will get access to the investor club"
          />
          <TradeMutualUtilityItem
            className="rounded-tr-[35px]"
            heading="Community Rewards:"
            label="$TRAM Holders can participate in community events and earn rewards in stablecoin"
          />
          <TradeMutualUtilityItem
            className="rounded-tr-[35px]"
            heading="Liquidity Provider Rewards:"
            label="DEX liquidity providers will receive rewards in $TRAM tokens"
          />
          <TradeMutualUtilityItem
            className="rounded-tr-[35px]"
            heading="Governance"
            label="$TRAM holders can vote for decentralized governance"
          />
        </div>
      </div>
    </section>
  );
};

export default TradeMutualUtilitySection;
