import avatar from "../assets/defult avatar.png";

export default function VerticalNav({smallNav, switchNav}) {
    return(
        <div className={smallNav ? "vnav vnav--small" : "vnav"}>
        <div className="vnav__wraper--top">
            <p className="vnav__title--top">{smallNav ? "" : "For you"}</p>
            <div className="vnav__switch" onClick={switchNav}><span className="material-symbols-outlined">{smallNav ? "login" : "logout"}</span></div>
        </div>
        <div className="vnav__wraper--followed">
            <p className="vnav__title--followed">{smallNav ? <span className="material-symbols-outlined">favorite</span> : "FOLLOWED CHANNELS:"}</p>
            <div className="vnav__wraper--channel">
                <img className="vnav__img--channel" src={avatar} alt="avatar" />
                {smallNav ? "" : (<>
                    <div className="vnav__wraper--text">
                        <p className="vnav__text--nick">YoungMulti</p>
                        <p className="vnav__text--category">Just Chatting</p>
                    </div>
                    <div className="vnav__wraper--count">
                        <div className="vnav__dot"></div>
                        <p className="vnav__text--count">10,8 k</p>
                    </div>
                </>)}   
            </div>
        </div>
        <div className="vnav__wraper--recomended">
            <p className="vnav__title--recomended">{smallNav ? <span className="material-symbols-outlined">videocam</span> : "RECOMENDED CHANNELS:"}</p>
        </div>
        </div>
    )
}