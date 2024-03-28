import React, { createContext, memo, useCallback, useContext, useEffect, useMemo, useState } from "react";
import "./App.css";
import { count } from "console";
const countContext = createContext(111);
// 用 createContext 创建 context 对象，用 Provider 修改其中的值， function 组件使用 useContext 的 hook 来取值，class 组件使用 Consumer 来取值
// 组件1
function Aaa() {
  const [num,setNum] = useState(1)
  const [count,setCount] = useState(1)
  useEffect(()=>{
    setInterval(()=>{
      setNum(Math.random())// 传入 count={2} 值不变 但会导致 Bbb 组件一直渲染
    },2000)
  },[])
  // // 传入 callback 使用 memo 还会渲染 因为每次 function 都是新创建的 也就是每次props都会变 这样memo就没有用了
  // 这时候就要使用到 useCallback
  const bbbCallback= useCallback(function bbbCallback() {
    
  },[])
  // 同理，useMemo 也是和 memo 打配合的，只不过它保存的不是函数，而是值：
  const count2=useMemo(()=>{
    return count*10
  },[count])
  return (
    // <Bbb count={2}></Bbb> // 但会导致 Bbb 组件一直渲染
      <MenoBbbb count={count2} callback={bbbCallback}></MenoBbbb>  // 不会一直渲染 优化点
  );
}
interface BbbProps{
  count:number
  callback:Function
}
function Bbb(props:BbbProps) {
  console.log('bbb render');
  // 传入 callback 使用 memo 还会渲染 因为每次 function 都是新创建的 也就是每次props都会变 这样memo就没有用了
  // 这时候就要使用到 useCallback
  return (
    <div>
      {props.count}
    </div>
  );
}
// memo 的作用是只有 props 变的时候，才会重新渲染被包裹的组件。
const MenoBbbb = memo(Bbb)
// memo 是防止 props 没变时的重新渲染，useMemo 和 useCallback 是防止 props 的不必要变化。
function Ccc() {
  const _count = useContext(countContext);
  return <h2>count:{_count}</h2>;
}
function App() {
  // const [count, setCount] = useState(1);
  return (
    // <div className="App" onClick={() => setCount(count + 1)}>
    <Aaa></Aaa>
  );
}

export default App;
