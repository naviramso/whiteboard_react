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
  const [, setMenuColor] = useContext(menuContext);
  return (
    <div className="dropdown-content">
      <h4>Seleccionar color</h4>
      <ButtonColor
        color="black"
        fun={() => {
          setMenuColor(false);
        }}
      />
      <ButtonColor color="red" />
      <ButtonColor color="yellow" />
      <ButtonColor color="blue" />
      <ButtonColor color="green" />
      <input type={"color"}></input>
    </div>
  );
}

function ButtonColor({ color, fun }) {
  return (
    <>
      <button className={"button-menu " + color} onClick={fun}></button>
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
