
import { LinksContext } from "../../App";
import React from "react";


function Cards(props) {
   
    const Items2 = []
    const {Cards} = React.useContext(LinksContext)
    
    if (props.bottomInfo=== 0) {
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
                    <span id={style.Type1}>{number.name}</span>
                </a>
                <span id={style.size}>{number.size}"</span>
                <div>
                    <span id={style.BottomStateInfo}>{props.bottomStateInfo}</span>
                    
                </div>
            </div>
        </div>
        )

         for (let i=0; i<props.cardNumbers.length; i++) { 
             Items2.push(CardItems[props.cardNumbers[i]])
           
            } 
    }
    else {
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
                    <span id={style.Type1}>{number.name}</span>
                </a>
                <span id={style.size}>{number.size}"</span>
                <div>
                    <span id={style.BottomInfo}>{props.bottomInfo}</span>
                    <button>В корзиу</button>
                </div>
            </div>
        </div>
        )
        
        for (let i=0; i<props.cardNumbers.length; i++) { 
            Items2.push(CardItems[props.cardNumbers[i]])
        
        } 
    }
    
    return (Items2)
    
}



export default Cards