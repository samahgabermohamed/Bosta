import React from 'react';

export default function Trackdetails (props) {

  return (
          <div className="card col-md-3 m-3 col-sm-12">
            <div className="card-body">
              <h1>fghghghghg</h1>
              {/* <h5 className="card-timestamp">{props.timestamp}</h5>
              <p className="card-text" > {props.state}</p> */}
              <p className="card-text" > {props.CurrentStatus}</p>
              {/* <p className="card-text" > {props.CreateDate}</p>
              <p className="card-text" > {props.SupportPhoneNumbers}</p>
              <p className="card-text" > {props.trackNumber}</p>
              <p className="card-text" > {props. TrackingURL}</p>
              <p className="card-text" > {props.TransitEvents}</p> */}
              
            </div>
          </div>
        );
}





























// import React from 'react';

// export default function Trackdetails (props) {

//   return (
//           <div className="card col-md-3 m-3 col-sm-12">
//             <div className="card-body">
//               {/* <h5 className="card-timestamp">{props.timestamp}</h5>
//               <p className="card-text" > {props.state}</p> */}
//               <p className="card-text" > {props.CurrentStatus}</p>
//               {/* <p className="card-text" > {props.CreateDate}</p>
//               <p className="card-text" > {props.SupportPhoneNumbers}</p>
//               <p className="card-text" > {props.trackNumber}</p>
//               <p className="card-text" > {props. TrackingURL}</p>
//               <p className="card-text" > {props.TransitEvents}</p> */}
              
//             </div>
//           </div>
//         );
// }















// import React from "react";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { axiosInstance } from "../network/axiosInstance";

// export default function Trackdetails() {
//   const params = useParams();
//   const [details, setDetails] = useState({});
//   console.log(params);
//   useEffect(() => {
//     axiosInstance
//       .get(`/trackingNumber/${params.id}`)
//       .then((res) => setDetails(res.data))
//       .catch((err) => console.log(err));
//   }, []);
//   return (
//     <div>
//       <h1>Details</h1>
//       <h3>state : {details.state}</h3>
//       <h3>timestamp : {details.timestamp}</h3>
//       <h3>PromisedDate : {details.PromisedDate}</h3>
//     </div>
//   );
// } 
