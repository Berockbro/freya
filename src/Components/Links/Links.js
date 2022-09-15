
import { LinksContext } from "../../App";
import React from "react";


function Links(props) {
   
    const Items2 = []
    const {Links} = React.useContext(LinksContext)
    
    if (props.img === 1) {
        const ListItems = Links.link.map((number)=> 
        <li key={number.key}> 
            <div>
                <a href={number.href}>
                    <span>{number.name}</span>
                    <img src={number.img} alt=""/>
                </a>
            </div>
         </li>)
     
         for (let i=0; i<props.linkNumbers.length; i++) { 
             Items2.push(ListItems[props.linkNumbers[i]])
           
            } 
    }
    else {
        const ListItems = Links.link.map((number)=> 
        <li key={number.key}> 
            <div>
                <a href={number.href}>
                    <span >{number.name}</span>
                    
                </a>
             </div>
         </li>)
     
         for (let i=0; i<props.linkNumbers.length; i++) { 
             Items2.push(ListItems[props.linkNumbers[i]])
         } 
    }
    
    return (Items2)
    
}



export default Links