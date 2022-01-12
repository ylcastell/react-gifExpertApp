import React from 'react'

export const GifGridItem = ( { id, title, url } ) => {
    
    // console.log( { id, title, url } );

    return (
        <div className = 'card animate__animated animate__fadeIn animate__delay-3s'>
            <img src = { url } alt = { title }  />
            <p>  { title } </p>
        </div>
    )
}
