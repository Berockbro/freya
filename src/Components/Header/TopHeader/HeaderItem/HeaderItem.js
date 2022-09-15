import React from "react";
import style from "./HeaderItem.module.css";

function HeaderItem(props) {
  return (
    <div className={style.container}>
      {props.count && <span className={style.count}>0</span>}
      <img src={props.src} alt={props.alt} className={style.topIcon}></img>
      <span>{props.alt}</span>
    </div>
  );
}

export default HeaderItem;
