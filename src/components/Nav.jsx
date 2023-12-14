import React from 'react'
import Logo from '../assets/images/Tesla_Tsvg.png'
import brand from '../assets/images/tesla.svg'



function Nav() {
    return (<nav className="nav-wrapper">
        <div className="nav-content">
    <ul className="list-styled">
                <li >
                    
                    <img src={Logo} alt="Tesla" height='40' width='35' />
                    
                </li>
                <li >
                    <a href='https://www.tesla.com'><img src={brand} alt="brand" height='40' width='180' /></a>
                </li>


            </ul>
        </div>

    </nav>);
}

export default Nav;