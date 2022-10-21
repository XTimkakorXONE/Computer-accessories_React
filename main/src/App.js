import "macro-css";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/CartDrawer";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch("https://63501a6edf22c2af7b6369ec.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => setItems(json));
  }, []);

  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer onClose={() => setCartOpened(false)} items={cartItems} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="header_search">
          <h1>Все Аксессуары</h1>
          <div className="search-block">
            <img src="/img/search.png" alt="search" width={20} height={18} />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap sneakers">
          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              img={item.img}
              onFavorite={() => console.log("Добавли в закладки")}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
