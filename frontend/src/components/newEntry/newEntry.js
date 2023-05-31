import React, {useState} from "react";

function NewEntry(props){
    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const changeTitleHandler = (event)=>{
        const value = event.target.value;
        setTitle(value);
    }

    const changeDescHandler = (event)=>{
        const value = event.target.value;
        setDescription(value);
    }

    const addEntry = () => {
        const entry={
            title: title,
            description: description
        };
        props.onAdd(entry);

        setTitle('');
        setDescription('');
        setShowForm(false)
    }

    return(
        showForm?(
        <div className="entry">
            <label>Tytul: </label>
            <input type="text"
                   value={title}
                   onChange={changeTitleHandler}/>
            <br/>
            <label>Opis: </label>
            <input type="text"
                   value={description}
                   onChange={changeDescHandler}/>
            <br/>
            <button onClick={() => addEntry()}>Dodaj</button>
        </div>
        ) : (
            <button onClick={() => setShowForm(true)}>Nowy wpis</button>
        )
    );
}

export default NewEntry;