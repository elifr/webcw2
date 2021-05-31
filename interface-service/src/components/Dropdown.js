import React, { useState } from 'react';
import { Redirect } from 'react-router';

function Dropdown({ title, items = [], multiSelect = false}) {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggle = () => setOpen(!open);

    function handleOnClick(item) {
        setSelection([item]);
        console.log("selected item: " + item.id);
    }

    return (
        <div className="dd-wrapper">
            <div
            tabIndex={0}
            className="dd-header"
            role="button"
            onKeyPress={() => toggle(open)}
            onClick={() => toggle(open)}
            >
                <div className="drop-option">
                    <p>{title}</p>
                </div>
                <div className="drop-title">
                    <p>{open ? 'Module Chats Avalible:' : '> Open Modules List <'}</p> 
                </div>
            </div>
            { open && (
                <ul className="dd-list">
                    {items.map(item => (
                        <li className="drop-option" key={item.id}>
                            <button type="button" onClick={() => handleOnClick(item)}>
                                <span>{item.value}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Dropdown;