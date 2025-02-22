'use client'
import React from "react";
import Carousel from "../components/Carousel";
import RegisterNow from "../components/RegisterNow";
import ImportantDates from "../components/ImportantDates";
import About from "../components/About";
import GeneralFAQ from "../components/GeneralFAQ";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <>
      <Carousel />
      <RegisterNow />
      <ImportantDates />
      <About/>
      <GeneralFAQ/>
    </>
  );
}
