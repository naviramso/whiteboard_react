import { text } from "@fortawesome/fontawesome-svg-core";
import zIndex from "@mui/material/styles/zIndex";
import { borderRadius } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { context } from "./app";
import "./whiteboard.css";

let canvasize ;
let canvasCtx;

export function Whiteboard() {
  const [pencil,,color,,thicknessValue,,figuras,setfiguras,cuadrado,,textValue]=useContext(context);
  console.log(useContext(context));
  const [bandera,setbandera]=useState(false);
  const [dibujarcuadrado,setDibujarCuadrado]=useState(false);
  const [escribir,setEscribir]=useState(false);
  const [puntosCuad,setPuntosCuad]=useState([0,0,0,0]);

  useEffect(()=>{
    if(!figuras){
      const canvas= document.getElementById("micanvas");
      canvasCtx=canvas.getContext("2d");
      canvasize = canvas.getBoundingClientRect();
    }
    else {
      const canvas= document.getElementById("figuras");
      canvasCtx=canvas.getContext("2d");
      canvasize = canvas.getBoundingClientRect();
    }
  })

  
  useEffect(()=>{
    var fig=document.getElementById("figuras");
    if(figuras){ 
      fig.style.zIndex=2;
    }
    else{
      fig.style.zIndex=-1;
    }
  },[figuras])

  return (
    <div className="canvas">
      
      <canvas id="micanvas" width={1000} height={600} onMouseDown={(event)=>{
        if(pencil){
          setbandera(true);
          canvasCtx.beginPath();
          canvasCtx.strokeStyle=color;
          canvasCtx.lineWidth = thicknessValue;
          canvasCtx.moveTo(event.clientX -canvasize.left,event.clientY - canvasize.top);
        }
      }} onMouseMove={(e)=>{
        if(bandera){
        canvasCtx.lineTo(e.clientX -canvasize.left,e.clientY - canvasize.top);
        canvasCtx.stroke();
      }
      }} onMouseUp={()=>{
        setbandera(false);

      }} ></canvas>
      <canvas id="figuras" width={1000} height={600} onMouseDown={(event)=>{
        if(cuadrado){
          setDibujarCuadrado(true);
          canvasCtx.strokeStyle=color;
          canvasCtx.lineWidth = thicknessValue;
          setPuntosCuad([event.clientX -canvasize.left,event.clientY - canvasize.top,event.clientX -canvasize.left,event.clientY - canvasize.top])
        }
        if(textValue!=""){
          setEscribir(true);
          canvasCtx.font = thicknessValue*10+ "px Comic Sans MS";
          console.log(textValue);
          canvasCtx.fillStyle = color;
          canvasCtx.textAlign = "center";
          canvasCtx.fillText(textValue, event.clientX -canvasize.left, event.clientY - canvasize.top);
        }
      }}
      onMouseMove={(event)=>{
        if(dibujarcuadrado){
          canvasCtx.clearRect(0,0,1800,1920)
          setPuntosCuad([puntosCuad[0],puntosCuad[1],event.clientX -canvasize.left,event.clientY - canvasize.top])
          canvasCtx.strokeRect(puntosCuad[0],puntosCuad[1],puntosCuad[2]-puntosCuad[0],puntosCuad[3]-puntosCuad[1]);
        }
        if(escribir){
          canvasCtx.fillText(textValue, event.clientX -canvasize.left, event.clientY - canvasize.top);
        }
      }}
      onMouseUp={()=>{
        if(cuadrado){
          canvasCtx.clearRect(0,0,1800,1920)
          const canvas= document.getElementById("micanvas");
          canvasCtx=canvas.getContext("2d");
          canvasCtx.strokeStyle=color;
          canvasCtx.lineWidth = thicknessValue;
          canvasCtx.strokeRect(puntosCuad[0],puntosCuad[1],puntosCuad[2]-puntosCuad[0],puntosCuad[3]-puntosCuad[1]);
          canvasCtx.fillText(textValue, puntosCuad[2], puntosCuad[3]);
          setEscribir(false);
          setfiguras(false);
          setPuntosCuad([0,0,0,0]);
          setDibujarCuadrado(false);
        }
        if(escribir){

        }
        
      }}
      ></canvas>
    </div>
  );
}
export function borrar(){
    canvasCtx.clearRect(0,0,1800,1920);
}
