import React, { FC, ReactNode, ReactPropTypes } from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";

type ButtonType = {
  children: ReactNode;
  variant: "contained" | "outlined";
  size: string;
  arrow?: boolean;
};
export const Button: FC<ButtonType> = ({
  children,
  size,
  variant,
  arrow,
}: ButtonType) => {
  return (
    <button
      className={`${
        variant === "contained"
          ? "bg-[#DE0611FF] border-[1px] border-solid border-[#DE0611FF]"
          : "bg-transparent hover:bg-[#313131FF] border-[1px] border-solid border-[#fff]"
      } px-4 py-2 ${size} w-full transition-colors md:w-auto justify-center  font-bold rounded-[2px] flex items-center`}
    >
      {children}
      {arrow && (
        <div className="ml-1 flex items-center">
          <MdOutlineArrowForwardIos />
        </div>
      )}
    </button>
  );
};
