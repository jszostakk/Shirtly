import React from 'react';
import './Entry.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';

class Entry extends React.Component{
    render(){
        return <button className="article">
            <img src="frontend/src/images/shirt1.jpg"/>
            <h1>Header</h1>
            <p>Opis</p>
        </button>
    }
}

export default Entry;