import Icon1 from "../public/images/Icon1.svg";
import Icon2 from "../public/images/Icon2.svg";
import Icon3 from "../public/images/Icon3.svg";
import Icon4 from "../public/images/Icon4.svg";
import Image from "next/image";
const socials = [
  {
    icon: Icon1,
    type: "unknown",
    link: "",
  },
  {
    icon: Icon2,
    type: "telegram",
    link: "",
  },
  {
    icon: Icon3,
    type: "twitter",
    link: "",
  },
  {
    icon: Icon4,
    type: "discord",
    link: "",
  },
];
const FixedScrollBar = () => {
  return (
    <div className="fixed z-30 items-center hidden h-screen lg:flex left-10">
      <div className="flex flex-col space-y-4">
        {socials.map((social, index) => {
          return <Image key={index} src={social.icon} alt={social.type} />;
        })}
      </div>
    </div>
  );
};

export default FixedScrollBar;
