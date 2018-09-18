import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./app";

ReactDOM.render(
    <App />,
    document.getElementById("root") as HTMLElement,
    () => console.log("Page 服务已启动"),
);
