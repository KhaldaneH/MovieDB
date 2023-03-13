import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <div className="kh"><h3>KH MDB</h3></div>
                <Link to="/" style={{textDecoration: "none"}}><span>Home</span></Link>
                <Link to="/Search" style={{textDecoration: "none"}}><span>Search</span></Link>
                <Link to="/genre" style={{textDecoration: "none"}}><span>Genre</span></Link>
                <Link to="/langue" style={{textDecoration: "none"}}><span>Language</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
                <Link to="/series" style={{textDecoration: "none"}}><span className="GG">Series</span></Link>
            </div>
        </div>
    )
}

export default Header;