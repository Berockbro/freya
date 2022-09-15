import style from "./ShopCard.module.css";
import React, { useContext, useState, useEffect } from "react";
import BottomInfo from "./BottomInfo/BottomInfo";
import { CardsContext } from "../../../../contexts/cards.context";

const ShopCard = (props) => {
  //компонент создания массива карточек
  const [renderItems, setItems] = useState([]);
  const { cards } = useContext(CardsContext);

  useEffect(() => {
    let items = [];
    for (let i = 0; i < props.cardNumbers.length; i++) {
      items.push(cards[props.cardNumbers[i]]);
    }
    setItems(items);
  }, [cards, props.cardNumbers]);

  if (!renderItems.length) return null;

  return renderItems.map((item) => {
    if (item)
      return (
        <div className={style.ShopCard} key={'card-'+item.key}>
          <div className={style.ShopCardInfo}>
            <a href={item.href}>
              <img src={item.img} alt=""></img>
            </a>
          </div>
          <div className={style.ShopCardInfo}>
            <span id={style.Category}>{item.category}</span>
            <a href={item.href}>
              <h3 id={style.Type1}>{item.name}</h3>
            </a>
            <span id={style.size}>{item.size}</span>
            <BottomInfo
              bottomInfo={item.bottomInfo}
              bottomStateInfo={item.bottomStateInfo}
            />
          </div>
        </div>
      );
  });
};

export default ShopCard;
