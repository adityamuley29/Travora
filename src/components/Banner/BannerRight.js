import React from 'react'

function BannerRight() {
    const img1 =
    "https://images.unsplash.com/photo-1563777389189-5e3564e5961c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
    const img2 =
    "https://images.unsplash.com/photo-1563777389189-5e3564e5961c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
    const img3 =
    "https://images.unsplash.com/photo-1563777389189-5e3564e5961c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
    const img4 =
    "https://images.unsplash.com/photo-1563777389189-5e3564e5961c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
    
    return (
        <div className='bannerRightBox'>
            <div className='bannerRightLinks'>
                <a className='rightLink' href='/'>All</a>
                <a className='rightLink' href='/' >New Gallery</a>
            </div>
            <div className='rightImagesBox'>
                <div className='imageBox'><img className='image' src={img1}/></div>
                <div className='imageBox'><img className='image' src={img2}/></div>
                <div className='imageBox'><img className='image' src={img3}/></div>
                <div className='imageBox'><img className='image' src={img4}/></div>
                 
            </div>
            
        </div>
    )
}

export default BannerRight
