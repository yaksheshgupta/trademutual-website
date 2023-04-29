import Link from "next/link";
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
        <div className="flex flex-col items-center w-full h-full sm:justify-center ">
          <div className="flex flex-col items-center justify-center w-full px-5 lg:pl-[150px] lg:items-start 2xl:pl-0">
            <h1 className="text-[30px] sm:text-[50px] 2xl:text-[60px] text-white font-semibold">
              AirDrop
            </h1>
            <div className="max-w-[800px] text-center lg:text-left">
              <h2 style={{ color: "white" }}>Phase 1</h2>
              <span className="text-sm font-light text-white sm:text-lg xl:text-xl text-opacity-60">
                Madhubala Se Bhi Aala Dikhti Ho
                Meri Nazar Se Tum Ko Dekhu To
                Ho Madhubala Se Bhi Aala Dikhti Ho
                Meri Nazar Se Tum Ko Dekhu To
                <br />
                Sab Kahe Are-Are, Are-Are
                Pagla Gaya Hai Tu
                Samajh Se Hai Pare, Pare, Pare
                Ye Tera Jadoo-Jadoo
                <br />
              </span>
              <h2 style={{ color: "white" }}>Elegibility-</h2>

              <span className="text-sm font-light text-white sm:text-lg xl:text-xl text-opacity-60">

                Zohra Jabee Se Bhi Hasee Lagti Ho
                Meri Nazar Se Tum Ko Dekhu To
                Ho Madhubala Se Bhi Aala Lagti Ho
                Meri Nazar Se Tum Ko Dekhu To
                <br />

                O Mattha Teku Ya Main Chal Doon Nange Paon Kahi
                Aisi Kismat Har Kisi Ke Hisse Aati Nahi
                Nazar Utaru Yaa Main Kar Doon Isko Qaid Kahin
                Aisi Ulfat Har Kisi Ke Haq Mein Aati Nahi


              </span>
              <br />
              <br />
              <h1 style={{ color: "white" }}><Link href="https://docs.trademutual.org/tokenomics/airdrop" target="_blank" style={{ textDecoration: "underline" }} >Learn more about airdrop</Link></h1>
              <button  className="lg:block py-2 px-8 mr-4 text-base  rounded-xl bg-gradient-to-r text-white from-[#29FAFE] via-[#DA2CFE] to-[#F7B53B] rounded-br-[50px] max-w-fit mt-10">
                <Link href="/phase1form">
                  
                  Apply for Phase 1
                  </Link>

              </button>
              <br />
            </div>
          </div>
          {/* <div className="flex flex-col justify-center lg:scale-[0.8] xl:scale-100 lg:flex-row ">
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
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Airdrop;
