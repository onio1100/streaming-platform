import { useEffect } from "react";
import HomeContent from "./HomeContent";
import HomeSlider from "./HomeSlider";

export default function Home({streamers}) {
    let sliderStreamers = streamers.slice(0, 6);
    let gridStreamers = streamers.slice(5);

    // Scroll to top of page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <section className="home">
            <div className="home__header">
                <HomeSlider streamers={sliderStreamers}/>
            </div>
            <div className="home__content">
                <HomeContent streamers={gridStreamers} />
            </div>
        </section>
    )
}