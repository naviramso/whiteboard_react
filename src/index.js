import React from "react";
import ReactDOM from "react-dom/client";
import { Menu } from "./menu";
import { Whiteboard } from "./whiteboard";
import "./styles.css";
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
} from "@fortawesome/free-solid-svg-icons";

library.add(faSave, faEraser, faTrash, faPen, faImage, faMinus, faShapes, faT);

const root = ReactDOM.createRoot(document.getElementById("root"));

const element = (
  <div className="container">
    <Menu></Menu>
    <Whiteboard></Whiteboard>
  </div>
);

root.render(element);