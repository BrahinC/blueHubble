/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
        <nav>
          <ul>
            <li>
              <a target="_blank">Info footer</a>
            </li>
            <li>
              <a target="_blank">About Us</a>
            </li>
            <li>
              <a target="_blank">Blog</a>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
