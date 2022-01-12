import React from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from './hooks/useFetchGifs';

export const GifGrid = ( { category } ) => {

    const { data: gifs, loading } = useFetchGifs( category );
    
    return (
        <Fragment>
            <h3 className='animate__animated animate__fadeIn'> { category } </h3>            
            { loading && <p className='animate__animated animate__flash'>Loading</p> }
            
            <div className = 'card-grid'>
                {
                    gifs.map( img => (
                        <GifGridItem
                            key = { img.id }
                            {...img}
                        />
                    ))                    
                }
            </div>
        </Fragment>        
    )
}
