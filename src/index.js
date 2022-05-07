/**
 * @description      :
 * @author           : prith
 * @group            :
 * @created          : 05/05/2022 - 22:19:26
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 05/05/2022
 * - Author          : prith
 * - Modification    :
 **/

import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import reducerSlice from "./Reducer";
import reducerSaga from "./sagas";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    reduce: reducerSlice,
  },
  middleware: [saga],
});

saga.run(reducerSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
