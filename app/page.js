import React from "react";
import Carousel from "../components/Carousel";
import RegisterNow from "../components/RegisterNow";
import ImportantDates from "../components/ImportantDates";
import About from "../components/About";
import GeneralFAQ from "../components/GeneralFAQ";

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
