import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCastDetails } from "../../api/tmdb-api";
//import { excerpt } from "../../util";


export default ({ movie }) => {
  const [credits, setCastDetails] = useState([]);

  useEffect(() => {
    getCastDetails(movie.id).then(credits => {
      setCastDetails(credits.cast);
    });
  }, 
   // eslint-disable-next-line
  []);
  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Character</th>
          <th scope="col">Actor</th>
          <th scope="col">More Information</th>
        </tr>
      </thead>
      <tbody>
        {credits.map(r => {
            return (
              <tr key={r.id}>
                <td>{r.character}</td>
                <td>{r.name}</td>
              
              
                <td>
                  {" "}
                  <Link
                    to={{
                      pathname: `/person/${r.id}`,
                      state: {
                        credits: r,
                        movie: movie,
                        
                      }
                    }}
                  >
                    Details
                  </Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};