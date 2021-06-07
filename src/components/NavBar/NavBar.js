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
                
                    <div className="logoAndBtn">
                        <div className="openSideBar" onClick={props.func}><MenuIcon/></div>
                        <Link to="/movie-library-react">
                            <div className="logoHome">
                                <img className="logo" src={Logo} alt="" />
                                <span>Zine</span>
                            </div>
                            
                        </Link>
                        
                    </div>
                    <form className="form" action="submit">
                        <input className="searchMovie" type="text" />
                        <button className="searchButton"><SearchIcon/></button>
                    </form>
                    <div>
                        <div>
                            <div className="profilePic"></div>
                        </div>
                    </div>
                
                
            </div>
        </div>
    )
}

export default NavBar
