import React from 'react';
import './App.css';
import Entries from './components/entries/Entries';
import Navbar from "./components/nav/Nav";

function App() {
    return (
        <div className="App">
            <div className="main">
                <div className="ads">

                </div>
                <div className="content">
                    <Navbar/>
                    <img src="https://i.imgur.com/rBD9thB.png"/>
                    <Entries/>
                </div>
                <div className="ads">

                </div>
            </div>
        </div>
    );
}

export default App;