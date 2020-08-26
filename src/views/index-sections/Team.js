import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Team() {
  // const [firstFocus, setFirstFocus] = React.useState(false);
  // const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <div
      style={{ backgroundColor: "#f2f2f2" }}
      className="section section-team"
      id="team"
    >
      <Container>
        <h4
          style={{ paddingBottom: "10px", color: "#ffb949" }}
          className="category "
        >
          <img
            style={{
              left: "0px",
              maxWidth: "80px",
            }}
            src={require("assets/img/inge.png")}
          />
          Developed By:
        </h4>
        <div className="text-center">
          <img
            style={{ paddingBottom: "20px" }}
            alt="..."
            src={require("assets/img/logoBlue.png")}
          ></img>
        </div>
        <div className="team text-center">
          <Row>
            <Col md="4">
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-circle img-fluid img-raised"
                  src={require("assets/img/1.jpg")}
                ></img>
                <h4 className="title">Diego Quintana</h4>
                <p className="category" style={{ color: "#029bc6" }}>
                  developer
                </p>
                <p className="description">
                  You can write here details about one of your team members. You
                  can give more details about what they do.
                </p>
              </div>
            </Col>
            <Col md="4">
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-circle img-fluid img-raised"
                  src={require("assets/img/2.jpg")}
                ></img>
                <h4 className="title">Sebastian Henao</h4>
                <p className="category" style={{ color: "#029bc6" }}>
                  developer
                </p>
                <p className="description">
                  You can write here details about one of your team members. You
                  can give more details about what they do
                </p>
              </div>
            </Col>
            <Col md="4">
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-circle img-fluid img-raised"
                  src={require("assets/img/6.jpg")}
                ></img>
                <h4 className="title">Cristian Robles</h4>
                <p className="category" style={{ color: "#029bc6" }}>
                  developer
                </p>
                <p className="description">
                  You can write here details about one of your team members. You
                  can give more details about what they do
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Team;
