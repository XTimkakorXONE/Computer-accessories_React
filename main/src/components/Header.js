import React from "react";
import { Link } from "react-router-dom";

import { useCart } from "../hooks/useCart";

const Header = (props) => {
  const { totalPrice } = useCart();

  return (
    <header>
      <div className="headerLeft">
        <Link to="/">
          <img
            className="logo"
            width={60}
            height={60}
            src="img/logoGaming.jpg"
            alt="logo"
          />
        </Link>
        <div className="headerInfo">
          <h3 style={{ color: "rgb(12, 208, 10)" }}>
            GAMES<span style={{ color: "black" }}>HACK</span>
          </h3>
          <p>Shop with the best devices and prices</p>
        </div>
      </div>

      <ul className="headerRight">
        <li className="cu-p" onClick={props.onClickCart}>
          <img
            className="basket"
            src="img/baskete2.png"
            alt="basket_logo"
            width={38}
            height={42}
          />
          <span className="totalPrice">{totalPrice} руб.</span>
        </li>
        <li className="mr-0 cu-p">
          <Link to="https://63501a6edf22c2af7b6369ec.mockapi.io/favorites">
            <img
              className="heart"
              src="img/heartHeader.png"
              alt="favorites"
              width={32}
              height={32}
            />
          </Link>
        </li>
        <li className="cu-p">
          <Link to="https://63501a6edf22c2af7b6369ec.mockapi.io/orders">
            <img
              className="user"
              src="img/user.png"
              alt="user_logo"
              width={40}
              height={40}
            />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
