import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import Airdrop from "@/components/sections/Airdrop";
import { Inter, Sora } from "next/font/google";
const sora = Sora({ subsets: ["latin"] });
const HowItWorks = () => {
  return (
    <div className="bg-[#1d1b29]" style={sora.style} id="body-container">
        <Appbar/>
        <Airdrop/>
        <Footer/>
    </div>
  );
};

export default HowItWorks;
