import axios from 'axios';
import React, { useState } from 'react';
import  Trackdetails from '../pages/Trackdetails';
import Table from 'react-bootstrap/Table'
import { NavLink } from "react-router-dom";

export default function Tracklist() {
   const [traackingNumber , settraackingNumber] = useState([])
   const [tNumber , settNumber] = useState('');
   const [setsearchmode] = useState(false);
   const [change , setchange] = useState([])
   const [setnotfound] = useState()



  //  const json = '{"result":true, "count":42}';
  //  const obj = JSON.parse(json);
   
  //  console.log(obj.count);
  //  // expected output: 42
   
  //  console.log(obj.result);
  //  // expected output: true
   

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

    // // =================
   
    // .get("${tNumber}", {
    //   headers: {
    //     "Accept-language": "ar",
    //   },
    // })
    // // =====================


    .then(response => response.json())
    .then((jsonData) => {
      // jsonData is parsed json object received from url;
      console.log(jsonData)
      return jsonData
    })
    .catch((error) => {
      // handle your errors here
      console.error(error)
    })

    
}

// {traackingNumber.map( jsonData => {      
//       return ( <>
//          {/* <Trackdetails changed={(e)=> ischange(e)} */}
//            key={jsonData.id} 
//          {/* //  CreateDate={traackNumber.CreateDate}  */}
//          {jsonData.CurrentStatus} 
//          {/* //  SupportPhoneNumbers={traackNumber.SupportPhoneNumbers}  TrackingNumber={traackNumber.TrackingNumber} 
//          //  TrackingURL={traackNumber.TrackingURL} TransitEvents={traackNumber.TransitEvents} */}
//           {/* /> */}
//          </>
//       )
//     })
// }
return (
    <>   
       {/* <h1 className='m-3'> tracking Number</h1> */}
    
        <div className="container mb-5">
    
    <div className="input-group mb-3">
      <form className='col-10' onSubmit={(e)=> {search(e)}}>
         <input type="Number" value={tNumber} name='tNumber' onChangeCapture={(e)=> getnumber(e)} 
         className="form-control" placeholder="enter your tracking Number" 
         aria-label="Recipient's username" aria-describedby="basic-addon2"/>
          <div className="input-group-append">
        <button className="btn-lg butt mt-3"  type="submit">Search</button>
      </div>
      </form>
    </div>   
       </div>
    

       <div className="container-sm mb-5">
  <Table responsive="sm ">
    <tbody>
      <tr style={{color:"#b7b7b7"}}>
      <td >رقم الشحنة  6636234</td>
      <td >اخر تحديث </td>
      <td >اسم التاجر</td>
        <td >موعد التسليم خلال</td>
      </tr>
      <tr >
      <th style={{color:"#91e512"}}>تم تسليم الشحنة</th>
      <th>at 5:33pm 06/04/2020 اﻷثنين</th>
      <th>SOUQ.com</th>
        <th> 2020 يناير
           3 </th>
      </tr>
    </tbody>
  </Table>
</div>


<div className="container-sm">
<div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-lg-end">عنوان التسليم</h5>
      <p className="card-text mb-5 text-lg-end">cairo ...امبابة شارع طلعت حرب مدينة العمال بجوارالبرنس منزل 17 بلوك 33</p>
      <p className="card-text mb-5 text-lg-end">هل توجد مشكلة في شحنتك </p>
        <button   className="btn-outline-light mb-5 butt">
            <NavLink className="nav nav-link active " exact to={"/tracklist"}>
            ابلاغ عن مشكلة
            </NavLink>
        
          </button>
          <img
          src="https://media.istockphoto.com/photos/negative-feedback-and-rate-with-bad-smile-face-picture-id1306118503?k=20&m=1306118503&s=612x612&w=0&h=Ne9zXuxLD3oQsbRLQtdm-wSl_dUhO7RrkyHda-fI6CM="
          alt="img"
          className="log  ms-5"
          style={{ width: "8rem" }}
        />
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-lg-end">تفاصيل الشحنة</h5>
        <div>
  <Table responsive="sm text-lg-end">
  <tbody>
      <tr style={{color:"#b7b7b7"}}>
      <td>تفاصيل</td>
      <td>الوقت</td>
      <td>التاريخ</td>
      <td>الفرع</td>
      </tr>
      <tr style={{color:"#b7b7b7"}}>
      <td>تم انشاء الشحنة</td>
      <td>12:30pm</td>
      <td>05/04/2020</td>
        <td>مدينة نصر</td>
      </tr>
      <tr style={{color:"#b7b7b7"}}>
      <td>تم استلام الششحنة من التاجر</td>
      <td>12:30pm</td>
      <td>05/04/2020</td>
      <td>مدينة نصر</td>
      </tr>
      <tr style={{color:"#b7b7b7"}}>
      <td>الشحنة خرجت للتسليم</td>
      <td>12:30pm</td>
      <td>05/04/2020</td>
      <td>مدينة نصر</td>
      </tr>
      <tr style={{color:"#b7b7b7"}}>
      <td>تم التسليم</td>
      <td>12:30pm</td>
      <td>05/04/2020</td>
      <td>مدينة نصر</td>
      </tr>
    </tbody>
  </Table>
</div>
      </div>
    </div>
  </div>
</div>
</div>

      </>)


    } 

