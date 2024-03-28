import { produce } from "immer";
import {
  useContext,
  createContext,
  useState,
  useEffect,
  useMemo,
  memo,
  useCallback,
  useReducer,
  Reducer,
} from "react";
interface Data {
  a: {
    c: {
      e: number;
      f: number;
    };
    d: number;
  };
  b: number;
}
interface Action {
  type: "add" | "minus";
  num: number;
}
function reducer(state: Data, action: Action) {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case "add":
      return produce(state,(state)=>{  // immer produce good
        state.a.c.e+=action.num
      })
      // return {  // bad
      //   ...state,
      //   a: {
      //     ...state.a,
      //     c: {
      //       ...state.a.c,
      //       e: state.a.c.e + action.num,
      //     },
      //   },
      // };
  }
  return state;
}
//  useReduce + immr  返回创建的对象比较复杂 优化点
// immer 是依赖 Proxy 实现的，它会监听你在函数里对属性的修改，然后帮你创建一个新对象
function App() {
  // useReducer 的类型参数传入 Reducer<数据的类型，action 的类型>
  // 当修改 state 的逻辑比较复杂，用 useReducer
  const [res, dispath] = useReducer<Reducer<Data, Action>>(reducer, {
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
    <div className="App">
      <div onClick={() => dispath({ type: "add", num: 3 })}>加</div>
      <div onClick={() => dispath({ type: "minus", num: 3 })}>减</div>
      <div>{JSON.stringify(res)}</div>
    </div>
  );
}

export default App;
