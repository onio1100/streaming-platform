import { useEffect } from "react"
import users from "../data/users.json";
import messages from "../data/messages.json";

export default function Chat({chatHistory}) {

    useEffect(() => {
        const usersArr = JSON.parse(users);
        const messageArr = JSON.parse(messages);
        console.log(usersArr);
        console.log(messageArr);
    }, [])

    function comments() {
        chatHistory.map((comment) =>{
            return(
                <li>
                    <p>{comment.username}</p>
                    <p>: {comment.message}</p>
                </li>
            )
        })
    }

    return(
        <div className="chat__history">
            <ul>{}</ul>
        </div>
    )
}