import React,{useEffect,useState} from 'react'
import { useRouteMatch } from "react-router-dom";
import "./MovieInfo.css"
import TMDB from "../TMDB"
import YoutubeEmbed from "../YoutubeEmbed/YoutubeEmbed"

export default function MovieInfo() {
    const match = useRouteMatch()
    const [movieInfo, setMovieInfo] = useState([])
    const [trailer, setTrailer] = useState('')

    useEffect(() => {
        const loadInfo = async () => {
            let info = await TMDB.getMovieInfo(match.params.id)
            setMovieInfo(info != 'false' ? info : "false")
        }

        const loadTrailer = async () => {
            let movieTrailer = await TMDB.getTrailer(match.params.id)
            setTrailer(movieTrailer != 'false' ? movieTrailer : "false")
            
        }
        loadInfo()
        loadTrailer()
    }, [])

    const infoContent = () => {
        return(<><img className="movieInfoBackground" src={`https://image.tmdb.org/t/p/original${movieInfo.backdrop_path}`} alt="" />
        <div className="contentInfo">
            <div>
                <img className="poster" src={`https://image.tmdb.org/t/p/w300${movieInfo.poster_path}`} alt="Img"/>   
            </div>
            <div className="details">
                <h1 className="infoMovieTitle">{movieInfo.title ? movieInfo.title : movieInfo.name}</h1>
                <p className="synopsis">THE SYNOPSIS</p>
                <div className="overview">{movieInfo.overview}</div>
                {trailer != 'false' ? <YoutubeEmbed embed={trailer}/> : <div></div>}
                
            </div>
        </div></>)
    }
        return (
            <div className="movieInfo">
                {movieInfo != "false" ? infoContent() : <div></div>}
            </div>
        )
    
}
