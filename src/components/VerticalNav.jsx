import { useState } from "react"

export default function VerticalNav() {
    const [smallNav, setSmallNav] = useState(false);

    function switchNav(){
        setSmallNav((prevNav) => {
           return prevNav ? false : true
        })
    }

    return(
        <div className={smallNav ? "vnav vnav--small" : "vnav"}>
            <div className="vnav__switch" onClick={switchNav}></div>
        </div>
    )
}