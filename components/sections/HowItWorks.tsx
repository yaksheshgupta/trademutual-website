import Image from "next/image";
import depositStableCoinIcon from "../../public/images/depositStableCoinIcon.svg";
import tradeCrypto from "../../public/images/tradeCryptoIcon.svg";
import earnProfitIcon from "../../public/images/earnProfitIcon.svg";
import howItWorksSVG from "../../public/images/Frame684912.svg";
import GradientBox from "../GradientBox";
const HowItWorks = () => {
  {/* PRAKASH- USE (USDT/USDC) 
    2. experts
    3. Whole
*/}
  const howItWorks = [
    {
      icon: depositStableCoinIcon,
      label: "Investors deposit stablecoins (USDT/USDC) on TradeMutual",
    },
    { 
      icon: tradeCrypto,
      label: "TradeMutual's experts invests pooled funds in early stage projects",
    },
    {
      icon: earnProfitIcon,
      // label: "TradeMutual shares profits with investors based on their investment amount and project performance",
      label: "Users can redeem their share of profits based on their investment amount and duration",
    },
  ]; 
  return (
    <section
      id="how-it-works"
      className="bg-[#1D1B29] w-screen sm:grid md:place-items-center mb-[10vh] scroll-mt-16 "
    >
      <GradientBox />
      <div className="w-full mx-auto max-w-[1440px] relative">
        {/* <div className="absolute flex-row-reverse hidden w-full md:flex">
          <Image src={howItWorksSVG} height={710} alt="" />
        </div> */}
        <div className="flex flex-col items-center w-full h-full sm:justify-center">
          <div className="flex flex-col items-center justify-center w-full px-5 lg:pl-[150px] lg:items-start 2xl:pl-0">
            <h1 className="text-[30px] sm:text-[50px] 2xl:text-[60px] text-white font-semibold">
              How it works
            </h1>
            <div className="max-w-[800px] text-center lg:text-left">
              {/* <span className="text-sm font-light text-white sm:text-lg xl:text-xl text-opacity-60">
                Our cutting-edge technology and experienced traders work
                together to generate optimal returns for you. Be a part of the
                future of finance with
              </span> */}
            </div>
          </div>
          <div className="flex flex-col justify-center lg:scale-[0.8] xl:scale-100 lg:flex-row ">
            {howItWorks.map((item, index) => {
              return (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative w-[340px]  xl:w-[394px] h-[349px]">
                    <Image src={item.icon} draggable={false} className="select-none" fill alt="icon" />
                  </div>
                  <div className="max-w-[350px] text-center ">
                    <span className="text-lg font-light text-white text-opacity-60">
                      {item.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
