import { Whiteboard } from "./whiteboard";
import { Menu } from "./menu";
import "./styles.css";
import { createContext, useState } from "react";

export const context=createContext();
export function App(){
    const [pencil,setPencil]=useState(true);
    
    return (
        <context.Provider value={[pencil,setPencil]}>
        <div className="container">
            <Menu></Menu>
            <Whiteboard></Whiteboard>
        </div>
        </context.Provider>
    );
}
