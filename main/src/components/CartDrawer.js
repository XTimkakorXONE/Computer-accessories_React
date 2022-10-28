import React, { useState } from "react";
import axios from "axios";

import Info from "./Info";
import { useCart } from "../hooks/useCart";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const CartDrawer = ({ onClose, onRemove, items = [], opened }) => {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [orderId, setOrderId] = useState(null);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://63501a6edf22c2af7b6369ec.mockapi.io/orders/",
        {
          items: cartItems,
        }
      );

      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          "https://63501a6edf22c2af7b6369ec.mockapi.io/cart/" + item.id
        );
        delay(1000);
      }
    } catch (error) {
      console.log("Не удалось создать заказ");
    }
    setIsLoading(false);
  };

  return (
    <div className={` overlay ${opened ? "overlayVisible" : ""}`}>
      <div className="drawer">
        <h2 className="d-flex justify-between ">
          Корзина{" "}
          <img
            className="removeBtn cu-p"
            src="img/cross.svg"
            alt="remove"
            width={20}
            height={35}
            onClick={onClose}
          />
        </h2>

        {items.length > 0 ? (
          <div className="cool d-flex flex-column flex">
            <div className="items">
              {items.map((obj) => (
                <div key={obj.id} className="cartItem">
                  <img
                    className="devices"
                    src={obj.img}
                    alt="device"
                    width={133}
                    height={123}
                  />
                  <div className="mr-20 info">
                    <p>{obj.title}</p>
                    <b>{obj.price}</b>
                  </div>
                  <img
                    className="removeBtn"
                    src="img/cross.svg"
                    alt="remove"
                    width={15}
                    height={15}
                    onClick={() => onRemove(obj.id)}
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice} руб. </b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{totalPrice * 0.05} руб. </b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="decor greenButton"
              >
                Оформить заказ
                <img src="img/arrow.png" alt="arrow" width={40} height={40} />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? "Заказ Оформлен" : "Корзина пустая"}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан на доставку`
                : "Добавьте хотя бы 1 девайс, чтобы оформить заказ"
            }
            image={
              isOrderComplete ? "img/orderComplete.jpg" : "img/emptyCart.jpg"
            }
          />
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
