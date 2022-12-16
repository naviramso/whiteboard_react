import { Whiteboard } from "./whiteboard";
import { Menu, menuContext } from "./menu";
import "./styles.css";
import { createContext, useState } from "react";
import {Image} from "./image.js"
import { Outlet, Link } from "react-router-dom";

export const context = createContext();
export function App() {

  

  const [color, setColor] = useState("black");
  const [pencil, setPencil] = useState(false);
  const [thicknessValue, setThicknessValue] = useState(1);
  const [figuras, setfiguras] = useState(false);
  const [cuadrado, setCuadrado] = useState(false);
  const [triangulo, setTriangulo] = useState(false);
  const [circulo, setCirculo] = useState(false);
  const [textValue, setTextValue] = useState("");


  return (
    <context.Provider
      value={[
        pencil,
        setPencil,
        color,
        setColor,
        thicknessValue,
        setThicknessValue,
        figuras,
        setfiguras,
        cuadrado,
        setCuadrado,
        textValue,
        setTextValue,
        triangulo,
        setTriangulo,
        circulo,
        setCirculo
      ]}
    >
      <div className="container">
        
        <Whiteboard></Whiteboard>
        <Menu></Menu>
        <Image /> 
      </div>
 
    </context.Provider>
  );

}
