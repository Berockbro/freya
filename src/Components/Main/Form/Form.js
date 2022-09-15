import ShopCard from '../ShopCards/ShopCard/ShopCard'
import style from "./Form.module.css"


function Form () {
 return (
    <div className={style.Form}>
        <div className="Menu">
            <ul>
                <li key={0}><div>Кристальная мозаика</div></li>
                
                <li key={1}><div>Картины по номерам</div></li>
                
                <li key={2}><div>Пазлы</div></li>
                
                <li key={3}><div>Раскраски</div></li>
                
                <li key={4}><div>Бумажное творчество</div></li>
                
            </ul>
        </div>
        <div className={style.Cards}>
                    <ShopCard 
                    cardNumbers={[0,1,2,3,4,5,6,7,8,9,10,11]}   //массив номеров карточек
                    />
        </div>
    </div>
 )
}

export default Form