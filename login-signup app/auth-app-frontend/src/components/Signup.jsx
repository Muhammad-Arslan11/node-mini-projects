
import React, {useState} from "react";
import { Link } from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import { handleError } from "../../utils";

function Signup() {

    const [signupInfo, setSignupInfo]  = useState(
        {name: '',
         email: '',
         password: '',
        }
    );

    const handleChange = (e)=>{
        const {name, value} = e.target;
        console.log(name,value);

        const copysignupInfo = {...signupInfo}
        copysignupInfo[name] = value;
        setSignupInfo(copysignupInfo);

    }
    const handleSignup = async (e)=>{
        e.preventDefault();
        // client side validation
        if(!name || !email || !password){
            return handleError("all fields are required!");
        }

        // api call
        try {
             const url = "http://localhost:3000/signup";
             const response = await fetch(url, {
             method: "POST",
             headers: {contentType: "application/json"},
             body: JSON.stringify(signupInfo)
             });
             const result = await response.json();
             console.log(result);
        } catch (error) {
            
        }
    }
  return (
    <>
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
              placeholder="enter your name..."
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
              placeholder="enter your email..."
              value={signupInfo.email}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
            onChange={handleChange}
              type="password"
              name="password"
              placeholder="enter your password..."
              value={signupInfo.password}
            />
          </div>
        <button>Signup</button>
        <span>Already have an account ?
            <Link to='login'>Login</Link>
        </span>
        </form>
        <ToastContainer/>
      </div>
      </div>
    </>
  );
}

export default Signup;
