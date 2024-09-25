import React from 'react'
import { useLocation } from 'react-router-dom'

const Loc = () => {
  const location=useLocation();
    return (
    <div>
        <h1>Path : {location.pathname}</h1>
    </div>
  )
}

export default Loc