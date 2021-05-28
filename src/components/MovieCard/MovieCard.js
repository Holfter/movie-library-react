import React from 'react'
import "./MovieCard.css"
import {Link} from "react-router-dom";
import StarIcon from '@material-ui/icons/Star';
export default function MovieCard(props) {

    return (
        <Link className="movieCard" to={`/movies/${props.id}`}>
            <div onMouseLeave={props.onMouseLeave} onMouseEnter={props.onMouseEnter} className="movieRow--item">
                <div className="img">
                    <img className="mcImg" src={`https://image.tmdb.org/t/p/w300${props.poster_path}`} alt="img"/>
                    {props.cl && props.vote ? <div className="voteCard"><StarIcon className="star"/> {props.vote}</div> : ""}   
                </div>
                <div className={props.cl}>
                    <div className="innerInfo">
                        
                    </div>
                    
                </div>
                
                <div style={{display:"flex",flexDirection:"column",marginTop:"10px"}}>
                    <span className="title">{props.title ? props.title : props.name}</span>
                    <span className="year"><p>{props.year? props.year.slice(0,4) : ""}</p></span>
                </div>
                
                
                 
            </div>
        </Link>
    )
}
