import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview';
import {MoviesContext} from '../contexts/moviesContext';
import {UpcomingMoviesContext} from '../contexts/upcomingmoviesContext'


const FavoriteMoviesPage = props => {
  const context = useContext(MoviesContext,UpcomingMoviesContext);
  return (
    <MovieListPageTemplate
      movies={context.favorites}
      title={"Favourite Movies"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default FavoriteMoviesPage;