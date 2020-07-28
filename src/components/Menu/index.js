import React from 'react';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button';
import './index.css';

function  Menu() {
    return (
        <nav className="Menu"> 
            <a href="/">    
                <img className="Logo" src={Logo} alt="NewsFlix logo" />
            </a>
            <Button as="a" className="ButtonLink" href="/" >
                Submit
            </Button>
        </nav>
    );
}

export default Menu;