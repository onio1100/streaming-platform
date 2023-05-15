import { useEffect, useRef, useState } from "react"
import Chat from "./components/Chat";
import InputChat from "./components/InputChat";

export default function App() {
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
        <Chat chatHistory={chatHistory} setChatHistory={setChatHistory} scroledConteinter={scroledConteinter}/>
        <InputChat setChatHistory={setChatHistory}/>
      </div>
    </div>
  )
}