import axios from 'axios';
import React, { useState} from 'react';
import  Trackdetails from '../pages/Trackdetails';

export default function Tracklist() {
   const [trackingNumber , settrackingNumber] = useState([])
   const [tNumber , settNumber] = useState('');
   const [searchmode , setsearchmode] = useState(false);
   const [change , setchange] = useState([])
   const [notfount , setnotfound] = useState()

   function ischange(e){
     console.log("samah")
    setchange([...change , e])
   }
 
  function getnumber(e){
    settNumber(e.target.value)
  }
  function search(e){
    e.preventDefault();
    setsearchmode(true)
    axios.get(`https://tracking.bosta.co/shipments/track/${tNumber}`).then(
     
      res => {
        settrackingNumber(res.data.results)
        console.log(res.data.results)
        if (res.data.results.length === 0){
          setnotfound(true)
        } else {
          setnotfound(false)
        }
      }
  )
  console.log(e)
  }

  return (
      <>   
     {/* <h1 className='m-3'> tracking Number</h1> */}
    
    <div className="container">
      
<div className="input-group mb-3">
  <form className='col-10' onSubmit={(e)=> {search(e)}}>
     <input type="Number" value={tNumber} name='tNumber' onChangeCapture={(e)=> getnumber(e)} 
     className="form-control" placeholder="enter your tracking Number" 
     aria-label="Recipient's username" aria-describedby="basic-addon2"/>
      <div className="input-group-append">
    <button className="btn btn-outline-secondary mt-2"  type="submit">Search</button>
  </div>
  </form>
 
</div> 
      <div className='row'>
    
     {   
         trackingNumber.map( trackNumber => {      
           return ( <>
              <Trackdetails changed={(e)=> ischange(e)}  key={trackNumber.id} id={trackNumber.id}
               timestamp={trackNumber.timestamp}  PromisedDate={trackNumber.PromisedDate} state={trackNumber.state}
               />
              </>
           )
         })
     }
   </div>
   </div>
      
  </>)
}













// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { axiosInstance } from "../network/axiosInstance";

// export default function Tracklist() {
//   const [trackingNumber, settrackingNumber] = useState([]);
//   useEffect(() => {
//     axiosInstance
//       .get("/trackingNumber", {
//         params: {
//           limit: 5,
//         },
//         headers: {
//           "Accept-language": "ar",
//         },
//       })
//       .then((res) => settrackingNumber(res.data))
//       .catch((err) => console.log(err));
//   }, []);
//   return (
//     <div>
//       <h1>trackingNumber List</h1>
//       <ul>
//         {trackingNumber.map((trackingNumber, index) => {
//           return (
//             <Link key={index} to={`/trackdetails/${trackingNumber.id}`}>
//               <li>{trackingNumber.id}</li>
//             </Link>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }
































// import axios from 'axios';
// import React, { useState} from 'react';
// import  Trackdetails from './Trackdetails';

// export default function Tracklist() {
//    const [movies , setmovies] = useState([])
//    const [Mname , setMname] = useState('');
//    const [searchmode , setsearchmode] = useState(false);
//    const [change , setchange] = useState([])
//    const [notfount , setnotfound] = useState()

//    function ischange(e){
//      console.log("samah")
//     setchange([...change , e])
//    }
 
//   function getname(e){
//     setMname(e.target.value)
//   }
//   function search(e){
//     e.preventDefault();
//     setsearchmode(true)
//     axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c&query=${Mname}`).then(
//       res => {
//         setmovies(res.data.results)
//         console.log(res.data.results)
//         if (res.data.results.length === 0){
//           setnotfound(true)
//         } else {
//           setnotfound(false)
//         }
//       }
//   )
//   console.log(e)
//   }

//   return (
//       <>   
//      <h1 className='m-3'> Movies List</h1>
    
//     <div className="container">
      
// <div classMame="input-group mb-3">
//   <form className='col-10' onSubmit={(e)=> {search(e)}}>
//      <input type="text" value={Mname} name='Mname' onChangeCapture={(e)=> getname(e)} className="form-control" placeholder="Movie name ..." 
//      aria-label="Recipient's username" aria-describedby="basic-addon2"/>
//       <div className="input-group-append">
//     <button className="btn btn-outline-secondary mt-2"  type="submit">Search</button>
//   </div>
//   </form>
 
// </div> 
//       <div className='row'>
    
//      {   
//          movies.map( movie => {      
//            return ( <>
//               <Trackdetails changed={(e)=> ischange(e)} isfav={false}  key={movie.id} id={movie.id} title={movie.title}  poster_path={movie.poster_path} vote_average={movie.vote_average}/>
//               </>
//            )
//          })
//      }
//    </div>
//    </div>
      
//   </>)
// }











