import React from "react";
import { Component } from "react";
import AppHeader from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import style from "./App.module.css"
import Main from "./Components/Main/Main";


export  const LinksContext =React.createContext();

const Links = { //информация по ссылкам
  link: [
    
    {key: 0,   name: 'Кристальная мозаика',           href: '/crystalmosaic',   img: "/LinksImg/mozaika.jpg"      },
    {key: 1,   name: 'Картины по номерам',            href: '/paint_by_number', img: "/LinksImg/kartiny.jpg"      },
    {key: 2,   name: 'Пазлы',                         href: '/puzzles',         img: "/LinksImg/pazly.jpg"        },
    {key: 3,   name: 'Раскраски',                     href: '/coloring',        img: "/LinksImg/sketchi2.jpg"     },
    {key: 4,   name: 'Бумажное творчество',           href: '/applications',    img: "/LinksImg/applications.jpg" },
    {key: 5,   name: 'Бесплатные каталоги',           href: '/free-catalogue'                                     },
    {key: 6,   name: 'Доставка и оплата',             href: '/buy'                                                },
    {key: 7,   name: 'Распродажа',                    href: '/total-sale'                                         },
    {key: 8,   name: 'О компании',                    href: '/about'                                              },
    {key: 9,   name: 'Контакты',                      href: '/feedback'                                           },
    {key: 10,  name: 'Каталог товаров',               href: '/catalog/'                                            },
    {key: 11, name: 'На холсте',                     href: '/catalog/form'                                     },
    {key: 12, name: 'На подрамнике',                 href: '/catalog/form'                                     },
    {key: 13, name: 'Мини картины на картоне',       href: '/catalog/form'                                     },
    {key: 14, name: 'Постеры на картоне',            href: '/catalog/form'                                     },
    {key: 15, name: 'Магниты',                       href: '/catalog/form'                                     },
    {key: 16, name: 'Наклейки',                      href: '/catalog/form'                                     },
    {key: 17, name: 'Подвески',                      href: '/catalog/form'                                     },
    {key: 18, name: 'На картоне',                    href: '/catalog/form'                                     },
    {key: 19, name: 'На холсте',                     href: '/catalog/form'                                     },
    {key: 20, name: 'По дереву',                     href: '/catalog/form'                                     },
    {key: 21, name: '2000 деталей',                  href: '/catalog/form'                                     },
    {key: 22, name: '1500 деталей',                  href: '/catalog/form'                                     },
    {key: 23, name: '1000 деталей',                  href: '/catalog/form'                                     },
    {key: 24, name: '500 деталей',                   href: '/catalog/form'                                     },
    {key: 25, name: 'Раскраски карандашами скетч',   href: '/catalog/form'                                     },
    {key: 26, name: 'Раскраски по номерам',          href: '/catalog/form'                                     },
    {key: 27, name: 'С трафаретами',                 href: '/catalog/form'                                     },
    {key: 28, name: 'Аппликации с наклейками',       href: '/catalog/form'                                     },
  ], 
}

const Cards = { //информация по карточкам товаров
  card: [
    {key: 0, category: 'Раскраски на холсте', name: 'Набор для раскрашивания по номерам',   href: '/catalog/sku_89889357084',   img: "/Cards/1_g89214038664.jpg",                                     bottomInfo: "1358 ₽" },
    {key: 1, category: 'Раскраски на холсте', name: 'Набор для раскрашивания по номерам',   href: '/catalog/sku_91732378024',   img: "/Cards/2_g90673863764.jpg",                                     bottomInfo: "1235 ₽" },
    {key: 2, category: 'Раскраски на холсте', name: 'Набор для раскрашивания по номерам',   href: '/catalog/sku_89214051174',   img: "/Cards/3_g90097885574.jpg",                                     bottomInfo: "1245 ₽" },
    {key: 3, category: 'Раскраски на холсте', name: 'Набор для раскрашивания по номерам',   href: '/catalog/sku_90673868054',   img: "/Cards/4_g90675372734.jpg",                                     bottomInfo: "1131 ₽" },
    {key: 4, category: 'Наклейки',            name: 'наклейки "Дино"',                      href: '/catalog/sku_90944361724',   img: "/Cards/5_g85081288304.jpg",     size: 'Размер: 14 x 19.5 см',   bottomInfo: 0, bottomStateInfo: "Скоро в продаже" },
    {key: 5, category: 'Раскраски на холсте', name: 'Набор для раскрашивания по номерам',   href: '/catalog/sku_87380239734',   img: "/Cards/6_g90943841554.jpg",                                     bottomInfo: 0, bottomStateInfo: "Скоро в продаже" },
    {key: 6, category: 'Наклейки',            name: 'наклейки "Единороги"',                 href: 'catalog/sku_81289243364',    img: "/Cards/7_g83130659994.jpg",     size: '14 x 19.5 см',           bottomInfo: 0, bottomStateInfo: "Скоро в продаже" },
    {key: 7, category: 'Раскраски на холсте', name: 'Набор для раскрашивания по номерам',   href: '/catalog/sku_92336504864',   img: "/Cards/8_g87389380174.jpg",                                     bottomInfo: 0, bottomStateInfo: "Скоро в продаже" },
    {key: 8, category: 'Картины на холсте',   name: '"Иероглиф Гармония"',                  href: '/catalog/sku_30448359632',   img: "/Cards/9_d32341583942b.jpg",    size: 'Размер: 28.5 x 29.5 см', bottomInfo: "790 ₽" },
    {key: 9, category: 'Картины на холсте',   name: '"Цветущие лотосы"',                    href: '/catalog/sku_31855215702',   img: "/Cards/10_d32341450252b.jpg",   size: 'Размер: 32.6 x 31.7 см', bottomInfo: "590 ₽" },
    {key: 10, category: 'Картины на холсте',  name: '"Розовый бутон"',                      href: '/catalog/sku_59039639792',   img: "/Cards/11_d59039639792l.jpg",   size: 'Размер: 42 x 42 см',     bottomInfo: "1590 ₽" },
    {key: 11, category: 'Картины на холсте',  name: '"Семейство на прогулке"',              href: '/catalog/sku_32341450252',   img: "/Cards/12_d31855215702b.jpg",   size: 'Размер: 25.5 x 52 см',   bottomInfo: "790 ₽" },
    

  ]
}
class App extends Component {
  
  render() {
    return (
      <div className={style.App}>
        <LinksContext.Provider value={{Links,Cards}}>
          <AppHeader/>
          <Main />
          <Footer />
        </LinksContext.Provider>
       
      </div>
    );
  }
}

export default App;
