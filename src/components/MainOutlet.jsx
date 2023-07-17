import { Outlet } from "react-router-dom";
import HorizontalNav from "./HorizontalNav";
import VerticalNav from "./VerticalNav";
import { useState } from "react";

export default function MainOutlet() {
    const [smallVerticalNav, setSmallVerticalNav] = useState(false);

    function switchVerticalNav(){
        setSmallVerticalNav((prevNav) => {
           return prevNav ? false : true
        })
    }

    return(
        <div className={"main__wraper" + (smallVerticalNav ? " main__wraper--big" : "")}>
            <HorizontalNav />
            <VerticalNav switchNav={switchVerticalNav} smallNav={smallVerticalNav} />         
            <Outlet />
        </div>
    )
}