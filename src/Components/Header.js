import React from 'react';
import './Header.css';

function Header(props) {
    return (
        <div className='header'>
            <h2>DOtodo</h2>
            <p onClick={props.togglePopup}>Sign Out</p>      
        </div>
    )
}

export default Header;
