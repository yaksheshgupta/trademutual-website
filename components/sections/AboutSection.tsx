import Link from "next/link";
import Image from 'next/image';
import yakshesh from "../../public/images/yakshesh.png";
import prakash from "../../public/images/prakash.png";
import Shreyak from "../../public/images/shreyak.jpeg";
import GradientBox from "../GradientBox";
import IconL from "../../public/images/IconL.svg";
import IconT from "../../public/images/IconT.svg";
const AboutSection = () => {
    const coFounders = [
        {
            index: 1,
            name: 'Prakash Kumar',
            role: 'Co-Founder',
            description: 'Ex-CEO @ Apple Ex-CEO @ Google Ex-CEO @ Netfix Ex-CEO @ Samsung.',
            image: prakash,
            linkedin: 'https://www.linkedin.com/in/prakash-kumar-50321a2/',
            twitter: 'https://www.twitter.com/',
        },
        {
            index: 2,
            name: 'Shreyak Upadhyay',
            role: 'Co-Founder',
            description: 'Ex-CEO @ Apple Ex-CEO @ Google Ex-CEO @ Netfix Ex-CEO @ Samsung.',
            image: Shreyak,
            linkedin: 'https://www.linkedin.com/in/shreyakupadhyay/',
            twitter: 'https://twitter.com/shreyakupadhyay',
        },
        {
            index: 3,
            name: 'Yakshesh Gupta',
            role: 'Co-Founder',
            description: 'Ex-CEO @ Apple Ex-CEO @ Google Ex-CEO @ Netfix Ex-CEO @ Samsung.',
            image: yakshesh,
            linkedin: 'www.linkedin.com/in/yaksheshg',
            twitter: 'https://twitter.com/GuptaYakshesh',
        },
    ];

    return (
        <>
            <section id="about" className="w-screen bg-[#1d1b29] mt-[10vh] lg:mt-[15vh] mb-[10vh]">
                <GradientBox />
                <div className="w-full mx-auto max-w-[1440px] relative">
                    <div className="flex flex-col items-center w-full h-full sm:justify-center">
                        <div className="flex flex-col items-center justify-center w-full px-5 lg:pl-[150px] lg:items-start 2xl:pl-0">
                            <h1 className="text-[30px] sm:text-[50px] 2xl:text-[60px] text-white font-semibold">
                                Meet the brain behind Trade Mutual
                            </h1>
                            <div className="max-w-[600px] text-center lg:text-left">
                                <span className="text-sm font-light text-white sm:text-lg xl:text-xl text-opacity-60">
                                    We are good We are good We are good We are good We are good
                                </span>
                            </div>
                            <div className="container mx-auto my-5 ">
                                <div className="flex justify-center ">
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8  max-w-6xl">
                                        {coFounders.map((coFounder) => (
                                            <div key={coFounder.name} className="border-white border-2 hover:bg-white/[0.08] shadow-md p-6 rounded max-w-5xl ">
                                                <div className="flex justify-center">
                                                    <div className="rounded-full overflow-hidden w-3/5 h-48 mb-5">
                                                        <Image
                                                            src={coFounder.image}
                                                            alt={coFounder.name}
                                                        />
                                                    </div>
                                                </div>
                                                <h2 className="text-xl font-bold mb-2 text-white">{coFounder.name}</h2>
                                                <p className="text-white text-opacity-80">{coFounder.role}</p>
                                                <p className="text-white text-opacity-50">{coFounder.description}</p>
                                                <div className="flex mt-4 ">
                                                    {/* <Link
                            href={coFounder.linkedin}
                            className="mr-2 text-blue-500 hover:text-blue-600"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            LinkedIn
                          </Link> */}
                                                    <Link rel="canonical" href={coFounder.twitter} target="_blank" key={coFounder.index} className="mr-3 max-w-[35px]">
                                                        <Image className="select-none " draggable={false} key={coFounder.index} src={IconT} alt={coFounder.name} />
                                                    </Link>
                                                    {/* <Link
                                                        href={coFounder.twitter}
                                                        className="text-blue-500 hover:text-blue-600"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        Twitter
                                                    </Link> */}
                                                    <Link rel="canonical" href={coFounder.linkedin} target="_blank" key={coFounder.index} className="mr-3 max-w-[35px]">
                                                        <Image className="select-none " draggable={false} key={coFounder.index} src={IconL} alt={coFounder.name} />
                                                    </Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection;
