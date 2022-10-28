import axios from "axios";
import React, { useState } from "react";

import { useEffect } from "react";

import Card from "../components/Card";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://63501a6edf22c2af7b6369ec.mockapi.io/orders"
        );
        setOrders(data.map((obj) => obj.items).flat());

        setIsLoading(false);
      } catch (error) {
        alert("Ошибка при запросе заказов");
      }
    })();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1> My Orders</h1>
      </div>
      <div className="d-flex flex-wrap">
        {isLoading
          ? [Array(8)]
          : orders.map((item, id) => (
              <Card
                key={id}
                id={id}
                price={item.price + " руб."}
                loading={isLoading}
                img={item.img}
              />
            ))}
      </div>
    </div>
  );
}

export default Orders;
