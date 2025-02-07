import React, { useState } from "react";

function Tour(props) {
  const { id, image, info, name, price } = props;
  const [isClicked, setIsClicked] = useState(false);

  const handleReadMore = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="single-tour">
      <img className="img" src={image} alt={id} />

      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {isClicked ? info : info.substring(0, 100) + "..."}{" "}
          <a onClick={handleReadMore} type="button" className=" info-btn">
            {isClicked ? "Read Less" : "Read More"}
          </a>
        </p>

        <p className="tour-price">${price}</p>
        <button className="btn delete-btn btn-block" type="button">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Tour;
