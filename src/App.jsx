import { useState } from "react";
import DificultiButtons from "./DificultiButtons";
import Board from "./Board";

 export default function App() {
  const [dificulti, setDificulti] = useState(false); //lewels from 0 to 4

  return (
    <>
      <div className="app">
        {dificulti ? <Board dificulti={dificulti} /> : <DificultiButtons setDificulti={setDificulti} />}
      </div>
    </>
  )
}