import HomeContent from "./HomeContent";
import HomeSlider from "./HomeSlider";

export default function Home({sliderArr, homeContentArr}) {
    return(
        <section className="home">
            <div className="home__header">
                <HomeSlider arr={sliderArr}/>
            </div>
            <div className="home__content">
                <HomeContent arr={homeContentArr} />
            </div>
        </section>
    )
}