import React from 'react'

const Person = ({name,age,height}) => {

  return (
    <div><h1>Name :- {name}</h1>
    <h2>Age :- {age}</h2>
    <h2>Height :- {height}</h2></div>
  );
}

export default Person