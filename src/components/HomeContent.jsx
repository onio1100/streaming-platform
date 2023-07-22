import avatar from "../assets/defult avatar.png"
export default function HomeContent(){
    return(
        <div className="content__wraper">    
            <p className="content__title">Recomended to you</p>
            <div className="content__line">

                <div className="content__tile">
                    <img className="ctile__cover"></img>
                    <div className="ctile__wraper--big">
                        <img className="ctile__avatar" src={avatar} alt="user avatar"></img>
                        <div className="ctile__wraper--small">
                            <p className="ctile__title">Wbij na tego super strimka</p>
                            <p className="ctile__nick">Nazwa strimera</p>
                            <p className="ctile__game">gierka</p>
                        </div>
                    </div>
                </div>
                <div className="content__tile">
                    <img className="ctile__cover"></img>
                    <div className="ctile__wraper--big">
                        <img className="ctile__avatar" src={avatar} alt="user avatar"></img>
                        <div className="ctile__wraper--small">
                            <p className="ctile__title">Wbij na tego super strimkadddddddddddddddddddddddddddddd</p>
                            <p className="ctile__nick">Nazwa strimeradddddddddddddddddddddddddddddddddddddddddddd</p>
                            <p className="ctile__game">gierkaddddddddddddddddddddddddddddddddddddddddddddddddddddddd</p>
                        </div>
                    </div>
                </div>
                <div className="content__tile">
                    <img className="ctile__cover"></img>
                    <div className="ctile__wraper--big">
                        <img className="ctile__avatar" src={avatar} alt="user avatar"></img>
                        <div className="ctile__wraper--small">
                            <p className="ctile__title">Wbij na tego super strimka</p>
                            <p className="ctile__nick">Nazwa strimera</p>
                            <p className="ctile__game">gierka</p>
                        </div>
                    </div>
                </div>
                <div className="content__tile">
                    <img className="ctile__cover"></img>
                    <div className="ctile__wraper--big">
                        <img className="ctile__avatar" src={avatar} alt="user avatar"></img>
                        <div className="ctile__wraper--small">
                            <p className="ctile__title">Wbij na tego super strimka</p>
                            <p className="ctile__nick">Nazwa strimera</p>
                            <p className="ctile__game">gierka</p>
                        </div>
                    </div>
                </div>
                <div className="content__tile">
                    <img className="ctile__cover"></img>
                    <div className="ctile__wraper--big">
                        <img className="ctile__avatar" src={avatar} alt="user avatar"></img>
                        <div className="ctile__wraper--small">
                            <p className="ctile__title">Wbij na tego super strimka</p>
                            <p className="ctile__nick">Nazwa strimera</p>
                            <p className="ctile__game">gierka</p>
                        </div>
                    </div>
                </div>
                <div className="content__tile">
                    <img className="ctile__cover"></img>
                    <div className="ctile__wraper--big">
                        <img className="ctile__avatar" src={avatar} alt="user avatar"></img>
                        <div className="ctile__wraper--small">
                            <p className="ctile__title">Wbij na tego super strimka</p>
                            <p className="ctile__nick">Nazwa strimera</p>
                            <p className="ctile__game">gierka</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="content__bar"></div>
            
        </div>
    )
}