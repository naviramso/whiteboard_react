import React from "react";
import { App } from "./app";
import ReactDOM from "react-dom/client";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSave,
  faEraser,
  faTrash,
  faPen,
  faImage,
  faMinus,
  faShapes,
  faT,
  faSquare,
  faTriangleExclamation,
  faCircle
} from "@fortawesome/free-solid-svg-icons";


library.add(faCircle,faTriangleExclamation, faSquare,faSave, faEraser, faTrash, faPen, faImage, faMinus, faShapes, faT);

const root = ReactDOM.createRoot(document.getElementById("root"));

const element = (
  <App></App>
);

root.render(element);