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
  result: number;
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
      // return {
      //   result: state.result + action.num,
      // };
      state.result += action.num
      return state  // 不能够触发渲染
    case "minus":
      return {
        result: state.result - action.num,
      };
    default:
      break;
  }
  return state;
}
function App() {
  // useReducer 的类型参数传入 Reducer<数据的类型，action 的类型>
  // 当修改 state 的逻辑比较复杂，用 useReducer
  const [res, dispath] = useReducer<Reducer<Data, Action>>(reducer, {result: 0,});
  return (
    <div className="App">
      <div onClick={() => dispath({ type: "add", num: 3 })}>加</div>
      <div onClick={() => dispath({ type: "minus", num: 3 })}>减</div>
      <div>结果{res.result}</div>
    </div>
  );
}

export default App;
