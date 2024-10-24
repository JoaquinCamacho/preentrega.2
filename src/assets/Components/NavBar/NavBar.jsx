import React from 'react'
import CartWidget from '../CartWidget'
import "./navbar.css"

const NavBar = () => {
  return (
    <nav>
        <h1>Logo</h1>
      
            <ul>
                <li>Campera</li>
                <li>Pantalones</li>
                <li>Remeras</li>
            </ul>

            <CartWidget />
    </nav>
  )
}

export default NavBar