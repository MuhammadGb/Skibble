import React from "react";
import Home from "./Home";
import SeoMeta from "../globals/SeoMeta";

const page = () => {
  return (
    <>
      <SeoMeta title="Home" meta_title="Kitchen - Online Shopping Made Easy" />
      <Home />
    </>
  );
};

export default page;
