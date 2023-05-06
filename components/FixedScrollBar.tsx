import { SOCIAL_LINKS } from "@/utils/config";
import Icon1 from "../public/images/Icon1.svg";
import Icon2 from "../public/images/Icon2.svg";
import Icon3 from "../public/images/Icon3.svg";
import Icon4 from "../public/images/Icon4.svg";
import Icon5 from "../public/images/Icon5.svg";
import Image from "next/image";
import Link from "next/link";
const socials = [
  {
    icon: Icon1,
    type: "medium",
    link: SOCIAL_LINKS.MEDIUM,
  },
  {
    icon: Icon2,
    type: "telegram",
    link: SOCIAL_LINKS.TELEGRAM,
  },
  {
    icon: Icon3,
    type: "twitter",
    link: SOCIAL_LINKS.TWITTER,
  },
  {
    icon: Icon4,
    type: "discord",
    link: SOCIAL_LINKS.DISCORD,
  },
  {
    icon: Icon5,
    type: "Github",
    link: SOCIAL_LINKS.GITHUB,
  },
];
const FixedScrollBar = () => {
  return (
    <div className="fixed z-30 items-center hidden h-screen lg:flex left-10">
      <div className="flex flex-col space-y-4 select-none">
        {socials.map((social, index) => {
          return <Link rel="canonical" href={social.link} target="_blank" key={index}><Image draggable={false} key={index} src={social.icon} alt={social.type} /></Link>;
        })}
      </div>
    </div>
  );
};

export default FixedScrollBar;
