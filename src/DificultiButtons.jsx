export default function DificultiButtons({setDificulti}) {
    return(
        <div className="button-wraper">
            <button className="dificulti-button" onClick={() => setDificulti([0.5,1,5])}>0</button>
            <button className="dificulti-button" onClick={() => setDificulti([0.4,5,10])}>1</button>
            <button className="dificulti-button" onClick={() => setDificulti([0.3,10,15])}>2</button>
            <button className="dificulti-button" onClick={() => setDificulti([0.2,15,20])}>3</button>
            <button className="dificulti-button" onClick={() => setDificulti([0.1,20,25])}>4</button>
        </div>
    )
}