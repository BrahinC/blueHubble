import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  FormGroup,
  Input,
  Label,
  FormText,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
  Modal,
  ModalBody,
} from "reactstrap";

function IndexNavbar() {
  const [modal1, setModal1] = React.useState(false);
  const [modal2, setModal2] = React.useState(false);
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="white">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand target="_blank" id="navbar-brand">
              <img alt="..." src={require("assets/img/logoNav.png")} />
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              BlueHuble!
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("product").scrollIntoView();
                  }}
                >
                  <p>Product</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("team").scrollIntoView();
                  }}
                >
                  <p>Team</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact").scrollIntoView();
                  }}
                >
                  <p>Contact us</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("blog").scrollIntoView();
                  }}
                >
                  <p>Blog</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <p onClick={() => setModal2(true)}>Login</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <Button
                  className="nav-link btn-neutral"
                  style={{ color: "#233b80" }}
                  href="#pablo"
                  id="upgrade-to-pro"
                  onClick={() => setModal1(true)}
                >
                  <i className="now-ui-icons users_circle-08 mr-1"></i>
                  <p>Create account</p>
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
        <Modal isOpen={modal1} toggle={() => setModal1(false)}>
          <div className="modal-header justify-content-center">
            <button
              className="close"
              type="button"
              onClick={() => setModal1(false)}
            >
              <i className="now-ui-icons ui-1_simple-remove"></i>
            </button>
            <h4 className="title ">Create account</h4>
          </div>
          <ModalBody>
            <Form>
              <FormGroup>
                <label htmlFor="name">Name</label>
                <Input
                  color="#ffb949"
                  id="name"
                  placeholder="Enter name"
                  type="name"
                ></Input>
                <label htmlFor="exampleInputEmail1">Email address</label>
                <Input
                  aria-describedby="emailHelp"
                  id="exampleInputEmail1"
                  placeholder="Enter email"
                  type="email"
                ></Input>
              </FormGroup>
              <FormGroup>
                <label htmlFor="exampleInputPassword1">Password</label>
                <Input
                  id="exampleInputPassword1"
                  placeholder="Password"
                  type="password"
                ></Input>
              </FormGroup>
            </Form>
          </ModalBody>
          <div className="modal-footer">
            <Button
              color="danger"
              type="button"
              onClick={() => setModal1(false)}
            >
              Close
            </Button>
            <Button style={{ backgroundColor: "#029bC6" }} type="button">
              Create
            </Button>
          </div>
        </Modal>
        <Modal isOpen={modal2} toggle={() => setModal2(false)}>
          <div className="modal-header justify-content-center">
            <button
              className="close"
              type="button"
              onClick={() => setModal2(false)}
            >
              <i className="now-ui-icons ui-1_simple-remove"></i>
            </button>
            <h4 className="title ">Login</h4>
          </div>
          <ModalBody>
            <Form>
              <FormGroup>
                <label htmlFor="exampleInputEmail1">Email address</label>
                <Input
                  aria-describedby="emailHelp"
                  id="exampleInputEmail1"
                  placeholder="Enter email"
                  type="email"
                ></Input>
              </FormGroup>
              <FormGroup>
                <label htmlFor="exampleInputPassword1">Password</label>
                <Input
                  id="exampleInputPassword1"
                  placeholder="Password"
                  type="password"
                ></Input>
              </FormGroup>
            </Form>
          </ModalBody>
          <div className="modal-footer">
            <Button
              color="danger"
              type="button"
              onClick={() => setModal2(false)}
            >
              Close
            </Button>
            <Button style={{ backgroundColor: "#029bC6" }} type="button">
              Sign in
            </Button>
          </div>
        </Modal>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
