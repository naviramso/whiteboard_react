import "./whiteboard.css";

export function Whiteboard() {
  return (
    <div className="canvas">
      <canvas width={1920} height={1080}></canvas>
    </div>
  );
}
