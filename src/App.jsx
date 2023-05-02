import { useState } from "react"

 export default function App() {
  const [count, setCount] = useState(1);

  function countControl() {
    setCount((prevCount) => {
      if(prevCount + 1 > 9){
        return 1;
      }else{
        return prevCount + 1;
      }
    })
  }

  return (
    <>
      <div className="app">
        <p className="button" onClick={() => {countControl}}>{count}</p>
      </div>
    </>
  )
}