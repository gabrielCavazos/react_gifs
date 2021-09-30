import React from 'react'

export const GifGridItem = ({image}) => {
    const {id, title, url} = image;
    return (
        <div className="card animate__animated animate__bounce animate__fadeIn">
            <p>{title}</p>
            <img src={url} alt={title}></img>
        </div>
    )
}
