import React, { FC, useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

type SelectType = {
  category: string[];
  filterByCategory: (category: string) => void;
};
export const Select: FC<SelectType> = ({
  category,
  filterByCategory,
}: SelectType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [valueSelect, setValueSelect] = useState<string>("Фильтр по категории");
  const categorySet = Array.from(new Set(category));

  const filters = (category: string) => {
    filterByCategory(category);
    setValueSelect(category);
  };
  return (
    <div className="w-full select-none cursor-pointer flex items-center justify-between relative bg-[#333333FF] rounded-[4px] my-4 p-4">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex md:w-[250px] w-full items-center justify-between"
      >
        {valueSelect}
        <i className="ml-2">
          <IoIosArrowDown />
        </i>
        {isOpen && (
          <ul className="absolute  h-[250px] overflow-y-scroll left-0 w-full rounded-[4px]  top-[59px] ">
            {categorySet.map((category: string) => {
              return (
                <li
                  onClick={() => filters(category)}
                  className="bg-[#333333FF] transition-colors p-4 hover:bg-[#2D2D2DFF]"
                  key={category}
                >
                  {category}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
