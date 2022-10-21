import React, { useEffect, useState } from "react";

const Card = ({ title, img, price, onFavorite, onPlus }) => {
  const [isAdded, setIsAdded] = useState(false);

  const onCLickPlus = () => {
    {
      !isAdded && onPlus({ title, img, price });
    }
    setIsAdded(!isAdded);
  };

  return (
    <div className="card">
      <div className="favorite" onClick={onFavorite}>
        <img src="/img/heart.svg" width={20} alt="heart" />
      </div>
      <img src={img} alt="Hyperx" width={133} height={123} />
      <h5>{title}</h5>
      <div className="cardBottom">
        <div className="cost">
          <span>Цена:</span>
          <br></br>
          <b>{price}</b>
        </div>
        <button className="button" onClick={onCLickPlus}>
          <img
            width={23}
            height={23}
            src={isAdded ? "/img/checkedPlus.svg" : "/img/add.png"}
            alt="plus"
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
