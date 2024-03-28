import React, { useEffect, useLayoutEffect, useState } from "react";
import "./App.css";
async function queryData() {
  const data= await new Promise<number>((resolve)=>{
    setTimeout(()=>{
      resolve(22)
    },2000)
  })
  return data  
}
function App() {
  // const [count, setCount] = useState(1);
  const [count, setCount] = useState(()=>{
    const num1=1
    const num2=2
    return num1+num2
  });
  useEffect(()=>{
    console.log('useEffect')
    queryData().then(res=>{
      setCount(res)
    })
    return ()=>{
      console.log('clean fun')
    }
  },[count])
  useLayoutEffect(()=>{
    console.log('useLayoutEffect')
    queryData().then(res=>{
      setCount(res)
    })
    return ()=>{
      console.log('clean fun')
    }
  },[count])
  return (
    // <div className="App" onClick={() => setCount(count + 1)}>
    <div className="App" onClick={() => setCount((count)=> count+ 1)}>
      {count}
    </div>
  );
}

export default App;
