import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import React from "react";
import { SliderBtnNext, SliderBtnPrev } from "../../shared";
const width = window.innerWidth;

export const settings = {
  infinite: false,
  speed: 1000,
  slidesToShow: width >= 600 ? 4 : 1,
  slidesToScroll: width >= 600 ? 4 : 1,
  nextArrow: <IoIosArrowForward />,
  prevArrow: <IoIosArrowBack />,
  swipe: width >= 600 ? false : true,
};
