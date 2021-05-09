import React from 'react'
import './product.css'
import './productCard.css'

export default function ProductCard({name, description,image,price, stock}) {
  
    return (
        <div className="card" id='product'>
            <img class="card-img-top" class='img' src={image} alt="Card image cap"/>
        <div class="card-body">
          <p className="card-text" class='n'>{name}</p>
          <p className="card-text" class='n'>{description}</p>
          <p className="card-text"class='n'>{price}</p>
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