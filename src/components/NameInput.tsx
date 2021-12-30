import React, {useState, useEffect} from "react";

function NameInput() {
    const [name, setName] = useState('valor inicial');
    console.log('rendered');

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setName(event.target.value);
    };

    return (
        <>
            <label htmlFor="nameInput">Name: </label>
            <input id="nameInput" value={name} onChange={handleChange}/>
        </>
    )
}

export default NameInput;