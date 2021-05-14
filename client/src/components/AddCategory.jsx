import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCategories,
  getCategoryByName,
  addCategory,
  deleteSuccess,
  deleteError,
} from "../redux/actions/categoryActions";
import { sweetAlert } from "../helpers/utils";

const initialState = {
  name: "",
  image: "",
};

export default function AddCategory() {
  const [formState, setFormState] = useState(initialState);
  const [currentSelectedState, setCurrentSelectedState] = useState({
    name: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const categories = useSelector((store) => store.categories.categories);
  const success = useSelector((store) => store.categories.success);
  const error = useSelector((store) => store.categories.error);

  //  useEffect(() => {}, [categories]); //redenrizar de vuelta

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
      const categoryImageTag = document.getElementById("categoryImage");
      categoryImageTag.setAttribute("src", success.image);
      dispatch(deleteSuccess());
      dispatch(resetState());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, success]);

  const handleOnChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnClickAddCategory = () => {
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
    dispatch(addCategory(formState));
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
      <h3> Crear Categoría </h3>
      <section id="new-category-section">
        <div>
          <div>
            <label htmlFor="categoryName">Categoría</label>
            <input
              name="name"
              type="text"
              id="categoryName"
              aria-describedby="categoryHelp"
              placeholder="Escribir una categoria..."
              value={formState.name}
              onChange={handleOnChange}
              onKeyPress={handleOnKeyPress}
            />
          </div>

          <div>
            <label htmlFor="categoryUrlImage">Url de la Imagen</label>
            <input
              name="image"
              type="text"
              id="categoryUrlImage"
              aria-describedby="categoryHelp"
              placeholder="Escribir el url de la imagen..."
              value={formState.image}
              onChange={handleOnChange}
            />
          </div>
        </div>

        <div id="selectImageContainer">
          <div>
            <select
              size="15"
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

          <div>
            <img id="categoryImage" alt="Foto categoría no disponible..."></img>
          </div>
        </div>

        <div>
          <div>
            <button type="submit" onClick={handleOnClickAddCategory}>
              Crear Categoria
            </button>
          </div>
          <div>
            <button type="submit">Delete Category</button>
          </div>
        </div>
      </section>
    </>
  );
}
