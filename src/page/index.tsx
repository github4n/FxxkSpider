import * as React from "react";
import * as ReactDOM from "react-dom";

ReactDOM.render(
    <section>
        Hello World
    </section>,
    document.getElementById("root") as HTMLElement,
    () => console.log("Page 服务已启动"),
);
