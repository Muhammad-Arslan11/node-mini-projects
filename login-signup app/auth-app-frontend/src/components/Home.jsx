import React, { useState, useEffect } from 'react';
import { handleError, handleSuccess } from "../../utils";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function Home() {
  const [loggedInUser, setLoggedInUser] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setLoggedInUser(loggedInUser);
    }
  }, []);

  const fetchProducts = ()=>{
    const token = localStorage.getItem('token');
    const headers = {
      headers:{'Authorization': token}
    }
     try {
       // api call
        const response = fetch('http://localhost:3000/products', headers);
        const result = response.json();
        console.log(result);
     } catch (error) {
      handleError(error);
     }
  }

  // fetch products
  useEffect(()=>{
    fetchProducts();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    
    // Show success message using handleSuccess
    handleSuccess('Logged out Successfully!');

    // Navigate to login page after a delay
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  return (
    <>
      <h1>Welcome {loggedInUser}</h1>
      <button onClick={handleLogout}>Logout</button>
      <ToastContainer />
    </>
  );
}

export default Home;
