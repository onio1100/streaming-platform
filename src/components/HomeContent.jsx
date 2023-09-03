import { Link } from "react-router-dom"

export default function HomeContent({streamers}){
    
    function creatFeed() {
        const feed = streamers.map((streamer, id) => {
            return(
                <Link to={"/" + streamer.user} key={id} className="content__tile">
                    <img className="ctile__cover" src={streamer.cover} alt="stream cover"></img>
                    <div className="ctile__wraper--big">
                        <img className="ctile__avatar" src={streamer.avatar} alt="user avatar"></img>
                        <div className="ctile__wraper--small">
                            <p className="ctile__title">{streamer.title}</p>
                            <p className="ctile__nick">{streamer.user}</p>
                            <p className="ctile__game">{streamer.game}</p>
                        </div>
                    </div>
                </Link>
            )
        })
        return feed;
    }

    return(
        <div className="content__wraper">
            {creatFeed()}    
        </div>
    )
}