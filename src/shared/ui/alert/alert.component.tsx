import React, { FC } from "react";
import { BsCheckLg } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";

type AlertType = { title: string };

export const Alert: FC<AlertType> = ({ title }: AlertType) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        exit={{ x: -100 }}
        className="fixed bg-[#181818FF] z-50 flex items-center justify-between p-3 left-[20px] top-[20px]"
      >
        <div className="flex items-center">
          <div className="mr-2 flex items-center justify-center bg-[#000000FF] w-[50px] h-[50px] rounded-[50%]">
            <img src="/favicon.ico" className="w-[30px] h-[30px]" />
          </div>
          {title}
        </div>
        <i className="ml-4">
          <BsCheckLg />
        </i>
      </motion.div>
    </AnimatePresence>
  );
};
