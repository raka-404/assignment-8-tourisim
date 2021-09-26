import React from 'react';
import './Header.css'

// importing font awesome icon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeEurope} from '@fortawesome/free-solid-svg-icons'

// variable for font awesome icon 
const element = <FontAwesomeIcon icon={faGlobeEurope} />


// header component here 
const Header = () => {
    return (
        <div className="mainHeader">
            <div className="header_container">
                <h2><a href="./logo">{element}Vacation Travelling</a></h2>
                <ul>
                    <li>Population</li>
                    <li>Beautiful place</li>
                    <li>Area</li>
                    <li>More..</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
