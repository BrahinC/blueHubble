/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Button } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/background1.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className=""
              src={require("assets/img/logo.png")}
            ></img>
            <h5 style={{ color: "#233b80" }}>Supervises - Predicts - Unifies</h5>
            <Button
               style={{ backgroundColor: "#233b80" }} type="button"
              onClick={(e) => e.preventDefault()}
            >Try it now!
            </Button>
          </div>
          <div></div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
