import React, { useState } from 'react';
import './Entry.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';

function Entry(props) {
    const [showDesc, setShowDesc] = useState(false);

    const toggleDesc = () => {
        setShowDesc(!showDesc);
    };

    const editHandler = () => {
        props.onEdit({
            title: props.title,
            description: props.description,
            _id: props.id,
        });
    };

    return (
        <a className="article">
            <div className="titleDescription">
                <h1 onClick={toggleDesc}>{props.title}</h1>
                {showDesc && <p>{props.description}</p>}
            </div>

            <div className="buttonGroup">
                <button className="delete" onClick={() => props.onDelete(props.id)}>
                    usun
                </button>
                <button className="edit" onClick={editHandler}>
                    edytuj
                </button>
            </div>
        </a>
    );
}

export default Entry;
