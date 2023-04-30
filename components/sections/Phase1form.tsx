import Image from "next/image";
import AirdropBG from "../../public/images/Airdrop.webp";
const Airdrop = () => {
  return (
    <section
      id="airdrop"
      className="w-screen  bg-[#1d1b29] mt-[10vh] lg:mt-[15vh] mb-[10vh] "
    >
      <div className="w-full mx-auto max-w-[1440px] relative">
        {/* <div className="absolute flex-row-reverse hidden w-full md:flex">
          <Image src={howItWorksSVG} height={710} alt="" />
        </div> */}
        <div className="flex flex-col items-center w-full h-full sm:justify-center">
          <div className="flex flex-col items-center justify-center w-full">
            <Image
              alt=""
              src={AirdropBG}
              fill
              className="w-full max-w-[500px] max-h-[700px] hidden md:block aspect-square mr-auto"
            />
            <h2 className="my-6 text-2xl font-bold text-center text-white md:text-[40px]">
              Please register for
            </h2>
            <span className="mb-6 text-xl text-white md:text-[30px]">
              $TRAM token phase 1 airdrop
            </span>
          </div>

          <div className="w-full  mt-[10vh] z-[99]">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScq29QD7FhuUjhiaicRbPaNnHlm8EfUrgXctSj54rfC3dIxsQ/viewform?embedded=true"
              width="100%"
              height="1600"
            >
              Form Loading....
            </iframe>
          </div>
          <Image
            alt=""
            src={AirdropBG}
            fill
            className="w-full max-w-[500px] max-h-[700px] hidden md:block aspect-square ml-auto mt-auto -translate-x-[5vw] translate-y-[20vh]"
          />
        </div>
      </div>
    </section>
  );
};

export default Airdrop;
