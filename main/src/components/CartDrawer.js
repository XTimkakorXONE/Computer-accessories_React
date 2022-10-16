import React from "react";

const CartDrawer = () => {
  return (
    <div className="drawer">
      <h2 className="d-flex justify-between ">
        Корзина{" "}
        <img
          className="removeBtn cu-p"
          src="/img/cross.svg"
          alt="remove"
          width={20}
          height={35}
        />
      </h2>

      <div className="items">
        <div className="cartItem">
          <img
            className="monitor"
            src="/img/monitor.webp"
            alt="monitor"
            width={133}
            height={123}
          />
          <div className="mr-20">
            <p>Hyperx cloud II Wirelles</p>
            <b>12 999 руб.</b>
          </div>
          <img
            className="removeBtn"
            src="/img/cross.svg"
            alt="remove"
            width={15}
            height={25}
          />
        </div>
        <div className="cartItem">
          <img
            className="monitor"
            src="/img/logitech.jpg"
            alt="monitor"
            width={133}
            height={123}
          />
          <div className="mr-20">
            <p>Hyperx cloud II Wirelles</p>
            <b>12 999 руб.</b>
          </div>
          <img
            className="removeBtn"
            src="/img/cross.svg"
            alt="remove"
            width={15}
            height={25}
          />
        </div>
      </div>

      <ul className="cartTotalBlock">
        <li>
          <span>Итого:</span>
          <div></div>
          <b>21 489 руб. </b>
        </li>
        <li>
          <span>Налог 5%:</span>
          <div></div>
          <b>1074 руб. </b>
        </li>
      </ul>
      <button className="decor greenButton">
        Оформить заказ
        <img src="/img/arrow.png" alt="arrow" width={40} height={40} />
      </button>
    </div>
  );
};

export default CartDrawer;
