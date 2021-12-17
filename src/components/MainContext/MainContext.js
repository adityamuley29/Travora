import React from 'react'
import MainContextLeft from './MainContextLeft'
import MainContextRight from './MainContextRight'
import "./MainContext.css"


function MainContext() {
    return (
        <div className='MainContext'>
            <MainContextLeft/>
            <MainContextRight/>
            
        </div>
    )
}

export default MainContext
