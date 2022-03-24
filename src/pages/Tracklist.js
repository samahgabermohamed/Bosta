import axios from 'axios';
import React, { useState} from 'react';
import  Trackdetails from '../pages/Trackdetails';

export default function Tracklist() {
   const [traackingNumber , settraackingNumber] = useState([])
   const [tNumber , settNumber] = useState('');
   const [setsearchmode] = useState(false);
   const [change , setchange] = useState([])
   const [setnotfound] = useState()

   function ischange(e){
     console.log("samah")
    setchange([...change , e])
   }

  function getnumber(e){
    settNumber(e.target.value)
  }
        function search(e) {
        e.preventDefault();
        return fetch(`https://tracking.bosta.co/shipments/track/${tNumber}`)
        .then(response => response.json())
        .then((jsonData) => {
          // jsonData is parsed json object received from url
          console.log(jsonData)
          
        })
        .catch((error) => {
          // handle your errors here
          console.error(error)
        })
        
      

//       res => {
//         settraackingNumber(res.data.results)
//         console.log(res.data.results)
//         if (res.data.results.length === 0){
//           setnotfound(true)
//           console.log(e)

//         } else {
//           setnotfound(false)
//           console.log(e)

//         }
//       }
//   )
//   console.log(e)
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
      {/* <div className='row'>

     {   
         traackingNumber.map( traackNumber => {      
           return ( <>
              <Trackdetails changed={(e)=> ischange(e)}  key={traackNumber.id} id={traackNumber.id}
               timestamp={traackNumber.timestamp}  PromisedDate={traackNumber.PromisedDate} state={traackNumber.state}
               />
              </>
           )
         })
     }
   </div> */}
   </div>

  </>)
}


























































































// import axios from 'axios';
// import React, { useState} from 'react';
// import  Trackdetails from '../pages/Trackdetails';

// export default function Tracklist() {
//    const [traackingNumber , settraackingNumber] = useState([])
//    const [tNumber , settNumber] = useState('');
//    const [setsearchmode] = useState(false);
//    const [change , setchange] = useState([])
//    const [setnotfound] = useState()

//    function ischange(e){
//      console.log("samah")
//     setchange([...change , e])
//    }

//   function getnumber(e){
//     settNumber(e.target.value)
//   }
//   // function search(e){
//   //   e.preventDefault();
//   //   setsearchmode(true)
//     // axios.get(`https://tracking.bosta.co/shipments/track/${tNumber}`).then(
    

//       function search(e) {
//         e.preventDefault();
//         return fetch(`https://tracking.bosta.co/shipments/track/${tNumber}`)
//         .then(response => response.json())
//         .then((jsonData) => {
//           // jsonData is parsed json object received from url
//           console.log(jsonData)
//         })
//         .catch((error) => {
//           // handle your errors here
//           console.error(error)
//         })
      

// //       res => {
// //         settraackingNumber(res.data.results)
// //         console.log(res.data.results)
// //         if (res.data.results.length === 0){
// //           setnotfound(true)
// //           console.log(e)

// //         } else {
// //           setnotfound(false)
// //           console.log(e)

// //         }
// //       }
// //   )
// //   console.log(e)
//   }
//   function JsonDataDisplay(){
//     const DisplayData=JsonData.map(
//         (tNumber)=>{
//   return (
//       <>   
//      {/* <h1 className='m-3'> tracking Number</h1> */}

//     <div className="container">

// <div className="input-group mb-3">
//   <form className='col-10' onSubmit={(e)=> {search(e)}}>
//      <input type="Number" value={tNumber} name='tNumber' onChangeCapture={(e)=> getnumber(e)} 
//      className="form-control" placeholder="enter your tracking Number" 
//      aria-label="Recipient's username" aria-describedby="basic-addon2"/>
//       <div className="input-group-append">
//     <button className="btn btn-outline-secondary mt-2"  type="submit">Search</button>
//   </div>
//   </form>

// </div> 
           
//                 <tr>
//                     <td>{tNumber.id}</td>
//                     <td>{tNumber.CreateDate}</td>
//                     <td>{tNumber.SupportPhoneNumbers}</td>
//                 </tr>
//             )
        
//     )
 
