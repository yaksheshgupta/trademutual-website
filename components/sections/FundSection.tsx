import Image from 'next/image';
import fundImg from '@/public/images/fundImg1.png'; // Adjust the import path if necessary

const FundSection = () => {
    return (
        <section
            id="fundSection"
            className="relative mb-[10vh] scroll-mt-16 mx-20"
            style={{ height: "auto" }}
        >
            {/* Image Container */}
            <div className="w-full h-[80vh] relative overflow-hidden rounded-[50px] ">
                {/* Next Image */}
                <Image
                    src={fundImg}
                    alt="Fund Image"
                    className="select-none opacity-80 object-cover"
                />
            </div>

            {/* Text Overlay for the headline */}
            <div className="absolute z-10 top-0 left-0 w-full h-[80vh] flex flex-col justify-between px-4 sm:px-[5vw] text-center text-white pt-20">
                {/* Headline */}
                <h1 className="text-[15px] sm:text-[40px] md:text-[40px] lg:text-[45px] font-semibold mb-2 sm:mb-4 backdrop-blur-[50px]">
                    Launching our first early stage investment Fund <u>SOON</u>!!
                </h1>
                {/* Centered text */}
                <div className="max-w-[90%] sm:max-w-[80%] mx-auto">
                    <h2 className="text-sm sm:text-base md:text-[25px]">
                        Early stage fund will invest in promising crypto projects early in the
                        seed round, private sale, and IDO stages. Investing in projects in early stage
                        can be very profitable and it will allow retail investors to earn high returns.
                    </h2>
                </div>
                {/* Placeholder for any bottom content, adjust as needed */}
                <div></div>
            </div>
        </section>
    )
}

export default FundSection;
