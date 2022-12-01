import zIndex from "@mui/material/styles/zIndex";
import { borderRadius } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { context } from "./app";
import "./whiteboard.css";

let canvas; 
let canvasize;
let canvasCtx;


export function Whiteboard() {
  const [pencil, , color, , thicknessValue, , figuras, setfiguras, cuadrado] =
    useContext(context);
  console.log(useContext(context));
  const [bandera, setbandera] = useState(false);
  const [dibujarcuadrado, setDibujarCuadrado] = useState(false);
  const [puntosCuad, setPuntosCuad] = useState([0, 0, 0, 0]);

  useEffect(() => {
    if (!figuras) {
      const canvas = document.getElementById("micanvas");
      canvasCtx = canvas.getContext("2d");
      canvasize = canvas.getBoundingClientRect();
    } else {
      const canvas = document.getElementById("figuras");
      canvasCtx = canvas.getContext("2d");
      canvasize = canvas.getBoundingClientRect();
    }
  });

  useEffect(() => {});
  useEffect(() => {
    var fig = document.getElementById("figuras");
    if (figuras) {
      fig.style.zIndex = 2;
    } else {
      fig.style.zIndex = -1;
    }
  }, [figuras]);

  return (
    <div className="canvas">
      <canvas
        id="micanvas"
        width={1000}
        height={600}
        onMouseDown={(event) => {
          if (pencil) {
            setbandera(true);
            canvasCtx.beginPath();
            canvasCtx.strokeStyle = color;
            canvasCtx.lineWidth = thicknessValue;
            canvasCtx.moveTo(
              event.clientX - canvasize.left,
              event.clientY - canvasize.top
            );
          }
        }}
        onMouseMove={(e) => {
          if (bandera) {
            canvasCtx.lineTo(
              e.clientX - canvasize.left,
              e.clientY - canvasize.top
            );
            canvasCtx.stroke();
          }
        }}
        onMouseUp={() => {
          setbandera(false);
        }}
      ></canvas>
      <canvas
        id="figuras"
        width={1000}
        height={600}
        onMouseDown={(event) => {
          if (cuadrado) {
            setDibujarCuadrado(true);
            canvasCtx.strokeStyle = color;
            canvasCtx.lineWidth = thicknessValue;
            setPuntosCuad([
              event.clientX - canvasize.left,
              event.clientY - canvasize.top,
              event.clientX - canvasize.left,
              event.clientY - canvasize.top,
            ]);
          }
        }}
        onMouseMove={(event) => {
          if (dibujarcuadrado) {
            canvasCtx.clearRect(0, 0, 1800, 1920);
            setPuntosCuad([
              puntosCuad[0],
              puntosCuad[1],
              event.clientX - canvasize.left,
              event.clientY - canvasize.top,
            ]);
            canvasCtx.strokeRect(
              puntosCuad[0],
              puntosCuad[1],
              puntosCuad[2] - puntosCuad[0],
              puntosCuad[3] - puntosCuad[1]
            );
          }
        }}
        onMouseUp={() => {
          canvasCtx.clearRect(0, 0, 1800, 1920);
          const canvas = document.getElementById("micanvas");
          canvasCtx = canvas.getContext("2d");
          canvasCtx.strokeStyle = color;
          canvasCtx.lineWidth = thicknessValue;
          canvasCtx.strokeRect(
            puntosCuad[0],
            puntosCuad[1],
            puntosCuad[2] - puntosCuad[0],
            puntosCuad[3] - puntosCuad[1]
          );
          setfiguras(false);
          setPuntosCuad([0, 0, 0, 0]);
          setDibujarCuadrado(false);
        }}
      ></canvas>
    </div>
  );
}

export function borrar() {
  canvasCtx.clearRect(0, 0, 1800, 1920);
}

export const saveImage = () => {
  canvas = document.getElementById("micanvas")
  let image = canvas.toDataURL();
  let link = document.createElement("a");
  link.href = image; 
  link.download = "saveimgcanvas";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
