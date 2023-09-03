import { Outlet, useOutlet } from "react-router-dom";
import HorizontalNav from "./HorizontalNav";
import VerticalNav from "./VerticalNav";
import { useEffect, useState } from "react";
import Home from "./Home";
import streamers from "../data/stremars.json";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function fyShuffle(arr) {
    let i = arr.length;
    while (--i > 0) {
      let randIndex = Math.floor(Math.random() * (i + 1));
      [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
    }
    return arr;
}

const followed = getRandomInt(25,25);

const updatedStreamers = streamers.map((streamer, index) => {
    return(
      {
      ...streamer,
      followed: index < followed,
      viewers: getRandomInt(1,20000),
    })
});
const randomStreamers = fyShuffle(updatedStreamers); 

export default function MainOutlet() {
    const [smallVerticalNav, setSmallVerticalNav] = useState(false);
    const isOutlet = useOutlet();
    const [streamers, setStreamers] = useState(randomStreamers);
    
    // make vnav small for screens under or equal 1300px width
    useEffect(() => {
        function handleResize() {
            if(window.innerWidth <= 1300){
                setSmallVerticalNav(true);
            }else{
                setSmallVerticalNav(false);
            }
        }
        window.addEventListener('resize', handleResize);
    },[])

    function switchVerticalNav(){
        setSmallVerticalNav((prevNav) => {
           return prevNav ? false : true
        })
    }

    return(
        <div className={"main__wraper" + (smallVerticalNav ? " main__wraper--big" : "")}>
            <HorizontalNav streamers={streamers}/>
            <VerticalNav switchNav={switchVerticalNav} smallNav={smallVerticalNav} streamers={streamers} />         
            <Outlet context={[streamers, setStreamers]} />
            {isOutlet ? "" : <Home streamers={streamers}/>}
        </div>
    )
}