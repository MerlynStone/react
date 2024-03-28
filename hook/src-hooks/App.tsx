import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(1);
  const [count, setCount] = useState(()=>{
    const num1=1
    const num2=2
    return num1+num2
  });
  useEffect(()=>{
    setInterval(()=>{
      console.log(count)
      setCount(count=>count+2)
    },1000)
  },[])
  return (
    // <div className="App" onClick={() => setCount(count + 1)}>
    <div className="App" onClick={() => setCount((count)=> count+ 1)}>
      {count}
    </div>
  );
}

export default App;
