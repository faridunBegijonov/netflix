import React, { FC, ReactNode } from "react";

type SliderBtnNextType = {
  currentSlide?: ReactNode;
  slideCount?: ReactNode;
  children?: ReactNode;
  props?: any;
};

export const SliderBtnNext: FC<SliderBtnNextType> = ({
  currentSlide,
  slideCount,
  children,
  props,
}: SliderBtnNextType) => {
  return <span {...props}>{children}</span>;
};
