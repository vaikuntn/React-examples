import React, { Component, useState, useEffect, useRef } from 'react';
function Counter(){
  const [lapse, setLapse] = useState(0);
  const [runningState, setRunningState] = useState(false);
  const intervalRef = useRef(null); 

  function handleRunclick(){
    if(runningState){

      clearInterval(intervalRef.current);
    }else{
      const startTime = Date.now() - lapse;
      intervalRef.current = setInterval(()=>{
        setLapse(Date.now() - startTime)
      }, 0)
    }
    setRunningState(!runningState);
  }

  const handleClear = ()=> {
    clearInterval(intervalRef.current);
    setLapse(0);
    setRunningState(false)
  }

  useEffect(()=>{
    return()=>{
      clearInterval(intervalRef.current);
    }
  }, [])
  return(
    <div>
      {lapse} Milli Second
      <button onClick={handleRunclick}> {runningState? "Stop": "Start" }</button>
      <button onClick={handleClear}> Clear </button>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter></Counter>
      </div>
    );
  }
}

export default App;
