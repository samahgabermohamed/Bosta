import { NavLink } from "react-router-dom";
import {Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import "./Navbar.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { withRouter } from "react-router-dom";
import Form from "react-bootstrap/Form";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { changeLanguage } from "./../../Store/actions/language";

function Nav(props) {
  const lang = useSelector((state) => state.language.lang);
  const dispatch = useDispatch();
  const changeLanguageFunc = () => {
    dispatch(changeLanguage(lang === "ar" ? "en" : "ar"));
  };
  const language = useSelector((state) =>state.language.lang);
  const logout = () => {
    sessionStorage.clear();
    props.history.push("/trackyourshipment");
  };
  return (

    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <img
          src={require("./image/logo.jpg")}
          alt="logo.img"
          className="log  ms-2"
          style={{ width: "10rem" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="navbar-nav mb-2  spacel  ml-auto">

          <li className="nav-item">
              <NavLink className="nav nav-link pink bl" to="/tracklist"
              onClick={() => changeLanguageFunc()}>
              {language}
              </NavLink>
              </li>  
            <li className="nav-item">
              <NavLink className="nav nav-link pink bl" to="/tracklist">
                Home
              </NavLink>
            </li>

              <li className="nav-item">
              <NavLink className="nav nav-link pink bl" to="/tracklist">
              Tracklist
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav nav-link pink bl" to="/tracklist">
              Pricing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav nav-link pink bl" to="/tracklist">
              Contact Sales
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav nav-link pink bl" to="/tracklist">
              Careers
              </NavLink>
            </li>
            <NavDropdown
              title="Tracking shipment"
              id="basic-nav-dropdown"
              className=" pink bl"
            >
              <NavDropdown.Item>
                <NavLink className="nav pink bl" to="/tracklist" >
                Track your shipment
                </NavLink>
              </NavDropdown.Item>


              <NavDropdown.Item>
                <NavLink className="nav pink bl" exact to="/tracklist">
                <Form.Group className="mb-3" controlId="exampleForm.ControlNumber">
                    <Form.Label style={{ color: "#168eca" }}>Enter your tracking No.</Form.Label>
                    <Form.Control
                        as="input"
                        rows={1}
                        type="number"
                        placeholder="tracking No."
                        name="Enter your tracking No." />  
                      <button className="btn-lg butt mt-3" 
                      type="submit">Search</button>
               </Form.Group>
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown> 
                {sessionStorage.token ? (
                <li className="nav-item ms-5">
                  <NavLink onClick={logout} className="nav nav-link pink bl" to="/tracklist">
                    Logout
                  </NavLink>
                </li>
            ) : (
              <>
                <li className="nav-item ms-5">
                  <NavLink className="nav nav-link pink bl" to="/login">
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
export default withRouter(Nav);