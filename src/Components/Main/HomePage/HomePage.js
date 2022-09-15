import Links from "../../Links/Links";
import style from "./HomePage.module.css";
import ShopCards from "../ShopCards/ShopCards";

const HomePage = () => {
  //Компонент главной страницы

  return (
    <>
      <div className={style.Categories}>
        <Links
          linkNumbers={[0, 1, 2, 3, 4]} //массив номеров ссылок
          showImg={true} //Включение картинок, при img=1 картинки включены в остальных случаях нет
        />
      </div>

      <div>
        <ShopCards
          cardNumbers={[0, 1, 2, 3]} //массив номеров карточек
          name="Новинки" //заголовок
        />
        <ShopCards cardNumbers={[4, 5, 6, 7]} name="Скоро в продаже" />
        <ShopCards cardNumbers={[8, 9, 10, 11]} name="Распродажа" />
      </div>
    </>
  );
}

export default HomePage;
