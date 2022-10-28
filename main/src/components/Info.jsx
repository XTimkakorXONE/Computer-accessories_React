import React, { useContext } from "react";
import { AppContext } from "../App";

const Info = ({ title, image, description }) => {
  const { setCartOpened } = useContext(AppContext);

  return (
    <div className=" ml-50 cartEmpty d-flex align-center jusitfy-center flex-column flex">
      <img
        className=" mb-20"
        width={220}
        height="220px"
        src={image}
        alt="emptyCart"
      />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <button
        onClick={() => setCartOpened(false)}
        className="greenButton decor"
      >
        <span>Вернуться назад</span>
        <img src="img/arrow.png" alt="arrow" width={32} height={32} />
      </button>
    </div>
  );
};

export default Info;
