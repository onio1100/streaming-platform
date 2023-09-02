import { useState } from "react"
import { Link } from "react-router-dom";

export default function HomeSlider({streamers}) {
    const [sliderPosition, setSliderPositon] = useState(["back","left--2","left--1","center","right--1","right--2"]);

    function moveSlider(direction = false){ // direction(false = right, true = left)
        setSliderPositon((prevPosition) => {
            if(direction){
                return [prevPosition[5],prevPosition[0],prevPosition[1],prevPosition[2],prevPosition[3],prevPosition[4]];
            }else{
                return [prevPosition[1],prevPosition[2], prevPosition[3],prevPosition[4],prevPosition[5],prevPosition[0]];
            }
        })
    }

    function creatSliderElements(){
        const sliderElements = streamers.map((streamer, id) => {
            return(
                <Link to={streamer.user} key={id} className={"slider__tile" + ` slider__tile--${sliderPosition[id]}`}>
                    <img src={streamer.cover} alt="cover" className="slider__img" />
                    <div className="slider__wraper">
                        <p className="slider__username">{streamer.user}</p>
                        <div className="slider__count">
                            <div className="slider__dot"></div>
                            <p className="slider__viewers">{streamer.viewers}</p>
                        </div>
                    </div>
                </Link>
            )
        })
        return sliderElements;
    }

    return(
        <div className="slider">
            <div className="slider__arrow--left" onClick={() => moveSlider(true)}><span className="material-symbols-outlined">chevron_left</span></div>
            <div className="slider__main">
                {creatSliderElements()}
            </div>
            <div className="slider__arrow--right" onClick={() => moveSlider()}><span className="material-symbols-outlined">chevron_right</span></div>
        </div>
    )
}