import style from "./Footer.module.css";
import Links from "../Links/Links";
import tgImage from "../../img/tg.png";
import vkImage from "../../img/vk.png";

const Footer = () => {
  return (
    <footer className={style.Footer}>
      <div className={style.FooterContainer}>
        <div className={style.links}>
          <h3>Каталоги товаров</h3>
          <h3>Меню</h3>
          <Links linkNumbers={[0, 1, 2, 3, 4, 5]} />
          <Links linkNumbers={[6, 7, 8, 9]} />
        </div>
        <div className={style.LogoContainer}>
          <img
            alt="logo"
            src="https://freya-crystal.ru/images/all/logo_ru_semeinoe_tvorchestvo.svg"
            className={style.FreyaLogo}
          ></img>
        </div>
        <div className={style.SocialNetworks}>
          <span>Мы в социальных сетях</span>
          <div className={style.NetworksContainer}>
            <img src={vkImage} alt="vk" className={style.icons}></img>
            <img src={tgImage} alt="tg" className={style.icons}></img>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
