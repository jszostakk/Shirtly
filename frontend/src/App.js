import React from 'react';
import './App.css';
import Entries from './components/entries/Entries';
import Navbar from "./components/nav/Nav";
import Entry from "./components/entry/Entry";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <img src="frontend/src/images/background1.png"/>
            <div className="main">
                <div className="ads">

                </div>
                <div className="content">
                    <Entry/>
                    <Entry/>
                </div>
                <div className="ads">

                </div>
            </div>
        </div>
    );
}

export default App;