import React from "react";

// reactstrap components
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function Team() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
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
      className="section section-team text-center"
      id="team"
    >
      <Container>
        <h4
          style={{ paddingBottom: "50px", color: "#ffb949" }}
          className="category text-center"
        >
          Team
        </h4>

        <div className="team">
          <Row>
            <Col md="4">
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-circle img-fluid img-raised"
                  src={require("assets/img/default-avatar.png")}
                ></img>
                <h4 className="title">Diego Quintana</h4>
                <p className="category" style={{ color: "#029bc6" }}>
                  developer
                </p>
                <p className="description">
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  something
                </p>
                <Button
                  className="btn-icon btn-round"
                  style={{ backgroundColor: "#029bc6" }}
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-google-plus"></i>
                </Button>
                <Button
                  className="btn-icon btn-round"
                  style={{ backgroundColor: "#ffb949" }}
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-linkedin"></i>
                </Button>
              </div>
            </Col>
            <Col md="4">
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-circle img-fluid img-raised"
                  src={require("assets/img/default-avatar.png")}
                ></img>
                <h4 className="title">Sebastian Henao</h4>
                <p className="category" style={{ color: "#029bc6" }}>
                  developer
                </p>
                <p className="description">
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  something
                </p>
                <Button
                  className="btn-icon btn-round"
                  style={{ backgroundColor: "#ffb949" }}
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-linkedin"></i>
                </Button>
              </div>
            </Col>
            <Col md="4">
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-circle img-fluid img-raised"
                  src={require("assets/img/default-avatar.png")}
                ></img>
                <h4 className="title">Cristian Robles</h4>
                <p className="category" style={{ color: "#029bc6" }}>
                  developer
                </p>
                <p className="description">
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  something
                </p>
                <Button
                  className="btn-icon btn-round"
                  style={{ backgroundColor: "#029bc6" }}
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-google-plus"></i>
                </Button>
                <Button
                  className="btn-icon btn-round"
                  style={{ backgroundColor: "#ffb949" }}
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-linkedin"></i>
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Team;
