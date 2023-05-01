import Image from "next/image";
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
          <div className="flex flex-col items-center justify-center w-full">
            <h2 className="my-6 text-xl font-bold text-center text-white md:text-4xl">
              Please register for $TRAM token phase 1 airdrop{" "}
            </h2>
          </div>
          <div className="relative w-[80%] h-[30vh] lg:h-[50vh] ">
            <Image
              src="/images/Long_Logo.png"
              fill
              alt="icon"
              className="rounded-xl"
            />
          </div>
          <div className="w-full max-w-3xl mt-6">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScq29QD7FhuUjhiaicRbPaNnHlm8EfUrgXctSj54rfC3dIxsQ/viewform?embedded=true"
              width="100%"
              height="1600"
            >
              Form Loading....
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Airdrop;
