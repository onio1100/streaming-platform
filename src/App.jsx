import { useState } from "react"
import Chat from "./components/Chat";
import InputChat from "./components/InputChat";

export default function App() {
  const [chatHistory, setChatHistory] = useState([]);
  return (
    <div className="app">
      <div className="chat">
        <Chat ChatHistory={chatHistory} />
        <InputChat sendMessage={setChatHistory} />
      </div>
    </div>
  )
}