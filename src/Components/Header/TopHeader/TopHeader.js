
import style from './TopHeader.module.css'
import SearchBar from './SearchBar/SearchBar'
import ShoppingCart from './ShoppingCart/ShoppingCart'
import Feedback from '../../../img/Feedback.png'
import ShoppingBasket from '../../../img/ShoppingBasket.png'

function TopHeader (props) {
    return(
        <div className={style.TopHeader}>
            
            <a href='/'><img src='https://freya-crystal.ru/images/all/logo_ru_semeinoe_tvorchestvo.svg' className={style.FreyaLogo}></img></a>
            <SearchBar />
            <ShoppingCart src={Feedback} alt='Обратная связь' />
            <ShoppingCart src={ShoppingBasket} alt='Корзина' Count='true'/>
        </div>
    )
}


export default TopHeader