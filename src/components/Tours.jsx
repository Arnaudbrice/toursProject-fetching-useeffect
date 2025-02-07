import React from "react";
import Tour from "./Tour";

function Tours(props) {
  return (
    <div className="tours">
      {props.tours.map(tour => (
        <Tour key={tour.id} {...tour} />
      ))}
    </div>
  );
}

export default Tours;
