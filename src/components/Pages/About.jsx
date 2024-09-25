import React from 'react'
import {useNavigate} from 'react-router-dom'
const About = () => {
    const navigate=useNavigate();
    const Home=()=>{
        navigate('/');
    }
    const Back=()=>{
        navigate(-1);
    }
  return (
    <>
    <button onClick={Home}>Home</button>
    <button onClick={Back}>Back</button>
    </>
  )
}

export default About