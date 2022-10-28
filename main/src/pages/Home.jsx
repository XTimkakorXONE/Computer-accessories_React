import React from "react";

import Card from "../components/Card";

const Home = ({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  isLoading,
}) => {
  const renderItems = () => {
    const filltredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
      isLoading
        ? [...Array(8).fill(<Card loading={isLoading} />)]
        : filltredItems
    ).map((item, id) => (
      <Card
        key={id}
        id={id}
        parentId={item.id}
        loading={isLoading}
        title={item.title}
        price={item.price}
        img={item.img}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
      />
    ));
  };

  return (
    <div className="content">
      <div className="header_search">
        <h1>
          {searchValue ? `Поиск по запросу: ${searchValue} ` : "All devices"}
        </h1>
        <div className="search-block">
          <img src="img/search.png" alt="search" width={20} height={18} />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear removeBtn cu-p"
              src="img/crossX.png"
              alt="clear"
              width={20}
              height={35}
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div className="d-flex flex-wrap sneakers">{renderItems()}</div>
    </div>
  );
};

export default Home;
