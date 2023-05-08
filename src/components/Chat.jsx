import { useEffect } from "react"
import users from "../data/users.json";
import messages from "../data/messages.json";

export default function Chat({chatHistory, setChatHistory}) {

    useEffect(() => {
        setInterval(() => {
            setChatHistory((prevHistory) => {
                let newMessage = {
                    username: users[randomNumberInRange(0, 99)],
                    message: messages[randomNumberInRange(0,100)]
                }
                return [...prevHistory,newMessage];
            })
        }, randomNumberInRange(500, 10000));
    }, [])

    function randomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }      
    
    function comments() {
        let jsxChatList = chatHistory.map((comment) => (
            <li className="history--wraper">
                <p className="history--username">{comment.username}</p>
                <p className="history--message">: {comment.message}</p>
            </li>
            ))
        return jsxChatList
    }

    return(
        <div className="chat__history">
            <ul>{comments()}</ul>
        </div>
    )
}