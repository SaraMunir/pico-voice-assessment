import React from 'react'
import {useLocation, Link } from "react-router-dom";


function NavBar() {
    let location = useLocation();

    return (
        <nav>
            <ul  className='row navList'>
                <li>
                    <Link to="/" className='navItem'>Home</Link>
                </li>
                <li>
                    {
                        location.pathname === "/Q1" ? <Link className='activeNavItem navItem' to="/Q1">Q1</Link> :<Link className='navItem ' to="/Q1">Q1</Link>
                    }
                </li>
                <li>
                    {
                        location.pathname === "/Q2" ? <Link className='activeNavItem navItem' to="/Q2">Q2</Link> :<Link className='navItem ' to="/Q2">Q2</Link>
                    }
                </li>
            </ul>
        </nav>
    )
}

export default NavBar