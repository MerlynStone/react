import React, { HtmlHTMLAttributes, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const inputRef = useRef<HTMLInputElement>(null)  // useRef 保存DOM  useRef 一般是用来存一些不是用于渲染的内容
  const numRef = useRef<number>(1)  // useRef 数据 不会触发渲染
  const [num,setNum] =useState(0)
  useEffect(()=>{
    inputRef.current?.focus()
  },[])
  useEffect(()=>{
    console.log('blur')
  },[inputRef.current?.blur()])
 
  return (
    // <input type="text" ref={inputRef} />
    <div onClick={()=>{
      numRef.current += 1
      setNum(Math.random())  //触发渲染  numRef 刷新
    }}>{JSON.stringify(numRef)}---{num}</div>
  );
}

export default App;
