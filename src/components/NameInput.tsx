import React, {useState, useEffect} from "react";

function NameInput() {
    console.log('rendered');
    return (
        <>
            <label htmlFor="nameInput">Name: </label>
            <input id="nameInput"/>
        </>
    )
}

export default NameInput;