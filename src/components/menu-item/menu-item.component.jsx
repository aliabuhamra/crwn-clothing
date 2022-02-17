import React from "react";
import './menu-item.style.scss';

export default function MenuItem(props){
    const {title , imageUrl , size} = props;
    return(
        <div className={`${size} menu-item`}>
            <div 
            className='background-image'
            style={{  backgroundImage: `url(${imageUrl})` } 
        }/>
                <div className="content">
                    {/* toUpperCase built in function in javascript*/}
                    <h1 className="title">{title.toUpperCase()}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
        </div>
    )
}