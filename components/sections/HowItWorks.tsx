import Image from "next/image";
import tradeCrypto from "../../public/images/tradeCryptoIcon.svg";
import depositStableCoinIcon from "../../public/images/depositStableCoinIcon.svg";
import earnProfitIcon from "../../public/images/earnProfitIcon.svg";
import howItWorksSVG from "../../public/images/howItWorksBG.svg";
import GradientBox from "../GradientBox";
const HowItWorks = () => {
  const howItWorks = [
    {
      icon: depositStableCoinIcon,
      label: "Only takes 5 minutes and needs a single blockchain transaction.",
    },
    {
      icon: tradeCrypto,
      label: "Place a link to token in your profile and your content.",
    },
    {
      icon: earnProfitIcon,
      label: "Click ‘Collect royalties’ to withdraw them to your address.",
    },
  ];
  return (
    <section className="bg-[#1D1B29] w-screen min-h-screen sm:grid md:place-items-center mb-[10vh]">
      <GradientBox />
      <div className="w-full mx-auto max-w-[1440px] relative">
        {/* <div className="absolute flex-row-reverse hidden w-full md:flex">
          <Image src={howItWorksSVG} height={710} alt="" />
        </div> */}
        <div className="flex flex-col items-center w-full h-full sm:justify-center ">
          <div className="flex flex-col items-center justify-center w-full sm:items-start">
            <h1 className="text-[30px] sm:text-[50px] 2xl:text-[60px] text-white font-semibold sm:ml-[100px]">
              How it works
            </h1>
            <div className="max-w-[800px] sm:ml-[100px] text-center sm:text-left">
              <span className="text-sm font-light text-white sm:text-lg xl:text-xl text-opacity-60">
                Our cutting-edge technology and experienced traders work
                together to generate optimal returns for you. Be a part of the
                future of finance with
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center scale-100 sm:flex-row sm:scale-75 xl:scale-100 ">
            {howItWorks.map((item, index) => {
              return (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative w-[340px]  xl:w-[394px] h-[349px]">
                    <Image src={item.icon} fill alt="icon" />
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
