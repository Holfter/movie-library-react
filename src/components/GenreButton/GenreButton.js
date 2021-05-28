import React from 'react'
import "./GenreButton.css"
import tmdbLogo from "../Tmdb.png"
import {NavLink} from "react-router-dom"

export default function GenreButton(props) {
    return (
        <div className="movieGenre">
            {props.items.map((item,key) => (
                <NavLink activeClassName="activeBtn" key={key} className="linkButton" to={`/${item.name}`}>
                    <div className="genreButton">
                        {item.name}
                    </div>
                </NavLink>
            ))}
            {/*<img className="tmdbLogo" src={tmdbLogo} alt="tmdbLogo"/>*/}
            
        </div>
        
    )
}
