import React, { HtmlHTMLAttributes, useEffect, useImperativeHandle, useRef, useState } from "react";
import "./App.css";
// 如果是想从子组件传递 ref 到父组件，就需要 forwardRef 了，也就是把组件内的 ref 转发一下。

interface RefProps{
  aaa:()=>void;
}

// 组件
const Guang :React.ForwardRefRenderFunction<RefProps> = (props,ref)=>{
  const inputRef = useRef<HTMLInputElement>(null)
  // 是用 useImperativeHanlde 自定义了 ref 对象：
  useImperativeHandle(ref,()=>{  
    return {
      aaa() {
          inputRef.current?.focus()
      },
    }
  },[inputRef])
  return <div>
    <input type="text" ref={inputRef} />
  </div>
}
const GuangWrap=React.forwardRef(Guang)   // forwardRef 把 ref 转发到组件内部来设置
// 不过被 forwardRef 包裹的组件的类型就要用 React.forwardRefRenderFunction 了

function App() {
  const ref = useRef<RefProps>(null)
 useEffect(()=>{
  ref.current?.aaa()
 },[])
  return (
    <div>
      <GuangWrap ref={ref} />
    </div>
  );
}

export default App;
