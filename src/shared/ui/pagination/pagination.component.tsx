import React, { FC, useState } from "react";
import { useGetAllMovies } from "../../hooks";

type PaginationType = {
  paginationFn: (page: number) => void;
};
export const Pagination: FC<PaginationType> = ({
  paginationFn,
}: PaginationType) => {
  // const [data] = useGetAllMovies();
  const [pageState, setPageState] = useState(1);
  const pages = [1, 2, 3];

  const handlePagination = (page: number) => {
    paginationFn(page);
    setPageState(page);
  };
  return (
    <div className="flex items-center">
      {pages.map((page, index) => {
        return (
          <span
            onClick={() => handlePagination(page)}
            className={`${
              pages[index] === pageState && "bg-[#000000FF]"
            } mr-2 w-[50px] cursor-pointer select-none h-[50px] font-bold flex items-center justify-center border-[1px] border-white/50 border-solid`}
            key={page}
          >
            {page}
          </span>
        );
      })}
    </div>
  );
};
