import React, { FC, ReactNode } from "react";

type SliderBtnPrevType = {
  currentSlide?: ReactNode;
  slideCount?: ReactNode;
  children?: ReactNode;
  props?: any;
};

export const SliderBtnPrev: FC<SliderBtnPrevType> = ({
  currentSlide,
  slideCount,
  children,
  props,
}: SliderBtnPrevType) => {
  return <span {...props}>{children}</span>;
};
