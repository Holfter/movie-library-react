import React,{useEffect, useState, useCallback} from "react"
import './App.css';
import TMDB from "./components/TMDB"
import MovieRow from "./components/MovieRow/MovieRow"
import GenreButton from "./components/GenreButton/GenreButton"
import MovieInfo from "./components/MovieInfo/MovieInfo"
import {NavBar} from "./components/NavBar/NavBar"
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import Slideshow from "./components/Slideshow/Slideshow"

function App() {
  const [searchMovie, setSearchMovie] = useState("")
  const[movieList, setMovieList] = useState([])
  const[trending, setTrending] = useState([])
  const [sidebar, setSidebar] = useState(false);
  const showSideBar = () => setSidebar(!sidebar)

  useEffect(() => {
    const loadAll = async () => {
      let list = await TMDB.getHomeList();
      setMovieList(list);
      setTrending(list[0].items.results.slice(0,10))
    }
    loadAll()
  }, []);

  const handleSearch = (e,movie) => {
    e.preventDefault()
    setSearchMovie(movie)
  }
  return (
    <Router> 
      <div className="App">   
          <NavBar click={handleSearch} items={movieList} func={showSideBar}/>
          <div className={sidebar ? 'navbar active' : "navbar"}>
                <GenreButton items={movieList} side={sidebar}/>
          </div>

        <div className={sidebar ? "mainContent side" : "mainContent"}>

          <Switch>
            <Route exact path="/">
              <div style={{
                display:"flex",
                flexDirection:"column",
                width:"100%"
                }}>
                <Slideshow trends={trending}/>
                <MovieRow id={0} title={"Trending"}/>
              </div>
                
            </Route>
            <Route path="/results">{/*<div style={{padding:"150px",background:"red"}}>{searchMovie}</div>*/}<MovieRow id={searchMovie}/></Route>
            <Route path="/movies/:id"><MovieInfo/></Route>
            {movieList.map((item,key) => (<Route key={key} path={`/${item.name}`}><MovieRow id={item.id} title={item.name}/></Route>))}
          </Switch>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
