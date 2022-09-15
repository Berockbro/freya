import React from "react";
import AppHeader from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import style from "./App.module.css";
import Main from "./Components/Main/Main";
import { LinksProvider } from "./contexts/links.context";
import { CardsProvider } from "./contexts/cards.context";

const App = () => {
  return (
    <div className={style.App}>
      <LinksProvider>
        <CardsProvider>
          <AppHeader />
          <Main />
          <Footer />
        </CardsProvider>
      </LinksProvider>
    </div>
  );
};

export default App;
