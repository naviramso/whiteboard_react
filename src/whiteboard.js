import { useContext, useEffect, useState } from "react";
import { context } from "./app";
import "./whiteboard.css";

let canvasize;
let canvasCtx;
export function Whiteboard() {
  const [pencil] = useContext(context);
  const [bandera, setbandera] = useState(false);
  useEffect(() => {
    const canvas = document.getElementById("micanvas");
    canvasCtx = canvas.getContext("2d");
    canvasize = canvas.getBoundingClientRect();
  });

  return (
    <div className="canvas">
      <canvas
        id="micanvas"
        width={1920}
        height={1080}
        onMouseDown={(event) => {
          if (pencil) {
            setbandera(true);
            canvasCtx.beginPath();
            canvasCtx.moveTo(
              event.clientX - canvasize.left,
              event.clientY - canvasize.top
            );
          }
        }}
        onMouseMove={(e) => {
          if (bandera)
            canvasCtx.lineTo(
              e.clientX - canvasize.left,
              e.clientY - canvasize.top
            );
          canvasCtx.stroke();
        }}
        onMouseUp={(e) => {
          setbandera(false);
          canvasCtx.lineTo(
            e.clientX - canvasize.left,
            e.clientY - canvasize.top
          );
          canvasCtx.stroke();
          canvasCtx.closePath();
        }}
      ></canvas>
    </div>
  );
}
