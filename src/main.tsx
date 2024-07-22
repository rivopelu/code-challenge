import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.scss";
import "react-toastify/dist/ReactToastify.css";

import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import storeRedux from "./redux/store.ts";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <Provider store={storeRedux}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </NextUIProvider>
  </React.StrictMode>
);
