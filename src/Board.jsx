import { useEffect, useState } from "react";

export default function Board({dificulti}){
    const [moves, setMoves] = useState([]);

    useEffect(() => {
        getMoveSequence()
    }, [])

    function getRandomInRange(min, max) {
        return Math.round(Math.random() * (max - min) + min);
      }

    function fisherShuffle(arr) {
        let i = arr.length;
        while (--i > 0) {
          let randIndex = Math.floor(Math.random() * (i + 1));
          [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
        }
        return Math.round(arr);
      }

    function getMoveSequence() {
        const numberOfMoves = getRandomInRange(dificulti[1],dificulti[2]);
        let posibilities = [["left", "center", "right"],
                            ["left", "right", "center"],
                            ["center", "left", "right"],
                            ["center", "right", "left"],
                            ["right", "center", "left"],
                            ["right", "left", "center"]];
        let listOfMoves = []; 

        for(let i = 0; i < numberOfMoves; i++){
            let selectedMove = getRandomInRange(0,5);
            listOfMoves.push(posibilities[selectedMove]);
        }
        setMoves(listOfMoves);
    }

    return(
        <div className="board">
            {/* <div className="cup" style={{transition: dificulti[0] + "s"}} onTransitionEnd={}></div> */}
            <div className="cup" style={{transition: dificulti[0] + "s"}}></div>
            <div className="cup" style={{transition: dificulti[0] + "s"}}></div>
            <div className="ball"></div>
        </div>
    )
}