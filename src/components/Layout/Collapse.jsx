import React from 'react';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const angleDown = <FontAwesomeIcon icon={faAngleDown} />
const angleUp = <FontAwesomeIcon icon={faAngleUp} />

const Collapse = (props) => {
    const [ openTab, setOpenTab ] = useState(false);

    const openTabHandler = () => {
        setOpenTab((openTab) => !openTab); 
    };

    return (
        <>
            <div className="collapse_header">
                <h2 className="collapse_header_title">{props.title}</h2>
                {!openTab ? <i onClick={openTabHandler} className="collapse_header_icon">{angleDown}</i> : 
                <i onClick={openTabHandler} className="collapse_header_icon">{angleUp}</i>}
            </div>
            {openTab && 
                <div className="collapse_content">{props.content}</div>
            }
        </>
    )
}

export default Collapse;