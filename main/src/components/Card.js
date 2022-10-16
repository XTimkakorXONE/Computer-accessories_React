import React from "react";

const Card = () => {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart.svg" alt="heart" />
      </div>
      <img src="/img/headphones1.webp" alt="Hyperx" width={133} height={123} />
      <h5>Hyperx cloud II Wirelles</h5>
      <div className="cardBottom">
        <div className="cost">
          <span>Цена:</span>
          <br></br>
          <b>12 999 руб.</b>
        </div>
        <button className="button">
          <img width={21} height={21} src="/img/add.png" alt="plus" />
        </button>
      </div>
    </div>
  );
};

export default Card;
