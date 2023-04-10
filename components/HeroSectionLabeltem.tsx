import React from "react";
interface Props {
  label: string;
}
const HeroSectionLabelItem = ({ label }: Props) => {
  return (
    <div
      className="flex items-center justify-center w-full h-full py-4 mr-4 scale-[0.8] xl:scale-[0.9] bg-white 2xl:scale-100 backdrop-filter backdrop-blur-2xl bg-opacity-20 px-7"
      style={{ borderRadius: "15px 45px" }}
    >
      <h1 className="text-white">{label}</h1>
    </div>
  );
};

export default HeroSectionLabelItem;
