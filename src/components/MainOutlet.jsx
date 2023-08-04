import { Outlet, useOutlet } from "react-router-dom";
import HorizontalNav from "./HorizontalNav";
import VerticalNav from "./VerticalNav";
import { useEffect, useState } from "react";
import Home from "./Home";
import streamers from "../data/stremars.json";

function fyShuffle(arr) {
    let i = arr.length;
    while (--i > 0) {
      let randIndex = Math.floor(Math.random() * (i + 1));
      [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
    }
    return arr;
  }

  const randomStreamers = fyShuffle(streamers); 

export default function MainOutlet() {
    const [smallVerticalNav, setSmallVerticalNav] = useState(false);
    const isOutlet = useOutlet();
    const [streamers, setStremers ] = useState(randomStreamers);
    
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
            {isOutlet ? "" : <Home streamers={streamers} />}
        </div>
    )
}