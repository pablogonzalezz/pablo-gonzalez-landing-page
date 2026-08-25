import { createRoot } from "react-dom/client";
import "antd/dist/antd.css";
import "./styles/styles.scss";

import Router from "./router";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<Router />);
