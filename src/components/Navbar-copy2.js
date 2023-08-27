import { useState } from 'react';
import '../index.css'
import Andolitos from "./Andolitos.png"

const Navbar = () => {
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 800) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)
    return <div className={color ? 'navContainer navContainer-bg':'navContainer'} >
        {/* <h4 className='navName'>ANDOLITOS</h4> */}
        <img src={Andolitos} alt='Andolitos' className='navName'/>
        <ul className="navList">
            {/* <li>About</li> */}
            <li>Menu</li>
            <li>contact</li>
        </ul>
    </div>;
};

export default Navbar;
