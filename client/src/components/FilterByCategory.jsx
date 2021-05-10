import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {filterByCategory} from '../redux/actions/catalogueAction'

const FilterByCategory = () => {
const dispatch = useDispatch()
const filter = useSelector(store => store.catalogue.filterByCategory)

function handleChange(e) {
    dispatch(filterByCategory(e.target.value))
    }
    
    return (
        <div>
 <select onChange={e => {handleChange(e)}} class="form-select" aria-label="Default select example">
  <option selected>FILTRAR PRODUCTOS</option>
  {filter.map(e => {
                return (
  <option value={e.name}>{e.name}</option>
  )
    })
  }
</select>
        </div>
    )
}

export default FilterByCategory
