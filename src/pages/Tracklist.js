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
    
          <div>
         {traackingNumber.map( traackNumber => {      
               return ( <>
                  <Trackdetails changed={(e)=> ischange(e)}  key={traackNumber.id} id={traackNumber.id}
                  //  CreateDate={traackNumber.CreateDate} 
                   CurrentStatus={traackNumber.CurrentStatus} 
                  //  SupportPhoneNumbers={traackNumber.SupportPhoneNumbers}  TrackingNumber={traackNumber.TrackingNumber} 
                  //  TrackingURL={traackNumber.TrackingURL} TransitEvents={traackNumber.TransitEvents}
                   />
                  </>
               )
             })
         }
       </div>
       </div>
    
      </>)
    } 