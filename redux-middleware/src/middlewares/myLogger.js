const myLogger = (store) => (next) => (action) => {
  console.log(action);
  console.log("\tPrev: ", store.getState());
  const result = next(action);
  console.log("\tNext: ", store.getState()); // '\t' : tab을 의미  // store.getState() 하면 store의 현재 state 값을 가져옴

  return result;
};

export default myLogger;
