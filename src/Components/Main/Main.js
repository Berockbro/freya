
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import LinksPage from './LinksPage/LinksPage'
import Form from './Form/Form'
import style from './Main.module.css'
import Form2 from './Form2/From2'
function Main (props) {
   
    
    return(
        <div className={style.Main}>
            <Routes>
                <Route path="/"  element={<HomePage/>}/>
                <Route path="/catalog/"  element={<LinksPage Links={[0,1,2,3,4]} name="Каталог"/>}/>
                <Route path="/crystalmosaic/"  element={<LinksPage Links={[11,12,13,14,15,16,17]} name="Кристальная мозаика"/>}/>
                <Route path="/paint_by_number/"  element={<LinksPage Links={[18,19,20]} name="Картины по номерам"/>}/>
                <Route path="/puzzles/"  element={<LinksPage Links={[21,22,23,24]} name="Пазлы"/>}/>
                <Route path="/coloring/"  element={<LinksPage Links={[25,26,27]} name="Раскраски"/>}/>
                <Route path="/applications/"  element={<LinksPage Links={[28]} name="Бумажное творчество"/>}/>
                <Route path="/catalog/form/"  element={<Form />}/>
                <Route path="/total-sale"  element={<Form2 />}/>
                <Route path="/free-catalogue"  element={<Form2 />}/>
                <Route path="/buy"  element={<Form2 />}/>
                <Route path="/about"  element={<Form2 />}/>
                <Route path="/feedback"  element={<Form2 />}/>
            </Routes>
        </div>
    )
}

export default Main