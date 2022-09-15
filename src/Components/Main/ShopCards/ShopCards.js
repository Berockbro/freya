import React from "react";
import ShopCard from "./ShopCard/ShopCard";
import style from "./ShopCards.module.css";

const ShopCards = (props) => {
  return (
    <>
      <div className={style.ShopCardTitelContainer}>
        <h2>{props.name}</h2>
      </div>
      <div className={style.ShopCardContainer}>
        <ShopCard cardNumbers={props.cardNumbers} />
      </div>
    </>
  );
};

export default ShopCards;
