import style from "./Header.module.css";
import TopHeader from "./TopHeader/TopHeader";
import NavHeader from "./NavHeader/NavHeader";

function AppHeader() {
  return (
    <header className={style.Header}>
      <TopHeader />
      <NavHeader />
    </header>
  );
}

export default AppHeader;
