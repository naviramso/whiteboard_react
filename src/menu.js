import "./menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createContext, useContext, useState } from "react";
import { context } from "./app";
import { Slider } from "@mui/material";
import { Box } from "@mui/system";
import { borrar, saveImage } from "./whiteboard";

const menuContext = createContext();

export function Menu() {
  const [pencil, setPencil, color, setColor, , , , setfiguras] =
    useContext(context);
  const [menuPen, setMenuPen] = useState(false);
  const [menuEraser, setMenuEraser] = useState(false);
  const [menuColor, setMenuColor] = useState(false);
  const [menuThickness, setMenuThickness] = useState(false);
  const [menuImage, setMenuImage] = useState(false);
  const [menuText, setMenuText] = useState(false);
  const [menuSave, setMenuSave] = useState(false);
  const [menuShapes, setMenuShapes] = useState(false);
  const [menuTrash, setMenuTrash] = useState(false);

  const selectMenu = (select) => {
    setMenuColor(false);
    setMenuThickness(false);
    setMenuImage(false);
    setMenuText(false);
    setMenuShapes(false);
    setMenuSave(false);
    menuEraser || menuPen ? setPencil(true) : setPencil(false)
    switch (select) {
      case 1:
        setMenuPen(!menuPen);
        break;
      case 2:
        setMenuEraser(!menuEraser);
        break;
      case 3:
        setMenuColor(!menuColor);
        break;
      case 4:
        setMenuThickness(!menuThickness);
        break;
      case 5:
        setMenuImage(!menuImage);
        break;
      case 6:
        setMenuText(!menuText);
        break;
      case 7:
        setMenuShapes(!menuShapes);
        break;
      case 8:
        setMenuSave(!menuSave);
        break;
      case 9:
        setMenuTrash(!menuTrash);
        break;
      default:
        break;
    }
  };

  return (
    <menuContext.Provider value={[menuColor, setMenuColor]}>
      <div className="menu-container">
        <Button
          icon="pen"
          pen={menuPen}
          onclick={() => {
            selectMenu(1);
            setColor(color);
            setColor("black")
            !menuPen || menuEraser ? setPencil(true) : setPencil(false)
            if(menuEraser){ setMenuEraser(false)}
          }}
        />
        <Button
          icon="eraser"
          eraser={menuEraser}
          onclick={() => {
            setColor("white");
            selectMenu(2)
            menuPen || !menuEraser ? setPencil(true) : setPencil(false)
            if(menuPen){setMenuPen(false)}
          }}
        />
        <Button
          icon="fill"
          color={menuColor}
          onclick={() => {
            if (menuEraser) {
              setMenuEraser(false);
            }
            setMenuPen(true);
            selectMenu(3);
            
          }}
          dropdown={<DropdownColor />}
        />
        <Button
          icon="minus"
          thickness={menuThickness}
          onclick={() => {
            selectMenu(4);
          }}
          dropdown={<DropdownThickness />}
        />
        <Button
          icon="image"
          image={menuImage}
          onclick={() => {
            selectMenu(5);
          }}
        />
        <Button
          icon="t"
          text={menuText}
          onclick={() => {
            selectMenu(6);
          }}
          dropdown={<DropdownText />}
        />
        <Button
          icon="shapes"
          shapes={menuShapes}
          onclick={() => {
            selectMenu(7);
            setfiguras(true);
          }}
          dropdown={<DropdownShapes />}
        />
        <Button
          icon="save"
          save={menuSave}
          onclick={() => {
            selectMenu(8);
            saveImage();
          }}
        />
        <Button
          icon="trash"
          trash={menuTrash}
          onclick={() => {
            selectMenu(9);
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
          props.pen ||
          props.eraser ||
          props.color ||
          props.thickness ||
          props.image ||
          props.text ||
          props.shapes
            ? " dropdown button-menu border"
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
  const [, , , setColor] = useContext(context);
  const [, setMenuColor] = useContext(menuContext);
  console.log({ setColor });
  return (
    <div className="dropdown-content">
      <h4>Seleccionar color</h4>
      <ButtonColor
        color="black"
        click={() => {
          setColor("black");
        }}
      />
      <ButtonColor
        color="red"
        click={() => {
          setColor("red");
        }}
      />
      <ButtonColor
        color="yellow"
        click={() => {
          setColor("yellow");
        }}
      />
      <ButtonColor
        color="blue"
        click={() => {
          setColor("blue");
        }}
      />
      <ButtonColor
        color="green"
        click={() => {
          setColor("green");
        }}
      />
      <input
        type={"color"}
        onInput={(e) => {
          setColor(e.target.value);
        }}
      ></input>
    </div>
  );
}

function ButtonColor({ color, click }) {
  return (
    <>
      <button className={"button-menu " + color} onClick={click}></button>
    </>
  );
}

function DropdownThickness(props) {
  const [, , , , thicknessValue, setThicknessValue] = useContext(context);
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
  const [textValue, setTextValue] = useState("");
  console.log(textValue);
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
