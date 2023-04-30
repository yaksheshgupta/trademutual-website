import Link from "next/link";
import TradeMutualUtilityItem from "../TradeMutualUtilityItem";
import { LINKS } from "@/utils/config";
import Image from "next/image";
import AirdropBG from "../../public/images/Airdrop.webp";
import Icon01 from "../../public/images/01.svg";
const PHASE1_DESC =
  "This airdrop will happen before $TRAM private sale to reward the early members of the communityThis airdrop will happen before $TRAM private sale to reward the early members of the community";
const Airdrop = () => {
  return (
    <section
      id="airdrop"
      className="w-screen  bg-[#1d1b29] mt-[10vh] lg:mt-[15vh] mb-[10vh]"
    >
      <div className="w-full mx-auto max-w-[1440px] relative">
        {/* <div className="absolute flex-row-reverse hidden w-full md:flex">
          <Image src={howItWorksSVG} height={710} alt="" />
        </div> */}
        <div className="relative flex justify-between w-full h-full min-h-[700px] ">
          <div className="flex flex-col  justify-center xl:w-[70%] px-5 lg:pl-[150px] items-start 2xl:pl-0">
            <h1 className="text-[24px] sm:text-[50px] 2xl:text-[60px] text-white font-semibold">
              AirDrop
            </h1>
            <div className="flex">
              <span className="text-white text-md md:text-xl lg:leading-7 font-extralight text-opacity-60">
                TradeMutual will airdrop $TRAM tokens to its community members
                in three phases. Each phase will benefit a specific section of
                the community.TradeMutual will airdrop $TRAM tokens to its
                community members in three phases. Each phase will benefit a
                specific section of the community.
              </span>
              <div className="xl:hidden relative min-w-[160px] md:min-w-[300px] -translate-y-10">
                <Image
                  alt=""
                  src={AirdropBG}
                  fill
                  className="ml-auto xl:block max-h-[230px] md:min-h-[360px]"
                />
              </div>
            </div>
            <div className="flex flex-col-reverse xl:flex-col">
              <div className="flex flex-col md:flex-row mt-[60px] space-x-6 space-y-6 mr-5 xl:mr-0">
                <div className="relative overflow-hidden rounded-br-[50px]">
                  <TradeMutualUtilityItem
                    heading="Phase 1"
                    label={PHASE1_DESC}
                    showIcon={false}
                    className="lg:max-w-[450px] rounded-br-[50px] "
                  />
                  <div className="absolute max-w-[88px] md:scale-[1.4] bottom-0 md:bottom-8 right-5">
                    <Image src={Icon01} />
                  </div>
                </div>

                <TradeMutualUtilityItem
                  heading="Eligibility"
                  label={PHASE1_DESC}
                  showIcon={false}
                  borderWidth={0.5}
                  className="lg:max-w-[450px] rounded-br-[35px] from-[rgba(255,255,255,0.3)] "
                />
              </div>

              <div className="mt-[60px]">
                <Link
                  href="/phase1form"
                  className=" py-3 px-4 lg:py-4 lg:px-10 mr-4 lg:text-xl font-light  rounded-full bg-gradient-to-r text-white from-[#29FAFE] via-[#DA2CFE] to-[#F7B53B]  max-w-fit"
                >
                  Apply for Phase 1
                </Link>
                <Link
                  href={LINKS.LEARN_MORE}
                  className="px-5 text-white lg:px-8 lg:text-xl"
                >
                  {" "}
                  Know More
                </Link>
              </div>
              <Image
                alt=""
                src={AirdropBG}
                fill
                className="w-full max-w-[500px] hidden xl:block aspect-square ml-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Airdrop;
