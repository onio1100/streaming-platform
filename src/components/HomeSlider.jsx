import { useState } from "react"

export default function HomeSlider() {
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
                <div style={{background: "red"}} className={"slider__tile" + ` slider__tile--${sliderPosition[0]}`}></div>
                <div style={{background: "blue"}} className={"slider__tile" + ` slider__tile--${sliderPosition[1]}`}></div>
                <div style={{background: "green"}} className={"slider__tile" + ` slider__tile--${sliderPosition[2]}`}></div>
                <div style={{background: "pink"}} className={"slider__tile" + ` slider__tile--${sliderPosition[3]}`}></div>
                <div style={{background: "orange"}} className={"slider__tile" + ` slider__tile--${sliderPosition[4]}`}></div>
                <div style={{background: "white"}} className={"slider__tile" + ` slider__tile--${sliderPosition[5]}`}></div>
            </div>
            <div className="slider__arrow--right" onClick={() => mvoeSlider()}><span className="material-symbols-outlined">chevron_right</span></div>
        </div>
    )
}