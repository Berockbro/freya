import style from "./TopHeader.module.css";
import SearchBar from "./SearchBar/SearchBar";
import HeaderItem from "./HeaderItem/HeaderItem";
import Feedback from "../../../img/Feedback.png";
import ShoppingBasket from "../../../img/ShoppingBasket.png";

function TopHeader() {
  return (
    <div className={style.container}>
      <div className={style.TopHeader}>
        <a href="/">
          <img
            src="https://freya-crystal.ru/images/all/logo_ru_semeinoe_tvorchestvo.svg"
            className={style.FreyaLogo}
          ></img>
        </a>
        <SearchBar />
        <HeaderItem src={Feedback} alt="Обратная связь" />
        <HeaderItem src={ShoppingBasket} alt="Корзина" count="true" />
      </div>
    </div>
  );
}

export default TopHeader;
