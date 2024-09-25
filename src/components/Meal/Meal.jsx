import React, { useEffect, useState } from 'react'
import './Meal.css'
const Meal = () => {
    const[mealdata,setMealdata]=useState([]);
    const[area,setArea]=useState("Indian");
    const [inputData,setInputData]=useState(" ");

    useEffect(()=>{
        const fetchdatafromapi = async() =>{
            const api= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);

            const data=await api.json();
            // console.log(data.meals[11]);
            setMealdata(data.meals);
        };
        fetchdatafromapi();
    },[area]);

    
    const submitHandler = async(e) =>{
        e.preventDefault();
        const api =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`);
        
        const data = await api.json();
       // console.log(data.meals);
       setMealdata(data.meals);
       setInputData(" ");
    }
  return (
    <>
    <div className="buttons">
        <button
        onClick={()=>setArea("Indian")}>Indian</button>
        <button  onClick={()=>setArea("Canadian")}>American</button>
        <button  onClick={()=>setArea("Japanese")}>Japanese</button>
        <button  onClick={()=>setArea("Chinese")}>Chinese</button>
        <button  onClick={()=>setArea("Russian")}>Russian</button>
    </div>
    <form onSubmit={submitHandler} >
        <input type="text" onChange={(e)=>setInputData(e.target.value)}/>
    </form>
    <div className='container'>
    {mealdata.map((data)=>(
     <div key={data.idMeal} className='poster'>
        <div className='movies'>
            <img src={data.strMealThumb} alt="" style={{width:'250px'}} />
        </div>
        <h5>{data.strMeal}</h5>
  </div>
    ))}
    </div>
    </>
  )
}

export default Meal