import { useState } from "react";

export default function InputChat({setChatHistory}){
    
    const [message, setMessage] = useState("");


    function sendMessage(e){
        if(e.keyCode && e.keyCode !== 13){
            return;
        }
        
        if(message != ""){
            setChatHistory((prevHistory) => {
                if(prevHistory.length > 300){
                    prevHistory.splice(0,1)
                }
                let newMessage = {
                    user: {
                        name: "onio1100",
                        color: "blue"
                    },
                    message: message
                }
                return [...prevHistory, newMessage];
            })
            setMessage("");
        }
    }

    return(
        <div className="chat__activitis">
            <div className="activitis__input--wraper">
                <button className="activitis__input--button" onClick={(e) => {sendMessage(e)}}>Send</button>
                <label className="activitis__input--label"></label>
                <input className="activitis__input--text"
                type="text"
                placeholder="your message"
                onChange={(e) => {setMessage(e.target.value)}}
                onKeyDown={(e) => {sendMessage(e)}}
                value={message} />
            </div>
        </div>
    )
}