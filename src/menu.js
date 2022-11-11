import "./menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createContext, useContext, useState } from "react";
import { context } from "./app";

const menuContext = createContext();

export function Menu() {
  const [, setPencil] = useContext(context);
  const [menuColor, setMenuColor] = useState(false);
  const [menuThickness, setMenuThickness] = useState(false);
  const [menuShapes, setMenuShapes] = useState(false);
  const [menuText, setMenuText] = useState(false);

  return (
    <menuContext.Provider value={[menuColor, setMenuColor]}>
      <div className="menu-container">
        <Button
          icon="pen"
          color={menuColor}
          onclick={() => {
            setMenuColor(!menuColor);
            setMenuThickness(false);
            setMenuShapes(false);
            setPencil(true);
          }}
          dropdown={<DropdownColor />}
        />
        <Button
          icon="eraser"
          onclick={() => {
            setPencil(false);
          }}
        />
        <Button
          icon="minus"
          thickness={menuThickness}
          onclick={() => {
            setMenuThickness(!menuThickness);
            setMenuColor(false);
            setMenuText(false);
            setMenuShapes(false);
          }}
          dropdown={<DropdownThickness />}
        />
        <Button icon="image" />
        <Button
          icon="t"
          text={menuText}
          onclick={() => {
            setMenuColor(false);
            setMenuShapes(false);
            setMenuThickness(false);
            setMenuText(!menuText);
          }}
          dropdown={<DropdownText />}
        />
        <Button
          icon="shapes"
          shapes={menuShapes}
          onclick={() => {
            setMenuThickness(false);
            setMenuColor(false);
            setMenuText(false)
            setMenuShapes(!menuShapes);
          }}
          dropdown={<DropdownShapes />}
        />
        <Button icon="save" />
        <Button icon="trash" />
      </div>
    </menuContext.Provider>
  );
}

function Button(props) {
  const [, setMenuColor] = useContext(menuContext);

  return (
    <>
      <button
        className={
          props.color || props.thickness || props.text || props.shapes
            ? " dropdown button-menu"
            : " button-menu"
        }
        onClick={props.onclick}
      >
        <FontAwesomeIcon icon={props.icon} size="xl" />
      </button>
      {props.color && props.dropdown}
      {props.text && props.dropdown}
      {props.thickness && props.dropdown}
      {props.shapes && props.dropdown}
    </>
  );
}

function DropdownColor() {
  const [,,,setColor] = useContext(context);
  const [, setMenuColor] = useContext(menuContext);
  console.log({setColor});
  return (
    <div className="dropdown-content">
      <h4>Seleccionar color</h4>
      <ButtonColor color="black" click={()=>{setColor("black")}}/>
      <ButtonColor color="red" click={()=>{setColor("red")}}/>
      <ButtonColor color="yellow" click={()=>{setColor("yellow")}} />
      <ButtonColor color="blue" click={()=>{setColor("blue")}}/>
      <ButtonColor color="green" click={()=>{setColor("green")}}/>
      <input type={"color"} onInput={(e)=>{
        setColor(e.target.value);
      }}></input>
    </div>
  );
}

function ButtonColor({ color,click }) {
  return (
    <>
      <button className={"button-menu " + color} onClick={click} ></button>
    </>
  );
}

function DropdownThickness(props) {
  return (
    <div className="dropdown-content">
      <h4> Cambiar ancho</h4>
      <input type={"range"}></input>
    </div>
  );
}

function DropdownShapes(props) {
  return (
    <div className="dropdown-content">
      <h4> Isertar Figura</h4>
      <Button icon="circle" />
      <Button icon="square" />
      <Button icon="triangle-exclamation" />
    </div>
  );
}

function DropdownText(props) {
  return (
    <div className="dropdown-content">
      <h4>Insertar Texto</h4>
      <input type={"text"} placeholder={"Escriba un texto"}></input>
      <button>isert</button>
    </div>
  );
}
