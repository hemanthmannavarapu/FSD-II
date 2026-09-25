import { useState } from "react"
import React from 'react'

const Exp2b = () => {
    const [count ,setCount] = useState(0);
  return (
    <div>
      <button onClick = {()=>setCount(count+1)}>count:{count}
      </button>
    </div>
  )
}

export default Exp2b
