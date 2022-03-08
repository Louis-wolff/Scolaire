import React, { useState, useEffect } from 'react';

const Count = () => {
  const [cont,setCont] = useState(0);
  const [incr, setIncr] = useState(1);

  // Similar to componentDidMount and componentDidUpdate:  
  useEffect(() => {    // Update the document title using the browser API    
    document.title = `You clicked ${cont} times`;  
  }, [cont]);

  const click = () => {
    setCont(cont+incr);
  };

  const handleChange = e =>{
  	if(e.target.value !== ''){
    	setIncr(parseInt(e.target.value));
	} else {
		setIncr(0);
	}
  }

    return <div>
    <h1>{cont}</h1>
    <input type="number" onChange={handleChange}/>
    <button onClick={click}>Plus</button> 
    <p></p>
  </div>
};

export default Count;