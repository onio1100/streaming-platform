import HomeContent from "./HomeContent";
import HomeSlider from "./HomeSlider";

export default function Home() {
    return(
        <section className="home">
            <div className="home__header">
                <HomeSlider />
            </div>
            <div className="home__content">
                <HomeContent />
            </div>
        </section>
    )
}