import React from "react";
import "macro-css";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <header>
      <div className="headerLeft">
        <Link to="/">
          <img
            className="logo"
            width={40}
            height={40}
            src="/img/logoGaming.jpg"
            alt="logo"
          />
        </Link>
        <div className="headerInfo">
          <h3>
            GAMES<span style={{ color: "rgb(22, 238, 20)" }}>HACK</span>
          </h3>
          <p>Shop with the best devices and prices</p>
        </div>
      </div>

      <ul className="headerRight">
        <li className="cu-p" onClick={props.onClickCart}>
          <img
            className="basket"
            src="/img/baskete2.png"
            alt="basket_logo"
            width={38}
            height={42}
          />
          <span className="totalPrice">1202 руб.</span>
        </li>
        <li className="mr-0 cu-p">
          <Link to="https://63501a6edf22c2af7b6369ec.mockapi.io/favorites">
            <img
              className="heart"
              src="/img/heartHeader.png"
              alt="favorites"
              width={32}
              height={32}
            />
          </Link>
        </li>
        <li className="cu-p">
          <img
            className="user"
            src="/img/user.png"
            alt="user_logo"
            width={40}
            height={40}
          />
        </li>
      </ul>
    </header>
  );
};

export default Header;
