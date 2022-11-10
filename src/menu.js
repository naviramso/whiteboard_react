import "./menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { context } from "./app";

export function Menu() {
  const [, setPencil] = useContext(context);
  const [color, setColor] = useState(false);
  const [thickness, setThickness] = useState(false);
  const [shapes, setShapes] = useState(false);

  return (
    <div className="menu-container">
      <Button
        icon="pen"
        color={color}
        onclick={() => {
          setColor(!color);
          setThickness(false);
          setShapes(false);
          setPencil(true);
        }}
      />
      <Button icon="eraser" onclick={() => {
        setPencil(false);
      }} />
      <Button
        icon="minus"
        thickness={thickness}
        onclick={() => {
          setThickness(!thickness);
          setColor(false);
          setShapes(false);
        }}
      />
      <Button icon="image" />
      <Button icon="t" />
      <Button
        icon="shapes"
        shapes={shapes}
        onclick={() => {
          setThickness(false);
          setColor(false);
          setShapes(!shapes);
        }}
      />
      <Button icon="save" />
      <Button icon="trash" />
    </div>
  );
}

function Button(props) {
  return (
    <>
      <button
        className={
          props.color || props.thickness || props.shapes
            ? " dropdown button-menu"
            : " button-menu"
        }
        onClick={props.onclick}
      >
        <FontAwesomeIcon icon={props.icon} size="xl" />
        {props.color && <DropdownColor />}
        {props.thickness && <DropdownThickness />}
        {props.shapes && <DropdownShapes />}
      </button>
    </>
  );
}

function DropdownColor(props) {
  return (
    <div className="dropdown-content">
      <h4>Seleccionar color</h4>
      <ButtonColor color="black" />
      <ButtonColor color="red" />
      <ButtonColor color="yellow" />
      <ButtonColor color="blue" />
      <ButtonColor color="green" />
      <input type={"color"}></input>
    </div>
  );
}

function ButtonColor({ color }) {
  return (
    <>
      <button className={"button-menu " + color}></button>
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
