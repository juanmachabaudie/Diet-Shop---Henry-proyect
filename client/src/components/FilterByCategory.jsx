import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {filterByCategory} from '../redux/actions/catalogueAction'
import ProductCard from './ProductCard.jsx';

const FilterByCategory = () => {
const dispatch = useDispatch()
const filter = useSelector(store => store.catalogue.filterByCategory)

function handleChange(e) {
    dispatch(filterByCategory(e.target.value))
    }
    
    return (
          <div>
           {filter?.map(e => 
           <ProductCard 
           key={e.uuid}
           id ={e.uuid}
           name ={e.name}
           description ={e.description} 
           image ={e.image} 
           price ={e.price} 
           stock ={e.stock} 
           />
           )}
         </div>
    )
}

export default FilterByCategory
