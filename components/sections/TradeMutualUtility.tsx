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
          $TRAM Token Utility
        </h1>
        <div className="max-w-[618px] lg:text-center">
          <span className="text-sm font-light text-white lg:text-lg text-opacity-60">
            $TRAM is the ERC20 utility token of TradeMutual platform and it has a maximum supply of <u>11 million tokens</u>. 
            Following token utilities promote the growth of the platform
            and a sustainable TRAM price appreciation
          </span>
        </div>
        <div className="mt-6 lg:mt-16">
          <Link
            rel="canonical"
            href={LINKS.TOKEN_LEARN_MORE}
            target="_blank"
            className="py-3 px-7 lg:px-10 lg:py-4 bg-white rounded-full bg-opacity-10 backdrop-filter backdrop-blur-2xl lg:text-[22px] text-white "
          >
            More About TRAM
          </Link>
        </div>
        <div className="relative hidden lg:block lg:scale-[0.7] 2xl:scale-100">
          <Image
            src={utilityLogo}
            width={721}
            height={709}
            className="select-none"
            draggable={false}
            alt="utility_logo"
          />
          <div className="absolute top-10 -left-1/4">
            <TradeMutualUtilityItem
              className="rounded-tr-[35px] "
              heading="Profit Sharing"
              label="Individuals locking $TRAM tokens will receive a 15% share of the profits, proportional to the quantity they have locked."
              // label="Lock tram tokens to earn 15% profits based on the locked amount." {/* PRAKASH-  choose*/}
            />
          </div>
          <div className="absolute top-10 -right-1/4">
            <TradeMutualUtilityItem
              className="rounded-br-[35px]"
              heading="Investor Club Access"
              label="Investors locking 5K TRAM or more get access to exclusive invite only investor club"
              // {/* PRAKASH-  invite only*/}
            />
          </div>

          <div className="absolute bottom-1/3 -right-1/3">
            <TradeMutualUtilityItem
              className="rounded-tr-[35px]"
              heading="Community Rewards"
              label="Active participation in comunity events"
              // {/* PRAKASH-  DAO proposals or no changes req.*/}
            />
          </div>

          <div className="absolute -bottom-14 right-0 -translate-x-[45%]">
            <TradeMutualUtilityItem
              className="rounded-tr-[35px] rounded-br-[35px] lg:max-w-[425px]"
              heading="Liquidity Provider Rewards"
              label="Liquidity providers earn reward in TRAM tokens."
            />
          </div>

          <div className="absolute bottom-1/3 -left-1/3">
            <TradeMutualUtilityItem
              className="rounded-br-[35px]"
              heading="Governance"
              label="TRAM holders vote on DAO proposals for decentralized governance"
            />
          </div>
        </div>

        <div className="flex flex-col w-full mt-8 space-y-4 lg:hidden">
          <TradeMutualUtilityItem
            className="rounded-tr-[35px]"
            heading="Profit Sharing"
            label="Individuals locking $TRAM tokens will receive a 15% share of the profits, proportional to the quantity they have locked."
              // label="Lock tram tokens to earn 15% profits based on the locked amount." {/* PRAKASH-  choose*/}
          />
          <TradeMutualUtilityItem
            className="rounded-tr-[35px]"
            heading="Investor Club Access"
            label="Investors locking 5K TRAM or more get access to exclusive invite only investor club"
              // {/* PRAKASH-  invite only*/}
          />
          <TradeMutualUtilityItem
            className="rounded-tr-[35px]"
            heading="Community Rewards"
            label="Active participation in comunity events"
            // {/* PRAKASH-  DAO proposals or no changes req.*/}
          />
          <TradeMutualUtilityItem
            className="rounded-tr-[35px]"
            heading="Liquidity Provider Rewards"
            label="Liquidity providers earn reward in TRAM tokens."
            />
          <TradeMutualUtilityItem
            className="rounded-tr-[35px]"
            heading="Governance"
            label="TRAM holders vote on DAO proposals for decentralized governance"
          />
        </div>
      </div>
    </section>
  );
};

export default TradeMutualUtilitySection;
