import { produce } from "immer";
import { useState } from "react";
// 综上，在 react 里，只要涉及到 state 的修改，就必须返回新的对象，不管是 useState 还是 useReducer。
// 如果是复杂的深层对象的修改，可以用 immer 来优化。
// 为什么大家会说 React 推崇的是数据不可变？
// 就是因为这个
function App() {
  const [obj, setObj] = useState({
    a: {
      c: {
        e: 0,
        f: 0,
      },
      d: 0,
    },
    b: 0,
  });

  return (
    <div>
      <div
        onClick={() => {
          // obj.a.c.e++;
          // setObj(obj);
          setObj(produce(obj,(obj)=>{
            obj.a.c.e++
          }))
        }}
      >
        加
      </div>
      <div>{JSON.stringify(obj)}</div>
    </div>
  );
}

export default App;
