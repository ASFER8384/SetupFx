"use client";

import WhatCompanyDO from "./components/WhatCompanyDO";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Services from "./components/Services";
export default function Page() {
  return (
    <div>
      <Homepage />
      <Services />
      <WhatCompanyDO />
      <Details />
      <Footer />
    </div>
  );
}
