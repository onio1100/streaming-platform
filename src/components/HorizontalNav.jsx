import { Link } from "react-router-dom"
import avatar from "../assets/defult avatar.png"
import { useState } from "react"
export default function HorizontalNav({streamers}) {
    const [searchValue, setSearchValue] = useState("");

    function updateSearche(e) {
        const value = e.target.value;
        setSearchValue(value);
    }
    
    function searchingStreamer() {
        if(searchValue != ""){
            const searchedStreamer = searchValue.toLowerCase();

            const filterdStreamers = streamers.filter((streamer) => {
                if(streamer.user.toLowerCase().match(searchedStreamer)){
                return streamer;  
                }
            })
            const sortedStreamers = filterdStreamers.sort((streamerA, streamerB) => {
                return streamerA.user.toLowerCase().search(searchedStreamer) - streamerB.user.toLowerCase().search(searchedStreamer);
            })
            const shortStreamers = sortedStreamers.splice(0,3);

            if(shortStreamers.length === 0){
                return(
                    <div className="hnav__middle__message">user not found</div>
                )
            } else {
                return shortStreamers.map((streamer, id) => {
                    return(
                        <Link to={"/" + streamer.user} className="hnav__middle__user" key={id}>
                            <img className="hnav__middle__avatar" src={avatar} alt="profile picture"></img>
                            <p className="hnav__middle__nick">{streamer.user}</p>
                        </Link>
                    )
                })
            }

        }
    }

    return(
        <nav className="hnav">
            <div className="hnav__left">
                <Link to="/" className="hnav__left__logo">Blob</Link>
                <p className="hnav__left__browse">Browse</p>
                <div className="hnav__left__more"><span className="material-symbols-outlined">more_vert</span></div>
            </div>
            <div className="hnav__middle">
                <input className={"hnav__middle__input" + (searchValue ? " hnav__middle__input--open" : "")} type="text" placeholder="Search" value={searchValue} onChange={updateSearche} />
                <button className="hnav__middle__button"><span className="material-symbols-outlined">search</span></button>
                <div className="hnav__middle__wraper">{searchingStreamer()}</div>
            </div>
            <div className="hnav__right">
                <div className="hnav__right__wraper">
                    <img className="hnav__right__avatar" src={avatar} />
                </div>
            </div>
        </nav>
    )
}