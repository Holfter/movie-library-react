import React,{useState} from 'react'
import Logo from "../../logo.png"
import "./NavBar.css"
import GenreButton from "../GenreButton/GenreButton"
import {Link} from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search';

function NavBar(props) {
    return (
        <div className="topNav">
            <div className="fixedBar">
                <div style={{display:"flex", alignItems:"center",justifyContent:"space-around"}}>
                    <div style={{display:"flex", alignItems:"center"}}>
                        <Link to="/movie-library-react"><img className="logo" src={Logo} alt="" /></Link>
                    </div>
                    <input type="text" />
                </div>
                
            </div>
        </div>
    )
}

export default NavBar
