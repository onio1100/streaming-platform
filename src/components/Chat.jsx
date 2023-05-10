import { useEffect } from "react"
import messages from "../data/messages.json";
import users from "../data/betterUsers.json";

export default function Chat({chatHistory, setChatHistory}) {

    useEffect(() => {
        let id = 0;
        setInterval(() => {
            setChatHistory((prevHistory) => {
                let newMessage = {
                    user: users[randomNumberInRange(0, 99)],
                    message: messages[randomNumberInRange(0,100)],
                }
                return [...prevHistory,newMessage];
            })
        }, randomNumberInRange(500, 10000));
    }, [])

    function randomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }      
    
    function comments() {
        let jsxChatList = chatHistory.map((comment, id) => (
            <li className="display--wraper" key={id}>
                <p><i className={comment.user.color}>{comment.user.name}</i>: {comment.message}</p>
            </li>
            ))
        return jsxChatList
    }

    return(
        <div className="chat__display">
            <ul>{comments()}</ul>
        </div>
    )
}