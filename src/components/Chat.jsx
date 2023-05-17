import { useEffect, useRef, useState } from "react"
import DisplayChat from "./DisplayChat";
import InputChat from "./InputChat";

export default function Chat() {
  const [chatHistory, setChatHistory] = useState([]);

  const scroledConteinter = useRef(null);

  useEffect(() => {
    scroll();
  }, [chatHistory])

  const scroll = () => {
    const { offsetHeight, scrollHeight, scrollTop } = scroledConteinter.current;
    if (scrollHeight <= scrollTop + offsetHeight + 100) {
        scroledConteinter.current?.scrollTo(0, scrollHeight)
      }
}

  return (
    <div className="app">
      <div className="chat">
        <DisplayChat chatHistory={chatHistory} setChatHistory={setChatHistory} scroledConteinter={scroledConteinter}/>
        <InputChat setChatHistory={setChatHistory}/>
      </div>
    </div>
  )
}