import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Nabar.css";
import "../Theme/Themes.css";
import { Image } from "react-bootstrap";
import { toast } from "react-toastify";

const Navbars = () => {
  const { user, logOut, themesNumber } = useContext(AuthContext);

  const signOut = () => {
    logOut()
      .then((result) => {
        toast.success("Log Out successfully");
      })
      .catch((error) => {
        toast.warning("log Out error");
      });
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={themesNumber}
        variant="primary"
      >
        <Container>
          <Navbar.Brand>
            <NavLink to="/" className="text-light text-decoration-none me-3">
              <Image
                src="./courselogo.png"
                alt=""
                style={{ height: "30px" }}
                roundedCircle
                className="me-2 "
              ></Image>
              Course-Amar
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>

            <Nav className="d-flex align-items-center">
              <Nav>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive
                      ? "active-link me-3"
                      : "text-light text-decoration-none me-3"
                  }
                >
                  Home
                </NavLink>
              </Nav>
              <Nav>
                <NavLink
                  to="/courses"
                  className={({ isActive }) =>
                    isActive
                      ? "active-link me-3"
                      : "text-light text-decoration-none me-3"
                  }
                >
                  Courses
                </NavLink>
              </Nav>
              <Nav>
                <NavLink
                  to="/faq"
                  className={({ isActive }) =>
                    isActive
                      ? "active-link me-3"
                      : "text-light text-decoration-none me-3"
                  }
                >
                  FAQ
                </NavLink>
              </Nav>
              <Nav>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive
                      ? "active-link me-3"
                      : "text-light text-decoration-none me-3"
                  }
                >
                  Blog
                </NavLink>
              </Nav>
              <Nav>
                <NavLink
                  to="/themes"
                  className={({ isActive }) =>
                    isActive
                      ? "active-link me-3"
                      : "text-light text-decoration-none me-3"
                  }
                >
                  Themes
                </NavLink>
              </Nav>
              <Nav>
                {user ? (
                  <div>
                    <NavLink
                      to="/profilepage"
                      className={({ isActive }) =>
                        isActive
                          ? "active-link me-3"
                          : "text-light text-decoration-none me-3"
                      }
                    >
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
                    </NavLink>
                    <button
                      onClick={signOut}
                      className="bg-dark text-light ms-2 border-0"
                    >
                      Log out
                    </button>
                  </div>
                ) : (
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive
                        ? "active-link me-3"
                        : "text-light text-decoration-none me-3"
                    }
                  >
                    Log in
                  </NavLink>
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
//             <NavLink to="/" className="text-decoration-none text-white fs-2 m-2">
//               Course Amar
//             </NavLink>
//           </Navbar.Brand>

//           <div className="">
//             <Navbar.Toggle
//               aria-controls="responsive-navbar-nav"
//               className="mb-3 bg-dark"
//             />
//             <Navbar.Collapse id="responsive-navbar-nav">
//               <Nav className="m-lg-0 mt-2 d-flex align-items-center">
//                 <NavLink
//                   to="/courses"
//                   className="text-decoration-none text-white m-2"
//                 >
//                   Courses
//                 </NavLink>
//               </Nav>
//               <Nav>
// <NavLink to="/faq" className="text-decoration-none text-white m-2">
//   {" "}
//   FAQ
// </NavLink>
//               </Nav>
//               <Nav>
// <NavLink
//   to="/blog"
//   className="text-decoration-none text-white m-3"
// >
//   Blog
// </NavLink>
//               </Nav>
//               <Nav>
//                 <NavLink className="text-decoration-none text-white m-3">
//                   theme
//                 </NavLink>
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
//     <NavLink
//       to="/login"
//       className="text-decoration-none text-white m-3"
//     >
//       Log in
//     </NavLink>
//   )}
// </Nav>
//             </Navbar.Collapse>
//           </div>
//         </div>
//       </Container>
//     </Navbar>
