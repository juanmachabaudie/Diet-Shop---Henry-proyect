import { IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchResults } from '../../redux/actions/index';
import { useHistory } from 'react-router-dom';
import Filter from '../filter/Filter';
import useStyles from '../searchBar/Styles';
import Autocomplete from '../autoComplete/AutoComplete'

const SearchBar = ({listen}) => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const products = useSelector(store => store.products.all)

    const onSubmit = async function (e) {
        e.preventDefault();

        if (!input) {
            return history.push("/products");
        }
        await dispatch(setSearchResults(input));
        history.push("/products/search");
        setInput("")
    };

    return (
        <>
            <form autoComplete="off" onSubmit={(e) => onSubmit(e)} className={classes.SearchBar}>
                <Filter />
                <Autocomplete name={input} handleChange={setInput} products={products} listen={listen}/>
                <IconButton onClick={onSubmit} style={{ paddingTop: "20px" }}><Search /></IconButton>
            </form>
        </>
    )
}

export default SearchBar