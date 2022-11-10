import { Whiteboard } from "./whiteboard";
import { Menu, menuContext } from "./menu";
import "./styles.css";
import { createContext, useState } from "react";

export const context=createContext();
export function App(){
<<<<<<< HEAD
    const [pencil,setPencil]=useState(false);
    const [color,setColor] =useState("red");
=======
    const [pencil,setPencil]=useState(true);
    
>>>>>>> origin/fun
    return (
        <context.Provider value={[pencil,setPencil,color]}>
        <div className="container">
            <Menu></Menu>
            <Whiteboard></Whiteboard>
        </div>
        </context.Provider>
    );
}
