import React, { useState } from 'react'
import { AddCategory } from './componets/AddCategory'
import PropTypes from 'prop-types'
import { GifGrid } from './componets/GifGrid'

export const GifExpertApp = () => {

    
    const [categories, setCategories] = useState(['Kimetsu'])
    //const handleAdd = () => {
    //    setCategories(cats => [...categories, 'Hunter Hunter'])
    //}

    return (
        <>
            <h2>Gif Expert App</h2> 
            <hr/>
            <AddCategory setCategories = {setCategories}/>
            <ol>
                {
                    categories.map((category) => {
                        return <GifGrid category={category} key={category}></GifGrid>
                    })
                }
            </ol>
        </>
    )
}

AddCategory.PropTypes = {
    setCategories: PropTypes.func.isRequired
}