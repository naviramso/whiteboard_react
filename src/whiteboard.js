import { text } from "@fortawesome/fontawesome-svg-core";
import zIndex from "@mui/material/styles/zIndex";
import { borderRadius } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { context } from "./app";
import "./whiteboard.css";

let canvasize ;
let canvasCtx;

export function Whiteboard() {
  const [pencil,setPencil,color,,thicknessValue,,figuras,setfiguras,cuadrado,setCuadrado,textValue,setTextValue,triangulo,setTriangulo,circulo,setCirculo]=useContext(context);
  console.log(useContext(context));
  const [bandera,setbandera]=useState(false);
  const [dibujarcuadrado,setDibujarCuadrado]=useState(false);
  const [escribir,setEscribir]=useState(false);
  const [dibujarCirculo,setDibujarCirculo]=useState(false);
  const [dibujarTriangulo,setDibujarTriangulo]=useState(false);
  const [puntosCuad,setPuntosCuad]=useState([0,0,0,0]);
  const [puntosCir,setPuntosCir]=useState([0,0]);
  const [valueScroll,setValueScroll] =useState(0);


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
  const scroll= ()=>{
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > valueScroll){
      console.log("a");
      setValueScroll(scrolled)
    } 
    else if (scrolled < valueScroll){
      console.log("b");
      setValueScroll(scrolled)
    }
  }
  window.addEventListener("scroll",scroll);
  window.scroll({
    top: 100,
    left: 100,
    behavior: 'smooth'
  });

  useEffect(()=>{
    canvasCtx.fillStyle="white"
    canvasCtx.fillRect(0,0,1800,1920)
  },[])
  useEffect(()=>{
    var fig=document.getElementById("figuras");
    if(figuras){ 
      fig.style.zIndex=2;
      
    }
    else{
      fig.style.zIndex=-1;

    }
  },[figuras])

  useEffect(()=>{},[escribir])
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
        if(bandera){
          setbandera(false);

        }
        

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
          canvasCtx.font = (thicknessValue*3+10 )+ "px Comic Sans MS";
          console.log(textValue);
          canvasCtx.fillStyle = color;
          canvasCtx.textAlign = "center";
          canvasCtx.fillText(textValue, event.clientX -canvasize.left, event.clientY - canvasize.top);
          //setTextPosition([event.clientX -canvasize.left,event.clientY - canvasize.to ])
        }
        if(circulo){
          canvasCtx.strokeStyle=color;
          canvasCtx.lineWidth = thicknessValue;
          setPuntosCir([event.clientX -canvasize.left,event.clientY - canvasize.top])
          setDibujarCirculo(true);
        }
        if(triangulo){
          canvasCtx.strokeStyle=color;
          canvasCtx.lineWidth = thicknessValue;
          setPuntosCir([event.clientX -canvasize.left,event.clientY - canvasize.top])
          setDibujarTriangulo(true);
        }
      }}
      onMouseMove={(event)=>{
        if(dibujarcuadrado){
          canvasCtx.clearRect(0,0,1800,1920)
          setPuntosCuad([puntosCuad[0],puntosCuad[1],event.clientX -canvasize.left,event.clientY - canvasize.top])
          canvasCtx.strokeRect(puntosCuad[0],puntosCuad[1],puntosCuad[2]-puntosCuad[0],puntosCuad[3]-puntosCuad[1]);
        }
        if(escribir){
          canvasCtx.clearRect(0,0,1800,1920)
          canvasCtx.fillText(textValue, event.clientX -canvasize.left, event.clientY - canvasize.top);
        }
        if(dibujarCirculo){
          canvasCtx.beginPath();
          canvasCtx.clearRect(0,0,1800,1920)
          const x=Math.abs((event.clientX -canvasize.left)-puntosCir[0]);
          canvasCtx.arc(puntosCir[0],puntosCir[1],x, 0, Math.PI * 2);
          canvasCtx.stroke();

        }
        if(dibujarTriangulo){
          canvasCtx.clearRect(0,0,1800,1920)
          canvasCtx.beginPath();
          canvasCtx.moveTo(puntosCir[0],puntosCir[1]);
          canvasCtx.lineTo(event.clientX -canvasize.left, event.clientY - canvasize.top);
          const x=(event.clientX -canvasize.left)-puntosCir[0]
          canvasCtx.lineTo(puntosCir[0]-x, event.clientY - canvasize.top)
          canvasCtx.closePath();
          canvasCtx.stroke();
        }
      }}
      onMouseUp={(event)=>{
        canvasCtx.clearRect(0,0,1800,1920)
        const canvas= document.getElementById("micanvas");
        canvasCtx=canvas.getContext("2d");

        if(cuadrado){     
          canvasCtx.strokeStyle=color;
          canvasCtx.lineWidth = thicknessValue;
          canvasCtx.strokeRect(puntosCuad[0],puntosCuad[1],puntosCuad[2]-puntosCuad[0],puntosCuad[3]-puntosCuad[1]);  
          setPuntosCuad([0,0,0,0]);
          setDibujarCuadrado(false);
          setfiguras(false);
          setCuadrado(false);
        }

        if(escribir){
          
          canvasCtx.fillStyle=color;
          canvasCtx.font = (thicknessValue*3+10)+ "px Comic Sans MS";
          canvasCtx.textAlign = "center";
          canvasCtx.fillText(textValue, event.clientX -canvasize.left, event.clientY - canvasize.top);
          setEscribir(false);
          setfiguras(false); 
          setTextValue("");        
        }
        if(circulo){
          canvasCtx.beginPath();
          canvasCtx.strokeStyle=color;
          canvasCtx.lineWidth = thicknessValue;
          const x=Math.abs((event.clientX -canvasize.left)-puntosCir[0]);
          canvasCtx.arc(puntosCir[0],puntosCir[1],x, 0, Math.PI * 2); 
          canvasCtx.stroke();
          setPuntosCir([0,0]);
          setDibujarCirculo(false);
          setfiguras(false);
          setCirculo(false);
        }
        if(triangulo){
          canvasCtx.beginPath();
          canvasCtx.moveTo(puntosCir[0],puntosCir[1]);
          canvasCtx.lineTo(event.clientX -canvasize.left, event.clientY - canvasize.top);
          const x=(event.clientX -canvasize.left)-puntosCir[0]
          canvasCtx.lineTo(puntosCir[0]-x, event.clientY - canvasize.top)
          canvasCtx.closePath();
          canvasCtx.stroke();
          setPuntosCir([0,0]);
          setTriangulo(false);
          setfiguras(false);
          setDibujarTriangulo(false);
        }
      }}
      ></canvas>
    </div>
  );
}
export function borrar(){
  canvasCtx.fillStyle="white"
  canvasCtx.fillRect(0,0,1800,1920)
}
