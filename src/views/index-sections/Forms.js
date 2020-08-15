import React from "react";
// reactstrap components
import {
  Form,
  FormGroup,
  Input,
  Button,
  Label,
  Container,
  InputGroup,
  Row,
  Col,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
// core components

function Forms() {
  return (
    <div style={{ backgroundColor: "#ffb949" }} className="section">
      <Container style={{ backgroundColor: "white", borderRadius: "5px" }}>
        <Row>
          <Col className="ml-auto mr-auto" md="10" xl="6">
            <div
              style={{ paddingBottom: "50px" }}
              className="content-center text-center"
            >
              <h4>Any question?</h4>
              <h7>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </h7>
            </div>
            <div>
              <Form>
                <div className="form-row">
                  <FormGroup className="col-md-6">
                    <label htmlFor="inputEmail4">Name</label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-user-circle"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Name" type="text"></Input>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup className="col-md-6">
                    <label htmlFor="inputPassword4">Email</label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-at"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Email" type="text"></Input>
                    </InputGroup>
                  </FormGroup>
                </div>
                <FormGroup>
                  <label htmlFor="exampleFormControlTextarea1">Question</label>
                  <Input
                    id="exampleFormControlTextarea1"
                    rows="3"
                    type="textarea"
                  ></Input>
                </FormGroup>
                <Button
                  style={{ backgroundColor: "#029bc6" }}
                  color="info"
                  type="button"
                >
                  Send
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Forms;
