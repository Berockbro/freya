import { createContext, useState, useEffect } from "react";
import { cardsData } from "./cards.demo-data";

export const CardsContext = createContext({
  links: [],
});

export const CardsProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const value = { cards };

  useEffect(() => {
    setCards(cardsData);
  }, []);

  return (
    <CardsContext.Provider value={value}>{children}</CardsContext.Provider>
  );
};
