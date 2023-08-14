import { useState } from "react"
import { Link } from "react-router-dom";

export default function HomeSlider({streamers}) {
    const [sliderPosition, setSliderPositon] = useState(["back","left--2","left--1","center","right--1","right--2"]);

    function mvoeSlider(direction = false){ // direction(false = right, true = left)
        setSliderPositon((prevPosition) => {
            if(direction){
                return [prevPosition[5],prevPosition[0],prevPosition[1],prevPosition[2],prevPosition[3],prevPosition[4]];
            }else{
                return [prevPosition[1],prevPosition[2], prevPosition[3],prevPosition[4],prevPosition[5],prevPosition[0]];
            }
        })
    }

    return(
        <div className="slider">
            <div className="slider__arrow--left" onClick={() => mvoeSlider(true)}><span className="material-symbols-outlined">chevron_left</span></div>
            <div className="slider__main">
                <Link to={streamers[0].user} style={{background: "red"}} className={"slider__tile" + ` slider__tile--${sliderPosition[0]}`}>{streamers[0].user}</Link>
                <Link to={streamers[0].user} style={{background: "blue"}} className={"slider__tile" + ` slider__tile--${sliderPosition[1]}`}>{streamers[1].user}</Link>
                <Link to={streamers[0].user} style={{background: "green"}} className={"slider__tile" + ` slider__tile--${sliderPosition[2]}`}>{streamers[2].user}</Link>
                <Link to={streamers[0].user} style={{background: "pink"}} className={"slider__tile" + ` slider__tile--${sliderPosition[3]}`}>{streamers[3].user}</Link>
                <Link to={streamers[0].user} style={{background: "orange"}} className={"slider__tile" + ` slider__tile--${sliderPosition[4]}`}>{streamers[4].user}</Link>
                <Link to={streamers[0].user} style={{background: "white"}} className={"slider__tile" + ` slider__tile--${sliderPosition[5]}`}>{streamers[5].user}</Link>
            </div>
            <div className="slider__arrow--right" onClick={() => mvoeSlider()}><span className="material-symbols-outlined">chevron_right</span></div>
        </div>
    )
}