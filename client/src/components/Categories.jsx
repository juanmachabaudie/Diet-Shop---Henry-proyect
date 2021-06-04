import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { makeStyles, ListItemText, ListItemIcon, ListItem, List, Button, Drawer} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { getCategories, deleteCategory } from "../redux/actions/categoryActions";
import { filterByCategory } from '../redux/actions/productActions.js';

const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
  }))
  
  export default function Categories() {
    const history = useHistory()
    const dispatch = useDispatch();
    
    const categories = useSelector((store) => store.categories.categories);
    const change = useSelector(store => store.categories.change)

    useEffect(()=>{
      dispatch(getCategories())
    }, [dispatch, change])

    const classes = useStyles();

  const [state, setState] = useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
 
  function icono (e){
    dispatch(deleteCategory(e));
    history.push('/products')
  }

  function texto (e){
    dispatch(filterByCategory(e));
  }

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {categories?.map((each) => (
          <ListItem >
            <ListItemIcon button key={each.uuid} id={each.uuid} onClick={() => icono(each.uuid)}>
              <FontAwesomeIcon icon={faTimes}/>
            </ListItemIcon>
            <ListItemText primary={each.name} onClick={() => texto(each.uuid)}/>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <div className={classes.offset}/>
        <Button onClick={toggleDrawer("right", true)}>Categorias</Button>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
    </div>
  );
}