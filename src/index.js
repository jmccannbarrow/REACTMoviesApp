import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import PersonPage from './pages/personDetailsPage'
import FavoriteMoviesPage from './pages/favoritesMoviesPage'
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import MoviesContextProvider from "./contexts/moviesContext";
import UpcomingMoviesContextProvider from "./contexts/upcomingmoviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import UpComingMoviesPage from './pages/upcomingMoviesPage'

const App = () => {
  return (
      <BrowserRouter>
        <div className="jumbotron">
          <SiteHeader />      {/* New Header  */}
          <div className="container-fluid">
          <MoviesContextProvider>     {/* NEW  */}
          
         <UpcomingMoviesContextProvider>     {/* NEW  */}
          <GenresContextProvider>    {/* NEW */}
        <Switch>
        <Route exact path="/reviews/form" component={AddMovieReviewPage} />
        <Route path="/reviews/:id" component={MovieReviewPage} />
          <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route exact path="/movies/upcoming" component={UpComingMoviesPage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/person/:id" component={PersonPage} />
        
          <Route path="/" component={HomePage} />
      
          <Redirect from="*" to="/" />
        </Switch>
        </GenresContextProvider>    {/* NEW */}
        </UpcomingMoviesContextProvider>     {/* NEW */}
        </MoviesContextProvider>     {/* NEW */}
        

      </div>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));