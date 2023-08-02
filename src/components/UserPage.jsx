import streamers from "../data/stremars.json";
import Chat from "./Chat";
import avatar from "../assets/defult avatar.png";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
    let userName = params.userName;
    let userObj = await searchForUser(userName);
    return userObj;
  }

async function searchForUser(userName){
    return streamers.find((streamer) => streamer.user === userName);
}

export default function UserPage() {
    const [follow, setFollow] = useState(false);
    const streamer = useLoaderData();

    function handleFollow(){
        setFollow((prevFollow) => prevFollow ? false : true);
    }

    return(
        <section className="user">
            <div className="user__wraper--main">
                <div className="user__wraper--strem">
                    <div className="user__strem"></div>
                    <div className="user__info--small">
                        <div className="sinfo__wraper--avatar">
                            <img className="sinfo__avatar" src={avatar} alt="user avatar" style={{borderColor: "#" + streamer.color.hex}}/>
                        </div>
                        <div className="sinfo__wraper--big">
                            <p className="sinfo__text--nick">{streamer.user}</p>
                            <p className="sinfo__text--title">{streamer.title}</p>
                            <p className="sinfo__text--category">{streamer.game}</p>
                        </div>
                        <div className="sinfo__wraper--medium">
                            <button className={"sinfo__following" + (follow ? " sinfo__following--followed" : "")} onClick={handleFollow}><span className={"material-symbols-outlined sinfo__heart" + (follow ? " sinfo__heart--fill" : "")}>favorite</span>{follow ? "Stop Followng" : "Follow"}</button>
                        </div>
                    </div>
                </div>
                <div className="user__info--medium">
                    <div className="minfo__wraper--big">
                        <p className="minfo__name">Informations about {streamer.user}</p>
                        <p className="minfo__followers">574,1 k. <mark className="minfo__followers--gray">followers</mark></p>
                        <p className="minfo__description">{streamer.description}</p>
                    </div>
                    <div className="minfo__wraper--small">
                        <a></a>
                    </div>
                </div>
                <div className="user__info--banners">

                </div>
            </div>
            <div className="user__wraper--chat">
                    <Chat></Chat>
            </div>
        </section>
    )
}