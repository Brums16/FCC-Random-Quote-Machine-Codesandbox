import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Quote from "./Quote";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Quote />
  </StrictMode>
);
