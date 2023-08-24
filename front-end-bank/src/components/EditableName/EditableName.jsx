/**
 * Composant permetant a l'utilisateur d'éditer son profile
 * @returns {*}
 * @constructor
 */
import React, {useEffect, useState} from "react";
import {GenericFormData as div} from "axios";

export default function EditableName({ fullName, onSave }) {
    const [editing, setEditing] = useState(false);
    const [inputFirstName, setInputFirstName] = useState(fullName ? fullName.split(' ')[0] : '');
    const [inputLastName, setInputLastName] = useState(fullName ? fullName.split(' ')[1] : '');

    const handleSave = () => {
        const newName = `${inputFirstName} ${inputLastName}`
        console.log(newName);
        const transformNewName = newName.toUpperCase()
        onSave(transformNewName);
        setEditing(false);

    }
    const handleCancel = () => {
        console.log(fullName);
        setInputFirstName(fullName ? fullName.split(' ')[0] : '');
        setInputLastName(fullName ? fullName.split(' ')[1] : '');
        setEditing(false);
    }
    // Gestion de l'afficheage du nom en appuyant sur "Entrée"
    const  handleKeyPress = (event) => {
        // console.log(event);
        if (event.key === "Enter") {
            handleSave();
        }
    }

    if (!editing) {
        return (
            <div className="Header">
                <button className="edit-button" onClick={() => setEditing(true)}>Edit Name</button>
            </div>
        )
    }
    return(
        <div>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Tony"
                    value={inputFirstName}
                    onChange={(e) => setInputFirstName(e.target.value)}
                    onKeyDown={handleKeyPress}
                />
                <input
                    type="text"
                    placeholder="Tony"
                    value={inputLastName}
                    onChange={(e) => setInputLastName(e.target.value)}
                    onKeyDown={handleKeyPress}
                />
            </div>
            <div className="button-container">
                <button className="edit-button" onClick={handleSave}>Save</button>
                <button className="edit-button" onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    )
}
