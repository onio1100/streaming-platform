import avatar from "../assets/defult avatar.png"
export default function HorizontalNav() {
    return(
        <nav className="hnav">
            <div className="hnav__left">
                <p className="hnav__left__logo">Blob</p>
                <p className="hnav__left__browse">Browse</p>
                <div className="hnav__left__more"><span class="material-symbols-outlined">more_vert</span></div>
            </div>
            <div className="hnav__middle">
                <input className="hnav__middle__input" type="text" placeholder="Search"></input>
                <button className="hnav__middle__button"><span class="material-symbols-outlined">search</span></button>
            </div>
            <div className="hnav__right">
                <div className="hnav__right__wraper">
                    <img className="hnav__right__avatar" src={avatar} />
                </div>
            </div>
        </nav>
    )
}