import React,{useState} from 'react'

export default function SearchBar(){

const [product, setProduct] = useState('')

function handleChange(e) {
    setProduct(e.target.value)
}

function handleSubmit(e){
    e.preventDefault()
}
    return (
        <div>

        <form onSubmit={handleSubmit}>
          <nav>
               
                 <input
                   type="text"
                   placeholder='Search'
                   autoComplete="on"
                   value={product}
                  onChange={(event) => handleChange(event)}
                 />
                 <button className='boton' type="submit">send</button>
               </nav>
         </form>
     </div>
    
    )
}