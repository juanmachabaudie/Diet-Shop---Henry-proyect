import React, {useEffect, useContext, useState} from 'react';
import {Menu} from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import {FilterList} from '@material-ui/icons';
import Select from 'react-select';
import {getCategories} from '../../redux/actions/index';
import {useDispatch, useSelector} from 'react-redux';
import useStyles, {optionsStyles} from './Style';
import ProductsContext from '../../context/Products/ProductsContext';
import { useLocation } from 'react-router';

const Filter = () => {
    const categories = useSelector(state => state.categories)
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes  = useStyles();   
    const location = useLocation();
    const searchResults = useSelector(state => state.products.searchResults);
    const products = useSelector(state => state.products.all)
    const {setFiltered} = useContext(ProductsContext) 
    const [height, setHeight] = useState("");

    useEffect(() => {
        dispatch(getCategories()) 
    }, [dispatch])

    function handleChange(e) {
        if (e.length){
            var aux = (location.pathname==="/products/search" ? searchResults : products).map(e => {return{...e, categories: e.categories.map(e =>{console.log(e); return e.id})}})
        return setFiltered(aux.filter(product => {
            for (var categories of e){
                if (product.categories.includes(categories.value)) return true
            }
            return false
        }))
        }
        setFiltered("");
    }

    var options = categories.map(e => {
        return (
            {value: e.id, label: e.name}
        )
    })

  const handleClick = (event) => {
    console.log (event.currentTarget)
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{paddingTop: "20px"}}>
        <FilterList/>
      </IconButton>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{style: {backgroundColor: "transparent", paddingTop: "40px", boxShadow: "none", minHeight: height}}}
      >
        <div style={{minWidth: "400px"}}>
            <Select onFocus={()=>setHeight("80vh")} onBlur={()=>{handleClose(); setHeight("")}} styles={optionsStyles} isMulti options={options} onChange={e => handleChange(e)} placeholder="Seleccionar categorias" />
        </div>
      </Menu>
    </div>
  );
}

export default Filter;