import React from 'react'
import { useParams,Link,useLocation } from 'react-router-dom'
const Courses = () => {
    console.log(useLocation);
    const arr = [
        {
          id: "MERN001",
          course_name: "MERN_Stack",
          price: 10000,
          duration: "5 months",
        },
        {
          id: "JAVA002",
          course_name: "Java_Full_stack",
          price: 15000,
          duration: "5 months",
        },
        {
          id: "PY0102",
          course_name: "Python_Full_Stack",
          price: 5000,
          duration: "5 months",
        },
        {
          id: "REACT99",
          course_name: "React.JS",
          price: 25000,
          duration: "5 month",
        },
      
      ];
  return (
    
    <div>  Courses</div>
  );
}

export default Courses