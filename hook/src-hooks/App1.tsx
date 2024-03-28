import { useEffect,useRef} from "react";
import React from "react";
import { useImperativeHandle } from "react";
interface RefProps{
  aaa:()=>void
}
const Guang:React.ForwardRefRenderFunction<RefProps> = (props,ref)=>{
  const inputRef=useRef<HTMLInputElement>(null)
  useImperativeHandle(ref,()=>{
    return{
      aaa() {
        inputRef.current?.focus()
      },
    }
  },[inputRef])
  return <div>
    <input ref={inputRef} type="text" />
  </div>
} 
const WrapGuang=React.forwardRef(Guang)
function App() {
  const ref=useRef<RefProps>(null)
  useEffect(()=>{
    ref.current?.aaa()
  },[])
  return (
  <div>
   <WrapGuang ref={ref}></WrapGuang>
  </div>
  );
}

export default App;
