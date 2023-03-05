import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.module.less";
import "antd/dist/antd.less";
import { createContext } from "react";
export const GlobalContex = createContext({});
const values = {
    text: "test",
};
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <BrowserRouter>
        <GlobalContex.Provider value={values}>
            <App />
        </GlobalContex.Provider>
    </BrowserRouter>
);
