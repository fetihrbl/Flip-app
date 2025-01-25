import React from "react";
import FlipCoin from "./components/FlipCoin";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    return (
        <div className="App d-flex flex-column align-items-center justify-content-center">
            <h1 className="app-title">Coin Flip App</h1>
            <FlipCoin />
        </div>
    );
}

export default App;