import React, { useState } from 'react'
import style from './ShoppingCart.module.css'


function ShoppingCart (props) {
    
    if (props.Count ) {
        return(
            <div className={style.ShoppingCart} >
                <span className={style.Count} >0</span>
                <img src={props.src} alt={props.alt} className={style.TopIcon}></img>
                <span>{props.alt}</span>
            </div>
        )
    }
    else
    {
        return(
            <div className={style.ShoppingCart}>
                <img src={props.src} alt={props.alt} className={style.TopIcon}></img>
                <span>{props.alt}</span>
            </div>
        ) 
    }
}

export default ShoppingCart


