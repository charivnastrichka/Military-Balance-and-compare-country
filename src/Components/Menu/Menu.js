import React from "react";
import "./Menu.css"
// import { Link } from "react-router-dom";
const Menu=({header,items,active,setActive})=>{
    return(
        <div className={active?"menu active":"menu"} onClick={()=>setActive(false)}>
            <div className="blur"/>
            <div className="menu-content" onClick={e=>e.stopPropagation()}>
                <div className="menu-header">{header}</div>
                <ul>
                    {items.map(item=>
                        <li >
                            <a href={item.href}>{item.value}</a>
                        </li>
                    )}
                </ul>
            </div>


        </div>
    )
}
export default Menu;