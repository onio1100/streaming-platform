export default function InputChat({sendMessage}){

    function sendMessage(e){
        const text = e.target.parentElement.lastChild;
        console.log(text.value);
        sendMessage((prevHistory) => {
            let newMessage = {
                user: {
                    name: "onio1100",
                    color: "blue"
                },
                message: text.value,
            }
            return [...prevHistory,newMessage];
        })
    }

    return(
        <div className="chat__activitis">
            <div className="activitis__input--wraper">
                <button className="activitis__input--button" onClick={(e) => {sendMessage(e)}}>Send</button>
                <label className="activitis__input--label"></label>
                <input className="activitis__input--text" type="text" placeholder="your message" />
            </div>
        </div>
    )
}