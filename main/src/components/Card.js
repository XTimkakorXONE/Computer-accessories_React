import React from "react";

const Card = (props) => {
  console.log(props);
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart.svg" alt="heart" />
      </div>
      <img src={props.img} alt="Hyperx" width={133} height={123} />
      <h5>{props.title}</h5>
      <div className="cardBottom">
        <div className="cost">
          <span>Цена:</span>
          <br></br>
          <b>{props.price}</b>
        </div>
        <button className="button" onClick={props.onClick}>
          <img width={21} height={21} src="/img/add.png" alt="plus" />
        </button>
      </div>
    </div>
  );
};

export default Card;
