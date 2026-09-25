import React , {useState} from 'react'

const Exp2d = () => {
    const [isLoggedIn , setIsLoggedIn] = useState(false);
  return (
    <div>
      <h2>Conditional Rendering</h2>
      {isLoggedIn ? <p>Welcome user </p>:<p>Please Login</p>}
      <button onClick ={()=>setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  )
}

export default Exp2d

