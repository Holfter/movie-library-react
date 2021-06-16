import React,{useState, useRef} from 'react'
import Logo from "../../logo.png"
import "./NavBar.css"
import {Link, useHistory} from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

export function NavBar(props) {
    let history = useHistory();
    const [accordion, setAccordion] = useState()
    const [inputValue, setInputValue] = useState()

    const setMovie = (e) =>{
        history.push("/results")
        props.click(e, inputValue)
        setInputValue("")
    }

    const handleAccordion = () => {
        setAccordion(accordion === "" ? "active" : "")
    }

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
                    <form className="form" onSubmit={(e) => setMovie(e)}>
                        <input placeholder="Search movie" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="searchMovie"/>
                        <button className="searchButton"><SearchIcon/></button> 
                    </form>
                    
                    <div>
                        <div style={{display:"flex"}}>
                            <button onClick={() => handleAccordion()} className="accordion">{accordion === "active" ? <CloseIcon/> : <SearchIcon/>}</button>
                            <div className="profilePic"></div>
                        </div>
                    </div>
            </div>
            <div className={accordion === "active" ? "panel panelOn" : "panel"}>
                <form className="form-mobile" onSubmit={(e) => setMovie(e)}>
                    <input placeholder="Search Movie" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="searchMovie-mobile"/>
                    <button className="searchButton-mobile"><SearchIcon/></button> 
                </form>
            </div>
        </div>
    )
}
