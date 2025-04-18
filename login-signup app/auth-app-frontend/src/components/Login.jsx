
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from "../../utils";
import 'react-toastify/dist/ReactToastify.css';


function Login() {
  const [loginInfo, setLoginInfo] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedLoginInfo = { ...loginInfo, [name]: value };
    setLoginInfo(updatedLoginInfo);
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    // Client-side validation
    const { email, password } = loginInfo;
    if ( !email || !password) {
      handleError("Email and password are required!");
      return;
    }

    // API call
    try {
      const url = "http://localhost:3000/login";
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginInfo)
      });
      const result = await response.json();

      // Handle response
      const { success, message, jwtToken, name,  error } = result;
      if (success) {
        handleSuccess(message);
// dispatch 
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", name);

        setTimeout(() => {
          navigate('/home');
        }, 1000);
      } else if (error) {
        const details = error?.details[0]?.message;
        handleError(details);
      }
    } catch (error) {
      handleError("An error occurred while signing up");
    }
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <div>
        <form onSubmit={handleLogin}>

          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter your email..."
              value={loginInfo.email}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter your password..."
              value={loginInfo.password}
            />
          </div>
          <button type="submit">Login</button>
          <span className="link">Don't have an account ?<Link to='/signup'>Create one</Link></span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Login;

