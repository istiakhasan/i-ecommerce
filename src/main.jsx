import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { persistor,Store } from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="app">
      <Provider store={Store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </div>
  </React.StrictMode>
);
