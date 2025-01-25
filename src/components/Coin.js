import React from "react";
import "./Coin.css";

function Coin({ info }) {
    return (
        <div className="coin">
            <img
                src={info.imgSrc}
                alt={info.side}
                className="coin-image"
                style={{ animation: "flip 1s ease-in-out" }}
            />
            <p className="mt-2">{info.side.toUpperCase()}</p>
        </div>
    );
}

export default Coin;
