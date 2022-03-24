export type AppProps = { message: string };

const App1: React.FC<AppProps> = ({ message, children }) => {
  let [count, setCount] = useState<number>(0);

  const onClick = () => {
    setCount(++count);
  };

  return (
    <div>
      <div>{message}</div>
      <div>{children}</div>
      <p>{count}</p>
      <button onClick={onClick}>click</button>
    </div>
  );
};

// const initialState = { count: 0 };

// type ACTIONTYPE =
//   | { type: "increment"; payload: number }
//   | { type: "decrement"; payload: string };

// function reducer(state: typeof initialState, action: ACTIONTYPE) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + action.payload };
//     case "decrement":
//       return { count: state.count - Number(action.payload) };
//     default:
//       throw new Error();
//   }
// }

// function Counter() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <>
//       Count: {state.count}
//       <button onClick={() => dispatch({ type: "decrement", payload: "5" })}>
//         -
//       </button>
//       <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
//         +
//       </button>
//     </>
//   );
// }

export default App1;