//     return(
//         <div>
//             <table class="table table-striped">
//                 <thead>
//                     <tr>
//                     <th>Sr.NO</th>
//                     <th>CreateDate</th>
//                     <th>SupportPhoneNumbers</th>
//                     </tr>
//                 </thead>
//                 <tbody>
                 
                    
//                     {DisplayData}
                    
//                 </tbody>
//             </table>
             
//         </div>
//     )
//  {/* } */}
// {/* {Trackdetails} */}
// {/* return (
//     <div className="App">
//       <header className="App-header">
//         <h2>GitHub User Data</h2>
//       </header>
//       <div className="user-container">
//         <h5 className="info-item">{tNumber.CreateDate}</h5>
//         <h5 className="info-item">{tNumber.SupportPhoneNumbers}</h5>
//         <h5 className="info-item">{tNumber.TrackingURL}</h5>
//         <h5 className="info-item">{tNumber.TransitEvents}</h5>
//       </div>
//     </div>
//   ); */}
// {/* } */}

//       {/* <div>
//      {traackingNumber.map( jsonData => {      
//            return ( <>
//               <Trackdetails changed={(e)=> ischange(e)}  key={jsonData.id} id={jsonData.id}
//               //  CreateDate={traackNumber.CreateDate} 
//                CurrentStatus={jsonData.CurrentStatus} 
//               //  SupportPhoneNumbers={traackNumber.SupportPhoneNumbers}  TrackingNumber={traackNumber.TrackingNumber} 
//               //  TrackingURL={traackNumber.TrackingURL} TransitEvents={traackNumber.TransitEvents}
//                />
//               </>
//            )
//          })
//      }
//    </div> */}
//    {/* </div> */}

//   </>)
// }
































































// {/* // import axios from 'axios';
// // import React, { useState} from 'react';
// // import  Trackdetails from '../pages/Trackdetails';

// // export default function Tracklist() { */}
// {/* //    const [traackingNumber , settraackingNumber] = useState([])
// //    const [tNumber , settNumber] = useState('');
// //    const [setsearchmode] = useState(false);
// //    const [change , setchange] = useState([])
// //    const [setnotfound] = useState()

// //    function ischange(e){
// //      console.log("samah")
// //     setchange([...change , e])
// //    }

// //   function getnumber(e){
// //     settNumber(e.target.value)
// //   }
// //   function search(e){
// //     e.preventDefault();
// //     setsearchmode(true)
// //     axios.get(`https://tracking.bosta.co/shipments/track/${tNumber}`).then(
    

// //       res => {
// //         settraackingNumber(res.data.results)
// //         console.log(res.data.results)
// //         if (res.data.results.length === 0){
// //           setnotfound(true)
// //           console.log(e)

// //         } else {
// //           setnotfound(false)
// //           console.log(e)

// //         }
// //       }
// //   )
// //   console.log(e)
// //   }

// //   return (
// //       <>   
// //      {/* <h1 className='m-3'> tracking Number</h1> */}

//     <div className="container">

// <div className="input-group mb-3">
//   <form className='col-10' onSubmit={(e)=> {search(e)}}>
//      <input type="Number" value={tNumber} name='tNumber' onChangeCapture={(e)=> getnumber(e)} 
//      className="form-control" placeholder="enter your tracking Number" 
//      aria-label="Recipient's username" aria-describedby="basic-addon2"/>
//       <div className="input-group-append">
//     <button className="btn btn-outline-secondary mt-2"  type="submit">Search</button>
//   </div>
//   </form>

// </div> 

//       <div>
//      {traackingNumber.map( traackNumber => {      
//            return ( <>
//               <Trackdetails changed={(e)=> ischange(e)}  key={traackNumber.id} id={traackNumber.id}
//               //  CreateDate={traackNumber.CreateDate} 
//                CurrentStatus={traackNumber.CurrentStatus} 
//               //  SupportPhoneNumbers={traackNumber.SupportPhoneNumbers}  TrackingNumber={traackNumber.TrackingNumber} 
//               //  TrackingURL={traackNumber.TrackingURL} TransitEvents={traackNumber.TransitEvents}
//                />
//               </>
//            )
//          })
//      }
//    </div>
//    </div>

//   </>)
// } */}













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


