import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar bg-primary">
            <Link to="/">
                <img className="eu-logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/European_Leagues_logo.svg/190px-European_Leagues_logo.svg.png" alt="Premier League Logo" />
            </Link>
            <ul>
                <li style={{fontSize: "18px", textTransform: "uppercase"}}>
                    <Link to="/">Premier League</Link>
                </li>
                <li style={{fontSize: "18px", textTransform: "uppercase"}}>
                    <Link to="/PD">La Liga</Link>
                </li>
                <li style={{fontSize: "18px", textTransform: "uppercase"}}>
                    <Link to="/FL1">Ligue 1</Link>
                </li>
                <li style={{fontSize: "18px", textTransform: "uppercase"}}>
                    <Link to="/BL1">Bundesliga</Link>
                </li>
                <li style={{fontSize: "18px", textTransform: "uppercase"}}>
                    <Link to="/SA">Serie A</Link>
                </li>
                <li style={{fontSize: "18px", textTransform: "uppercase"}}>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;