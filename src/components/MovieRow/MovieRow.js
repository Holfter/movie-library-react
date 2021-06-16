import React,{useEffect, useState} from "react"
import "./MovieRow.css"
import TMDB from "../TMDB"
import MovieCard from "../MovieCard/MovieCard"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
export default function MovieRow(props) {
    const input = props.id
    const [movies, setMovies] = useState([])
    const [pageNumber, setPageNumber] = useState(2)
    const [active, setActive] = useState(null)

    useEffect(() => {
        const loadAll = async () => {
            let list = await TMDB.getMovieByGenre(input,1)
            setMovies(list.results)
        }
        loadAll()
    }, [input])
    
    const handleClick = (index) => {
        setActive(index)
    }
    const onmouseleave = () => {
        setActive(null)
    }
    const loadMoreItems = async () => {
        let list = await TMDB.getMovieByGenre(props.id,pageNumber)
        setMovies(prev => [...prev, ...list.results])
        setPageNumber(prev => prev +1)
    }
    return (
        <div className="movieRow">
            
            <div className="listContent">
                <h1 className="genreTitle">{props.title}</h1>
                <div className="movieList">
                    {movies && movies.map((item,key) => (
                        <MovieCard
                        onMouseEnter={() => handleClick(key)}
                        cl={`${active === key ? "info": ""}`} 
                        id={item.id} key={key} 
                        title={item.title} name={item.name} 
                        poster_path={item.poster_path} 
                        overview={item.overview}
                        onMouseLeave={() => onmouseleave()}
                        year={item.release_date ? item.release_date : item.first_air_date}
                        vote={item.vote_average === 0 ? "" : item.vote_average}
                        />
                    ))}
                </div>
                
                <span className="loadItems" onClick={loadMoreItems}><ExpandMoreIcon/></span>
            </div>
        </div>
    )
}
