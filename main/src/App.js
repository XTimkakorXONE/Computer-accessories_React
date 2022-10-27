import "macro-css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Drawer from "./components/CartDrawer";
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

export const AppContext = createContext({});

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get(
        "https://63501a6edf22c2af7b6369ec.mockapi.io/cart"
      );

      const favoritesResponse = await axios.get(
        "https://63501a6edf22c2af7b6369ec.mockapi.io/favorites"
      );

      const itemResponse = await axios.get(
        "https://63501a6edf22c2af7b6369ec.mockapi.io/items"
      );

      setIsLoading(false);
      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemResponse.data);
    }
    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    console.log(obj);

    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(
        `https://63501a6edf22c2af7b6369ec.mockapi.io/cart/${obj.id}`
      );
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
    } else {
      axios.post("https://63501a6edf22c2af7b6369ec.mockapi.io/cart", obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onRemoveToCart = (id) => {
    axios.delete(`https://63501a6edf22c2af7b6369ec.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(
          `https://63501a6edf22c2af7b6369ec.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(
          "https://63501a6edf22c2af7b6369ec.mockapi.io/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить");
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        setCartOpened,
        setCartItems,
      }}
    >
      <div className="wrapper">
        {cartOpened && (
          <Drawer
            onClose={() => setCartOpened(false)}
            onRemove={onRemoveToCart}
            items={cartItems}
          />
        )}

        <Header onClickCart={() => setCartOpened(true)} />

        <Routes>
          <Route
            path=""
            element={
              <Home
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                onAddToCart={onAddToCart}
                onAddToFavorite={onAddToFavorite}
                onChangeSearchInput={onChangeSearchInput}
                isLoading={isLoading}
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            path="https://63501a6edf22c2af7b6369ec.mockapi.io/favorites"
            element={
              <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
            }
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
