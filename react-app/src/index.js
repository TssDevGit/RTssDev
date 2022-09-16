import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./assets/scss/style.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import Loader from "./layouts/loader/Loader";
import "./i18n"; //i18
import * as serviceWork from "./serviceWorker";
import authentication from "./B2C";

import {legacy_createStore as  createStore} from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux";

const store = createStore(rootReducer);


authentication.initialize();
authentication.run(()=>{
  ReactDOM.render(
    <Suspense fallback={<Loader />}>
      <HashRouter> 
        <Provider store={store}>
        <App />
        </Provider>
      </HashRouter>
    </Suspense>,
  
    document.getElementById("root")
  );
  serviceWork.unregister(); 
 });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
