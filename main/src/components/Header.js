import React from "react";

const Header = () => {
  return (
    <header>
      <div className="headerLeft">
        <img
          className="logo"
          width={40}
          height={40}
          src="/img/logoGaming.jpg"
          alt="LOL"
        />
        <div className="headerInfo">
          <h3>STORE FOR GAMES</h3>
          <p>Shop with the best devices and prices</p>
        </div>
      </div>
      <ul className="headerRight">
        <li>
          <img
            className="basket"
            src="/img/baskete2.png"
            alt="basket_logo"
            width={48}
            height={50}
          />
          <span className="totalPrice">1202 руб.</span>
        </li>
        <li>
          <img
            className="user"
            src="/img/user.png"
            alt="user_logo"
            width={47}
            height={47}
          />
        </li>
      </ul>
    </header>
  );
};

export default Header;
