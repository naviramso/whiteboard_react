import './whiteboard.css'

export function Whiteboard() {
  return <div className='canvas'>
    <canvas width={1000} height={700}></canvas>
  </div>;
}
