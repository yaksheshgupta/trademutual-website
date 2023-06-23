import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/sections/AboutSection";
import { Inter, Sora } from "next/font/google";
import Head from "next/head";
const sora = Sora({ subsets: ["latin"] });
const About = () => {
  return (
    <div className="bg-[#1d1b29]" style={sora.style} id="body-container">
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="About section" />
      </Head>
      <Appbar />
      <AboutSection/>
      <Footer />
    </div>
  );
};

export default About;
