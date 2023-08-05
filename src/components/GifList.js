import React from 'react'

const renderGifs = gifs.map(gif => {
    return <li>
             <img src={gif.images.original.url} alt="image" />
           </li>
  }) 

function GifList() {
  return (
    <div>{renderGifs}</div>
  )
}

export default GifList