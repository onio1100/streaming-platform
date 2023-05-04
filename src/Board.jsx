export default function Board({dificulti}){
    return(
        <div className="board">
            <div className="cup" style={{transition: dificulti[0] + "s"}}></div>
            <div className="cup" style={{transition: dificulti[0] + "s"}}></div>
            <div className="cup" style={{transition: dificulti[0] + "s"}}></div>
            <div className="ball"></div>
        </div>
    )
}