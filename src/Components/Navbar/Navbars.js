import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Navbars = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <div className=" w-100 d-flex justify-content-between  ">
          <Navbar.Brand>
            <Link to="/" className="text-decoration-none text-white fs-2 m-2">
              Navbar logo
            </Link>
          </Navbar.Brand>

          <div className="">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-lg-0 mt-2 d-flex align-items-center">
                <Link
                  to="/card"
                  className="text-decoration-none text-white m-2"
                >
                  {" "}
                  Cards
                </Link>
                <Link
                  to="/form"
                  className="text-decoration-none text-white m-2"
                >
                  {" "}
                  form
                </Link>

                <Link
                  to="/carousel"
                  className="text-decoration-none text-white m-3"
                >
                  carousel
                </Link>
                <Link className="text-decoration-none text-white m-3">
                  items-4
                </Link>

                <Link className="text-decoration-none text-white m-3">
                  items-3
                </Link>
                <Link className="text-decoration-none text-white m-3">
                  items-4
                </Link>
                <Link className="text-decoration-none text-white m-3">
                  items-5
                </Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navbars;
