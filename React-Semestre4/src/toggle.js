import React, { useState } from 'react';

const Toggle = ({onChange}) =>{
  const [value,setValue] = useState(true);
  const handleClick = () => 
  {
    let newV = !value;
    setValue(newV);
    onChange(newV);
  };
  return <div>
    <p>{value ? "ON" : "OFF"}</p>
    <button onClick={handleClick}>Change</button>
  </div>
};

export default Toggle;