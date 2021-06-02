import React,{useEffect, useState} from "react"
import './App.css';
import TMDB from "./components/TMDB"
import MovieRow from "./components/MovieRow/MovieRow"
import GenreButton from "./components/GenreButton/GenreButton"
import MovieInfo from "./components/MovieInfo/MovieInfo"
import NavBar from "./components/NavBar/NavBar"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Slideshow from "./components/Slideshow/Slideshow"

function App() {

  const[movieList, setMovieList] = useState([])
  const[trending, setTrending] = useState([])

  useEffect(() => {
    const loadAll = async () => {
      let list = await TMDB.getHomeList();
      setMovieList(list);
      setTrending(list[0].items.results.slice(0,10))
    }
    loadAll()
  }, []);
  return (
    <Router>
      <div className="App">
          <NavBar items={movieList}/>
          {/*<GenreButton items={movieList}/>*/}
        <div className="mainContent">
          <Switch>
            <Route exact path="/movie-library-react/">
              <div style={{
                display:"flex",
                flexDirection:"column",
                width:"100%"
                }}>
                <Slideshow trends={trending}/>
                <MovieRow id={0} title={"Trending"}/>
              </div>
                
            </Route>
            <Route path="/results"></Route>
            <Route path="/movies/:id"><MovieInfo/></Route>
            {movieList.map((item,key) => (<Route key={key} path={`/${item.name}`}><MovieRow id={item.id} title={item.name}/></Route>))}
          </Switch>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
