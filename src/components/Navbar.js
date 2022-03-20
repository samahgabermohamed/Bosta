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

function Nav(props) {
  const logout = () => {
    sessionStorage.clear();
    props.history.push("/trackyourshipment");
  };
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <img
          src={require("../image/logo.jpg")}
          alt="logo.img"
          className="log  ms-2"
          style={{ width: "10rem" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="navbar-nav mb-2  spacel  ml-auto">
            <li className="nav-item">
              <NavLink className="nav nav-link pink bl" to="/trackyourshipment">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav nav-link pink bl" to="/trackyourshipment">
              Pricing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav nav-link pink bl" to="/trackyourshipment">
              Contact Sales
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav nav-link pink bl" to="/trackyourshipment">
              Careers
              </NavLink>
            </li>
            <NavDropdown
              title="Tracking shipment"
              id="basic-nav-dropdown"
              className=" pink bl"
            >
              <NavDropdown.Item>
                <NavLink className="nav pink bl" to="/trackyourshipment" >
                Track your shipment
                </NavLink>
              </NavDropdown.Item>


              <NavDropdown.Item>
                <NavLink className="nav pink bl" exact to="/">
                <Form.Group className="mb-3" controlId="exampleForm.ControlNumber">
                    <Form.Label style={{ color: "#168eca" }}>Enter your tracking No.</Form.Label>
                    <Form.Control
                        as="input"
                        rows={1}
                        type="number"
                        placeholder="tracking No."
                        name="Enter your tracking No." 
                          // value={trackingNo}
                        // onChange={(e) => settrackingNo(e.target.value)}
                        /> 
                           {/* <div className="input-group-append row mb-5 mt-5">
                           <span className="text_color"> */}
                {/* <Link className=" text_color"to={{
                    pathname: "/trackyourshipment", }}
                    target="_instagram">
                        <FontAwesomeIcon className="text_color" icon={faInstagram}/>     
                </Link> */}
                {/* </span>    */}
                      <button className="btn-lg butt mt-3" 
                      // onClick={this.Search}
                      type="submit">Search</button>
                    {/* </div> */}
               </Form.Group>
                </NavLink>
              </NavDropdown.Item>





            </NavDropdown> 
                {sessionStorage.token ? (
                <li className="nav-item ms-5">
                  <NavLink onClick={logout} className="nav nav-link pink bl" to="/">
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