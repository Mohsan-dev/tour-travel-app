import './NavbarStyles.css'
import { MenuItems } from './Menuitems';

function Navbar() {
    return (
        <nav className='navbar-items'>
            <h1 className='navbar-logo'>
                Trippy
            </h1>

            <ul className='nav-menu'>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={item.url} className={item.cName}>{item.icon && <i className={item.icon}></i>}
                            {item.title}
                            </a>
                        </li>)
                })}
                <button>Sign Up</button>
            </ul>
        </nav>
    )
}

export default Navbar;