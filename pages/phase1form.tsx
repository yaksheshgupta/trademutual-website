import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import Phase1form from "@/components/sections/Phase1form";
import { Inter, Sora } from "next/font/google";
import Head from "next/head";
const sora = Sora({ subsets: ["latin"] });
const HowItWorks = () => {
  return (
    <div className="bg-[#1d1b29]" style={sora.style} id="body-container">
      <Head>
        <title>Phase1 form</title>
        <meta
          name="description"
          content="airdrop phase1 form" />
      </Head>
      <Appbar />
      <Phase1form />
      <Footer />
    </div>
  );
};

export default HowItWorks;
