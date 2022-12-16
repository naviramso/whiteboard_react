import React from "react";
import  {App} from "./app";
import ReactDOM from "react-dom/client";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFill,
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
  faCircle,
  faChevronUp
} from "@fortawesome/free-solid-svg-icons";

import {BrowserRouter, Route,Routes} from "react-router-dom"
const rou="/"+2;

library.add(faFill, faChevronUp,faCircle,faTriangleExclamation, faSquare,faSave, faEraser, faTrash, faPen, faImage, faMinus, faShapes, faT);

const root = ReactDOM.createRoot(document.getElementById("root"));

const element = (
  <BrowserRouter>
    <Routes >
    <Route  path="/" element={<App></App>}/>
    <Route path="/:id" element={<App></App>}></Route>
    </Routes>
  </BrowserRouter>
 // <App></App>
);

root.render(element);