import './App.css';
import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import MovieSearch from './components/moviesearch/moviesearch';
import Movie from './pages/movieDetail/movie';
import Movietype from './components/movietype/movietype';
import MovieLan from './components/movieLan/movieLan';
import Footer from './components/footer/footer';
import PopularSeries from './components/Series/series';
import SeriesSearch from './components/sersearch/sersea';
import Serie from './pages/serieDetail/serie';
import Serietype from './components/sertype/sertype';
import SerLan from './components/serlan/serlan';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/Search" element={<MovieSearch />}></Route>
                <Route path="/genre" element={<Movietype />}></Route>
                <Route path="/langue" element={<MovieLan />}></Route>
                <Route path="/series" element={<PopularSeries />}></Route>
                <Route path="/series/:id" element={<Serie />}></Route>
                <Route path="/sersea" element={<SeriesSearch />}></Route>
                <Route path="/sergen" element={<Serietype />}></Route>
                <Route path="/serlan" element={<SerLan />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
