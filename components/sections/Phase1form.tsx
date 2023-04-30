import Link from "next/link";
import Image from "next/image";
import Long from "../../public/images/Long Logo.png";

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
                <div className="flex flex-col items-center w-full h-full sm:justify-center ">
                    <div className="flex flex-col items-center justify-center w-full px-5 lg:pl-[150px] lg:items-start 2xl:pl-0">
                        <h2 className=" text-white">
                            Please register for $TRAM token phase 1 airdrop </h2>
                    </div>
                    <div className="relative w-[100%]  xl:w-[80%] h-[50vh] ">
                    <Image src="/images/Long_Logo.png"  fill alt="icon" />
                  </div>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScq29QD7FhuUjhiaicRbPaNnHlm8EfUrgXctSj54rfC3dIxsQ/viewform?embedded=true"   width="640" height="1600"  >Form Loading....</iframe>

                </div>
            </div>
        </section>
    );
};

export default Airdrop;
