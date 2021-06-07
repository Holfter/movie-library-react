import React,{useEffect, useState} from 'react'
import "./Slideshow.css"
import { Slide } from 'react-slideshow-image';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import {Link} from "react-router-dom";

export default function Slideshow(props) {
    const array = props.trends.map((i,key) => (<div key={key} className="indicator"><img src={`https://image.tmdb.org/t/p/original/${i.poster_path}`}/></div>))
    const zoomOutProperties = {
        indicators: false,
        scale: 0.4,
        //indicators: i => (<div className="indicator">{array[i]}</div>),
        duration:4000,
        canSwipe:true,
        autoplay:false,
        transitionDuration:300,
        prevArrow:<ArrowBackIosIcon style={{position:"absolute",left:0,cursor: "pointer"}}/>,
        nextArrow:<ArrowForwardIosIcon style={{position:"absolute",right:0,cursor: "pointer"}}/>
    }
   
    return (
        <div className="slideshow">
            <Slide {...zoomOutProperties}>
                {props.trends.map((item,key) => (
                    <div key={key} className="each-slide">
                        <div className="slideInfo">
                            <div>
                                <div style={{marginBottom: "20px"}}>
                                    <span className="voteAverage">{item.vote_average === 0 ? "" : item.vote_average}</span>
                                    <h1>{item.title ? item.title : item.name}</h1>
                                    <p style={{color:"tomato"}}>{item.first_air_date ? item.first_air_date.slice(0,4) : item.release_date.slice(0,4)}</p>
                                </div>
                                
                                <p className="overview" style={{marginBottom:"20px"}}>{item.overview}</p>
                                <Link to={`/movies/${item.id}`}><span className="playButton"><PlayArrowIcon className="play"/> Play</span></Link>
                            </div>
                        </div>
                        <div className="gradient"></div>
                        <img className="backdrop_path" src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt="image" />
                    </div>
                ))}
            </Slide>
        </div>
    )
}
