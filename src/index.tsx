import App from "./App";

import * as ReactDOMClient from 'react-dom/client';


const initial = document.createElement("div");
const container = document.getElementById("BullsRlfcRoot");
const root = ReactDOMClient.createRoot(
  container
    ? container
    : initial
);

root.render(<App />);