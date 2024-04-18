import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";

import App from "./components/App/App.jsx";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <PersistGate persistor={persistor} loading={null}>
            <Provider store={store}>
                <App />
            </Provider>
        </PersistGate>
    </React.StrictMode>
);
