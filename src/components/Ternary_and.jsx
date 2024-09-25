import React from 'react'

const Ternary_and = ({name,pancard,age}) => {
  return (
    <div>
        <h1>Name:- {name}</h1>
        <h2>Pancard :- {pancard==true&&"You are eligible"}</h2>
        <h2></h2>
    </div>
  )
}

export default Ternary_and