import React,{useState} from 'react'
import Logo from "../../logo.png"
import "./NavBar.css"
import GenreButton from "../GenreButton/GenreButton"
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';

function NavBar(props) {
    const [sidebar, setSidebar] = useState(false);

    const showSideBar = () => setSidebar(!sidebar)


    return (
        <div className="nav">
            <div className="fixedBar">
                <div style={{display:"flex", alignItems:"center",justifyContent:"space-between"}}>
                    <div style={{display:"flex", alignItems:"center"}}>
                        <div onClick={showSideBar} className={sidebar ? "blank" : "hamburguer"}>...</div>
                        <Link to="/movie-library-react"><img className="logo" src={Logo} alt="" /></Link>
                    </div>
                    <input type="text" />
                </div>
                
            </div>
            
            <div className={sidebar ? 'navbar active' : "navbar"}>
                <div className="showSidebar" onClick={showSideBar}>X</div>
                <GenreButton items={props.items}/>
            </div>
        </div>
    )
}

export default NavBar
