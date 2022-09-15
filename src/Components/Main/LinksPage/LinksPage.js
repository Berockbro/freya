import style from "./LinksPage.module.css";
import Links from "../../Links/Links";

const LinksPage = (props) => {
  return (
    <div className={style.LinksPage}>
      <h2>{props.name}</h2>
        <Links linkNumbers={props.Links} />
    </div>
  );
};

export default LinksPage;