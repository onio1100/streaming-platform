export default function InputChat({setChatHistory}){


    function sendMessage(e){
        let text = "";
        if(e.keyCode){
            if(e.keyCode === 13){
                text = e.target;
            }else{
                return;
            }
        } else {
            text = e.target.parentElement.lastChild;
        }

        if(text.value != ""){
            setChatHistory((prevHistory) => {
                let newMessage = {
                    user: {
                        name: "onio1100",
                        color: "blue"
                    },
                    message: text.value,
                }
                return [...prevHistory, newMessage];
            })
            text.value = "";
        }
    }

    return(
        <div className="chat__activitis">
            <div className="activitis__input--wraper">
                <button className="activitis__input--button" onClick={(e) => {sendMessage(e)}}>Send</button>
                <label className="activitis__input--label"></label>
                <input className="activitis__input--text" type="text" placeholder="your message" onKeyDown={(e) => {sendMessage(e)}} />
            </div>
        </div>
    )
}