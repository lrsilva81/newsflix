import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button';
import './index.css';

function  Menu() {
    return (
        <nav className="Menu"> 
            <Link to="/">    
                <img className="Logo" src={Logo} alt="NewsFlix logo" />
            </Link>
            <Button as={Link} className="ButtonLink" to="/submit/NewContent" >
                Submit
            </Button>
        </nav>
    );
}

export default Menu;