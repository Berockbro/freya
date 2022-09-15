import style from "./ShopCard.module.css"
import { LinksContext } from "../../../../App";
import React from "react";
import BottomInfo from "./BottomInfo/BottomInfo";
function ShopCard (props) {                             //компонент создания массива карточек
    
    const Items2 = []
    const {Cards} = React.useContext(LinksContext)
  
                        
        const CardItems = Cards.card.map((number)=>     
        <div className={style.ShopCard}>
            <div className={style.ShopCardInfo}>
                <a href={number.href}>
                    <img src={number.img}alt=""></img>
                </a>
            </div>
            <div className={style.ShopCardInfo}>
                <span id={style.Category}>{number.category}</span>
                <a href={number.href}>
                    <h3 id={style.Type1}>{number.name}</h3>
                </a>
                <span id={style.size}>{number.size}</span>  
                <BottomInfo bottomInfo={number.bottomInfo} bottomStateInfo={number.bottomStateInfo}/>
            </div>
        </div>
        )

         for (let i=0; i<props.cardNumbers.length; i++) {           //перебор добавления в пустой массив нужных карточек
             Items2.push(CardItems[props.cardNumbers[i]])
           
            } 
    
   
    
    
    return (Items2)
    

}

export default ShopCard