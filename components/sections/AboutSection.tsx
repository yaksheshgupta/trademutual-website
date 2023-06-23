import Link from "next/link";
import Image from 'next/image';
import me2 from "../../public/images/me2.png";
import GradientBox from "../GradientBox";
const AboutSection = () => {
    const coFounders = [
        {
            name: 'Prakash Kumar',
            role: 'Co-Founder',
            description: 'Ex-CEO @ Apple Ex-CEO @ Google Ex-CEO @ Netfix Ex-CEO @ Samsung.',
            image: me2,
            linkedin: 'https://www.linkedin.com/in/prakash-kumar-50321a2/',
            twitter: 'https://www.twitter.com/johndoe',
        },
        {
            name: 'Shreyak Upadhyay',
            role: 'Co-Founder',
            description: 'Ex-CEO @ Apple Ex-CEO @ Google Ex-CEO @ Netfix Ex-CEO @ Samsung.',
            image: me2,
            linkedin: 'https://www.linkedin.com/in/shreyakupadhyay/',
            twitter: 'https://www.twitter.com/janesmith',
        },
        {
            name: 'Yakshesh Gupta',
            role: 'Co-Founder',
            description: 'Ex-CEO @ Apple Ex-CEO @ Google Ex-CEO @ Netfix Ex-CEO @ Samsung.',
            image: me2,
            linkedin: 'https://www.linkedin.com/in/yakshesh-gupta-254643230/',
            twitter: 'https://www.twitter.com/mikejohnson',
        },
    ];
    return (
        <>
            <section
                id="about"
                className="w-screen  bg-[#1d1b29] mt-[10vh] lg:mt-[15vh] mb-[10vh]"
            >
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
                            {/* </div> */}
                            <div className="container mx-auto my-5">
                                <div className="flex justify-center">
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                                        {coFounders.map((coFounder) => (
                                            <div key={coFounder.name} className="border-white border-2	 hover:bg-white/[0.08] rounded-lg shadow-md p-6">
                                                <div className="flex justify-center">
                                                    <Image
                                                        src={coFounder.image}
                                                        alt={coFounder.name}
                                                        width={250}
                                                        // height={200}
                                                        className="rounded-full"
                                                    />
                                                </div>
                                                <h2 className="text-xl font-bold mb-2 text-white">{coFounder.name}</h2>
                                                <p className="text-white text-opacity-80">{coFounder.role}</p>
                                                <p className="text-white text-opacity-50">{coFounder.description}</p>
                                                <div className="flex mt-4">
                                                    <Link
                                                        href={coFounder.linkedin}
                                                        className="mr-2 text-blue-500 hover:text-blue-600"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        LinkedIn
                                                    </Link>
                                                    <Link
                                                        href={coFounder.twitter}
                                                        className="text-blue-500 hover:text-blue-600"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        Twitter
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