import React, { useState } from "react";
import ContentLoader from "react-content-loader";
import { AppContext } from "../App";
const Card = ({
  id,
  title,
  img,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false,
}) => {
  const { isItemAdded } = React.useContext(AppContext);

  const [isFavorite, setIsFavorite] = useState(favorited);
  const obj = { id, parentId: id, title, img, price };

  const onCLickPlus = () => {
    onPlus(obj);
  };

  const onClickFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card">
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f1f1f1"
          foregroundColor="#ecebeb"
        >
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className="favorite" onClick={onClickFavorite}>
            {onFavorite && (
              <img
                src={isFavorite ? "img/heartLiked.svg" : "img/heart.svg"}
                width={20}
                alt="heart"
              />
            )}
          </div>
          <img src={img} alt="img_device" width="100%" height={135} />
          <h5>{title}</h5>
          <div className="cardBottom">
            <div className="cost">
              <span>Цена:</span>
              <br></br>
              <b>{price}</b>
            </div>
            <button className="button">
              {onPlus && (
                <img
                  width={23}
                  height={23}
                  onClick={onCLickPlus}
                  src={isItemAdded(id) ? "img/checkedPlus.svg" : "img/add.png"}
                  alt="plus"
                />
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
