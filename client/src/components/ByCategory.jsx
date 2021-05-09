import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { byCategory, getCategories } from "../redux/actions/categoryAction";
import { getCatalogue } from "../redux/actions/catalogueAction";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

function ByCategory() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const categories = useSelector((store) => store.categories.categories);

  let options = [];
  if (categories.length > 0) {
    options = categories.map((e) => (
      <option key={e.uuid} value={e.name}>
        {e.name}
      </option>
    ));
  } else {
    <p>no categories has been found</p>;
  }

  //This is the function that DISPATCHES and d the FILTERS
  function handleChange(e) {
    console.log(e.target.value);
    if (e.target.value === "All") {
      dispatch(getCatalogue());
    } else {
      dispatch(byCategory(e.target.value));
    }
  }

  return (
    <div>
      <select
        className="form-select"
        aria-label="Default select example"
        id="temperaments"
        onChange={handleChange}
        defaultValue="Filter By Category"
      >
        <option selected disabled>
          Filter By Category
        </option>
        <option value="All">All</option>
        {options}
      </select>
    </div>
  );
}

export default ByCategory;
