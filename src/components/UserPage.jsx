import { useEffect } from "react";
import Chat from "./Chat";
import { useLoaderData, useOutletContext } from "react-router-dom";

// getting streamer name
export async function loader({ params }) {
    let userName = params.userName;
    return userName;
  }

export default function UserPage() {
    const [streamers, setStreamers] = useOutletContext();
    const streamer = searchForUser(useLoaderData());

    // Scroll to top of page
    useEffect(() => {
       window.scrollTo(0, 0);
    }, []);

    // using streamer name to get his object from all stremers data set
    function searchForUser(userName){
        return streamers.find((streamer) => streamer.user === userName);
    }

    // handle follow button 
    function handleFollow(){
        const id = streamer.id;
        setStreamers((prevStreamers) => {
            let newStreamers = prevStreamers.map((streamer) => {
                return streamer.id === id ? {...streamer, followed: (streamer.followed ? false : true)} : streamer;
            })
            return newStreamers;
        })
    }

    return(
        <section className="user">
            <div className="user__wraper--main">
                <div className="user__wraper--strem">
                    <div className="user__stream">
                        <p className="user__error">Player error: 404 try again later</p>
                    </div>
                    <div className="user__info--small">
                        <div className="sinfo__wraper--avatar">
                            <img className="sinfo__avatar" src={streamer.avatar} alt="user avatar" style={{borderColor: "#" + streamer.color.hex}}/>
                        </div>
                        <div className="sinfo__wraper--big">
                            <p className="sinfo__text--nick">{streamer.user}</p>
                            <p className="sinfo__text--title">{streamer.title}</p>
                            <p className="sinfo__text--category">{streamer.game}</p>
                        </div>
                        <div className="sinfo__wraper--medium">
                            <button className={"sinfo__following" + (streamer.followed ? " sinfo__following--followed" : "")} onClick={handleFollow}>
                                <span className={"material-symbols-outlined sinfo__heart" + (streamer.followed ? " sinfo__heart--fill" : "")}>
                                    favorite
                                </span>
                                {streamer.followed ? "Stop Followng" : "Follow"}
                            </button>
                            <div className="sinfo__wraper--count">
                                <div className="sinfo__count--dot"></div>
                                <p className="sinfo__count--number">{streamer.viewers}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="user__info--medium">
                    <div className="minfo__wraper--big">
                        <p className="minfo__name">Informations about {streamer.user}</p>
                        <p className="minfo__followers">574,1 k. <mark className="minfo__followers--gray">followers</mark></p>
                        <p className="minfo__description">{streamer.description}</p>
                    </div>
                </div>
                <div className="user__info--banners">

                </div>
            </div>
            <div className="user__wraper--chat">
                    <Chat key={streamer.user} viewers={streamer.viewers} ></Chat>
            </div>
        </section>
    )
}