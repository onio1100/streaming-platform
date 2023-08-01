import streamrs from "../data/stremars.json"
import { Link } from "react-router-dom"
import avatar from "../assets/defult avatar.png"
export default function HomeContent(){
    const randomaizedStremers = fyShuffle(streamrs);

    function fyShuffle(arr) {
        let i = arr.length;
        while (--i > 0) {
          let randIndex = Math.floor(Math.random() * (i + 1));
          [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
        }
        return arr;
      }

    function creatFeed(){
        let stremerIndex = 0;
        let JsxObjectsArr = [];
        for(let row = 0;row < 16; row++){
            let rowObj = [];
            for(let column = 0; column < 6; column++){
                let streamer = randomaizedStremers[stremerIndex];
                rowObj.push(
                    <Link to={"/" + streamer.user} key={column} className="content__tile">
                        <img className="ctile__cover"></img>
                        <div className="ctile__wraper--big">
                            <img className="ctile__avatar" src={avatar} alt="user avatar"></img>
                            <div className="ctile__wraper--small">
                                <p className="ctile__title">{streamer.title}</p>
                                <p className="ctile__nick">{streamer.user}</p>
                                <p className="ctile__game">{streamer.game}</p>
                            </div>
                        </div>
                    </Link>
                )
                stremerIndex++;
            }

            JsxObjectsArr.push(<div className="content__line" key={stremerIndex}>{rowObj}</div>)

            if(row < 15){
                JsxObjectsArr.push(<div className="content__bar" key={stremerIndex + 1}></div>)
            }
        }
        return JsxObjectsArr;
    }

    return(
        <div className="content__wraper">
            {creatFeed()}    
            {/* <p className="content__title">Recomended to you</p>
            <div className="content__line">

                <Link to="super strimer 1" className="content__tile">
                    <img className="ctile__cover"></img>
                    <div className="ctile__wraper--big">
                        <img className="ctile__avatar" src={avatar} alt="user avatar"></img>
                        <div className="ctile__wraper--small">
                            <p className="ctile__title">Wbij na tego super strimka</p>
                            <p className="ctile__nick">Nazwa strimera</p>
                            <p className="ctile__game">gierka</p>
                        </div>
                    </div>
                </Link>
                <Link to="super strimer 1" className="content__tile">
                    <img className="ctile__cover"></img>
                    <div className="ctile__wraper--big">
                        <img className="ctile__avatar" src={avatar} alt="user avatar"></img>
                        <div className="ctile__wraper--small">
                            <p className="ctile__title">Wbij na tego super strimka</p>
                            <p className="ctile__nick">Nazwa strimera</p>
                            <p className="ctile__game">gierka</p>
                        </div>
                    </div>
                </Link>
                <Link to="super strimer 1" className="content__tile">
                    <img className="ctile__cover"></img>
                    <div className="ctile__wraper--big">
                        <img className="ctile__avatar" src={avatar} alt="user avatar"></img>
                        <div className="ctile__wraper--small">
                            <p className="ctile__title">Wbij na tego super strimka</p>
                            <p className="ctile__nick">Nazwa strimera</p>
                            <p className="ctile__game">gierka</p>
                        </div>
                    </div>
                </Link>
                <Link to="super strimer 1" className="content__tile">
                    <img className="ctile__cover"></img>
                    <div className="ctile__wraper--big">
                        <img className="ctile__avatar" src={avatar} alt="user avatar"></img>
                        <div className="ctile__wraper--small">
                            <p className="ctile__title">Wbij na tego super strimka</p>
                            <p className="ctile__nick">Nazwa strimera</p>
                            <p className="ctile__game">gierka</p>
                        </div>
                    </div>
                </Link>
                <Link to="super strimer 1" className="content__tile">
                    <img className="ctile__cover"></img>
                    <div className="ctile__wraper--big">
                        <img className="ctile__avatar" src={avatar} alt="user avatar"></img>
                        <div className="ctile__wraper--small">
                            <p className="ctile__title">Wbij na tego super strimka</p>
                            <p className="ctile__nick">Nazwa strimera</p>
                            <p className="ctile__game">gierka</p>
                        </div>
                    </div>
                </Link>
                <Link to="super strimer 1" className="content__tile">
                    <img className="ctile__cover"></img>
                    <div className="ctile__wraper--big">
                        <img className="ctile__avatar" src={avatar} alt="user avatar"></img>
                        <div className="ctile__wraper--small">
                            <p className="ctile__title">Wbij na tego super strimka</p>
                            <p className="ctile__nick">Nazwa strimera</p>
                            <p className="ctile__game">gierka</p>
                        </div>
                    </div>
                </Link>
                

            </div>
            <div className="content__bar"></div>
             */}
        </div>
    )
}