import React from "react";

const Signup=()=>{
  return(  
    <div className="container" style={{ width: "500px", height: "700px" }}>
    <div className="formAA">
     <form style={{width:"300px"}} >
<div className="form-group">
  <label htmlFor="fullname" style={{color:"black"}}>User NAME</label>
  <input type="text" className="form-control"
    id="fullname"
    placeholder="Enter Your User NAME"
    
    
  />
</div>
<br></br>
<div className="form-group">
  <label htmlFor="email" style={{color:"black"}}>E-mail Address</label>
  <input
    type="text"
    className="form-control"
    id="email"
    placeholder="Enter Your E-mail Address"
  />
</div>
<br></br>
<div className="form-group">
  <label htmlFor="phone" style={{color:"black"}}>Phone Number</label>
  <input
    type="text"
    className="form-control"
    id="phone"  
    placeholder="Enter Your Phone Number"
  />
</div>
<br></br>
<div className="form-group">
  <label htmlFor="password" style={{color:"black"}}>Password</label>  
  <input
    type="text"
    className="form-control"
    id="password"
    placeholder="Enter Your Password"
  />
</div>
<br></br>
<div className="form-group">
  <label htmlFor="password" style={{color:"black"}}> Confrim Password</label>  
  <input
    type="text"
    className="form-control"
    id="password"
    placeholder="Enter Your Confrim Password"
  />
</div>
<div className="form-group">
  <br />
</div>
<button className="btn btn-outline-dark ">Signup</button>
</form>
</div>
</div>
  
  
    )
}


export default Signup;