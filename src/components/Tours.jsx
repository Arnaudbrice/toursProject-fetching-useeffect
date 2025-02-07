import React, { useState } from "react";
import Tour from "./Tour";

function Tours(props) {
  return (
    <div className="tours">
      {props.tours.map(tour => (
        <Tour
          key={tour.id}
          {...tour}
          handleDelete={() => props.deleteHandler(tour.id)}
        />
      ))}
    </div>
  );
}

export default Tours;
