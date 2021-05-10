import React,{useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import ProductCard from './ProductCard'
import {searchProducts} from '../redux/actions/catalogueAction'
import {useParams} from 'react-router'

const SearchProducts = () => {

    const search = useSelector(store=> store.catalogue.searchProducts)
    const dispatch = useDispatch()  
    const{name} = useParams()

  useEffect(() => {
    dispatch(searchProducts(name))
    
    },[dispatch, name])

  return (
    <div>
           {search?.map(e => 
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

export default SearchProducts
