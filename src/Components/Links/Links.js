import React, { useContext, useEffect, useState } from "react";
import { LinksContext } from "../../contexts/links.context";

const Links = (props) => {
  const [renderItems, setItems] = useState([]);
  const { links } = useContext(LinksContext);

  useEffect(() => {
    let items = [];
    for (let i = 0; i < props.linkNumbers.length; i++) {
      items.push(links[props.linkNumbers[i]]);
    }
    setItems(items);
  }, [links, props.linkNumbers]);

  if (!renderItems.length) return null;

  return (
    <ul>
      {renderItems.map((item) => {
        if (item) {
          return (
            <li key={item.key}>
              <div>
                {item.href && (
                  <a href={item.href}>
                    <span>{item.name}</span>
                    {item.img && props.showImg && <img src={item.img} alt="" />}
                  </a>
                )}
              </div>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default Links;
