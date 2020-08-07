import React from "react";
import "./personDetails.css";

export default ({ person }) => {
  return (
    <>
      <h4>Date of Birth</h4>
      <p>{person.birthday}</p>
      <h4>Place of Birth</h4>
      {person.place_of_birth}
      <h4>Biography</h4>
      {person.biography}




      

    
     
  
    </>
  );
};