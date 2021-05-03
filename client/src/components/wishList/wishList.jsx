import React, { useState, useEffect } from "react";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import './wishList.css'
import { addToWishList } from "../../auxiliar/functions/wishListFunctions";
import { useSelector } from "react-redux";

const WishList = ({productId, userId}) => {

  const favs = useSelector(state => state.favs)
  const [color, setColor] = useState(false)
  useEffect(() => {
    
  }, [color])

  const handleClick = () => {
    addToWishList(productId, userId);
    setColor(!color);
  }

  return (
    <div>
      <StarOutlinedIcon onClick={handleClick} className={color ?  "yellow" : "gray"} style={{cursor: "pointer"}}/>
    </div>
  );
};

export default WishList;
