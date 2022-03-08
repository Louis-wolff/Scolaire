import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [date, setDate] = useState(new Date());
  const [show,setShow] = useState(true);

  const showClock = () =>{
    let value = !show;
    setShow(value);
  };

  function refreshClock() {
    setDate(new Date());
  }; 

  useEffect(() => {
    if(show === true){
      const timerId = setInterval(refreshClock, 1000);
      return function cleanup() {
        clearInterval(timerId);
      };
    }
  }, []);

  
    if(show === true){
      return <div> 
        <h2>{date.toLocaleTimeString()}</h2>
        <button onClick={showClock}>Clock</button>
      </div> ;
    } else {
      return <div> 
        <button onClick={showClock}>Clock</button>
      </div>;
    }

};

export default Clock;