import { Whiteboard } from "./whiteboard";
import { Menu, menuContext } from "./menu";
import "./styles.css";
import { createContext, useState } from "react";

export const context=createContext();
export function App(){

    const [color,setColor] =useState("black");
    const [pencil,setPencil]=useState(true);
    const [thicknessValue, setThicknessValue] = useState(1);
    const [figuras,setfiguras]=useState(false);
    const [cuadrado,setCuadrado]=useState(true);
    
    return (
        <context.Provider value={[pencil,setPencil,color,setColor,thicknessValue,setThicknessValue,figuras,setfiguras,cuadrado,setCuadrado]}>
        <div className="container">
            <Menu></Menu>
            <Whiteboard></Whiteboard>
        </div>
        </context.Provider>
    );
}
