export default function Chat({chatHistory}) {

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