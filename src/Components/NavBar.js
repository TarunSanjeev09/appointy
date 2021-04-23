import React from 'react'

import './NavBar.css'

function NavBar() {
    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <img src= 'Assets/Appointy-Logo1.svg' alt="logo" className="navbar-logo"/>
                    <ul className="nav-menu">
                        <li className='nav-item'>
                          <p to='/' className='nav-links' >Home </p>
                        </li>
                        <li className='nav-item'>
                          <p to='/' className='nav-links' >Customers</p>
                        </li>
                        <li className='nav-item'>
                          <p to='/' className='nav-links' >Contact US </p>
                        </li>
                        <li className='nav-item'>
                          <p to='/' className='nav-links' >Entrapice </p>
                        </li>
                        <li className='nav-item'>
                          <p to='/' className='nav-links' >Pricing </p>
                        </li>
                        <li className='nav-item'>
                          <p to='/' className='nav-links' >Login </p>
                        </li>
                        
                        
                        </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar
