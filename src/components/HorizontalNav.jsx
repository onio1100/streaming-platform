import { Link } from "react-router-dom"
import avatar from "../assets/defult avatar.png"
import { useState } from "react"
export default function HorizontalNav({streamers}) {
    const [search, setSearch] = useState("");

    function updateSearche(e) {
        const value = e.target.value;
        setSearch(value);
    }
    
    function searching() {
        if(search != ""){
            
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
                <input className="hnav__middle__input" type="text" placeholder="Search" value={search} onChange={updateSearche}></input>
                <button className="hnav__middle__button"><span className="material-symbols-outlined">search</span></button>
                <div className={"hnav__middle__wraper" + (search ? " open" : "")}></div>
            </div>
            <div className="hnav__right">
                <div className="hnav__right__wraper">
                    <img className="hnav__right__avatar" src={avatar} />
                </div>
            </div>
        </nav>
    )
}