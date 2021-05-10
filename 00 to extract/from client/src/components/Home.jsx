import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { byCategory, getCategories } from "../redux/actions/categoryAction";
import { Carousel } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const categories = useSelector((store) => store.categories.categories);
  console.log("cts: ", categories);

  let images = [];
  if (categories) {
    images = categories.map((e) => (
      <Carousel.Item interval={2000} key={e.id}>
        <img
          key={e.name}
          className="d-block w-100"
          src={e.image}
          alt="No se encontro una imagen"
          onClick={handleImg}
        />
        <Carousel.Caption>
          <h3 key={e.id}></h3>
          <p key={e.id}></p>
        </Carousel.Caption>
      </Carousel.Item>
    ));
  }

  function handleImg(e) {
    dispatch(byCategory(e.target.key));
    history.push("/catalogue/category");
    window.scrollTo(0, 0);
  }

  return (
    <Carousel fade={true} pause={false}>
      {images}
    </Carousel>
  );
};

export default Home;
