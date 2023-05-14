export default function InputChat({setChatHistory}){


    const Scroll = () => {
        const { offsetHeight, scrollHeight, scrollTop } = container.current as HTMLDivElement
        if (scrollHeight <= scrollTop + offsetHeight + 100) {
          container.current?.scrollTo(0, scrollHeight)
        }
      }
    
      useEffect(() => {
        Scroll()
      }, [messages])

    function sendMessage(e){
        if(e.keyCode){
            if(e.keyCode === 13){
                let text = e.target.value;
                setChatHistory((prevHistory) => {
                    let newMessage = {
                        user: {
                            name: "onio1100",
                            color: "blue"
                        },
                        message: text,
                    }
                    return [...prevHistory, newMessage];
                })
                e.target.value = "";
            }else{
                return;
            }
        } else {
            let text = e.target.parentElement.lastChild.value;
            setChatHistory((prevHistory) => {
                let newMessage = {
                    user: {
                        name: "onio1100",
                        color: "blue"
                    },
                    message: text,
                }
                return [...prevHistory, newMessage];
            })
            e.target.parentElement.lastChild.value = "";
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