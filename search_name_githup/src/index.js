//引入核心react核心库
import React from "react";
//引入ReactDom
import ReactDom from 'react-dom/client'
//引入App
import App  from "./App";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <App />
);