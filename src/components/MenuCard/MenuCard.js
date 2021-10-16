import React, { useState } from 'react'
import Menu from '../Menu/Menu'
import Menus from '../MenuApi'
import './MenuCard.css'

const MenuCard = () => {
    const [menus, setMenus] = useState(Menus)
    const filterItem = (category) => {
        const updateList = Menus.filter((curEle)=>{
            return curEle.category === category
        })

        setMenus(updateList);
    }


    return (
        <div>
            <div className="container card-des">
                <nav className="navbar all-button">
                    <div className="btn-group">
                        <button className="btn-group__item" onClick={()=>filterItem('breakfast')}>Breakfast</button>
                        <button className="btn-group__item" onClick={()=>filterItem('lunch')}>Lunch</button>
                        <button className="btn-group__item" onClick={()=>filterItem('dinner')}>Dinner</button>
                        <button className="btn-group__item" onClick={()=>setMenus(Menus)}>All</button>
                    </div>
                </nav>
                <div className="content-forword mt-5">
                    <div className="row">
                        <div className="col-md-12 col-12">
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                {
                                    menus.map((curEle)=><Menu key={curEle.id} curEle={curEle}></Menu>)
                                }
                            </div>
                        </div> 

                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default MenuCard
