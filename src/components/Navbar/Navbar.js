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


// ==================================================
// import  { useState,useEffect } from 'react';
// import axios from 'axios';
// import { Pagination } from '@mui/material';
// import MyPagination from '../components/MyPagination';
// import MovieCard from '../components/MovieCard';
// ==========================================================


function Nav(props) {


//================================================== 
// const [searchmode , setsearchmode] = useState(false);
// const [notfound , setnotfound] = useState()
// const [movies , setmovies] = useState([])
// const [Mname , setMname] = useState('');
// function Trackyourshipment (pageno){
//   setsearchmode(false)
//   axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=672cdfe6607c2166acf2affdb81ae188&page=${pageno}`).then(
//       res => {
//         setmovies(res.data.results)
//       }
//   )
// }
// function getnumber(e){
//   setMname(e.target.value)
// }
// function search(e){
//   e.preventDefault();
//   setsearchmode(true)
//   axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c&query=${Mname}`).then(
//     res => {
//       setmovies(res.data.results)
//       console.log(res.data.results)
//       if (res.data.results.length === 0){
//         setnotfound(true)
//       } else {
//         setnotfound(false)
//       }
//     }
// )
// console.log(e)
// }
  // ===================================================


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
        {/* // ==================================== */}
    

      {/* <div className="container">
      
<div classMame="input-group mb-3">
  <form className='col-10' onSubmit={(e)=> {search(e)}}>
     <input type="text" value={Mname} name='Mname' onChangeCapture={(e)=> getnumber(e)} className="form-control" placeholder="Movie name ..." 
     aria-label="Recipient's username" aria-describedby="basic-addon2"/>
      <div className="input-group-append">
    <button className="btn btn-outline-secondary mt-2"  type="submit">Search</button>
  </div>
  </form>
 
{/* </div> <button className='btn btn-outline-dark' style={{visibility : searchmode === false ? "hidden" : "visible"}} onClick={(e)=> backtoall(e)} > Back To All Movies</button>
      <div className='row'> */}
    
     {/* {   
         movies.map( movie => {      
           return ( <> */} 

              {/* <MovieCard  changed={(e)=> ischange(e)} isfav={false}  key={movie.id} id={movie.id} title={movie.title}  poster_path={movie.poster_path} vote_average={movie.vote_average}/> */}
              {/* </>
           )
         })
     }
   </div>
   <div className='col-12 p-5'>
   <MyPagination hide={searchmode} onmove={(e) => Trackyourshipment(e)}/>
   </div>
   </div> */}
      

    {/* // ==================================== */}

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
              <NavLink className="nav nav-link pink bl" to="/trackyourshipment"
              onClick={() => changeLanguageFunc()}>
              {language}
              </NavLink>
              </li>  
            <li className="nav-item">
              <NavLink className="nav nav-link pink bl" to="/trackyourshipment">
                Home
              </NavLink>
            </li>

              <li className="nav-item">
              <NavLink className="nav nav-link pink bl" to="/tracklist">
              Tracklist
              </NavLink>
            </li>

            {/* <li className="nav-item">
              <NavLink className="nav nav-link pink bl" to="/trackdetails">
              Trackdetails
              </NavLink>
            </li> */}
            

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
                          // value={trackingNumber}
                        // onChange={(e) => settrackingNumber(e.target.value)}
                        /> 
                
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