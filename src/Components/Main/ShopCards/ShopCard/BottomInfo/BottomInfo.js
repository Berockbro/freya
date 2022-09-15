import style from './BottomInfo.module.css'

function BottomInfo(props) {
    
    if (props.bottomInfo === 0){    //при bottomInfo = 0 в нижней части карточки указывается состояние товара
        return (                    //а при других значениях в нижней части находится цена + кнопка "В корзину"
            <span id={style.bottomStateInfo}>{props.bottomStateInfo}</span>
        )
    }
    else {
        return(
            <div className={style.BottomInfo}>
                <span id={style.bottomInfoSpan}>{props.bottomInfo} </span>
                <button><span id={style.buttonSpan}>В корзину</span></button>
            </div>
        )
    }
    
}

export default BottomInfo