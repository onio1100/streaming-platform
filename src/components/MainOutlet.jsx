import { Outlet, useOutlet } from "react-router-dom";
import HorizontalNav from "./HorizontalNav";
import VerticalNav from "./VerticalNav";
import { useState } from "react";
import Home from "./Home";

export default function MainOutlet() {
    const [smallVerticalNav, setSmallVerticalNav] = useState(false);
    const isOutlet = useOutlet();

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
            {isOutlet ? "" : <Home />}
        </div>
    )
}