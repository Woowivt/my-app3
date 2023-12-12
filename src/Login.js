import React from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="container" style={{ width: "100%", height: "500px" }}>
      <form className="formAA">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1" style={{ color: "black" }}>
            Email/Username
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email/Username"
          />
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1" style={{ color: "black" }}>
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <br></br>
        <button type="submit" className="btn btn-outline-dark ms-2">
          Login
        </button>
        <button type="submit" className="btn btn-outline-dark ms-2" onClick={()=>navigate("/Signup")}>
          Signup
        </button>
      </form>
    </div>
  );
};
export default Login;
