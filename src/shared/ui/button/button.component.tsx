import React, { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";

type ButtonType = {
  children: ReactNode;
  variant: "contained" | "outlined";
  size: string;
  link: string;
  arrow?: boolean;
};
export const Button: FC<ButtonType> = ({
  children,
  size,
  variant,
  link = "/",
  arrow,
}: ButtonType) => {
  return (
    <Link to={link}>
      <button
        className={`${
          variant === "contained"
            ? "bg-[#DE0611FF] border-[1px] border-solid border-[#DE0611FF]"
            : "bg-transparent border-[1px] border-solid border-[#fff]"
        } px-4 py-2 ${size} w-full md:w-auto justify-center  font-bold rounded-[2px] flex items-center`}
      >
        {children}
        {arrow && (
          <div className="ml-1 flex items-center">
            <MdOutlineArrowForwardIos />
          </div>
        )}
      </button>
    </Link>
  );
};