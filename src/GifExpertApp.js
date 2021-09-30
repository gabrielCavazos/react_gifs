import React, { useState } from 'react'
import { AddCategory } from './componets/AddCategory'
import PropTypes from 'prop-types'
import { GifGrid } from './componets/GifGrid'

export const GifExpertApp = () => {

    
    const [categories, setCategories] = useState(['One Punch'])
    //const handleAdd = () => {
    //    setCategories(cats => [...categories, 'Hunter Hunter'])
    //}

    return (
        <>
            <h2>GifExpertApp</h2> 
            <hr/>
            <AddCategory setCategories = {setCategories}/>
            <ol>
                {
                    categories.map((category) => {
                        return <GifGrid category={category} key={category+'asdf'}></GifGrid>
                    })
                }
            </ol>
        </>
    )
}

AddCategory.PropTypes = {
    setCategories: PropTypes.func.isRequired
}