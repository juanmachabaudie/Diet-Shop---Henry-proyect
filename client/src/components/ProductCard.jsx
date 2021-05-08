import React from 'react'
import './product.css'


export default function ProductCard({name, description,image,price, stock}) {
  
    return (
  <div className='pokeCard'>
        <div className='data'>
        <div>{image}</div>
        <div>{name}</div>
        <div>{description}</div>
        <div>{price}</div>
        <div>{stock}</div>
        </div>
    </div> 
      
    )
}

//{image,name, description,price,stock}
{/* <div className='pokeCard'>
        <div className='data'>
        <div>{image}</div>
        <div>{name}</div>
        <div>{description}</div>
        <div>{price}</div>
        <div>{stock}</div>
        </div>
    </div> */}