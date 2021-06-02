import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { reviewsProduct } from "../redux/actions/productActions.js";
import MakeReview from "./MakeReview";
import ReviewCard from "./ReviewCard"
import ProductRating from "./ProductRating";
import jwt from "jsonwebtoken";

import Container from "@material-ui/core/Container";


const Reviews = ({ productUuid }) => {

  const dispatch = useDispatch();
  const reviews = useSelector((store) => store.products.reviews);

  const [rev, Setrev] = useState([]);

  useEffect(() => {
    dispatch(reviewsProduct(productUuid));
    
  }, [dispatch]);


  let renderReviews;
  if (reviews.message) {
    renderReviews = <h1>no hay reseñas sobre este producto</h1>;
  } else {
    renderReviews = reviews?.map((e) => {
      return <ReviewCard text={e.review} userName={e.userName} userLast={e.userLast} rating={e.rating} date={e.date}/>;
    });
  }
  
  return (
    <div>
      <div>
        <p>Rating:<ProductRating/></p>
        <div>{renderReviews}</div>
        <MakeReview  productUuid={productUuid} />
      </div>
    </div>
  );

};

export default Reviews;
