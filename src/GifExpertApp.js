import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // setCategories( ['New Cat', ...categories]);
    //     setCategories( cats => [ ...cats, 'New Cat' ]);
    // }

    return (
            <>
                <h2>GifExpertApp</h2>
                <AddCategory setCategories = { setCategories }/>
                <hr></hr>                
                {/* <button onClick = { handleAdd }> Add </button> */}
                <ol>                
                    {
                        categories.map(( category, idx ) => (
                            <GifGrid 
                                key = { idx + 1 }
                                category = { category } 
                            />
                            // return <li key={ idx + 1 }> { category } </li>;
                        ))
                    }
                </ol>
            </>
    );
}
