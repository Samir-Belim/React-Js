import React from 'react'

const Ternary = ({name,age}) => {
  return (
    <div><h1>Name :- {name}</h1>
    <h2>{age>18?"You can drive":"You cannot drive"}</h2></div>
  )
}

export default Ternary