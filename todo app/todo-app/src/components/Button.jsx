import React from 'react'

function Button({status}) {

   const buttonClass = status === "Active" 
    ? "bg-blue-500 text-white"  // Solid blue button
    : "border border-blue-500 text-blue-500 bg-transparent";  // button with only outline blue
  return (
    <>
    <button className={`btn ${buttonClass}rounded-lg m-3 w-32`}>{status}</button>
    </>
  )
}

export default Button