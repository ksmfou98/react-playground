import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import App from "./App";
import rootReducer, { rootSaga } from "./modules";
import reportWebVitals from "./reportWebVitals";
import ReduxThunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk, logger, sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
