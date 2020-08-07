import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import { getCastDetails } from "../../api/tmdb-api";
//import { excerpt } from "../../util";


export default ({ movie }) => {
  const [credits, setCastDetails] = useState([]);

  useEffect(() => {
    getCastDetails(movie.id).then(credits => {
      setCastDetails(credits.crew);
    });
  }, 
   // eslint-disable-next-line
  []);
  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Department</th>
          <th scope="col">Job</th>
         
        
        </tr>
      </thead>
      <tbody>
        {credits.map(r => {
            return (
              <tr key={r.id}>
                <td>{r.name}</td>
                <td>{r.department}</td>
                <td>{r.job}</td>
              
                
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};