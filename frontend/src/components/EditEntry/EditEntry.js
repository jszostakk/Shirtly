import React, {useState} from "react";

function EditEntry(props){
    const [title, setTitle] = useState(props.title);
    const [desc, setDesc] = useState(props.description);

    const changeTitleHandler = event => {
        const value = event.target.value;
        setTitle(value);
    }

    const changeDescHandler = event =>{
        const value = event.target.value;
        setDesc(value);
    }
    const editEntry = () =>{
        const entry = {
            title: title,
            description: desc,
            _id: props.id
        };
        props.onEdit(entry)
    }
    return (
        <div className="entry">
            <label>Tytul: </label>
            <input type="text"
                   value={title}
                   onChange={changeTitleHandler}/>
            <br/>
            <label>Opis: </label>
            <input type="text"
                   value={desc}
                   onChange={changeDescHandler}/>
            <br/>
            <button onClick={() => editEntry()}>Edytuj</button>
        </div>
    );
}

export default EditEntry;