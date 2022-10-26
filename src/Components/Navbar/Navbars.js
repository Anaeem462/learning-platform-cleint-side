import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button, Image } from "react-bootstrap";

const Navbars = () => {
  const { user, logOut } = useContext(AuthContext);
  const signOut = () => {
    logOut()
      .then((result) => {
        alert("Log Ourt successfully");
      })
      .catch((error) => {
        alert("log out error", error);
      });
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="text-decoration-none text-white ">
              <img
                src="https://images-platform.99static.com//KlBLMX8dQrcq6hZGnxf5HSnG29I=/8x543:525x1060/fit-in/500x500/99designs-contests-attachments/123/123360/attachment_123360235"
                alt=""
                style={{ height: "30px", width: "30px" }}
                className="text-light me-2"
              />
              Course Amar
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>

            <Nav className="d-flex align-items-center">
              <Nav>
                <Link
                  to="/courses"
                  className="text-decoration-none text-white me-3"
                >
                  Courses
                </Link>
              </Nav>
              <Nav>
                <Link
                  to="/courses"
                  className="text-decoration-none text-white me-3"
                >
                  FAQ
                </Link>
              </Nav>
              <Nav>
                <Link
                  to="/courses"
                  className="text-decoration-none text-white me-3"
                >
                  Blog
                </Link>
              </Nav>
              <Nav>
                <Link
                  to="/courses"
                  className="text-decoration-none text-white me-3"
                >
                  Theme
                </Link>
              </Nav>
              <Nav>
                {user ? (
                  <div>
                    {user?.photoURL ? (
                      <Image
                        src={user.photoURL}
                        style={{ height: "25px" }}
                        alt=""
                        roundedCircle
                        title={user.displayName}
                      ></Image>
                    ) : (
                      <FaUser
                        className="text-primary"
                        title={user.displayName}
                      ></FaUser>
                    )}
                    <button
                      onClick={signOut}
                      className="bg-dark text-light ms-2 border-0"
                    >
                      Log out
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="text-decoration-none text-white me-3"
                  >
                    Log in
                  </Link>
                )}
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
//  <Navbar
//       collapseOnSelect
//       expand="lg"
//       bg="primary"
//       variant="dark"
//       className="shadow-lg"
//     >
//       <Container>
//         <div className=" w-100 d-flex justify-content-between  ">
//           <Navbar.Brand>
//             <Image
//               src="/src/assets/logo.png"
//               style={{ height: "30px" }}
//             ></Image>
//             <Link to="/" className="text-decoration-none text-white fs-2 m-2">
//               Course Amar
//             </Link>
//           </Navbar.Brand>

//           <div className="">
//             <Navbar.Toggle
//               aria-controls="responsive-navbar-nav"
//               className="mb-3 bg-dark"
//             />
//             <Navbar.Collapse id="responsive-navbar-nav">
//               <Nav className="m-lg-0 mt-2 d-flex align-items-center">
//                 <Link
//                   to="/courses"
//                   className="text-decoration-none text-white m-2"
//                 >
//                   Courses
//                 </Link>
//               </Nav>
//               <Nav>
// <Link to="/faq" className="text-decoration-none text-white m-2">
//   {" "}
//   FAQ
// </Link>
//               </Nav>
//               <Nav>
// <Link
//   to="/blog"
//   className="text-decoration-none text-white m-3"
// >
//   Blog
// </Link>
//               </Nav>
//               <Nav>
//                 <Link className="text-decoration-none text-white m-3">
//                   theme
//                 </Link>
//               </Nav>
// <Nav>
//   {user ? (
//     user?.photoURL ? (
//       <img
//         src={user.photoURL}
//         style={{ height: "30px" }}
//         className="text-dark"
//       />
//     ) : (
//       <FaUser className="text-dark my-2"></FaUser>
//     )
//   ) : (
//     <Link
//       to="/login"
//       className="text-decoration-none text-white m-3"
//     >
//       Log in
//     </Link>
//   )}
// </Nav>
//             </Navbar.Collapse>
//           </div>
//         </div>
//       </Container>
//     </Navbar>
