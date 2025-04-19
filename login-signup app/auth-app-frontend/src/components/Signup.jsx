
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from "../../utils";
import 'react-toastify/dist/ReactToastify.css';


function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedSignupInfo = { ...signupInfo, [name]: value };
    setSignupInfo(updatedSignupInfo);
  }

  const handleSignup = async (e) => {
    e.preventDefault();

    // Client-side validation
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      handleError("All fields are required!");
      return;
    }

    // API call
    try {
      const url = "http://localhost:3000/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signupInfo)
      });
      const result = await response.json();

      // Handle response
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      } else if (error) {
        const details = error?.details[0]?.message;
        handleError(details);
      }
    } catch (error) {
      handleError("An error occurred while signing up.");
    }
  }

  return (
    <div className="container">
      <h1>Signup</h1>
      <div>
        <form onSubmit={handleSignup}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Enter your name..."
              autoFocus
              value={signupInfo.name}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter your email..."
              value={signupInfo.email}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter your password..."
              value={signupInfo.password}
            />
          </div>
          <button type="submit">Signup</button>
          <span className="link">Already have an account ? <Link to='/login'>Login</Link></span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Signup;

