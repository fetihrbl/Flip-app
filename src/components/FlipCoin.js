import React, { useState } from "react";
import Coin from "./Coin";
import "./FlipCoin.css";

const defaultCoins = [
    {
        side: "head",
        imgSrc: "https://media.geeksforgeeks.org/wp-content/uploads/20200916123059/SHalfDollarObverse2016head-300x300.jpg",
    },
    {
        side: "tail",
        imgSrc: "https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg",
    },
];

function FlipCoin({ coins = defaultCoins }) {
    const [currFace, setCurrFace] = useState(null);
    const [totalFlips, setTotalFlips] = useState(0);
    const [heads, setHeads] = useState(0);

    const flipCoin = () => {
        const randomIdx = Math.floor(Math.random() * coins.length);
        const newFace = coins[randomIdx];
        setCurrFace(newFace);
        setTotalFlips((prev) => prev + 1);
        if (newFace.side === "head") setHeads((prev) => prev + 1);
    };

    const resetGame = () => {
        setCurrFace(null);
        setTotalFlips(0);
        setHeads(0);
    };

    const tails = totalFlips - heads;
    const headsPercentage = totalFlips ? ((heads / totalFlips) * 100).toFixed(1) : 0;

    return (
        <div className="flip-coin">
            <h2>Let's Flip a Coin!</h2>
            {currFace && <Coin info={currFace} />}
            <button className="btn btn-primary m-2" onClick={flipCoin}>
                Flip Me!
            </button>
            <button className="btn btn-secondary m-2" onClick={resetGame}>
                Reset
            </button>
            <p className="mt-3">
                Out of <strong>{totalFlips}</strong> flips:
                <br />
                <strong>{heads}</strong> heads (<strong>{headsPercentage}%</strong>)
                <br />
                <strong>{tails}</strong> tails
            </p>
        </div>
    );
}

export default FlipCoin;
