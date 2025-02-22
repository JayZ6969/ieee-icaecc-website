import dynamic from 'next/dynamic';
import React from "react";

const Carousel = dynamic(() => import("../components/Carousel"), { ssr: false });
const RegisterNow = dynamic(() => import("../components/RegisterNow"), { ssr: false });
const ImportantDates = dynamic(() => import("../components/ImportantDates"), { ssr: false });
const About = dynamic(() => import("../components/About"), { ssr: false });
const GeneralFAQ = dynamic(() => import("../components/GeneralFAQ"), { ssr: false });

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