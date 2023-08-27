import React, { useState } from 'react';
import '../index.css';
import Andolitos from './Andolitos.png';

const Navbar = () => {
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 800) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    window.addEventListener('scroll', changeColor);

    return (
        <div className={color ? 'navContainer navContainer-bg' : 'navContainer'}>
            <img src={Andolitos} alt="Andolitos" className="navName" />
            <ul className="navList">
                <li>
                    <a href="#menu">Menu</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
