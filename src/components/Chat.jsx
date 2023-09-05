import { useEffect, useRef, useState } from "react"
import DisplayChat from "./DisplayChat";
import InputChat from "./InputChat";

export default function Chat({viewers}) {
  const [chatHistory, setChatHistory] = useState([]);


  // change scroll behavior to make scroll stay in place where user leaves it.
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
      <div className="chat">
        <DisplayChat chatHistory={chatHistory} setChatHistory={setChatHistory} scroledConteinter={scroledConteinter} viewers={viewers} />
        <InputChat setChatHistory={setChatHistory}/>
      </div>
  )
}