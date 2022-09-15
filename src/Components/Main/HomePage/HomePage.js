import Links from '../../Links/Links'
import style from './HomePage.module.css'
import ShopCards from '../ShopCards/ShopCards'

function HomePage () {                             //Компонент главной страницы
   
  
    
    return(
       <div>
        
            <div className={style.Categories}>
                <ul>
                <Links
                        linkNumbers={[0,1,2,3,4]} //массив номеров ссылок
                        img={1}                   //Включение картинок, при img=1 картинки включены в остальных случаях нет
                    />
                </ul>
            </div>
            
            <div>
                <ShopCards 
                    cardNumbers={[0,1,2,3]}   //массив номеров карточек
                    name="Новинки"            //заголовок
                    />
                <ShopCards 
                    cardNumbers={[4,5,6,7]}   
                    name="Скоро в продаже"
                    />
                <ShopCards 
                    cardNumbers={[8,9,10,11]} 
                    name="Распродажа"
                    />
            </div>
       </div> 
    )
}

export default HomePage