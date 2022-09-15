import style from "./SearchBar.module.css";
import Loupe from "../../../../img/Loupe.png";

function SearchBar() {
  return (
    <form className={style.SearchBar}>
      <input type="text" placeholder="Введите артикул или название"></input>
      <button>
        <img src={Loupe}></img>
      </button>
    </form>
  );
}

export default SearchBar;
