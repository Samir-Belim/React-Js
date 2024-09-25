import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

const User = () => {
 
   const {id}=useParams();
   const location =useLocation();
  return (
   <>
   <div>
        <ul>
            <li><Link to="/user/:id"></Link>User <h1>{id}</h1></li>
           
        </ul>
    </div>
    <div>
        <h1>Path : {location.pathname}</h1>
    </div>
    </>
  );
}

export default User