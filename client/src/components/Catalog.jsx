import React from 'react'
import {useSelector} from 'react-redux'
import ProductCard from './ProductCard'
import {Link} from 'react-router-dom'


export default function Catalog() {

const products = useSelector(store => store.catalogue.catalogue)

const product = products.map(e => (
    
    <Link className='name' to={'/detail/' + e.name} >
{ products ? 
<div> 
    <div> 
         <div>name: {e.name}</div>
        
        
    </div>
</div> 
: <h1> LOADING ... </h1>
}
</Link>
))
//aca tengo que iterar, y mandale a product card por props la data y desde product card 
// al hacer click al nombre, mandar el /detail para ver en detalle mas la informacion
// del producto

    return (
        <div>
            <ul>
                {product} 
            </ul>
           
        </div>
    )
}