import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getCategories, deleteCategory} from "../redux/actions/categoryActions";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}));

const CategoryCard = ({uuid, name, key}) => {

    const categorias = useSelector((store) => store.categories.categories);

    const [a, setA] = useState([]);

  useEffect(() => { 
    setA(categorias);
  },[categorias]);

    const classes = useStyles();
    const dispatch = useDispatch();

    function onClose(){
        dispatch(deleteCategory(uuid));
        dispatch(getCategories());
    }

    return (
        <div>
            <div className={classes.offset}/>
            <button onClick={onClose}> X</button>
                <p>{uuid}</p>
                <p>{name}</p>
        </div>
    )
}

export default CategoryCard
