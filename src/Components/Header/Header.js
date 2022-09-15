import style from './Header.module.css'
import TopHeader from './TopHeader/TopHeader'
import NavHeader from './NavHeader/NavHeader'

function AppHeader() {
   return(
        <header className={style.Header}>
            <div className={style.container}><TopHeader/></div>
            <NavHeader/>
        </header>
   )
}

export default AppHeader