import React, { FC, useState } from "react";

type PaginationType = {
  paginationFn: (page: number) => void;
};
export const Pagination: FC<PaginationType> = ({
  paginationFn,
}: PaginationType) => {
  const [pageState, setPageState] = useState(1);

  const pages: number[] = [1, 2, 3];
  const handlePagination = (page: number) => {
    paginationFn(page);
    setPageState(page);
  };

  return (
    <div className="flex items-center">
      {pages.map((page, index) => {
        return (
          <button
            disabled={pages[index] === pageState && true}
            onClick={() => handlePagination(page)}
            className={`${
              pages[index] === pageState && "bg-[#000000FF]"
            } mr-2 w-[50px] cursor-pointer select-none h-[50px] font-bold flex items-center justify-center border-[1px] border-white/50 border-solid`}
            key={page}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
