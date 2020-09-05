import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";

// sections for this page
import Cards from "./index-sections/Cards.js";
import Team from "./index-sections/Team.js";
import Forms from "./index-sections/Forms.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";
import Pictures from "./index-sections/Gallery.js";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <Cards />
          <Pictures></Pictures>
          <Team />
          <Forms />
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default Index;
