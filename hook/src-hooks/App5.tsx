import React, { HtmlHTMLAttributes, useEffect, useRef, useState } from "react";
import "./App.css";
// 如果是想从子组件传递 ref 到父组件，就需要 forwardRef 了，也就是把组件内的 ref 转发一下。

// 组件
const Guang :React.ForwardRefRenderFunction<HTMLInputElement> = (props,ref)=>{
  return <div>
    <input type="text" ref={ref} />
  </div>
}
const GuangWrap=React.forwardRef(Guang)   // forwardRef 把 ref 转发到组件内部来设置
// 不过被 forwardRef 包裹的组件的类型就要用 React.forwardRefRenderFunction 了

function App() {
  const ref = useRef<HTMLInputElement>(null)
 useEffect(()=>{
  ref.current?.focus()
 },[])
  return (
    <div>
      <GuangWrap ref={ref} />
    </div>
  );
}

export default App;
