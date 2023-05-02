import { twclsx } from "@/utils/twclsx";
import Image from "next/image";
import check from "../public/images/check.svg";

const TradeMutualUtilityItem = ({
  label,
  heading,
  className,
  showIcon = true,
  borderWidth = 1,
}: {
  label: string;
  heading: string;
  className?: string;
  showIcon?: boolean;
  borderWidth?: number;
}) => {
  return (
    <div
      className={twclsx(
        " lg:max-w-[395px] max-w-full rounded-md bg-gradient-to-l from-white via-[rgba(255, 255, 255, 0.5)] to-transparent",
        className
      )}
      style={{ padding: `${borderWidth}px` }}
    >
      <div
        className={twclsx(
          "flex flex-col  justify-center py-5 px-10 bg-[#1D1B29] rounded-md h-full",
          className
        )}
      >
        {showIcon && (
          <Image
            src={check}
            unoptimized
            width={24}
            height={24}
            alt="check icon"
            draggable={false}
            className="mb-2 select-none"
          />
        )}
        <h1 className="font-semibold text-white sm:text-2xl">{heading}</h1>
        <span className="mt-2 text-sm sm:!text-lg font-light text-white  text-opacity-60">
          {label}
        </span>
      </div>
    </div>
  );
};

export default TradeMutualUtilityItem;
