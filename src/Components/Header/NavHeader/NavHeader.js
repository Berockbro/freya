import React from 'react'
import style from './NavHeader.module.css'
import Links from '../../Links/Links'

function NavHeader ()   {
    return (
        <div className={style.NavHeader}>
            <nav >
                <ul>
                    <Links 
                    linkNumbers={[10,7,5,6,8,9]}
                    />
                </ul>
            </nav>
        </div>
    )
}

export default NavHeader