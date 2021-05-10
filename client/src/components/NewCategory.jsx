import { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getCategories,
  getCategoryByName,
  addCategory,
  deleteSuccess,
  deleteError,
} from "../redux/actions/categoryAction";
import { sweetAlert } from "../helpers/utils";
import "./NewCategory.css";

const initialState = {
  name: "",
  image: "",
};

const NewCategory = ({
  getCategories,
  getCategoryByName,
  addCategory,
  categories,
  success,
  deleteSuccess,
  error,
  deleteError,
}) => {
  const [formState, setFormState] = useState(initialState);
  const [currentSelectedState, setCurrentSelectedState] = useState({
    name: "",
  });

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  useEffect(() => {}, [categories]);

  useEffect(() => {
    if (error?.error && error?.error.length > 0) {
      sweetAlert(error?.error);
      deleteError();
    }
    if (success?.name) {
      sweetAlert(
        "Info",
        `Categoría ${success.name} creada correctamente`,
        "success",
        "OK"
      );

      // Select new current category on select box
      setCurrentSelectedState({ value: success.uuid });
      const categoryImageTag = document.getElementById('categoryImage');
      categoryImageTag.setAttribute("src", success.image);


      deleteSuccess();
      resetState();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, success]);

  const handleOnChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnClickAddCategory = (_event) => {
    if (!formState.name || formState.name.length < 3) {
      sweetAlert(
        "Atención",
        "El nombre de la categoria es requerido y debe tener al menos 3 caracteres",
        "warning",
        "OK",
        5000
      );
      return;
    }

    if (!formState.image || formState.image.length < 3) {
      sweetAlert(
        "Atención",
        "La imagen es requerida y debe tener al menos 3 caracteres",
        "warning",
        "OK",
        5000
      );
      return;
    }

    addCategory(formState);
  };

  const resetState = () => {
    setFormState({
      name: "",
      image: "",
    });
  };

  const handleOnKeyPress = (event) => {
    if (!categories || categories.length === 0) return;
    const name = event.target.value;
    getCategoryByName(name);
  };

  const handleOnChangeCategory = (event) => {
    const urlImage = event.target.options[
      event.target.selectedIndex
    ].getAttribute("data-img");
    const categoryImage = document.getElementById("categoryImage");

    categoryImage.setAttribute("src", urlImage);

    // Select current category on select box
    const value = event.target.options[event.target.selectedIndex].getAttribute(
      "value"
    );
    setCurrentSelectedState({ value: value });
  };

  const sortByCategoryNameAZ = (categoryA, categoryB) => {
    if (categoryA.name < categoryB.name) {
      return -1;
    } else if (categoryA.name > categoryB.name) {
      return 1;
    } else {
      return 0;
    }
  };

  // const capitalizeFirstLetter = (word) => {
  //   if (typeof word !== "string") return "";
  //   return word.charAt(0).toUpperCase() + word.slice(1);
  // };

  return (
    <>
      <h3 className="mt-4 mb-4 text-center"> Crear Categoría </h3>
      <section
        id="new-category-section"
        className="container border border-secondary rounded"
      >
        <div className="row mt-5">
          <div className="mb-4 col-12 col-sm-6">
            <label htmlFor="categoryName" className="form-label">
              Categoría
            </label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="categoryName"
              aria-describedby="categoryHelp"
              placeholder="Escribir una categoria..."
              value={formState.name}
              onChange={handleOnChange}
              onKeyPress={handleOnKeyPress}
            />
          </div>

          <div className="mb-4 col-12 col-sm-6">
            <label htmlFor="categoryUrlImage" className="form-label">
              Url Imagen
            </label>
            <input
              name="image"
              type="text"
              className="form-control"
              id="categoryUrlImage"
              aria-describedby="categoryHelp"
              placeholder="Escribir el url de la imagen..."
              value={formState.image}
              onChange={handleOnChange}
            />
          </div>
        </div>

        <div className="row" id="selectImageContainer">
          <div className="mb-4 col-12 col-sm-6">
            <select
              className="form-select "
              size="15"
              aria-label="size 3 select example"
              onChange={handleOnChangeCategory}
              value={currentSelectedState.value}
            >
              {categories?.sort(sortByCategoryNameAZ).map((category) => (
                <option
                  key={category.uuid}
                  value={category.uuid}
                  data-img={category.image}
                >
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4 col-12 col-sm-6 img-container">
            <img
              id="categoryImage"
              className="mx-auto d-block"
              alt="Foto categoría no disponible..."
            ></img>
          </div>
        </div>

        <div className="row">
          <div className="mb-4 col-12 col-sm-12 d-grid gap-2 ">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleOnClickAddCategory}
            >
              Crear Categoria
            </button>
          </div>
          {/* <div className="mb-4 col-12 col-sm-6 d-grid gap-2 ">
            <button
              type="submit"
              className="btn btn-danger"
              onClick={handleOnClickDeleteCategory}
            >
              Delete Category
            </button>
          </div> */}
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.category.categories,
    success: state.category.success,
    error: state.category.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCategory: (name) => dispatch(addCategory(name)),
    getCategories: () => dispatch(getCategories()),
    getCategoryByName: (name) => dispatch(getCategoryByName(name)),
    deleteSuccess: () => dispatch(deleteSuccess()),
    deleteError: () => dispatch(deleteError()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCategory);
