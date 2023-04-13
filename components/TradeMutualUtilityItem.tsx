import { twclsx } from "@/utils/twclsx";
import Image from "next/image";
import check from "../public/images/check.svg";

const TradeMutualUtilityItem = ({
  label,
  heading,
  className,
}: {
  label: string;
  heading: string;
  className?: string;
}) => {
  return (
    <div
      className={twclsx(
        " lg:max-w-[395px] max-w-full rounded-md bg-gradient-to-l from-white via-[rgba(255, 255, 255, 0.5)] to-transparent p-px",
        className
      )}
    >
      <div
        className={twclsx(
          "flex flex-col  justify-center py-5 px-10 bg-[#1D1B29] rounded-md back",
          className
        )}
      >
        <Image
          src={check}
          unoptimized
          width={24}
          height={24}
          alt="check icon"
          className="mb-2"
        />
        <h1 className="font-semibold text-white sm:text-lg">{heading}</h1>
        <span className="mt-2 text-sm font-light text-white sm:text-base text-opacity-60">
          {label}
        </span>
      </div>
    </div>
  );
};

export default TradeMutualUtilityItem;
