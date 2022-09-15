import style from './LinksPage.module.css'
import Links from '../../Links/Links'


function LinksPage (props) {
    return(
        <div className={style.LinksPage}>
            <h2>{props.name}</h2>
            <ul>
                <Links
                    linkNumbers={props.Links} 
                />
            </ul>
        </div>
    )
}

export default LinksPage