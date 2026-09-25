import React from 'react'
import { useState } from 'react'
const Exp2c = () => {
    const handleClick =() => {
        alert("Button was clicked");
    };
  return (
    <div>
      <h2>Button click event</h2>
      <button onClick = {handleClick}>Click_Me</button>
    </div>
  )
}

export default Exp2c
