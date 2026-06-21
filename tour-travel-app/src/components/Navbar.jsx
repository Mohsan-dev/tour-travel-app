import './NavbarStyles.css'
import { MenuItems } from './Menuitems';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [clicked , setclicked] = useState(false)
    const handleclick = () => {
        setclicked(!clicked)
    }
    return (
        <nav className='navbar-items'>
            <h1 className='navbar-logo'>
                Trippy
            </h1>
            <div className='menu-icons' onClick={handleclick}>
                <i className={clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
              
            </div>

            <ul className={clicked ? "nav-menu active" :"nav-menu "}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link to={item.url} className={item.cName}>{item.icon && <i className={item.icon}></i>}
                            {item.title}
                            </Link>
                        </li>)
                })}
                <button>Sign Up</button>
            </ul>
        </nav>
    )
}

export default Navbar;