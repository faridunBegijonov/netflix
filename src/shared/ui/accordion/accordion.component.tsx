import React, { FC, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";

type AccordionType = {
  title: string;
  description: string;
};
export const AccordionItem: FC<AccordionType> = ({
  description,
  title,
}: AccordionType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="w-full">
      <div
        className="bg-[#2D2D2DFF] flex items-center justify-between select-none cursor-pointer transition-colors hover:bg-[#2D2D2D9D] p-4 md:p-6"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p>{title}</p>
        <i
          className={`text-[27px] transition-transform ${
            isOpen && "rotate-45"
          }`}
        >
          <AiOutlinePlus />
        </i>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
            className="p-4 md:p-6 bg-[#2D2D2DFF] mt-1"
          >
            <p className="text-md lg:text-xl">{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
