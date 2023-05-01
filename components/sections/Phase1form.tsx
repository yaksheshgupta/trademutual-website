import Image from "next/image";
import AirdropBG from "../../public/images/Airdrop.webp";
import { useState } from "react";
const Airdrop = () => {
  const [isLoading, setIsLoading] = useState(true);
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
              className="w-full max-w-[500px] max-h-[600px] md:max-h-[700px] md:block aspect-square mr-auto -translate-x-[10vw] md:translate-x-0"
            />
            <h2 className="my-6 text-2xl font-bold text-center text-white md:text-[40px]">
              Please register for
            </h2>
            <span className="mb-6 text-xl text-white md:text-[30px]">
              $TRAM token phase 1 airdrop
            </span>
          </div>

          <div className="w-full  mt-[10vh] z-[99] h-[2000px] lg:h-[1600px] relative">
            <div
              role="status"
              className="absolute inset-0 flex items-center justify-center h-full"
            >
              <svg
                aria-hidden="true"
                className="w-[100px] h-[100px] mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>

            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScq29QD7FhuUjhiaicRbPaNnHlm8EfUrgXctSj54rfC3dIxsQ/viewform?embedded=true"
              width="100%"
              height="100%"
              className="absolute"
            ></iframe>
          </div>
          <Image
            alt=""
            src={AirdropBG}
            fill
            className="w-full max-w-[500px] max-h-[700px] hidden md:block aspect-square ml-auto mt-auto -translate-x-[5vw]"
          />
        </div>
      </div>
    </section>
  );
};

export default Airdrop;
