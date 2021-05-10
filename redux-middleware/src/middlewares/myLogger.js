const myLogger = (store) => (next) => (action) => {
  console.log(store);
  console.log(action);
  // 왜 이건 안돼 ?
};
