import { createContext, useState, useEffect } from "react";
import { linksData } from "./links.demo-data";

export const LinksContext = createContext({
  links: [],
});

export const LinksProvider = ({ children }) => {
  const [links, setLinks] = useState([]);
  const value = { links };

  useEffect(() => {
    setLinks(linksData);
  }, []);

  return (
    <LinksContext.Provider value={value}>{children}</LinksContext.Provider>
  );
};
