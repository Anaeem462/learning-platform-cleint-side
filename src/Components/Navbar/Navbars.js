import React, { useState } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
const Navbars = () => {
  const [user, setUser] = useState(true);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="shadow-lg"
    >
      <Container>
        <div className=" w-100 d-flex justify-content-between  ">
          <Navbar.Brand>
            <Image src="/src/assets/logo.png"></Image>
            <Link to="/" className="text-decoration-none text-white fs-2 m-2">
              Course Amar
            </Link>
          </Navbar.Brand>

          <div className="">
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="mb-3 bg-dark"
            />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-lg-0 mt-2 d-flex align-items-center">
                <Link
                  to="/courses"
                  className="text-decoration-none text-white m-2"
                >
                  {" "}
                  Courses
                </Link>
                <Link to="/faq" className="text-decoration-none text-white m-2">
                  {" "}
                  FAQ
                </Link>

                <Link
                  to="/blog"
                  className="text-decoration-none text-white m-3"
                >
                  Blog
                </Link>
                <Link className="text-decoration-none text-white m-3">
                  theme
                </Link>
                {user ? (
                  <Link
                    to="/login"
                    className="text-decoration-none text-white m-3"
                  >
                    Log in
                  </Link>
                ) : (
                  <FaUser className="text-primary my-2"></FaUser>
                )}
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navbars;
