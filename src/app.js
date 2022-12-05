import { Whiteboard } from "./whiteboard";
import { Menu, menuContext } from "./menu";
import "./styles.css";
import { createContext, useState } from "react";
import { Image } from "./image";


export const context = createContext();
export function App() {
  const [color, setColor] = useState("black");
  const [pencil, setPencil] = useState(false);
  const [thicknessValue, setThicknessValue] = useState(1);
  const [figuras, setfiguras] = useState(false);
  const [cuadrado, setCuadrado] = useState(true);

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
      ]}
    >
      
      <div className="container">
        <Image></Image>
        <Whiteboard></Whiteboard>
        <Menu></Menu>
      </div>
    </context.Provider>
  );
}


