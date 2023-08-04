import HomeContent from "./HomeContent";
import HomeSlider from "./HomeSlider";

export default function Home({streamers}) {
    let s = streamers.slice(0, 6);
    let t = streamers.slice(5);
    return(
        <section className="home">
            <div className="home__header">
                <HomeSlider arr={s}/>
            </div>
            <div className="home__content">
                <HomeContent arr={t} />
            </div>
        </section>
    )
}