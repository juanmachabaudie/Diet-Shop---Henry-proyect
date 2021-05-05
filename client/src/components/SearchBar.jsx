import React,{useState} from 'react'

export default function SearchBar(){

const [product, setProduct] = useState('')

function handleChange(e) {
    setProduct(e.target.value)
}
    return (
    <div>
        <form >
            <input 
            type='text'
            placeholder= 'search product'
            value={product}
            onChange={(e) =>handleChange(e)}
            /> 
        </form>
    </div>
    
    )
}