import { Link } from "react-router-dom";
import avatar from "../assets/defult avatar.png";

export default function VerticalNav({smallNav, switchNav, streamers}) {

    function creatFollowersList(){
        const selected = streamers.filter((streamer) => {
                return streamer.followed;
            })

        const sorted = selected.sort((streamerA, streamerB) => {
            return streamerB.viewers - streamerA.viewers;
        })

        const jsxElementsArr = sorted.map((streamer) => {
            return(
                <Link key={streamer.id} to={"/" + streamer.user} className="vnav__wraper--channel">
                    <img className="vnav__img--channel" src={streamer.avatar} alt="avatar" />
                    {smallNav ? "" : (<>
                        <div className="vnav__wraper--text">
                            <p className="vnav__text--nick">{streamer.user}</p>
                            <p className="vnav__text--category">{streamer.game}</p>
                        </div>
                        <div className="vnav__wraper--count">
                            <div className="vnav__dot"></div>
                            <p className="vnav__text--count">{streamer.viewers}</p>
                        </div>
                    </>)}   
                </Link>
            )
        })
        return jsxElementsArr;
    }

    function creatRecomendedList(){
        const selected = streamers.filter((streamer) => {
                return !streamer.followed;
            })
        
        const shorted = selected.slice(0,5);

        const jsxElementsArr = shorted.map((streamer) => {
            return(
                <Link key={streamer.id} to={"/" + streamer.user} className="vnav__wraper--channel">
                    <img className="vnav__img--channel" src={streamer.avatar} alt="avatar" />
                    {smallNav ? "" : (<>
                        <div className="vnav__wraper--text">
                            <p className="vnav__text--nick">{streamer.user}</p>
                            <p className="vnav__text--category">{streamer.game}</p>
                        </div>
                        <div className="vnav__wraper--count">
                            <div className="vnav__dot"></div>
                            <p className="vnav__text--count">{streamer.viewers}</p>
                        </div>
                    </>)}   
                </Link>
            )
        })
        return jsxElementsArr;
    }

    const followersList = creatFollowersList();
    
    return(
        <div className={smallNav ? "vnav vnav--small" : "vnav"}>
        <div className="vnav__wraper--top">
            <p className="vnav__title--top">{smallNav ? "" : "For you"}</p>
            <div className="vnav__switch" onClick={switchNav}><span className="material-symbols-outlined">{smallNav ? "login" : "logout"}</span></div>
        </div>
        <div className="vnav__wraper--followed" style={{height: 40 + followersList.length * 42 + "px"}}>
            <p className="vnav__title--followed">{smallNav ? <span className="material-symbols-outlined">favorite</span> : "FOLLOWED CHANNELS:"}</p>
            {followersList}
        </div>
        <div className="vnav__wraper--recomended">
            <p className="vnav__title--recomended">{smallNav ? <span className="material-symbols-outlined">videocam</span> : "RECOMENDED CHANNELS:"}</p>
            {creatRecomendedList()}
        </div>
        </div>
    )
}