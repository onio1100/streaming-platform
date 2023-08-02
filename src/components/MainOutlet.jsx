import { Outlet, useOutlet } from "react-router-dom";
import HorizontalNav from "./HorizontalNav";
import VerticalNav from "./VerticalNav";
import { useState } from "react";
import Home from "./Home";
import streamers from "../data/stremars.json";

export default function MainOutlet() {
    const [smallVerticalNav, setSmallVerticalNav] = useState(false);
    const isOutlet = useOutlet();
    const randomStreamers = fyShuffle(streamers);
    const sliderArr = randomStreamers.slice(0, 6);
    const homeContentArr = randomStreamers.slice(5);

    function fyShuffle(arr) {
        let i = arr.length;
        while (--i > 0) {
          let randIndex = Math.floor(Math.random() * (i + 1));
          [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
        }
        return arr;
      }

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
            {isOutlet ? "" : <Home sliderArr={sliderArr} homeContentArr={homeContentArr} />}
        </div>
    )
}