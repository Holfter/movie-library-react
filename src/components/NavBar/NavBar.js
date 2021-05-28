import React from 'react'
import "./NavBar.css"
import GenreButton from "../GenreButton/GenreButton"
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';

function NavBar(props) {
    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/"><div style={{color:"#ff9900"}}>ZINE</div></Link>
            </div>
            
            <SearchIcon/>
        </div>
    )
}

export default NavBar
