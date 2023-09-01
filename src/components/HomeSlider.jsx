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
                <Link to={streamers[0].user} style={{background: "red"}} className={"slider__tile" + ` slider__tile--${sliderPosition[0]}`}><img src={streamers[0].cover} alt="cover"></img></Link>
                <Link to={streamers[1].user} style={{background: "blue"}} className={"slider__tile" + ` slider__tile--${sliderPosition[1]}`}><img src={streamers[1].cover} alt="cover"></img></Link>
                <Link to={streamers[2].user} style={{background: "green"}} className={"slider__tile" + ` slider__tile--${sliderPosition[2]}`}><img src={streamers[2].cover} alt="cover"></img></Link>
                <Link to={streamers[3].user} style={{background: "pink"}} className={"slider__tile" + ` slider__tile--${sliderPosition[3]}`}><img src={streamers[3].cover} alt="cover"></img></Link>
                <Link to={streamers[4].user} style={{background: "orange"}} className={"slider__tile" + ` slider__tile--${sliderPosition[4]}`}><img src={streamers[4].cover} alt="cover"></img></Link>
                <Link to={streamers[5].user} style={{background: "white"}} className={"slider__tile" + ` slider__tile--${sliderPosition[5]}`}><img src={streamers[5 ].cover} alt="cover"></img></Link>
            </div>
            <div className="slider__arrow--right" onClick={() => mvoeSlider()}><span className="material-symbols-outlined">chevron_right</span></div>
        </div>
    )
}