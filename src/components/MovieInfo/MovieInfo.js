import React,{useEffect,useState} from 'react'
import { useRouteMatch } from "react-router-dom";
import "./MovieInfo.css"
import TMDB from "../TMDB"
import YoutubeEmbed from "../YoutubeEmbed/YoutubeEmbed"
import Slider from "react-slick";
import person from "../person.png"
export default function MovieInfo() {
    const match = useRouteMatch()
    const [movieInfo, setMovieInfo] = useState([])
    const [trailer, setTrailer] = useState('')
    const [cast, setCast] = useState([])

    useEffect(() => {
        const loadInfo = async () => {
            let info = await TMDB.getMovieInfo(match.params.id)
            setMovieInfo(info != 'false' ? info : "false")
            console.log(info)
        }

        const loadTrailer = async () => {
            let movieTrailer = await TMDB.getTrailer(match.params.id)
            setTrailer(movieTrailer != 'false' ? movieTrailer : "false")
        }

        const loadCast = async () => {
            let cast = await TMDB.getCast(match.params.id)
            setCast(cast.cast)
            console.log(cast.cast)
        }
        loadInfo()
        loadTrailer()
        loadCast()
    }, [])


    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay:true,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
      };
    const infoContent = () => {
        return(
        <div className="infoContent">
            <div className="backImage">
                <img className="movieInfoBackground" src={`https://image.tmdb.org/t/p/original${movieInfo.backdrop_path}`} alt="" />
            </div>
            <div className="mainContentInfo">
                <div className="posterDetails">
                    <img className="poster" src={`https://image.tmdb.org/t/p/w300${movieInfo.poster_path}`} alt="Img"/>
                    <div>{movieInfo.release_date ? movieInfo.release_date.slice(0,4) : movieInfo.first_air_date ? movieInfo.first_air_date.slice(0,4) : ""}</div>
                    <div>Genres{movieInfo.genres && movieInfo.genres.map((item) => (<div>{item.name}</div>))}</div>
                    
                </div>
                
                <div className="details">
                    <div>
                        <h1 className="infoMovieTitle">{movieInfo.title ? movieInfo.title : movieInfo.name}</h1>
                        <p style={{color:'#ff6347'}}>THE CAST</p>
                        <Slider {...settings}>
                            {cast && cast.map((item,key) => (<div className="castCircle" key={key} ><img src={item.profile_path ? `https://image.tmdb.org/t/p/w200${item.profile_path}` : person} /></div>))}
                        </Slider>
                    </div>
                    
                    <p className="synopsis">THE SYNOPSIS</p>
                    <div className="overviewInfo">{movieInfo.overview}</div>
                    <div className="trailer">
                        {trailer != 'false' ? <YoutubeEmbed embed={trailer}/> : <div></div>}
                    </div>
                    
                </div>
            </div>
        </div>)
    }
        return (
            <div className="movieInfo">
                {movieInfo != "false" ? infoContent() : <div></div>}
            </div>
        )
    
}
