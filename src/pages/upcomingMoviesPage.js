import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {UpcomingMoviesContext} from '../contexts/upcomingmoviesContext'



const MovieListPage = () => {
  const context = useContext(UpcomingMoviesContext);
  return (
      <PageTemplate 
        title='Upcoming Movies'
        movies={context.movies}
        action={movie => <div></div>  }
      />
  );
};
export default MovieListPage;