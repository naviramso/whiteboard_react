import "./menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createContext, useContext, useState } from "react";
import { context } from "./app";
import { Slider } from "@mui/material";
import { Box } from "@mui/system";
import {borrar} from"./whiteboard"

const menuContext = createContext();

export function Menu() {
  const [, setPencil,,setColor,,,,setfiguras] = useContext(context);
  const [menuColor, setMenuColor] = useState(false);
  const [menuThickness, setMenuThickness] = useState(false);
  const [menuShapes, setMenuShapes] = useState(false);
  const [menuText, setMenuText] = useState(false);
  const [menuEraser,setMenuEraser]= useState(false);
  const [menuTrask,setMenuTrask] =useState(false);
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
            setMenuEraser(false);
            setMenuTrask(false);
          }}
          dropdown={<DropdownColor />}
        />
        <Button
          icon="eraser"
          onclick={() => {
            setColor("white")
            setMenuColor(false);
            setMenuThickness(false);
            setMenuShapes(false);
            setMenuTrask(false);
            setMenuEraser(!menuEraser)
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
            setMenuEraser(false);
            setMenuTrask(false);
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
            setMenuEraser(false)
            setMenuTrask(false);
          }}
          dropdown={<DropdownText />}
        />
        <Button
          icon="shapes"
          shapes={menuShapes}
          onclick={() => {
            setMenuThickness(false);
            setMenuColor(false);
            setMenuText(false);
            setMenuShapes(!menuShapes);
            setfiguras(true);
            setMenuEraser(false);
            setMenuTrask(false);
            
          }}
          dropdown={<DropdownShapes />}
        />
        <Button icon="save" />
        <Button icon="trash" 
          onclick={() => {
            setMenuThickness(false);
            setMenuColor(false);
            setMenuText(false);
            setMenuShapes(false);
            setMenuEraser(false);
            setMenuTrask(!menuTrask);
            borrar();
          }}
        />
      </div>
    </menuContext.Provider>
  );
}

function Button(props) {
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
      <div className="dropdown">
        {props.color && props.dropdown}
        {props.text && props.dropdown}
        {props.thickness && props.dropdown}
        {props.shapes && props.dropdown}
      </div>
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
  const [,,,,thicknessValue, setThicknessValue] = useContext(context);
  console.log(thicknessValue);
  return (
    <div className="dropdown-content">
      <h4> Cambiar ancho</h4>
      <div className="range">
        <Box sx={{ width: 100 }}>
          <Slider
            aria-label="Small steps"
            defaultValue={1}
            step={1}
            marks
            min={1}
            max={10}
            onChange={(newValue) => {
              setThicknessValue(newValue.target.value);
            }}
            valueLabelDisplay="auto"
          />
        </Box>
      </div>
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

  var setTextValue =useContext( context)[11];
  var textValue =useContext( context)[10];
  //console.log(ctx);
  return (
    <div className="dropdown-content">
      <h4>Insertar Texto</h4>
      <input
        className={"input-text"}
        type={"text"}
        placeholder={"Escriba un texto"}
        id="text"
      ></input>
      <button
        className="button-text"
        onClick={() => {
          const text = document.getElementById("text");
          setTextValue(text.value);
        }}
      >
        <FontAwesomeIcon icon={"chevron-up"} size="xl" color="white" />
      </button>
    </div>
  );
}
