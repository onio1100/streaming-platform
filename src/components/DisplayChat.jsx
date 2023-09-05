import { useEffect} from "react"
import messages from "../data/messages.json";
import users from "../data/chatUsers.json";

export default function DisplayChat({chatHistory, setChatHistory, scroledConteinter, viewers}) {

    // creation of random messages
    useEffect(() => {
        let messegSpeed = 1000 - viewers / 8;
        setInterval(() => {
            setChatHistory((prevHistory) => {
                if(prevHistory.length > 300){
                    prevHistory.splice(0,1)
                }
                let newMessage = {
                    user: users[randomNumberInRange(0, 99)],
                    message: messages[randomNumberInRange(0,100)],
                }
                return [...prevHistory,newMessage];
            })
        },  messegSpeed < 100 ? 100 : messegSpeed );
    }, [])

    function randomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }      
    
    // placing random messages in JSX elements 
    function comments() {
        let jsxChatList = chatHistory.map((comment, id) => (
            <li className="display--wraper" key={id}>
                <p><i className={"display--name " + comment.user.color}>{comment.user.name}</i>: {comment.message}</p>
            </li>
            ))
        return jsxChatList
    }

    return(
        <div className="chat__display" ref={scroledConteinter}>
            <ul>{comments()}</ul>
        </div>
    )
}