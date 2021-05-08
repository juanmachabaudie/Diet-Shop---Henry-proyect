import {useState} from 'react'
import {Link} from 'react-router-dom'

export default function SearchBar(){

const [product, setProduct] = useState('')

function handleChange(e) {
    setProduct(e.target.value)
}

function handleSubmit(e){
    e.preventDefault()
    setProduct('');
}
    return (
        <div>
        <form onSubmit={handleSubmit}>
          <nav>
                 <input
                  className="form-control mr-sm-2"
                  aria-label="Search"
                   type="text"
                   placeholder='Search'
                   autoComplete="on"
                   value={product}
                  onChange={(event) => handleChange(event)}
                 />
                 <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                     <Link to={'/' + product}>
                     Search
                     </Link>
                     
                </button>
               </nav>
         </form>
     </div>
    )
}