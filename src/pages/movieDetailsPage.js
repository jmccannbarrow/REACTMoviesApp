import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import MovieReviews from "../components/movieReviews";
import CastDetails from "../components/castDetails";
import CrewDetails from "../components/crewDetails";
import useMovie from "../hooks/useMovie";
//import usePerson from "../hooks/usePerson";

const MoviePage = props => {
  const { id } = props.match.params;
  const [movie] = useMovie(id)  // NEW
  //const [person] = usePerson(id)  // NEW
  return (
    <>
    {movie ? (
      <>
        <PageTemplate movie={movie}>
          <MovieDetails movie={movie} />
        </PageTemplate>

      
     

        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/credits") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}/credits`}
              >
                Show Cast
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}`}
              >
                Hide Cast 
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/movies/:id/credits`}
          render={props => <CastDetails movie={movie} {...props} />}
         
        />






<div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/crewcredits") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}/crewcredits`}
              >
                Show Crew
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}`}
              >
                Hide Crew
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/movies/:id/crewcredits`}
          render={props => <CrewDetails movie={movie} {...props} />}
         
        />




<div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/reviews") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}/reviews`}
              >
                Show Reviews (Extracts)
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}`}
              >
                Hide Reviews 
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/movies/:id/reviews`}
          render={props => <MovieReviews movie={movie} {...props} />}
        />







      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
  </>
  );
};

export default withRouter(MoviePage);